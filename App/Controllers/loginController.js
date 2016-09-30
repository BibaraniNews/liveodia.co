'use strict';
LiveOdiaApp.controller('loginController', ['$scope', '$rootScope', '$location', '$routeParams', 'loginServiceFactory', 'sharedService', function ($scope, $rootScope, $location, $routeParams, loginServiceFactory, sharedService) {
    debugger;
    $scope.autho = false;
    //login data
    $scope.loginData = {
        userName: "",
        password: "",
        userRole: "1"
    };
    $scope.login = function () {
        debugger;
        loginServiceFactory.login($scope.loginData).then(function (ldata) {
            if (ldata == false) {
                $scope.message = "Please Validate the Username and Password"
            }
            else {
                $location.path('/admin');
            }
        });
    };
}]);