namespace IFP.Components{
  const name='text';
  const template='/client/ngApp/components/textStory/textStory.html';
  export class TextStory {
    public story;
    constructor(
      private StoryService: IFP.Services.StoryService,
      private $state: ng.ui.IStateService
    ){}
      submit() {
        this.StoryService.postStory(this.story).then((result)=>{
          console.log(result);
          this.$state.go('main.home');
        }).catch((e)=>{
          throw new Error(e);
        })
      }

  }
  angular.module('ifp').component(name,{
    templateUrl: template,
    controller: IFP.Components.TextStory,
    controllerAs: 'vm'
  })
}
