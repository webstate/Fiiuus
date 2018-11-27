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
                    $scope.bannerPicture = "";
                }else {
                    $scope.bannerPicture = data.picturePath;
                }
            })
        }
        if($rootScope.lang ==="en"){
            pictureService.getBannerPicture('bannerEng').then(function(data){
                if(data == null){
                    $scope.bannerPicture = "";
                }else {
                    $scope.bannerPicture = data.picturePath;
                }
            })
        }
        if($rootScope.lang ==="fi"){
            pictureService.getBannerPicture('bannerFin').then(function(data){
                if(data == null){
                    $scope.bannerPicture = "";
                }else {
                    $scope.bannerPicture = data.picturePath;
                }
            })
        }
        if($rootScope.lang ==="ru"){
            pictureService.getBannerPicture('bannerRus').then(function(data){
                if(data == null){
                    $scope.bannerPicture = "";
                }else {
                    $scope.bannerPicture = data.picturePath;
                }
            })
        }
    })
})
