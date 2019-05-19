class InfoContr {
    constructor($scope, $rootScope, $state, $http, $templateCache, $location, $anchorScroll) {
        this.title = 'Компания Salmon.su';
    }
}

InfoContr.$inject = ['$scope', '$rootScope', '$state', '$http', '$templateCache', '$location', '$anchorScroll'];

export {InfoContr}
