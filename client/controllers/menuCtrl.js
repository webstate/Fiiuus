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
        console.log('DATA @first', data); // REMOVE
        if(data == null){
            // $scope.firstPicturePath = "";
            $scope.firstPictureOptPath = "";
        }else {
            // $scope.firstPicturePath = data.picturePath;
            $scope.firstPictureOptPath = data.optPath;
        }
        console.log('Scope @first', $scope); // REMOVE
    })
    pictureService.getMenuPicture('third').then(function(data){
        if(data == null){
            $scope.thirdPicturePath = "";
        }else {
            $scope.thirdPicturePath = data.picturePath;
        }
    })

})
