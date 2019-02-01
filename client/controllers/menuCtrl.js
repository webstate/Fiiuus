var menuCtrl = angular.module('menuCtrl', []);

menuCtrl.controller('menuCtrl', function($scope, pictureService){
    pictureService.getMenuPicture('second').then(function(data){
        if(data == null){
            $scope.secondPicturePath = "";
        }else {
            /* If optimized image path exists */
            if (data.optPath) {
                $scope.secondPicturePath = data.optPath;
            } else {
                $scope.secondPicturePath = data.picturePath;
            }
        }
    })
    pictureService.getMenuPicture('first').then(function(data){
        if(data == null){
            $scope.firstPicturePath = "";
        }else {
            /* If optimized image path exists */
            if (data.optPath) {
                $scope.firstPicturePath = data.optPath;
            } else {
                $scope.firstPicturePath = data.picturePath;
            }
        }
    })
    pictureService.getMenuPicture('third').then(function(data){
        if(data == null){
            $scope.thirdPicturePath = "";
        }else {
            /* If optimized image path exists */
            if (data.optPath) {
                $scope.thirdPicturePath = data.optPath;
            } else {
                $scope.thirdPicturePath = data.picturePath;
            }
        }
    })

})
