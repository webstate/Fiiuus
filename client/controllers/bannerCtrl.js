var bannerCtrl = angular.module('bannerCtrl', []);

bannerCtrl.controller('bannerCtrl', function($scope, $rootScope, pictureService, $window){
    /* v1 */
    // pictureService.getBannerPicture().then(function(data){
    //     var item = data.length-1;
    //     $scope.bannerImage = data[item].picturePath;
    // }, function(err){
    //     console.log(err);
    // })

    $(document).ready(function() {
        $scope.windowWidth = $( window ).width();
        console.log('$scope.windowWidth@@@docReady in banner', $scope.windowWidth); // REMOVE
    });


    /* Get bannerPictures */
    $scope.$watch('$root.lang', function(){
        // $(document).ready(function() {
        //     $scope.windowWidth = $( window ).width();
        //     console.log('$scope.windowWidth@@@LOAD', $scope.windowWidth); // REMOVE
        // });

        // $(window).on('load', function () {
        //     $scope.windowWidth = $( window ).width();
        //     console.log('$scope.windowWidth@@@LOAD', $scope.windowWidth); // REMOVE
        // });

        // $(window).resize(function() {
        //     $scope.windowWidth = $( window ).width();
        //     console.log('$scope.windowWidth@@@banner', $scope.windowWidth); // REMOVE
        // });


        /* ESTONIAN */
        if($rootScope.lang ==="ee"){
            // console.log('$rootScope @ee', $rootScope); // REMOVE
            // $scope.$watch('$window.width', function() {
                // console.log('if EE $(window).width()', $(window).width()); // REMOVE
                console.log('$scope.windowWidth@@@bannerLang', $scope.windowWidth); // REMOVE
                console.log('if EE $scope', $scope); // REMOVE
                // if ($( window ).width() > 991) { /* ($scope.windowWidth > 991) ||  */
                    pictureService.getBannerPicture('bannerEst').then(function(data){
                        if(data == null){
                            $scope.bannerPicture = "";
                        } else {
                            $scope.bannerPicture = data.picturePath;
                            // $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
                        }
                    })
                    // console.log('$window.innerWidth MORE 991', $window.innerWidth); // REMOVE
                // } else {
                    pictureService.getBannerPicture('bannerEstMobile').then(function(data){
                        if(data == null){
                            $scope.bannerPictureMobile = "";
                            // $scope.bannerPicture = $scope.bannerPictureMobile;
                            // console.log('SCOPE in else null', $scope); // REMOVE
                        } else {
                            $scope.bannerPictureMobile = data.picturePath;
                            // $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                            // $scope.bannerPicture = $scope.bannerPictureMobile;

                            // console.log('DATA in else else', data); // REMOVE
                            // console.log('SCOPE in else else', $scope); // REMOVE
                        }
                    })
                    // console.log('$window.innerWidth LESS 991', $window.innerWidth); // REMOVE
                // }
            // });
            // console.log('window.innerWidth', window.innerWidth); // REMOVE

            console.log('if EE w - end.width', $(window).width()); // REMOVE
            var w = $(window).width();
            if (w > 991) {
                $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
                console.log('More > 991', w); // REMOVE
            } else {
                $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                console.log('Less < 911', w); // REMOVE
            }
            console.log('SCOPE @landing banner EST end', $scope); // REMOVE

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
                    // console.log('DATA==null - $scope.bannerPicture', $scope.bannerPicture); // REMOVE
                    // $scope.bannerPictureMobile = "";

                    /* If no mobile image then use desktop image */
                    $scope.bannerPictureMobile = $scope.bannerPicture;
                    // $scope.bannerPicture = $scope.bannerPictureMobile;
                    // console.log('SCOPE in else null', $scope); // REMOVE
                } else {
                    $scope.bannerPictureMobile = data.picturePath;
                    // $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                    // $scope.bannerPicture = $scope.bannerPictureMobile;

                    // console.log('DATA in else else', data); // REMOVE
                    // console.log('SCOPE in else else', $scope); // REMOVE
                }
            })

            // console.log('window.innerWidth', window.innerWidth); // REMOVE

            console.log('if ENG w - end.width', $(window).width()); // REMOVE
            var w = $(window).width();
            if (w > 991) {
                $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
                console.log('More ENG > 991', w); // REMOVE
            } else {
                $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                console.log('Less ENG < 911', w); // REMOVE
            }
            console.log('SCOPE @landing banner ENG end', $scope); // REMOVE
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
                    // console.log('DATA==null - $scope.bannerPicture', $scope.bannerPicture); // REMOVE
                    // $scope.bannerPictureMobile = "";

                    /* If no mobile image then use desktop image */
                    $scope.bannerPictureMobile = $scope.bannerPicture;
                    // $scope.bannerPicture = $scope.bannerPictureMobile;
                    // console.log('SCOPE in else null', $scope); // REMOVE
                } else {
                    $scope.bannerPictureMobile = data.picturePath;
                    // $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                    // $scope.bannerPicture = $scope.bannerPictureMobile;

                    // console.log('DATA in else else', data); // REMOVE
                    // console.log('SCOPE in else else', $scope); // REMOVE
                }
            })

            // console.log('window.innerWidth', window.innerWidth); // REMOVE

            console.log('if FIN w - end.width', $(window).width()); // REMOVE
            var w = $(window).width();
            if (w > 991) {
                $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
                console.log('More FIN > 991', w); // REMOVE
            } else {
                $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                console.log('Less FIN < 911', w); // REMOVE
            }
            console.log('SCOPE @landing banner FIN end', $scope); // REMOVE
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
                    // console.log('DATA==null - $scope.bannerPicture', $scope.bannerPicture); // REMOVE
                    // $scope.bannerPictureMobile = "";

                    /* If no mobile image then use desktop image */
                    $scope.bannerPictureMobile = $scope.bannerPicture;
                    // $scope.bannerPicture = $scope.bannerPictureMobile;
                    // console.log('SCOPE in else null', $scope); // REMOVE
                } else {
                    $scope.bannerPictureMobile = data.picturePath;
                    // $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                    // $scope.bannerPicture = $scope.bannerPictureMobile;

                    // console.log('DATA in else else', data); // REMOVE
                    // console.log('SCOPE in else else', $scope); // REMOVE
                }
            })

            // console.log('window.innerWidth', window.innerWidth); // REMOVE

            console.log('if RUS w - end.width', $(window).width()); // REMOVE
            var w = $(window).width();
            if (w > 991) {
                $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
                console.log('More RUS > 991', w); // REMOVE
            } else {
                $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
                console.log('Less RUS < 911', w); // REMOVE
            }
            console.log('SCOPE @landing banner RUS end', $scope); // REMOVE
        }

        console.log('s.c.o.p.e @lang-end', $scope); // REMOVE
    })


    $(window).resize(function() {
        $scope.windowWidth = $( window ).width();
        console.log('$scope.windowWidth@@@banner', $scope.windowWidth); // REMOVE

        // // var ttt = document.getElementsByClassName("bannertest");
        // var ttt = $(".bannertest")[0];
        // console.log('TTT', ttt); // REMOVE

        var w = $(window).width();
        // console.log('W', w); // REMOVE

        if (w > 991) {
            // $('.bannertest').css('background-color', 'yellow');
            // $('div.bannertest').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
            $('div.banner-picture').css({'background-image': 'url(' + $scope.bannerPicture + ')'});
        } else {
            // $('.bannertest').css('background-color', 'pink');
            // $('.bannertest').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
            $('.banner-picture').css({'background-image': 'url(' + $scope.bannerPictureMobile + ')'});
        }
        // console.log('scope RESIZE-end', $scope); // REMOVE
    });
})
