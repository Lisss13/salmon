class FormContr {
    constructor($scope, $rootScope, $state, $http, $templateCache, $location) {
        this.$scope = $scope; this.$rootScope = $rootScope; this.$state = $state;
        this.$http = $http; this.$templateCache = $templateCache; this.$location = $location;

        this.ctatus = false;
        this.textform = "Отправить заявку на сотрудничество";

        this.error = {
            name: false,
            mail: false,
            organization: false
        };
    }

    sendMail(user) {

        if (user.name == undefined || user.name == '') {
            this.error.name = true;
        } else {
            this.error.name = false;
        }
        if (user.mail == undefined || user.mail == '') {
            this.error.mail = true;
        } else {
            this.error.mail = false;
        }
        if (user.organization == undefined || user.organization == '') {
            this.error.organization = true;
        } else {
            this.error.organization = false;
        }
        if (user.organization != undefined && user.mail != undefined && user.name != '' && user.organization != '' && user.mail != '' && user.name != '') {

            this.url = "http://" + this.$location.$$host + ":3000/api" +
                "?name=" + user.name +
                "&lastname=" + user.lastname +
                "&mail=" + user.mail +
                "&phone=" + user.phone +
                "&organization=" + user.organization;

            this.$http({
                method: 'POST',
                url: this.url,
                cache: this.$templateCache
            })
                .then((response) => {
                    this.status = response.status;
                    this.description = response.data;
                }, (response) => {
                    this.description = response.data || "Request failed";
                    this.status = response.status;
                });
            user.organization = "";
            user.name = "";
            user.mail = "";
            user.phone = "";
            user.lastname = "";

            this.textform = "Спасибо за оставленную заявку";
        }


    };

}
FormContr.$inject = ['$scope', '$rootScope', '$state', '$http', '$templateCache', '$location'];


export {FormContr}