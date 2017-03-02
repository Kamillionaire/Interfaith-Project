
class LoginController {
  public user;
  public alerts = [];
  constructor(
    private UserService: IFP.Services.UserService,
    private $state: ng.ui.IStateService,
    private Session: IFP.Services.Session
  ) {
  }
  public login(user) {
    this.UserService.login(user).then((res) => {
       this.$state.go('main.profile', {username: res.username}, {reload: true, notify: true});
    }).catch((err) => {
      this.alerts.push({type: 'warning', message: 'Something went awry!!, Try again!'});
    });
  }
  public close (i) {
    this.alerts.splice(i, 1);
  }
  public logout() {
    this.UserService.logout().then(() => {
      this.$state.go('main.home', null, {reload: true, notify: true});
    }).catch(() => {
      throw new Error('Unsuccessful logout');
    });
  }
}

LoginController.$inject = [
  'UserService',
  '$state',
  'Session'
];

export default LoginController;
