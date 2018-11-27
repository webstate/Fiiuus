var bannerCtrl = angular.module('bannerCtrl', []);

bannerCtrl.controller('bannerCtrl', function($scope, $rootScope, pictureService){
    /* v1 */
    // pictureService.getBannerPicture().then(function(data){
    //     var item = data.length-1;
    //     $scope.bannerImage = data[item].picturePath;
    // }, function(err){
    //     console.log(err);
    // })

    

    /* Get bannerPictures */
    $scope.$watch('$root.lang', function(){
        if($rootScope.lang ==="ee"){
            pictureService.getBannerPicture('bannerEst').then(function(data){
                if(data == null){
                    // $scope.bannerPicturePathEst = "";
                    $scope.bannerPicture = "";
                }else {
                    // $scope.bannerPicturePathEst = data.picturePath;
                    console.log('EE', ); // REMOVE
                    $scope.bannerPicture = data.picturePath;
                }
            })
        }
        if($rootScope.lang ==="en"){
            pictureService.getBannerPicture('bannerEng').then(function(data){
                if(data == null){
                    // $scope.bannerPicturePathEng = "";
                    $scope.bannerPicture = "";
                }else {
                    // $scope.bannerPicturePathEng = data.picturePath;
                    console.log('EN', ); // REMOVE
                    $scope.bannerPicture = data.picturePath;
                }
            })
        }
        if($rootScope.lang ==="fi"){
            pictureService.getBannerPicture('bannerFin').then(function(data){
                if(data == null){
                    // $scope.bannerPicturePathFin = "";
                    $scope.bannerPicture = "";
                }else {
                    // $scope.bannerPicturePathFin = data.picturePath;
                    console.log('FI', ); // REMOVE
                    $scope.bannerPicture = data.picturePath;
                }
            })
        }
        if($rootScope.lang ==="ru"){
            pictureService.getBannerPicture('bannerRus').then(function(data){
                if(data == null){
                    // $scope.bannerPicturePathRus = "";
                    $scope.bannerPicture = "";
                }else {
                    // $scope.bannerPicturePathRus = data.picturePath;
                    console.log('RU', ); // REMOVE
                    $scope.bannerPicture = data.picturePath;
                }
            })
        }
    })
})
