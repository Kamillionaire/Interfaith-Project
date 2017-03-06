namespace IFP.Components {
  
  const name = 'storyCard'
  const template = '/client/ngApp/components/storyCard/storyCard.html';

  export class StoryCard {
    public story;
    constructor(
      private StoryService: IFP.Services.StoryService , private $state:ng.ui.IStateService
    ) {
    }


  }

  angular.module('ifp').component(name, {
    templateUrl: template,
    controller: IFP.Components.StoryCard,
    controllerAs: 'vm',
    bindings: {
      story: '<'
    }
  });
}
