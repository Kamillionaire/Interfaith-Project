const route = function route($stateProvider) {
  $stateProvider
    .state('registration', {
      parent: 'main',
      url: '/',
      template: '<registration></registration>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
