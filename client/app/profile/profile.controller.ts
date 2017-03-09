
class ProfileController {
    public currentUser;
    public profileID;
    public profile;
    public alerts;

  constructor(
    private UserService,
    private $state: ng.ui.IStateService,
    SessionService,
    $stateParams,
    _

  ) {
    this.currentUser = SessionService.getUser()
    // this.profileID = $stateParams['username'] === 'me' && !_.isUndefined(this.currentUser.username)
    //  ? this.currentUser.username : null;

    }
    public login(user) {

      this.UserService.login(user).then((res) => {
         this.$state.go('main.profile', {username:res.username}, {reload: true, notify:true});
      }).catch((err) => {
        this.alerts.push({type: 'warning', message: 'Something went awry!!, Try again!'})
      });
    }
};


ProfileController.$inject = [
  'UserService',
  '$state',
  'SessionService',
  '$stateParams'
];

export default ProfileController;
