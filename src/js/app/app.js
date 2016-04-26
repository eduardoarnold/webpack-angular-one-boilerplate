'use strict';

import angular from 'angular';
import AppController from './controller';
import AppService from './service';
import AppFactory from './factory';

const app = angular
  .module('app', [])
  .controller('AppController', ['$log', 'AppService', 'AppFactory', AppController])
  .service('AppService', ['$log', AppService])
  .factory('AppFactory', ['$log', AppFactory]);

export default app;
