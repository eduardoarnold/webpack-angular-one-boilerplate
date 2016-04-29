'use strict';
// Attach components on modules and start angular states
import states from './config/states.js';

import indexController from './index/index.controller.js';
const loadIndex = (module) => {
  indexController(module);
};

var loadModules = (modules) => {
  loadIndex(modules.index);
}

const config = (app, angular, modules) => {
  loadModules(modules);
  states.load(app, angular);
}

export default config;
