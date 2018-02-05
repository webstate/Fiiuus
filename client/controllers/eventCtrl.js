var eventCtrl = angular.module('eventCtrl', []);

eventCtrl.controller('eventCtrl', function($scope, eventService, $rootScope){
    eventService.getEvents().then(function(data){
        console.log(data);
        $scope.events = data;
        if(data.length === 0){
            $scope.eventNavbar = true;
            $scope.eventContainer = true;
        }else{
            $scope.eventNavbar = false;
            $scope.eventContainer = false;
        }
        var tday = new Date();
        var day = new Date().setDate(tday.getDate()-1);
        var dateTime = new Date(day);
        var dateTime1 = new Date(data[0]['date']);
        if (dateTime1 > dateTime){
            $scope.eventNavbar = false;
            $scope.eventContainer = false;
        }else{
            $scope.eventDialog = true;
            $scope.eventContainer = true;
        }
        angular.forEach($scope.events, function(value) {
            value.date = new Date(value.date);
        });
        $scope.filterDate = function(events) {
            var today = new Date();
            var today_plus_one_day = new Date().setDate(today.getDate()-1);
            return events.date >= today_plus_one_day;
        };
        if ($rootScope.lang === "ee") {
            if (((data[0]['description'].length)&&(data[0]['name'].length)) === 0){
                $scope.eventNavbar = true;
                $scope.eventContainer = true;
            }else{
                $scope.eventNavbar = false;
                $scope.eventContainer = false;
            }
            var counting = data.reduce(function (n, desc) {
                return n + (desc.description !== '');
            }, 0);
            if (counting >= 5){
                $scope.limit = 5;
            }else{
                $scope.limit = counting;
            }
        }
        if ($rootScope.lang === "en") {
            if (((data[0]['descEng'].length)&&(data[0]['nameEng'].length)) === 0){
                $scope.eventNavbar = true;
                $scope.eventContainer = true;
            }else{
                $scope.eventNavbar = false;
                $scope.eventContainer = false;
            }
            var counting = data.reduce(function (n, desc) {
                return n + (desc.descEng !== '');
            }, 0);
            if (counting >= 5){
                $scope.limit = 5;
            }else{
                $scope.limit = counting;
            }
        }
        if ($rootScope.lang === "fi") {
            if (((data[0]['descFin'].length)&&(data[0]['nameFin'].length)) === 0){
                $scope.eventNavbar = true;
                $scope.eventContainer = true;
            }else{
                $scope.eventNavbar = false;
                $scope.eventContainer = false;
            }
            var counting = data.reduce(function (n, desc) {
                return n + (desc.descFin !== '');
            }, 0);
            if (counting >= 5){
                $scope.limit = 5;
            }else{
                $scope.limit = counting;
            }
        }
        if ($rootScope.lang === "ru") {
            if (((data[0]['descRus'].length)&&(data[0]['nameRus'].length)) === 0){
                $scope.eventNavbar = true;
                $scope.eventContainer = true;
            }else{
                $scope.eventNavbar = false;
                $scope.eventContainer = false;
            }
            var counting = data.reduce(function (n, desc) {
                return n + (desc.descRus !== '');
            }, 0);
            if (counting >= 5){
                $scope.limit = 5;
            }else{
                $scope.limit = counting;
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.activeEventImg = '';
    $scope.openModal = function(path){
        $scope.activeEventImg = path;
    }
})
