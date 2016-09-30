'use strict';
LiveOdiaApp.controller('adminController', ['$scope', '$rootScope', 'fileUpload', 'adminServiceFactory', function ($scope, $rootScope, fileUpload, adminServiceFactory) {

    //Save new file 
    $scope.hotnews = {};
    $scope.Newstory = {};
    $scope.Topnews = {};
    $scope.hnewsTitle = {};
    $scope.selectedOption;
    $scope.ntitle = "";

    //User Role selection
    //$scope.hnewsTitle = {
    //    "HotNewsTitle": [
    //      {
    //          "HID": 1,
    //          "TITLE": "ଖେଳ",
    //          "Hsub": null,
    //          "HotNews": null
    //      },
    //      {
    //          "HID": 2,
    //          "TITLE": "ଓଡିଶା",
    //          "Hsub": null,
    //          "HotNews": null
    //      },
    //      {
    //          "HID": 3,
    //          "TITLE": "ମନରଞ୍ଜନ",
    //          "Hsub": null,
    //          "HotNews": null
    //      }
    //    ]
    //};
    
    // Role change
    $scope.changeOption = function () {
        debugger;
        $scope.ntitle = $scope.selectedOption.HID;
    };

    $scope.submitHotNews = function () {
        debugger;
        var file = {};
        file=$scope.hotnews;
        file["HotNews"] = "hnews";
        file["selOption"] = $scope.selectedOption.HID;
        file["file"]= $scope.myFile;
        adminServiceFactory.uploadFileToUrl(file).then(function (data) {
            debugger;
        });
    };

    $scope.submitNewstory = function () {
        debugger;
        var file = {};
        file = $scope.Newstory;
        file["Newstory"] = "nstory";
        file["file"] = $scope.myFile;
        adminServiceFactory.uploadFileToUrl(file).then(function (data) {
            debugger;
        });
    };

    $scope.getAllHotNewsTitle = function () {
        debugger;
        adminServiceFactory.getHotFullNewsTitle().then(function (hnewsdata) {
            if (hnewsdata) {
                debugger;
                $scope.hnewsTitle = hnewsdata;
                $scope.selectedOption = $scope.hnewsTitle.HotNewsTitle[0];
            };
        })
    };

    $scope.submitTopNews = function () {
        debugger;
        var file = {};
        file = $scope.Topnews;
        file["TopNews"] = "tnews";
        file["file"] = $scope.myFile;
        adminServiceFactory.uploadFileToUrl(file).then(function (data) {
            debugger;
        });
    };
    $scope.getAllHotNewsTitle();
    //$scope.uploadFile = function () {
    //    var file = $scope.myFile;
    //    console.log('file is ' );
    //    console.dir(file);
    //    var uploadUrl = "/fileUpload";
    //    fileUpload.uploadFileToUrl(file, uploadUrl);
    //};
}]);
//'use strict';
//LiveOdiaApp.directive('imageShowDirective', function () {
//    debugger;
//    return {
//        restrict: 'E',
//        //scope: {
//        //    imagePosition: '@'
//        //},
//        //transclude: true,
//        //controller: 'adminController',
//        //controller: ['$scope', function ($scope) {
//        //    debugger;
//        //    var imgpos = $scope.imagePosition;

//        //}],
//        templateUrl: 'App/Directives/image-show-directive.html',
//        //link: function (scope, element, attr) {
//        //debugger;
//        //var imgPosition = scope.imagePosition;
//        //if (imgPosition === 'left-top')
//        //{
//        //    debugger;
//        //}

//    }
//    //    debugger;
//    ////    var x = 0, y = 0;
//    ////    var startX = $rootScope.startXY;
//    ////    if (startX) {
//    ////        element.css({
//    ////            position: 'relative',
//    ////            border: '1px solid red',
//    ////            backgroundColor: 'lightgrey',
//    ////            cursor: 'pointer'
//    ////        });
//    ////        console.log(event.pageY, event.pageX);
//    ////        imagePosition();
//    ////    }
//    ////    else {
//    ////        var startX = $rootScope.startXY;

//    ////    }

//    ////    function imagePosition() {
//    ////        debugger;
//    ////        y = event.pageY - startX[0];
//    ////        x = event.pageX - startX[1];
//    ////        console.log(event.pageY, event.pageX);
//    ////        console.log(x, y);
//    ////        element.css({
//    ////            top: y + 'px',
//    ////            left: x + 'px'
//    ////        });
//    ////    };
//    //}
//    //};
//});