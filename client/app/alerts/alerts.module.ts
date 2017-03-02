import * as angular from 'angular';
import route from './alerts.route';
import controller from './alerts.controller';

const name = 'alerts';
const template = '/client/app/alerts/alerts.html';

export default angular.module('app.alerts', [])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm',
    bindings: {
      messages:'<'
    }
  })
  .config(route)
  .name;
