import * as angular from 'angular';
import route from './login.route';
import controller from './login.controller';

const name = 'login';
const template = '/client/app/login/login.html';

export default angular.module('app.login', [])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
