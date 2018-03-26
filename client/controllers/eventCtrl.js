var eventCtrl = angular.module('eventCtrl', []);

eventCtrl.controller('eventCtrl', function ($scope, eventService, $rootScope) {
    eventService.getEvents().then(function (data) {
            $scope.events = data;
            //checks if database contains any events, if not it hides events from navbar and the whole events container by using ng-hide in landing.html
            $scope.eventNavbar = true;
            $scope.eventContainer = true;
            if (data.length === 0) {
                $scope.eventNavbar = true;
                $scope.eventContainer = true;
            } else {
                $scope.eventNavbar = false;
                $scope.eventContainer = false;
            }
            // angular.forEach($scope.events, function (value) {
            //     value.date = new Date(value.date);
            // });


            //if the highest date which is first in the array is smaller than the current date, it hides the navbar and events container
            var tday = new Date();
            var day = new Date().setDate(tday.getDate() + 1);
            var dateTime = new Date(day);
            var dategetter = data[0]['date'].toString().split(" ")[0];
            var timegetter = data[0]['date'].toString().split(" ")[1];
            var dateTime1 = new Date(dategetter.split("-")[2],parseInt(dategetter.split("-")[1])-1,dategetter.split("-")[0],timegetter.split(":")[0],timegetter.split(":")[0]);
            console.log(dateTime1);
            console.log(dateTime);
            console.log(dateTime1 > dateTime);
            if (dateTime1 > dateTime) {
                $scope.eventNavbar = false;
                $scope.eventContainer = false;
            } else {
                $scope.eventDialog = true;
                $scope.eventContainer = true;
            }
            $scope.limit = 5;
            var today = new Date();
            var today_plus_one_day = new Date().setDate(today.getDate() - 1);
            today_plus_one_day = new Date(today_plus_one_day);
            if ($rootScope.lang === "ee") {
                for (var ee in data) {
                    var time_data = (data[ee]['date'])
                    var replace_data = time_data.replace(/-/g,"/")
                    var slice_data = replace_data.slice(0, 10)
                    var eventdate = new Date(slice_data)
                    if (data[ee].description === null || data[ee].description === undefined || data[ee].description.length <= 0) {
                        delete data[ee]
                    }
                    if (eventdate <= today_plus_one_day){
                        delete data[ee]
                    }
                }
            }
            if ($rootScope.lang === "en") {
                for (var en in data) {
                    var time_data = (data[en]['date'])
                    var replace_data = time_data.replace(/-/g,"/")
                    var slice_data = replace_data.slice(0, 10)
                    var eventdate = new Date(slice_data)
                    if (data[en].descEng === null || data[en].descEng === undefined || data[en].descEng.length <= 0) {
                        delete data[en]
                    }
                    if (eventdate < today_plus_one_day) {
                        delete data[en]
                    }
                }
            }
            if ($rootScope.lang === "fi") {
                for (var fi in data) {
                    var time_data = (data[fi]['date'])
                    var replace_data = time_data.replace(/-/g,"/")
                    var slice_data = replace_data.slice(0, 10)
                    var eventdate = new Date(slice_data)
                    if (data[fi].descFin === null || data[fi].descFin === undefined || data[fi].descFin.length <= 0) {
                        delete data[fi];
                    }
                    if (eventdate < today_plus_one_day) {
                        delete data[fi]
                    }
                }
            }
            if ($rootScope.lang === "ru") {
                for (var ru in data) {
                    var time_data = (data[ru]['date'])
                    var replace_data = time_data.replace(/-/g,"/")
                    var slice_data = replace_data.slice(0, 10)
                    var eventdate = new Date(slice_data)
                    if (data[ru].descRus === null || data[ru].descRus === undefined || data[ru].descRus.length <= 0) {
                        delete data[ru];
                    }
                    if (eventdate < today_plus_one_day) {
                        delete data[ru]
                    }
                }
            }
            for (step = 0; step < 10; step++) {
                if (data[step] === null || data[step] === undefined || data[step].length <= 0) {
                    $scope.eventNavbar = true;
                    $scope.eventContainer = true;
                } else {
                    $scope.eventNavbar = false;
                    $scope.eventContainer = false;
                    break;
                }
            }
            data.sort(function(a,b){
                return (b.date < a.date) ? 1 : (b.date > a.date) ? -1 : 0;
            });
        },

        function (err) {
            console.log(err);
        }
    )
});
eventCtrl.filter('unique', function() {
    return function(collection, keyname) {
        var output = [],
            keys = [];

        angular.forEach(collection, function(item) {
            var key = item[keyname];
            if(keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    };
});

