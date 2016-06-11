var app = angular.module("suntime", []);
var MainController = function($scope, $interval) {

    $scope.clock = {
        time: "",
        interval: 1000
    };

    $interval(function() {
        $scope.clock.time = Date.now();
    }, $scope.clock.interval);
    
};



app.controller('MainController', MainController);