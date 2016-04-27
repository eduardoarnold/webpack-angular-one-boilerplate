'use strict';

import angular from 'angular';
import AppController from './controller';
import Provider from './provider';

const app = angular
  .module('app', [])
  .controller('AppController', ['$log', 'AppService', 'AppFactory', 'AppProvider', AppController])
  .service('AppService', Provider)
  .factory('AppFactory', Provider)
  .provider('AppProvider', Provider);

export default app;
