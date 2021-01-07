class Switch {
    elementID = '';
    switchState = false;

    constructor (elementIDParam) {
        this.elementID = elementIDParam;
    }

    activateSwitch = () => {
        if (this.switchState) {
            document.querySelector(`#${this.elementID}-switch`).classList.remove('active');
            document.querySelector('#' + this.elementID).classList.remove('switch-div-container-active');
            this.switchState = false;
        } else {
            document.querySelector(`#${this.elementID}-switch`).classList.add('active');
            document.querySelector('#' + this.elementID).classList.add('switch-div-container-active');
            this.switchState = true;
        }
    }
}

const mainSwitch = new Switch('mainswitch');
document.getElementById(mainSwitch.elementID).addEventListener('click', () => mainSwitch.activateSwitch());

const secondSwitch = new Switch('secondswitch');
document.getElementById(secondSwitch.elementID).addEventListener('click', () => secondSwitch.activateSwitch());
