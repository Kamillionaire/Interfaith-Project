
class NavigationController {
  constructor(
      private $state: ng.ui.IStateService,
      $stateParams: ng.ui.IStateParamsService
  ) {

  }
  public goToState(state: string) {
    console.log(state);
    this.$state.go(state);
  }
}

NavigationController.$inject = [
  '$state',
  '$stateParams'
];

export default NavigationController;
