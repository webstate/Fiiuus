var foodCtrl = angular.module('foodCtrl', []);

foodCtrl.controller('foodCtrl', function($scope, foodService){

    foodService.getStarters().then(function(data){
        $scope.starters = data;
    }, function(err){
        console.log(err);
    });
    foodService.getMain().then(function(data){
        $scope.maincourse = data;
    }, function(err){
        console.log(err);
    });
    foodService.getDessert().then(function(data){
        $scope.dessert = data;
    }, function(err){
        console.log(err);
    });
    foodService.getKids().then(function(data){
        $scope.kids = data;
    }, function(err){
        console.log(err);
    });
});
