angular.module('calendar', [])
    .config(configureLocale)
    .directive('appCalendar', function() {
        return {
            restrict: 'E',
            scope: {},
            link: function(scope, element, attrs) {
                /* ADDING RESTRICTIONS VIA LINK FUNCTION */
                scope.date = getLastSelectableDate()
                scope.maxDate = getYesterday()
                scope.isSelectable = isSelectable
            },
            templateUrl: 'angular-app/components/calendar/calendar.html'
        }
    })


/**
 * Behavioral Methods - Used to keep directive clear
 */
function configureLocale($mdDateLocaleProvider) {
    $mdDateLocaleProvider.months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    $mdDateLocaleProvider.shortMonths = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    $mdDateLocaleProvider.days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    $mdDateLocaleProvider.shortDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    $mdDateLocaleProvider.firstDayOfWeek = 0
}

function isSelectable(date) {
    return date.getDay() !== 0 && date.getDay() !== 6
}

function getLastSelectableDate() {
    let yesterday = getYesterday()
    if (yesterday.getDay() === 0) {
        return new Date(yesterday.setDate(yesterday.getDate() - 2))
    }

    if (yesterday.getDay() === 6) {
        return new Date(yesterday.setDate(yesterday.getDate() - 1))
    }
}

function getYesterday() {
    return new Date(new Date().setDate(new Date().getDate() - 1))
}