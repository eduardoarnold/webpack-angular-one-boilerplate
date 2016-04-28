'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './config';

angular.module('index', []);
const app = angular.module('app', [uirouter, 'index']);

config(app, angular);

export default app;
