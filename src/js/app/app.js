'use strict';
// load app modules, integrations and start configurations
import angular from 'angular';
import uirouter from 'angular-ui-router';

const index = angular.module('index', []);
const app = angular.module('app', [uirouter, 'index']);

const modules = {
  app: app,
  index: index
};

import config from './config';
config(app, angular, modules);

export default app;
