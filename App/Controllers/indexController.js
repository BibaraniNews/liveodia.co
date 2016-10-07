'use strict';
LiveOdiaApp.controller('indexController', ['$scope', '$rootScope', '$location', 'homeServiceFactory', 'loginServiceFactory', function ($scope, $rootScope, $location, homeServiceFactory, loginServiceFactory) {
    debugger;
    $scope.viewActive = $rootScope.hideit;
    //logout 
    $scope.logOut = function () {
        loginServiceFactory.logOut();
        $location.path('/home');
    };
    // $scope.fullnews = [];
    $scope.fnews = {
        "fullnews": [
          {
              "hotnews": {
                  "hnid": 1,
                  "hotnews": "asdfasdf",
                  "title": "asl;dasdjla",
                  "hsub": "adsfjkhasklfkl"
              },
              "topnews": {
                  "hnid": null,
                  "hotnews": null,
                  "title": null,
                  "hsub": null
              },
              "newstory": {
                  "hnid": 0,
                  "hotnews": null,
                  "title": null,
                  "hsub": null
              }
          }, {
              "hotnews": {
                  "hnid": 0,
                  "hotnews": null,
                  "title": null,
                  "hsub": null
              },
              "topnews": {
                  "hnid": 1,
                  "hotnews": "asdaskldjals",
                  "title": "saddlajdsas",
                  "hsub": "asdjaksdad"
              },
              "newstory": {
                  "hnid": 0,
                  "hotnews": null,
                  "title": null,
                  "hsub": null
              }
          },
          {
              "hotnews": {
                  "hnid": 0,
                  "hotnews": null,
                  "title": null,
                  "hsub": null
              },
              "topnews": {
                  "hnid": 0,
                  "hotnews": null,
                  "title": null,
                  "hsub": null
              },
              "newstory": {
                  "hnid": 1,
                  "hotnews": "sajdsadjald",
                  "title": "askdjalskdjla",
                  "hsub": "aksdjsalsdjald"
              }
          }
        ]

    };

  /*  $scope.FormatData = function () {
        debugger;
        $scope.fullnews.push($scope.fnews);
        var clean = pruneEmpty($scope.fullnews);
        console.log(JSON.stringify(clean, null, 2));
    };

    function pruneEmpty(obj) {
        debugger;
        return function prune(current) {
            debugger;
            _.forOwn(current, function (value, key) {
                if (_.isUndefined(value) || _.isNull(value) || _.isNaN(value) ||
                  (_.isString(value) && _.isEmpty(value)) || _.isNumber(value==0)||
                  (_.isObject(value) && _.isEmpty(prune(value)))) {
                    delete current[key];
                }
            });
            // remove any leftover undefined values from the delete 
            // operation on an array
            if (_.isArray(current)) _.pull(current, undefined);
            return current;

        }(_.cloneDeep(obj));
    }
    //        topnews: 'ବଲାଙ୍ଗିର/କେନ୍ଦୁଝର: ଆଜି ପୁଣି ତିନି ଜଣ ଚାଷୀ ଆତ୍ମହତ୍ୟା କରିଥିବା ଅଭିଯୋଗ ହୋଇଛି। ପ୍ରାଣ ହରାଇଥିବା ୩ ଚାଷୀଙ୍କ ମଧ୍ୟରୁ ଦୁଇ ଜଣ ବଲାଙ୍ଗିରର ଓ ଜଣେ କେନ୍ଦୁଝରର। ବଲାଙ୍ଗିରରେ ଆତ୍ମହତ୍ୟା କରିଥିବା ଦୁଇ ଜଣ ଚାଷୀ ହେଲେ ପରିକ୍ଷିତ ନାଗ ଓ କୃତିବାସ ଗହିର।'
    //    },
    //    {
    //        newsid: '04',
    //        title: 'ପୁଣି ତିନି ଚାଷୀଙ୍କ ଆତ୍ମହତ୍ୟା ଅଭିଯୋଗ',
    //        topnews: 'ବଲାଙ୍ଗିର/କେନ୍ଦୁଝର: ଆଜି ପୁଣି ତିନି ଜଣ ଚାଷୀ ଆତ୍ମହତ୍ୟା କରିଥିବା ଅଭିଯୋଗ ହୋଇଛି। ପ୍ରାଣ ହରାଇଥିବା ୩ ଚାଷୀଙ୍କ ମଧ୍ୟରୁ ଦୁଇ ଜଣ ବଲାଙ୍ଗିରର ଓ ଜଣେ କେନ୍ଦୁଝରର। ବଲାଙ୍ଗିରରେ ଆତ୍ମହତ୍ୟା କରିଥିବା ଦୁଇ ଜଣ ଚାଷୀ ହେଲେ ପରିକ୍ଷିତ ନାଗ ଓ କୃତିବାସ ଗହିର।'
    //    },
    //    {
    //        newsid: '05',
    //        title: 'ପୁଣି ତିନି ଚାଷୀଙ୍କ ଆତ୍ମହତ୍ୟା ଅଭିଯୋଗ',
    //        topnews: 'ବଲାଙ୍ଗିର/କେନ୍ଦୁଝର: ଆଜି ପୁଣି ତିନି ଜଣ ଚାଷୀ ଆତ୍ମହତ୍ୟା କରିଥିବା ଅଭିଯୋଗ ହୋଇଛି। ପ୍ରାଣ ହରାଇଥିବା ୩ ଚାଷୀଙ୍କ ମଧ୍ୟରୁ ଦୁଇ ଜଣ ବଲାଙ୍ଗିରର ଓ ଜଣେ କେନ୍ଦୁଝରର। ବଲାଙ୍ଗିରରେ ଆତ୍ମହତ୍ୟା କରିଥିବା ଦୁଇ ଜଣ ଚାଷୀ ହେଲେ ପରିକ୍ଷିତ ନାଗ ଓ କୃତିବାସ ଗହିର।'
    //    },
    //    {
    //        newsid: '06',
    //        title: 'ପୁଣି ତିନି ଚାଷୀଙ୍କ ଆତ୍ମହତ୍ୟା ଅଭିଯୋଗ',
    //        topnews: 'ବଲାଙ୍ଗିର/କେନ୍ଦୁଝର: ଆଜି ପୁଣି ତିନି ଜଣ ଚାଷୀ ଆତ୍ମହତ୍ୟା କରିଥିବା ଅଭିଯୋଗ ହୋଇଛି। ପ୍ରାଣ ହରାଇଥିବା ୩ ଚାଷୀଙ୍କ ମଧ୍ୟରୁ ଦୁଇ ଜଣ ବଲାଙ୍ଗିରର ଓ ଜଣେ କେନ୍ଦୁଝରର। ବଲାଙ୍ଗିରରେ ଆତ୍ମହତ୍ୟା କରିଥିବା ଦୁଇ ଜଣ ଚାଷୀ ହେଲେ ପରିକ୍ଷିତ ନାଗ ଓ କୃତିବାସ ଗହିର।'
    //    }
    //];
    //$scope.newsories = [
    //    {
    //        title: 'ଦେଶ ବିଦେଶ',
    //        newstory: 'ରିଆଦ ୨୫ା୧୦: ଆମେରିକାର ବିଦେଶ ମନ୍ତ୍ରୀ ଜନ୍ କେରୀ ସାଉଦି ଆରବର ଶାହା ସଲମାନଙ୍କ ସହ ଆଲୋଚନା କରିବା ପାଇଁ ରିଆଦ ପହଞ୍ଚଛନ୍ତି । ୪ବର୍ଷ ଧରି ସିରିଆରେ ଚାଲିଥିବା ଗୃହ ଯୁଦ୍ଧ ପ୍ରସଙ୍ଗରେ ଦୁଇ ନେତାଙ୍କ ମଧ୍ୟରେ ମୁଖ୍ୟତଃ ଆଲୋଚନା ହେବ । କେରି ରବିବାର ଓମାନରୁ ରିଆଦ ପହଞ୍ଚôଛନ୍ତି । ଜୋର୍ଡାନର ଶାହା ଅବଦୁଲ୍ଲା ଦ୍ୱିତୀୟ ଓ ପାଲେଷ୍ଟାଇନ୍ ରାଷ୍ଟ୍ରପତି ମହମ୍ମଦ ଅବାସଙ୍କ ସହ ପାଲେଷ୍ଟାଇନ୍-ଇସ୍ରାଏଲ ଉତ୍ତେଜନା ପ୍ରସଙ୍ଗରେ ଭିନ୍ନ ଭିନ୍ନ ଭାବେ ଆଲୋଚନା କରିଥିଲେ । ଶାହାଙ୍କ ବାସଭବନ ଧୀରାୟା ଫାର୍ମକୁ ଯିବା ପୂର୍ବରୁ ସେ ସାଉଦି ଆରବର ବିଦେଶ ମନ୍ତ୍ରୀ ଅଦେଲ ଅଲ ଜୁବୀରଙ୍କ ସହ ଆଲୋଚନା କରିଥିଲେ । ଆମେରିକୀୟ କୂଟନୀତିଜ୍ଞଙ୍କ କହିବାନୁସାରେ କେରି ଓ ସାଉଦି ଆରବର ଶାହାଙ୍କ ମଧ୍ୟରେ ସନ୍ଧ୍ୟାରେ ହେବାକୁ ଥିବା ଆେଲୋଚନାର ମୁଖ୍ୟ ପ୍ରସଙ୍ଗ ସିରିଆ ଯୁଦ୍ଧ ରହିବ । ୱାଶିଂଟନ୍ ଓ ରିଆଦ ଆମେରିକା ନେତୃତ୍ୱାଧୀନ ଉକ୍ତ ମେଣ୍ଟର ଅଂଶବିଶେଷ, ଯେଉଁମାନେ ଗତବର୍ଷ ଜିହାଦୀ ଗୋଷ୍ଠୀ ଆଇଏସ୍ଆଇଏସ୍କୁ ଟାର୍ଗେଟ୍ କରିବା ପାଇଁ ବାୟୁସେନା ଅଭିଯାନ ଆରମ୍ଭ କରିଥିଲେ ।'
    //    }
    //];
    //$scope.hotNews = [
    // {
    //     hnid: '01',
    //     title: 'ମୂଖ୍ୟ ଖବର',
    //     copy: 'Tart candy canes gummi bears. Candy canes ice cream cheesecake tart pie powder sweet.'
    // },
    // {
    //     hnid: '02',
    //     title: 'ଓଡ଼ିଶା ଖବର',
    //     copy: 'Toffee jelly gummies donut cake. Fruitcake soufflé jelly cotton candy.'
    // },
    // {
    //     hnid: '03',
    //     title: 'ଦେଶ ବିଦେଶ',
    //     copy: 'Croissant cheesecake jujubes cupcake pudding apple pie cheesecake muffin.'
    // },
    // {
    //     hnid: '04',
    //     title: 'ଫଟୋ',
    //     copy: 'jelly beans croissant topping bear claw ice cream tootsie roll snaps.'
    // }];
    //$scope.hnewsDetail = [
    //    {
    //        hnid: '01',
    //        htitle: '',
    //        hnews: ''
    //    }
    //]

    $scope.authentication = loginServiceFactory.authentication;*/

}]);
