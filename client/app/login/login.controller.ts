class LoginController {
  public user;
  public alerts = [];
  constructor(
    private UserService,
    private $state: ng.ui.IStateService,
    private SessionService,
    private $sessionStorage,
    private $window
  ) {

  }
   public login(user) {
    this.UserService.login(user).then((res) => {
      this.$state.go('profile', {username: res.username}, {reload: true, notify: true});
    }).catch((err) => {
      this.alerts.push({type: 'warning', message: 'Something went awry!!, Try again!'});
    });
  }

  public close (i) {
    this.alerts.splice(i, 1);
  }
}

LoginController.$inject = [
  'UserService',
  '$state',
  'SessionService',
  '$sessionStorage',
  '$window'
];

export default LoginController;
