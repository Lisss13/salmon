"use strict";

import angular from "angular";
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';

// контроллеры
import {InfoContr} from './controller/info';
import {FrozenContr} from './controller/frozen';
import {SemiContr} from './controller/semi';
import {ThreedetaleContrl} from './controller/threedetale';
// контроллеры в основной верстке
import AtherComponent from './atherComponent';


let app = angular.module('app', [uiRouter, ngAnimate, ngSanitize]);


app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
     ($locationProvider, $stateProvider, $urlRouterProvider) => {

        $stateProvider
            .state('info', {
                url: '/info',
                template: require('./views/info.html'),
                controller: InfoContr,
                controllerAs: 'info'
            })
            .state('frozen', {
                url: '/frozen',
                abstract: true,
                template: require('./views/frozen.html'),
            })
            .state('frozen.list', {
                url: '/:id',
                template: require('./views/frozen.list.html'),
                controller: FrozenContr,
                controllerAs: 'frozenCntr'
            })
            .state('three', {
                url: '/three',
                abstract: true,
                template: require('./views/three.html'),
            })
            .state('three.list', {
                url: '/:id',
                template: require('./views/three.list.html'),
                controller: ThreedetaleContrl,
                controllerAs: 'threedetaleCntr'
            })
            .state('semi', {
                url: '/semi',
                abstract: true,
                template: require('./views/semi.html'),
            })
            .state('semi.list', {
                url: '/:id',
                template: require('./views/semi.list.html'),
                controller: SemiContr,
                controllerAs: 'semiCntr'
            });
    }]);

AtherComponent();