var bannerCtrl = angular.module('bannerCtrl', []);

bannerCtrl.controller('bannerCtrl', function($scope, $rootScope, pictureService, $window){

    $(document).ready(function() {
        $scope.windowWidth = $( window ).width();
    });


    /* Get bannerPictures */
    $scope.$watch('$root.lang', function(){


        /* ESTONIAN */
        if($rootScope.lang ==="ee"){
            pictureService.getBannerPicture('bannerEst').then(function(data){
                if(data == null){
                    $scope.bannerPicture = "";
                } else {
                    /* If optimized image path exists */
                    if (data.optPath) {
                        $scope.bannerPicture = data.optPath;
                    } else {
                        $scope.bannerPicture = data.picturePath;
                    }
                }
            });
            pictureService.getBannerPicture('bannerEstMobile').then(function(data){
                if(data == null){
                    $scope.bannerPictureMobile = $scope.bannerPicture;
                } else {
                    /* If optimized image path exists */
                    if (data.optPath) {
                        $scope.bannerPictureMobile = data.optPath;
                    } else {
                        $scope.bannerPictureMobile = data.picturePath;
                    }
                }
            });

            var w = $(window).width();

            if (w > 991) {
                $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
            } else {
                $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
            }
        }


        /* ENGLISH */
        if($rootScope.lang ==="en"){
            pictureService.getBannerPicture('bannerEng').then(function(data){
                if(data == null){
                    $scope.bannerPicture = "";
                } else {
                    /* If optimized image path exists */
                    if (data.optPath) {
                        $scope.bannerPicture = data.optPath;
                    } else {
                        $scope.bannerPicture = data.picturePath;
                    }
                }
            })

            pictureService.getBannerPicture('bannerEngMobile').then(function(data){
                if(data == null){
                    /* If no mobile image then use desktop image */
                    $scope.bannerPictureMobile = $scope.bannerPicture;
                } else {
                    /* If optimized image path exists */
                    if (data.optPath) {
                        $scope.bannerPictureMobile = data.optPath;
                    } else {
                        $scope.bannerPictureMobile = data.picturePath;
                    }
                }
            })

            var w = $(window).width();

            if (w > 991) {
                $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
            } else {
                $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
            }
        }


        /* FINNISH */
        if($rootScope.lang ==="fi"){
            pictureService.getBannerPicture('bannerFin').then(function(data){
                if(data == null){
                    $scope.bannerPicture = "";
                } else {
                    /* If optimized image path exists */
                    if (data.optPath) {
                        $scope.bannerPicture = data.optPath;
                    } else {
                        $scope.bannerPicture = data.picturePath;
                    }
                }
            })

            pictureService.getBannerPicture('bannerFinMobile').then(function(data){
                if(data == null){
                    /* If no mobile image then use desktop image */
                    $scope.bannerPictureMobile = $scope.bannerPicture;
                } else {
                    /* If optimized image path exists */
                    if (data.optPath) {
                        $scope.bannerPictureMobile = data.optPath;
                    } else {
                        $scope.bannerPictureMobile = data.picturePath;
                    }
                }
            })

            var w = $(window).width();
            if (w > 991) {
                $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
            } else {
                $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
            }
        }


        /* RUSSIAN */
        if($rootScope.lang ==="ru"){
            pictureService.getBannerPicture('bannerRus').then(function(data){
                if(data == null){
                    $scope.bannerPicture = "";
                } else {
                    /* If optimized image path exists */
                    if (data.optPath) {
                        $scope.bannerPicture = data.optPath;
                    } else {
                        $scope.bannerPicture = data.picturePath;
                    }
                }
            })

            pictureService.getBannerPicture('bannerRusMobile').then(function(data){
                if(data == null){
                    /* If no mobile image then use desktop image */
                    $scope.bannerPictureMobile = $scope.bannerPicture;
                } else {
                    /* If optimized image path exists */
                    if (data.optPath) {
                        $scope.bannerPictureMobile = data.optPath;
                    } else {
                        $scope.bannerPictureMobile = data.picturePath;
                    }
                }
            })

            var w = $(window).width();

            if (w > 991) {
                $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
            } else {
                $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
            }
        }

    })

    /* Display Desktop or Mobile banner on window resize */
    $(window).resize(function() {
        $scope.windowWidth = $( window ).width();

        var w = $(window).width();

        if (w > 991) {
            $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
        } else {
            if ($scope.bannerPictureMobile === undefined || $scope.bannerPictureMobile === 'undefined') {
                $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
            } else {
                $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
            }
        }
    });
})
