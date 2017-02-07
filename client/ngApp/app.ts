
namespace IFP {
  angular.module('ifp', ['ngResource', 'ui.router', 'ui.bootstrap'
])
    .config((
      $resourceProvider: ng.resource.IResourceServiceProvider,
      $stateProvider: ng.ui.IStateProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider,
      $locationProvider: ng.ILocationProvider
    ) => {
      $stateProvider
        .state('main', {
          url: '',
          abstract: true,
          template: '<main-app></main-app>'

          // component:'mainApp'
        })
        .state('main.home', {
          url: '/',
          template: '<home></home>',
          parent: 'main'
        })
        .state('main.login', {
          url: '/login',
          template: '<login></login>',
          parent: 'main'
        })
        .state('main.register', {
          url: '/registration',
          template: '<registration></registration>',
          parent: 'main'
        })
        .state('main.profile', {
          url: '/profile/:username',
          parent: 'main',
          template: '<profile></profile>',
        })
        .state('main.usersIndex', {
          url: '/usersIndex',
          parent: 'main',
          template: '<users-index></users-index>',
          data:{
            // authorizedRoles:[USER_ROLES.admin]
          }

        })

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);

    })

    .run([()=>{}])
};
