import * as angular from 'angular';
import route from './registration.route';
import controller from './registration.controller';

const name = 'registration';
const template = '/client/app/registration/registration.html';

export default angular.module('app.registration', [])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
