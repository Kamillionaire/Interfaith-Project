const route = function route($stateProvider) {
  $stateProvider
    .state('usersIndex', {
      parent: 'main',
      url: '/',
      template: '<usersIndex></usersIndex>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
