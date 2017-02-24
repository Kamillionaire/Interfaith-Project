namespace IFP.Components {
    const name = 'navigation';
    const template = '/client/ngApp/components/navigation/navigation.html';
    export class Navigation {

        constructor(
            private $state: ng.ui.IStateService,
            $stateParams: ng.ui.IStateParamsService
        ) {

        }
        goToState(state:string){
          console.log(state)
          this.$state.go(state);
        }

    }
    angular.module('ifp').component(name, {
        templateUrl: template,
        controller: IFP.Components.Navigation,
        controllerAs: 'vm'

    })
}
