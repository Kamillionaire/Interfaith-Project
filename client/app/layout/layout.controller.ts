
class LayoutController {
    public currentUser;
    constructor(
        private UserService,
        private $state: ng.ui.IStateService,

    ) {

    }
}

LayoutController.$inject = [
  'UserService',
  '$state'
];

export default LayoutController;
