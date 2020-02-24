angular.module('calendar', [])
    .config(configureLocale) // COMMENT OUT FOR l10n
    .directive('appCalendar', function() {
        return {
            restrict: 'E',
            scope: {
                maxDate: '=maxDate',
                minDate: '=',
                date: '=',
                enableDaysFn: '=',
            },
            link: function(scope, element, attrs) {
                /* Add Behaviour Here */
            },
            templateUrl: 'angular-app/components/calendar/calendar.html'
        }
    })


/**
 * Behavioral Methods - Used to keep directive clear
 * Remove for l10n
 */
function configureLocale($mdDateLocaleProvider) {
    $mdDateLocaleProvider.months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    $mdDateLocaleProvider.shortMonths = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    $mdDateLocaleProvider.days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    $mdDateLocaleProvider.shortDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    $mdDateLocaleProvider.firstDayOfWeek = 0
}