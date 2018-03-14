var menuCtrl = angular.module('menuCtrl', []);

menuCtrl.controller('menuCtrl', function($scope, pictureService){
    pictureService.getMenuPicture('second').then(function(data){
        if(data == null){
            $scope.secondPicturePath = "";
        }else {
            $scope.secondPicturePath = data.picturePath;
        }
    })
    pictureService.getMenuPicture('first').then(function(data){
        if(data == null){
            $scope.firstPicturePath = "";
        }else {
            $scope.firstPicturePath = data.picturePath;
        }
    })
    pictureService.getMenuPicture('third').then(function(data){
        if(data == null){
            $scope.thirdPicturePath = "";
        }else {
            $scope.thirdPicturePath = data.picturePath;
        }
    })
})
