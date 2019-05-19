import {FormContr} from './controller'


class Form {
    constructor() {
        this.template = require('./template.html');
        this.restrict = 'E';
        this.controller = FormContr;
        this.controllerAs = 'vl';
    }
}

export {Form}