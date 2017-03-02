
class LayoutController {
    public currentUser;
    constructor(
        private UserService: IFP.Services.UserService,
        private $state: ng.ui.IStateService,

    ) {

    }
}

LayoutController.$inject = [
  'UserService',
  '$state'
];

export default LayoutController;
