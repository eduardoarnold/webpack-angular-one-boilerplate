'use strict';

const indexController = ($scope, $log, indexService, indexFactory, indexProvider, calendarService) => {
  $scope.service = indexService.runningLog;
  $scope.factory = indexFactory;
  $scope.provider = indexProvider;

  const loadDateConfigurations = () => {
    $scope.date = {
      months: calendarService.getMonths(),
      years: calendarService.getYears()
    };

    const today = calendarService.getTodayDate();
    $scope.date.year = today.year;
    $scope.date.month = today.month;
    $scope.date.days = calendarService.getDays($scope.date.year, $scope.date.month);
    $scope.date.day = today.day;
  };

  $scope.reloadDays = (year, month) => {
    $scope.date.days = calendarService.getDays(year, month);
    $scope.date.day = $scope.date.days[0];
  };

  $scope.translateDate = (year, month, day) => {
    const translatedDate = calendarService.getFormattedDate(year, month, day);
    $scope.date.translated = translatedDate;
  };

  loadDateConfigurations();
};

export default (module) => {
  module.controller('IndexController', ['$scope', '$log', 'indexService', 'indexFactory', 'indexProvider', 'calendarService', indexController]);
};
