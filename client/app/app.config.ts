import * as angular from 'angular';

const Config = [
  '$locationProvider',
  '$stateProvider',
  '$urlRouterProvider',
  '$httpProvider',
  (
    $locationProvider: ng.ILocationProvider,
    $stateProvider: angular.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $httpProvider: ng.IHttpProvider
  ) => {

  $stateProvider
    .state('main', {
      url: '',
      abstract: true,
      template: '<layout></layout>'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true,
    rewriteLinks: false
  });
}];

export default Config;
