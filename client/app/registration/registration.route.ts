const route = function route($stateProvider) {
  $stateProvider
    .state('registration', {
      parent: 'main',
      url: '/registration',
      template: '<registration></registration>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
