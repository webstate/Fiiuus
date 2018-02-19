var bookingService = angular.module('bookingService', []);

bookingService.factory('bookingService', function($q, $http){
    return({
        addBooking: addBooking,
        getBookings: getBookings,
        addClosedTime: addClosedTime,
        getClosedTimes: getClosedTimes,
        validateBooking: validateBooking,
        deleteTime: deleteTime,
        deleteBooking: deleteBooking
    })
    function deleteBooking(id){
        var d = $q.defer();
        $http.post('booking/booking/delete', {
            id:id
        })
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function deleteTime(id){
        var d = $q.defer();
        $http.post('times/times/delete', {
            id:id
        })
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function addBooking(people, time, date, name, email, phone, lang, info, newsletter){
        var d = $q.defer();
        $http.post('booking/booking/add', {
            people: people,
            time: time,
            date: date,
            name: name,
            email: email,
            phone: phone,
            lang: lang,
            info: info,
            newsletter: newsletter
        })
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }

    function getBookings(){
        var d = $q.defer();
        $http.get('booking/booking/getall')
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function addClosedTime(date, start, end, reason){
        var d = $q.defer();
        $http.post('times/times/add', {
            date: date,
            start: start,
            end: end,
            reason: reason
        })
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function getClosedTimes(){
        var d = $q.defer();
        $http.get('times/times/get')
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function validateBooking(time,date){
        var d = $q.defer();
        $http.post('times/times/validate', {time: time, date:date})
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var data = response.data;
            d.reject(err);
        })
        return d.promise;
    }
})
