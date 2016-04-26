'use strict';

import app from './app'

class AppService {
  constructor($log) {
    this.logger = $log;
  };

  startService() {
    this.logger.debug('App Service started!');
  }
};

export default AppService;
