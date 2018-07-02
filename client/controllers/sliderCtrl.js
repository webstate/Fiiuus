var sliderCtrl = angular.module('sliderCtrl', []);

sliderCtrl.controller('sliderCtrl', function($location,$rootScope, $scope, landingTextService, pictureService, eventService, bookingService, emailService, $window){

    if($location.url() === "/"){
        $rootScope.lang = "ee";
        $rootScope.bookingModal = false;
    }
    if($location.url() === "/en"){
        $rootScope.lang = "en";
        $rootScope.bookingModal = false;
    }
    if($location.url() === "/fi"){
        $rootScope.lang = "fi";
        $rootScope.bookingModal = false;
    }
    if($location.url() === "/ru"){
        $rootScope.lang = "ru";
        $rootScope.bookingModal = false;
    }
    if($location.url() === "/broneerilaud"){
        $rootScope.lang = "ee";
        $rootScope.bookingModal = true;
    }

    $scope.language = $rootScope.lang;
    $scope.langmenuMobile = {
        status: false
    };

    $scope.openLangMenuMobile = function(){
        $scope.langmenuMobile.status = true;
    }

    eventService.getNextEvents().then(function(data){
        $scope.eventBanner = data[0];
    }, function(err){
        console.log(err);
    })
    $scope.changeLang = function(lang){
        if(lang ==="ee"){
            $location.path('/');
        }
        $location.path('/'+lang);
        $scope.langmenuMobile.status = false;
    }
    $scope.slider = false;
    $scope.bookATable = function(){
        $scope.slider = true;
    }
    $scope.toUrlEst = function(){
        $window.open(
            "http://sophia.tartuhotels.ee/th_portfolio/toitlustus-tartus/",
            "_blank"
        );
    }
    $scope.toUrlEng = function(){
        $window.open(
            "http://sophia.tartuhotels.ee/en/th_portfolio/group-dining-in-tartu/",
            "_blank"
        );
    }
    // ESTONIAN LANDING TEXTS
    landingTextService.getLandingText("workerTitle", "ee").then(function(data){
        $scope.workerTitle = data.text;
    })
    landingTextService.getLandingText("workerText", "ee").then(function(data){
        $scope.workerText = data.text;
    })
    landingTextService.getLandingText("menuTitle", "ee").then(function(data){
        $scope.menuTitle = data.text;
    })
    landingTextService.getLandingText("menuText", "ee").then(function(data){
        $scope.menuText = data.text;
    })
    landingTextService.getLandingText("courseTitleStarter", "ee").then(function(data){
        $scope.courseTitleStarter = data.text;
    })
    landingTextService.getLandingText("courseTitleMain", "ee").then(function(data){
        $scope.courseTitleMain = data.text;
    })
    landingTextService.getLandingText("courseTitleDessert", "ee").then(function(data){
        $scope.courseTitleDessert = data.text;
    })
    landingTextService.getLandingText("tastingText", "ee").then(function(data){
        $scope.tastingText = data.text;
    })
    landingTextService.getLandingText("eventTitle", "ee").then(function(data){
        $scope.eventTitle = data.text;
    })
    landingTextService.getLandingText("contactCallEst", "ee").then(function(data){
        $scope.contactCallEst = data.text;
    })
    landingTextService.getLandingText("contactVisitEst", "ee").then(function(data){
        $scope.contactVisitEst = data.text;
    })
    landingTextService.getLandingText("contactEmailEst", "ee").then(function(data){
        $scope.contactEmailEst = data.text;
    })
    landingTextService.getLandingText("contactTimeWeekend", "ee").then(function(data){
        $scope.contactTimeWeekend = data.text;
    })
    landingTextService.getLandingText("contactTimeWorkWeek", "ee").then(function(data){
        $scope.contactTimeWorkWeek = data.text;
    })
    landingTextService.getLandingText("contactDays", "ee").then(function(data){
        $scope.contactDays = data.text;
    })
    landingTextService.getLandingText("contactWeekend", "ee").then(function(data){
        $scope.contactWeekend = data.text;
    })
    landingTextService.getLandingText("bannerTitleEst", "ee").then(function(data){
        $scope.bannerTitleEst = data.text;
    })
    landingTextService.getLandingText("bannerTitleEng", "ee").then(function(data){
        $scope.bannerTitleEng = data.text;
    })
    landingTextService.getLandingText("bannerTitleFin", "ee").then(function(data){
        $scope.bannerTitleFin = data.text;
    })
    landingTextService.getLandingText("bannerTitleRus", "ee").then(function(data){
        $scope.bannerTitleRus = data.text;
    })

// ENGLISH LANDING TEXTS

    landingTextService.getLandingText("contactCallEng", "ee").then(function(data){
        $scope.contactCallEng = data.text;
    })
    landingTextService.getLandingText("contactVisitEng", "ee").then(function(data){
        $scope.contactVisitEng = data.text;
    })
    landingTextService.getLandingText("contactEmailEng", "ee").then(function(data){
        $scope.contactEmailEng = data.text;
    })
    landingTextService.getLandingText("contactTimeWeekendEng", "ee").then(function(data){
        $scope.contactTimeWeekendEng = data.text;
    })
    landingTextService.getLandingText("contactTimeWorkWeekEng", "ee").then(function(data){
        $scope.contactTimeWorkWeekEng = data.text;
    })
    landingTextService.getLandingText("courseTitleStarterEng", "ee").then(function(data){
        $scope.courseTitleStarterEng = data.text;
    })
    landingTextService.getLandingText("courseTitleMainEng", "ee").then(function(data){
        $scope.courseTitleMainEng = data.text;
    })
    landingTextService.getLandingText("courseTitleDessertEng", "ee").then(function(data){
        $scope.courseTitleDessertEng = data.text;
    })
    landingTextService.getLandingText("contactDaysEng", "ee").then(function(data){
        $scope.contactDaysEng = data.text;
    })
    landingTextService.getLandingText("contactWeekendEng", "ee").then(function(data){
        $scope.contactWeekendEng = data.text;
    })
    landingTextService.getLandingText("workerTitleEng", "ee").then(function(data){
        $scope.workerTitleEng = data.text;
    })
    landingTextService.getLandingText("workerTextEng", "ee").then(function(data){
        $scope.workerTextEng = data.text;
    })
    landingTextService.getLandingText("menuTitleEng", "ee").then(function(data){
        $scope.menuTitleEng = data.text;
    })
    landingTextService.getLandingText("menuTextEng", "ee").then(function(data){
        $scope.menuTextEng = data.text;
    })
    landingTextService.getLandingText("tastingTextEng", "ee").then(function(data){
        $scope.tastingTextEng = data.text;
    })
    landingTextService.getLandingText("eventTitleEng", "ee").then(function(data){
        $scope.eventTitleEng = data.text;
    })

// FINNISH LANDING TEXTS

    landingTextService.getLandingText("contactCallFin", "ee").then(function(data){
        $scope.contactCallFin = data.text;
    })
    landingTextService.getLandingText("contactVisitFin", "ee").then(function(data){
        $scope.contactVisitFin = data.text;
    })
    landingTextService.getLandingText("contactEmailFin", "ee").then(function(data){
        $scope.contactEmailFin = data.text;
    })
    landingTextService.getLandingText("contactTimeWeekendFin", "ee").then(function(data){
        $scope.contactTimeWeekendFin = data.text;
    })
    landingTextService.getLandingText("contactTimeWorkWeekFin", "ee").then(function(data){
        $scope.contactTimeWorkWeekFin = data.text;
    })
    landingTextService.getLandingText("courseTitleStarterFin", "ee").then(function(data){
        $scope.courseTitleStarterFin = data.text;
    })
    landingTextService.getLandingText("courseTitleMainFin", "ee").then(function(data){
        $scope.courseTitleMainFin = data.text;
    })
    landingTextService.getLandingText("courseTitleDessertFin", "ee").then(function(data){
        $scope.courseTitleDessertFin = data.text;
    })
    landingTextService.getLandingText("contactDaysFin", "ee").then(function(data){
        $scope.contactDaysFin = data.text;
    })
    landingTextService.getLandingText("contactWeekendFin", "ee").then(function(data){
        $scope.contactWeekendFin = data.text;
    })
    landingTextService.getLandingText("workerTitleFin", "ee").then(function(data){
        $scope.workerTitleFin = data.text;
    })
    landingTextService.getLandingText("workerTextFin", "ee").then(function(data){
        $scope.workerTextFin = data.text;
    })
    landingTextService.getLandingText("menuTitleFin", "ee").then(function(data){
        $scope.menuTitleFin = data.text;
    })
    landingTextService.getLandingText("menuTextFin", "ee").then(function(data){
        $scope.menuTextFin = data.text;
    })
    landingTextService.getLandingText("tastingTextFin", "ee").then(function(data){
        $scope.tastingTextFin = data.text;
    })
    landingTextService.getLandingText("eventTitleFin", "ee").then(function(data){
        $scope.eventTitleFin = data.text;
    })

// RUSSIAN LANDING TEXTS

    landingTextService.getLandingText("contactCallRus", "ee").then(function(data){
        $scope.contactCallRus = data.text;
    })
    landingTextService.getLandingText("contactVisitRus", "ee").then(function(data){
        $scope.contactVisitRus = data.text;
    })
    landingTextService.getLandingText("contactEmailRus", "ee").then(function(data){
        $scope.contactEmailRus = data.text;
    })
    landingTextService.getLandingText("contactTimeWeekendRus", "ee").then(function(data){
        $scope.contactTimeWeekendRus = data.text;
    })
    landingTextService.getLandingText("contactTimeWorkWeekRus", "ee").then(function(data){
        $scope.contactTimeWorkWeekRus = data.text;
    })
    landingTextService.getLandingText("courseTitleStarterRus", "ee").then(function(data){
        $scope.courseTitleStarterRus = data.text;
    })
    landingTextService.getLandingText("courseTitleMainRus", "ee").then(function(data){
        $scope.courseTitleMainRus = data.text;
    })
    landingTextService.getLandingText("courseTitleDessertRus", "ee").then(function(data){
        $scope.courseTitleDessertRus = data.text;
    })
    landingTextService.getLandingText("contactDaysRus", "ee").then(function(data){
        $scope.contactDaysRus = data.text;
    })
    landingTextService.getLandingText("contactWeekendRus", "ee").then(function(data){
        $scope.contactWeekendRus = data.text;
    })
    landingTextService.getLandingText("workerTitleRus", "ee").then(function(data){
        $scope.workerTitleRus = data.text;
    })
    landingTextService.getLandingText("workerTextRus", "ee").then(function(data){
        $scope.workerTextRus = data.text;
    })
    landingTextService.getLandingText("menuTitleRus", "ee").then(function(data){
        $scope.menuTitleRus = data.text;
    })
    landingTextService.getLandingText("menuTextRus", "ee").then(function(data){
        $scope.menuTextRus = data.text;
    })
    landingTextService.getLandingText("tastingTextRus", "ee").then(function(data){
        $scope.tastingTextRus = data.text;
    })
    landingTextService.getLandingText("eventTitleRus", "ee").then(function(data){
        $scope.eventTitleRus = data.text;
    })







    pictureService.getMenuPicture('event').then(function(data){
        if(data == null){
            $scope.eventPicturePath = "";
        }else {
            $scope.eventPicture = data.picturePath;
        }
    })
    pictureService.getMenuPicture('map').then(function(data){
        if(data == null){
            $scope.mapPicturePath = "";
        }else {
            $scope.mapPicture = data.picturePath;
        }
    })
    pictureService.getMenuPicture('eventEst').then(function(data){
        if(data == null){
            $scope.eventPicturePathEst = "";
        }else {
            $scope.eventPicturePathEst = data.picturePath;
        }
    })
    pictureService.getMenuPicture('eventFin').then(function(data){
        if(data == null){
            $scope.eventPicturePathFin = "";
        }else {
            $scope.eventPicturePathFin = data.picturePath;
        }
    })
    pictureService.getMenuPicture('eventEng').then(function(data){
        if(data == null){
            $scope.eventPicturePathEng = "";
        }else {
            $scope.eventPicturePathEng = data.picturePath;
        }
    })
    pictureService.getMenuPicture('eventRus').then(function(data){
        if(data == null){
            $scope.eventPicturePathRus = "";
        }else {
            $scope.eventPicturePathRus = data.picturePath;
        }
    })
    $scope.bronModal = function(){
        $rootScope.bookingModal = true;
        $('body').css('overflow', 'hidden');
    }

    $scope.sendEmailEng = function(){
            emailService.sendFeedBack($scope.emailEng, $scope.nameEng, $scope.messageEng, "en").then(function(data){
                $rootScope.nameEng = "";
                $rootScope.emailEng = "";
                $rootScope.messageEng = "";
            })
    }
    $scope.sendEmailEst = function(){
            emailService.sendFeedBack($scope.emailEst, $scope.nameEst, $scope.messageEst, "ee").then(function(data){
                $rootScope.nameEst = "";
                $rootScope.emailEst = "";
                $rootScope.messageEst = "";
            })
    }
    $scope.sendEmailFin = function(){
            emailService.sendFeedBack($scope.emailFin, $scope.nameFin, $scope.messageFin, "fi").then(function(data){
                $rootScope.nameFin = "";
                $rootScope.emailFin = "";
                $rootScope.messageFin = "";
            })
    }
    $scope.sendEmailRus = function(){
            emailService.sendFeedBack($scope.emailRus, $scope.nameRus, $scope.messageRus, "ru").then(function(data){
                $rootScope.nameRus = "";
                $rootScope.emailRus = "";
                $rootScope.messageRus = "";
            })
    }
});
