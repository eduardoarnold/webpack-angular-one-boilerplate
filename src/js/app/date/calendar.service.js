'use strict';

var CalendarService = function() {

  this.getYears = () => {
    const date =  new Date();
    const finalYear = date.getUTCFullYear();
    const firstYear = finalYear - 1000;
    let yearList = [];
    for (var i = firstYear; i <= finalYear; i++) {
      yearList.push(i);
    }
    return yearList;
  };

  this.getMonths = () => {
    const months = [
      { name: 'Janeiro', key: 1 },
      { name: 'Fevereiro', key: 2 },
      { name: 'Março', key: 3 },
      { name: 'Abril', key: 4 },
      { name: 'Maio', key: 5 },
      { name: 'Junho', key: 6 },
      { name: 'Julho', key: 7 },
      { name: 'Agosto', key: 8 },
      { name: 'Setembro', key: 9 },
      { name: 'Outubro', key: 10 },
      { name: 'Novembro', key: 11 },
      { name: 'Dezembro', key: 12 }
    ];

    return months;
  };

  this.getDays = (year, month) => {
    const finalDay = (new Date(year, month, 0)).getUTCDate();
    const firstDay = 1;
    let daysInMonth = [];
    for (var i = firstDay; i <= finalDay; i++) {
      daysInMonth.push(i);
    }
    return daysInMonth;
  };

  this.getFormattedDate = (year, month, day) => {
    let correctMonthUTC = month - 1;
    const dateUTC = Date.UTC(year, correctMonthUTC, day);
    const date = new Date(dateUTC);
    return date.toUTCString();
  };

  this.getTodayDate = () => {
    const today = new Date();
    return {
      day: today.getUTCDate(),
      month: today.getUTCMonth() + 1,
      year: today.getUTCFullYear()
    };
  };
};

export default (module) => {
  module.service('calendarService', CalendarService);
};
