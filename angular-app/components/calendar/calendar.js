angular.module('calendar', [])
    // .config(function($mdDateLocaleProvider) {
    //     $mdDateLocaleProvider.months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    //     $mdDateLocaleProvider.shortMonths = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    //     $mdDateLocaleProvider.days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    //     $mdDateLocaleProvider.shortDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    //     $mdDateLocaleProvider.firstDayOfWeek = 0
    // })
    .directive('appCalendar', function() {
        return {
            restrict: 'E',
            scope: {
                date: '='
            },
            templateUrl: 'angular-app/components/calendar/calendar.html'
        }
    })