namespace IFP.Components{
  const name='mainApp';
  const template='/client/ngApp/components/main/main.html';
  export class Main {
      public currentUser;
    constructor(
      private UserService: IFP.Services.UserService,
      private $state: ng.ui.IStateService,

    ) {

    }
  }
  angular.module('ifp').component(name,{
    templateUrl: template,
    controller: IFP.Components.Main,
    controllerAs: 'vm',
    bindings: {
      currentUser:'<'
    }
  })
}
