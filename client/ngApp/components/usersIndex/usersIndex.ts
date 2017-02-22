namespace IFP.Components{
    const name ='usersIndex';
    const template ='/client/ngApp/components/usersIndex/usersIndex.html';
    export class UsersIndex {
        public currentUser;
        public profileID;
        public profile;
        public users;
        public tableParams;
        public Session;
        public id;
        public alerts = [];
      constructor(
        private UserService: IFP.Services.UserService,
        private $state: ng.ui.IStateService,
        Session,
        $stateParams,
        _,
        private NgTableParams
      ) {
        this.currentUser = Session.getUser()
        this.tableParams = new NgTableParams({},{getData:(params)=>{
          return this.UserService.listUsers().then ((users)=>{
            return users;
          }).catch ((err)=>{
            throw new Error (err);
          })


        }} );

        }
        delete(username) {
          confirm('Are you sure you want to delete this?');
            this.UserService.deleteUser(username).then(() => {
                this.$state.go('main.usersIndex', null, { reload: true, notify: true });
            }).catch((e) => {
              this.alerts.push({type:'danger', message:e.data.message})
            });
        }
    };

  angular.module('ifp').component(name,{
    templateUrl: template,
    controller: IFP.Components.UsersIndex,
    controllerAs: 'vm',
    bindings:{
      users:'<'
    }


  });
};