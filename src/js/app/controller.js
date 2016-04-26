'use strict';

import app from './app'

const AppController = ($log, AppService, AppFactory) => {
  $log.debug('App Controller Ready');
  AppService.startService();
  AppFactory.startFactory();
}

export default AppController;
