const route = function route($stateProvider) {
  $stateProvider
    .state('login', {
      parent: 'main',
      url: '/login',
      template: '<login></login>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
