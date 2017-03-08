import * as angular from 'angular';
import 'ngstorage';
import 'angular-resource';
import 'angular-animate';
import 'angular-aria';
import 'angular-ui-bootstrap';
import 'lodash';
import 'angular-ui-router';
import coreConst from './core.const';

// services
import {UserService} from '../services/user.service';
import {ProfileService} from '../services/profile.service';
import {SessionService} from '../services/session.service';

export default angular.module('app.core', [
  coreConst,
  UserService,
  ProfileService,
  SessionService,
  'ngStorage',
  'ngResource',
  'ngStorage',
  'ui.bootstrap'
])
  .name;
