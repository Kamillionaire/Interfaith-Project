class LoginController {
  public user;
  public alerts = [];
  constructor(
    private UserService,
    private $state: ng.ui.IStateService,
    private SessionService,
    private $sessionStorage
  ) {

  }

   public login(user) {
    this.UserService.login(user).then((res) => {
      this.$sessionStorage.user = res.user;
       this.$state.go('profile', {username: res.username}) ;
    }).catch((err) => {
      this.alerts.push({type: 'warning', message: 'Something went awry!!, Try again!'});
    });
  }
   public close (i) {
    this.alerts.splice(i, 1);
  }
   public logout() {
    this.UserService.logout().then(() => {
      this.$state.go('home', null, {reload: true, notify: true});
    }).catch(() => {
      throw new Error('Unsuccessful logout');
    });
  }
}

LoginController.$inject = [
  'UserService',
  '$state',
  'SessionService',
  '$sessionStorage'
];

export default LoginController;
