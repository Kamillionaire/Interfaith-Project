import * as angular from 'angular';
import config from './app.config';
import run from './app.run';
const dependencies = [];

angular.module('ifp', dependencies)
  .config(config)
  .run(run);
