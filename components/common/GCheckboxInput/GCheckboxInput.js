angular
    .module('angusCore')
    .component('gCheckboxInput', {
        templateUrl: 'components/common/GCheckboxInput/GCheckboxInput.html',
        controller: GCheckboxInputController,
        bindings: {
            ngModel: '=',
            ngDisabled: '=',
            ngValue: '@',
            ngDisplay: '@',
            ngGroup: '@'
        }
    })

function GCheckboxInputController() {
    this.$onInit = () => {
        // console.log('initialized radio Input')
    }
    this.onClickCheckboxInput = () => {
        // console.log(`clicked ${this.ngValue}`)
    }

    this.onStateChange = () => {
        // console.log(`state changed ${this.ngValue}`)
    }
}