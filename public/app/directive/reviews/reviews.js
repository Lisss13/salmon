import {Controller} from './controller'


class Reviews {
    constructor() {
        this.template = require('./reviews.html');
        this.restrict = 'E';
        this.controller = Controller;
        this.controllerAs = 'cntl';
    }
}

Reviews.$inject = ['$window'];

export {Reviews}