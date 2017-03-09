import * as angular from 'angular';
import controller from './usersIndex.controller';
import route from './usersIndex.route';

    const name = 'usersIndex';
    const template = '/client/app/components/usersIndex/usersIndex.html';

  export default angular.module('ifp.usersIndex', []).component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm',
    bindings: {
      users: '<'
    }


  }).name;
