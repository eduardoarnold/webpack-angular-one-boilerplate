'use strict';

const AppFactory = ($log) => {

  const startFactory = () => {
    $log.debug('App Service Factory Started! ');
  };

  return {
    startFactory: startFactory
  }
}

export default AppFactory;
