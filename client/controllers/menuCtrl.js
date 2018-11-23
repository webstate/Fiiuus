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

    /* Get banner */
    pictureService.getBannerPicture('bannerEst').then(function(data){/* getMenuPicture */
        if(data == null){
            $scope.bannerPicturePathEst = "";
        }else {
            $scope.bannerPicturePathEst = data.picturePath;
        }
    })
    pictureService.getBannerPicture('bannerEng').then(function(data){/* getMenuPicture */
        if(data == null){
            $scope.bannerPicturePathEng = "";
        }else {
            $scope.bannerPicturePathEng = data.picturePath;
        }
    })
    pictureService.getBannerPicture('bannerFin').then(function(data){/* getMenuPicture */
        if(data == null){
            $scope.bannerPicturePathFin = "";
        }else {
            $scope.bannerPicturePathFin = data.picturePath;
        }
    })
    pictureService.getBannerPicture('bannerRus').then(function(data){/* getMenuPicture */
        if(data == null){
            $scope.bannerPicturePathRus = "";
        }else {
            $scope.bannerPicturePathRus = data.picturePath;
        }
    })
})
