namespace IFP.Components {
  const name = 'text';
  const template = '/client/ngApp/components/textStory/textStory.html';
  export class TextStory {
    public story;
    public stories;
    public user;

    constructor(
      private StoryService: IFP.Services.StoryService,
      private $state: ng.ui.IStateService,
      private UserService: IFP.Services.UserService,
      private Session: IFP.Services.Session
    ) {
      this.StoryService.getStories()
        .then((data) => {
          this.stories = data;
        }).catch((e) => {
          this.stories = [];
          throw new Error(e);

        })
      this.user = Session.getUser();
    }
    submit() {
      this.story.owner = this.user.username;
      this.StoryService.postStory(this.story).then((result) => {
        console.log(result);
        this.$state.go('main.home');
      }).catch((e) => {
        throw new Error(e);
      })
    }

  }
  angular.module('ifp').component(name, {
    templateUrl: template,
    controller: IFP.Components.TextStory,
    controllerAs: 'vm'
  })
}
