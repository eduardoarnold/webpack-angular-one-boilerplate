'use strict';
// Attach components on modules and start angular states
import states from './config/states.js';

import indexController from './index/index.controller.js';
import indexService from './index/index.service.js';
import indexFactory from './index/index.factory.js';
import indexStyle from './index/index.css';
const loadIndex = (module) => {
  indexController(module);
  indexService(module);
  indexFactory(module);
};

var loadModules = (modules) => {
  loadIndex(modules.index);
}

import indexProvider from './index/index.provider.js'
const config = (app, angular, modules) => {
  loadModules(modules);
  indexProvider(app);
  states.load(app, angular);
}

export default config;
