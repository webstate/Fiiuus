var eventCtrl = angular.module('eventCtrl', []);

eventCtrl.controller('eventCtrl', function ($scope, eventService, $rootScope) {
    eventService.getEvents().then(function (data) {
            console.log(data);
            $scope.events = data;
            if (data.length === 0) {
                $scope.eventNavbar = true;
                $scope.eventContainer = true;
            } else {
                $scope.eventNavbar = false;
                $scope.eventContainer = false;
            }
            var tday = new Date();
            var day = new Date().setDate(tday.getDate() - 1);
            var dateTime = new Date(day);
            var dateTime1 = new Date(data[0]['date']);
            if (dateTime1 > dateTime) {
                $scope.eventNavbar = false;
                $scope.eventContainer = false;
            } else {
                $scope.eventDialog = true;
                $scope.eventContainer = true;
            }
            angular.forEach($scope.events, function (value) {
                value.date = new Date(value.date);
            });
            $scope.filterDate = function (events) {
                var today = new Date();
                var today_plus_one_day = new Date().setDate(today.getDate() - 1);
                return (events.date >= today_plus_one_day);
            };
            $scope.limit = 5;
            if ($rootScope.lang === "ee") {
                for (var i in data) {
                    if (data[i].description === null || data[i].description === undefined || data[i].description.length <= 0) {
                        delete data[i];
                    }
                }
            }
            if ($rootScope.lang === "en") {
                for (var i in data) {
                    if (data[i].descEng === null || data[i].descEng === undefined || data[i].descEng.length <= 0) {
                        delete data[i];
                    }
                }
            }
            if ($rootScope.lang === "fi") {
                for (var i in data) {
                    if (data[i].descFin === null || data[i].descFin === undefined || data[i].descFin.length <= 0) {
                        delete data[i];
                    }
                }
            }
            if ($rootScope.lang === "ru") {
                for (var i in data) {
                    if (data[i].descRus === null || data[i].descRus === undefined || data[i].descRus.length <= 0) {
                        delete data[i];
                    }
                }
            }
            for (step = 0; step < 20; step++) {
                if (data[step] === null || data[step] === undefined || data[step].length <= 0) {
                    $scope.eventNavbar = true;
                    $scope.eventContainer = true;
                } else {
                    $scope.eventNavbar = false;
                    $scope.eventContainer = false;
                    break;
                }
            }
        },

        function (err) {
            console.log(err);
        }
    )
})
