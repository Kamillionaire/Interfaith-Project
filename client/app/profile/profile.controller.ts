
class ProfileController {
  public currentUser;
  public profileID;
  public profile;
  public alerts;

  constructor(
    private UserService,
    private $state: ng.ui.IStateService,
    SessionService,
    $stateParams
  ) {
    this.profileID = $stateParams['username'];
    this.getProfile();
  }

  public getProfile() {
    // api call to profiles
  }
};


ProfileController.$inject = [
  'UserService',
  '$state',
  'SessionService',
  '$stateParams'
];

export default ProfileController;
