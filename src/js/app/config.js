'use strict';
// Attach components on modules and start angular states
import states from './config/states.js';

import indexController from './index/index.controller.js';
import indexService from './index/index.service.js';
import indexFactory from './index/index.factory.js';
require('./index/index.css');
const loadIndex = (module) => {
  indexController(module);
  indexService(module);
  indexFactory(module);
};

var loadModules = (modules) => {
  loadIndex(modules.index);
};

import indexProvider from './index/index.provider.js';
const config = (app, angular, modules) => {
  app.config(['$compileProvider', function ($compileProvider) {
    // Increase application performance
    // https://docs.angularjs.org/api/ng/provider/$compileProvider
    // https://docs.angularjs.org/guide/production
    $compileProvider.debugInfoEnabled(false);
  }]);

  loadModules(modules);
  indexProvider(app);
  states.load(app);
};

export default config;
