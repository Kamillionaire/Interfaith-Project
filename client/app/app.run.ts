export default [
  '$rootScope',
  'UserService',
  '$sessionStorage',
  'SessionService',
  '$state',
  function run(
    $rootScope,
    UserService,
    $sessionStorage,
    SessionService,
    $state,
  ) {
    $rootScope.$on('$stateChangeStart', (event, next) => {
      UserService.getCurrentUser().then((user) => {
        $sessionStorage.user = user.data;
      }).catch((user) => {
        $sessionStorage.user = user.data;
      });

      if (next.data) {
        let authorizedRoles = next.data['authorizedRoles'] ? next.data['authorizedRoles'] : false;
        if (authorizedRoles && !SessionService.isAuthorized(authorizedRoles)) {
          event.preventDefault();
          // toastr.warning('I can\'t let you do that.', `I'm sorry Michael`);
        }
      }
    });
  }
];
