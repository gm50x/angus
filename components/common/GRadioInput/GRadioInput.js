angular
    .module('angusCore')
    .component('gRadioInput', {
        templateUrl: 'components/common/GRadioInput/GRadioInput.html',
        controller: GRadioInputController,
        bindings: {
            ngModel: '=',
            ngDisabled: '=',
            ngValue: '@',
            ngDisplay: '@',
            ngGroup: '@'
        }
    })

function GRadioInputController() {
    this.$onInit = () => {
        // console.log('initialized radio Input')
    }
    this.onClickRadioInput = () => {
        // console.log(`clicked ${this.ngValue}`)
    }

    this.onStateChange = () => {
        // console.log(`state changed ${this.ngValue}`)
    }
}