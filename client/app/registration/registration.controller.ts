
class RegistrationController {
  public user = {dob: new Date()}
  public alerts = [];
  public states;
  public religions;

  constructor(
      private UserService: IFP.Services.UserService,
      private $state: ng.ui.IStateService,
      STATES, $http: ng.IHttpService,


  ) {
    $http.get('/api/religions').then((res) => {
      this.religions = res.data;
    }).catch ((e) => {
      throw new Error (e)
    })
  this.states = STATES.all;
   }

  register() {
      this.UserService.register(this.user).then((result) => {
        this.$state.go('main.login', null, { reload: true, notify: true });

      }).catch((err) => {
        console.log(err)
          this.alerts.push({type: 'warning', message: 'Please fill out all fields.'});
      })
  }
}

RegistrationController.$inject = [
  'UserService',
  '$state',
  'STATES',
  '$http'
];

export default RegistrationController;
