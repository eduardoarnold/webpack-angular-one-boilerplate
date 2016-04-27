'use strict';

import app from './app'

const AppController = ($log, AppService, AppFactory, AppProvider) => {
  $log.debug('App Controller Ready');

  $log.debug(AppService);
  $log.debug(AppFactory);
  $log.debug(AppProvider);
}

export default AppController;
