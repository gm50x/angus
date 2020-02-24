const app = angular.module('angular-core', ['ngMaterial', 'ngRoute', 'ngMessages', 'ngLocale', 'calendar'])

app.controller('mainCtrl', function($scope, $mdSidenav, $log) {
    this.menus = [
        'Red',
        'Green',
        'Blue'
    ]
    this.date = new Date()
    this.maxDate = new Date(new Date().getTime() - 1000 * 3600 * 24)
    this.minDate = new Date(new Date().getTime() - 1000 * 3600 * 24 * 10)
    this.isMenuOpen = false;

    this.openSidenav = function() {
        toggleMenu(this)
        return $mdSidenav('side-menu')
            .toggle()
            .then(function() {
                $log.debug('toggle side-menu is done')
            })
    }


    this.enableDaysFn = function(date) {
        return date.getDay() !== 0 && date.getDay() !== 6
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

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .dark()
        .primaryPalette('neonRed')
        .accentPalette('indigo')

    // EXTENDING THEMES
    const neonRedMap = $mdThemingProvider.extendPalette('red', {
        '500': '#ff0000',
        'contrastDefaultColor': 'dark'
    })
    $mdThemingProvider.definePalette('neonRed', neonRedMap)

    // DEFINING PALETTE
    $mdThemingProvider.definePalette('foo', {
        '50': 'ffebee',
        '100': 'ffcdd2',
        '200': 'ef9a9a',
        '300': 'e57373',
        '400': 'ef5350',
        '500': 'f44336',
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light', // whether, by default, text (contrast)
        // on this palette should be dark or light

        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100'
        ],
        'contrastLightColors': undefined // could also specify this if default was 'dark'
    })
})

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