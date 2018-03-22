var bannerCtrl = angular.module('bannerCtrl', []);

bannerCtrl.controller('bannerCtrl', function($scope, pictureService){
    pictureService.getBannerPicture().then(function(data){
        var item = data.length-1;
        $scope.bannerImage = data[item].picturePath;
    }, function(err){
        console.log(err);
    })
})
