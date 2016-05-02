'use strict';

const indexController = ($scope, $log, indexService, indexFactory, indexProvider) => {
  $scope.service = indexService.runningLog;
  $scope.factory = indexFactory;
  $scope.provider = indexProvider;
};

export default (module) => {
  module.controller('IndexController', ['$scope', '$log', 'indexService', 'indexFactory', 'indexProvider', indexController]);
};
