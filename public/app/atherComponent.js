import {Form} from './directive/form/form'
import {Reviews} from './directive/reviews/reviews'


export default AtherComponent=> {
    angular
        .module('app')
        .directive('contactForm', () => new Form)
        .directive('reviews', () => new Reviews)
}
