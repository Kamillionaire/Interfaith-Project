namespace IFP.Components {
    const name = 'registration';
    const template = '/client/ngApp/components/registration/registration.html';
    export class Registration {
        public user = {dob:new Date()}
        public alerts =[];

        constructor(
            private UserService: IFP.Services.UserService,
            private $state: ng.ui.IStateService,
        ) {
         }

        register() {
            this.UserService.register(this.user).then((result) => {
              this.$state.go('main.login', null, { reload: true, notify: true });

            }).catch((err) => {
              console.log(err)
                this.alerts.push({type:'warning',message:'Please fill out all fields.'});
            })
        }

    }

    angular.module('ifp').component(name, {
        templateUrl: template,
        controller: IFP.Components.Registration,
        controllerAs: 'vm'
    })
}
