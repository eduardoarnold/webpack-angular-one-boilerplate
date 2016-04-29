'use strict';

const indexController = ($scope, $log) => {
  $log.debug('IndexController ready!');
};

export default (module) => {
  module.controller('IndexController', ['$scope', '$log', indexController]);
};
