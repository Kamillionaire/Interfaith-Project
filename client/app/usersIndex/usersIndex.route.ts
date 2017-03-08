const route = function route($stateProvider) {
  $stateProvider
    .state('usersIndex', {
      parent: 'main',
      url: '/usersIndex',
      template: '<usersIndex></usersIndex>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
