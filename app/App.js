function AppController() {
    this.appName = 'Angus'
    this.chosenFruit = ''
    this.fruits = [
        {name: 'Apple', inStock: true},
        {name: 'Watermelon', inStock: true},
        {name: 'Mango', inStock: true},
        {name: 'Banana', inStock: false},
        {name: 'Orange', inStock: true},
        {name: 'Tangerine', inStock: true},
        {name: 'Lemon', inStock: true},
        {name: 'Raspberry', inStock: true},
        {name: 'Strawberry', inStock: true},
        {name: 'Cherry', inStock: false},
    ]
}

const app = angular
    .module('angusCore',
        ['ngMaterial', 'ngRoute'])
    .controller('AppController', AppController)
