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
                    $scope.bannerPicture = data.picturePath;
                    // $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
                }
            });
            pictureService.getBannerPicture('bannerEstMobile').then(function(data){
                if(data == null){
                    $scope.bannerPictureMobile = $scope.bannerPicture;
                } else {
                    $scope.bannerPictureMobile = data.picturePath;
                    // $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                }
            });

            var w = $(window).width();

            if (w > 991) {
                $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
                // console.log('More > 991', w); // REMOVE
            } else {
                $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                // console.log('Less < 911', w); // REMOVE
            }
        }


        /* ENGLISH */
        if($rootScope.lang ==="en"){
            pictureService.getBannerPicture('bannerEng').then(function(data){
                if(data == null){
                    $scope.bannerPicture = "";
                } else {
                    $scope.bannerPicture = data.picturePath;
                }
            })

            pictureService.getBannerPicture('bannerEngMobile').then(function(data){
                if(data == null){
                    /* If no mobile image then use desktop image */
                    $scope.bannerPictureMobile = $scope.bannerPicture;
                } else {
                    $scope.bannerPictureMobile = data.picturePath;
                    // $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                }
            })

            var w = $(window).width();

            if (w > 991) {
                $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
                // console.log('More ENG > 991', w); // REMOVE
            } else {
                $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                // console.log('Less ENG < 911', w); // REMOVE
            }
        }


        /* FINNISH */
        if($rootScope.lang ==="fi"){
            pictureService.getBannerPicture('bannerFin').then(function(data){
                if(data == null){
                    $scope.bannerPicture = "";
                } else {
                    $scope.bannerPicture = data.picturePath;
                }
            })

            pictureService.getBannerPicture('bannerFinMobile').then(function(data){
                if(data == null){
                    /* If no mobile image then use desktop image */
                    $scope.bannerPictureMobile = $scope.bannerPicture;
                } else {
                    $scope.bannerPictureMobile = data.picturePath;
                    // $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                }
            })

            var w = $(window).width();
            if (w > 991) {
                $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
                // console.log('More FIN > 991', w); // REMOVE
            } else {
                $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                // console.log('Less FIN < 911', w); // REMOVE
            }
        }


        /* RUSSIAN */
        if($rootScope.lang ==="ru"){
            pictureService.getBannerPicture('bannerRus').then(function(data){
                if(data == null){
                    $scope.bannerPicture = "";
                } else {
                    $scope.bannerPicture = data.picturePath;
                }
            })

            pictureService.getBannerPicture('bannerRusMobile').then(function(data){
                if(data == null){
                    /* If no mobile image then use desktop image */
                    $scope.bannerPictureMobile = $scope.bannerPicture;
                } else {
                    $scope.bannerPictureMobile = data.picturePath;
                    // $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                }
            })

            var w = $(window).width();

            if (w > 991) {
                $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
                // console.log('More RUS > 991', w); // REMOVE
            } else {
                $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                // console.log('Less RUS < 911', w); // REMOVE
            }
        }

        console.log('s.c.o.p.e @lang-end', $scope); // REMOVE
    })

    /* Display Desktop or Mobile banner on window resize */
    $(window).resize(function() {
        $scope.windowWidth = $( window ).width();

        var w = $(window).width();

        if (w > 991) {
            $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
        } else {
            $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
        }
    });
})
