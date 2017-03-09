
class UsersIndexController {
      public currentUser;
      public profileID;
      public profile;
      public users;
      public tableParams;
      public Session;
      public id;
      public alerts = [];
    constructor(
      private UserService,
      private $state: ng.ui.IStateService,
      Session,
      $stateParams,
      _,
      private NgTableParams
    ) {
      this.currentUser = Session.getUser();
      this.tableParams = new NgTableParams({}, {getData: (params) => {
        return this.UserService.listUsers().then ((users) => {
          return users;
        }).catch ((err) => {
          throw new Error (err);
        });


      }} );

      }
      public delete (username) {
        confirm('Are you sure you want to delete this?');
          this.UserService.deleteUser(username).then(() => {
              this.$state.go('usersIndex', null, { reload: true, notify: true });
          }).catch((e) => {
            this.alerts.push({type: 'danger', message: e.data.message});
          });
      }
  };

UsersIndexController.$inject = [
  'Session',
  '$stateParams',
  'UserService',
  '$state',
  '_'
];

export default UsersIndexController;
