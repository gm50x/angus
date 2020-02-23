const app = angular.module('angular-core', ['ngMaterial', 'ngRoute', 'ngMessages', 'ngLocale', 'calendar'])

app.controller('mainCtrl', function($scope, $mdSidenav, $log) {
    this.menus = [
        'Red',
        'Green',
        'Blue'
    ]
    this.date = new Date()
    this.isMenuOpen = false;

    this.openSidenav = function() {
        toggleMenu(this)
        return $mdSidenav('side-menu')
            .toggle()
            .then(function() {
                $log.debug('toggle side-menu is done')
            })
    }

    this.closeSidenav = function() {
        const scope = this
        $mdSidenav('side-menu').close()
            .then(function() {
                toggleMenu(scope)
            })
    }

    function toggleMenu(scope) {
        scope.isMenuOpen = !scope.isMenuOpen
    }
})

app.config(function($routeProvider) {
    $routeProvider
        .when('/red', {
            templateUrl: 'templates/red.html'
        })
        .when('/green', {
            templateUrl: 'templates/green.html'
        })
        .when('/blue', {
            templateUrl: 'templates/blue.html'
        })
})