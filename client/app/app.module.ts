import * as angular from 'angular';
import 'angular-ui-router';
import core from './core/core.module';
import config from './app.config';
import run from './app.run';
import AlertsComponent from './alerts/alerts.module';
import HomeComponent from './home/home.module';
import LayoutComponent from './layout/layout.module';
import LoginComponent from './login/login.module';
import Navigation from './navigation/navigation.module';
import Registration from './registration/registration.module';
import UsersIndex from './usersIndex/usersIndex.module';

const dependencies = [
  'ui.router',
  core, // core dependencies
  AlertsComponent,
  HomeComponent,
  LayoutComponent,
  LoginComponent,
  Navigation,
  UsersIndex,
  Registration
];

angular.module('ifp', dependencies)
  .config(config)
  .run(run);

angular.bootstrap(document.body, [name], { strictDi: true });
