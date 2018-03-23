var workerCtrl = angular.module('workerCtrl', []);

workerCtrl.controller('workerCtrl', function($scope, workerService){
    workerService.getWorkers().then(function(data){
        $scope.workers = data;
    }, function(err){
        console.log(err);
    })
})
