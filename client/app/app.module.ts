import * as angular from 'angular';
import config from './app.config';
import run from './app.run';
import AlertsComponent from './alerts/alerts.module';
import HomeComponent from './home/home.module';
import LayoutComponent from './layout/layout.module';
import LoginComponent from './login/login.module';
import Navigation from './navigation/navigation.module';
import Registration from './registration/registration.module';
import UsersIndex from './usersIndex/usersIndex.module';
import Share from './share/share.module';
const dependencies = [
  AlertsComponent,
  HomeComponent,
  LayoutComponent,
  LoginComponent,
  Navigation,
  UsersIndex,
  Share,
  Registration
];

angular.module('ifp', dependencies)
  .config(config)
  .run(run);

angular.bootstrap(document.body, [name], { strictDi: true });
