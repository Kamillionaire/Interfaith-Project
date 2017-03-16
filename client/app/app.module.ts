import * as angular from 'angular';
import 'angular-ui-router';
import 'ngstorage';
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
import Profile from './profile/profile.module';
// import Message from './message/message.module';

const dependencies = [
  'ui.router',
  'ngStorage',
  core, // core dependencies
  AlertsComponent,
  HomeComponent,
  LayoutComponent,
  LoginComponent,
  Navigation,
  UsersIndex,
  Registration,
  Profile,
  // Message
];

angular.module('ifp', dependencies)
  .config(config)
  .run(run);

angular.bootstrap(document.body, ['ifp'], { strictDi: true });
