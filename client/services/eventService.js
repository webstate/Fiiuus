var eventService = angular.module('eventService', []);

eventService.factory('eventService', function($q, $http, $location){
    return({
        addEvent: addEvent,
        getEvents: getEvents,
        deleteEvent: deleteEvent,
        // getNextEvents:getNextEvents,
        findByIdEvent:findByIdEvent,
        updateEvent: updateEvent

    })
    function addEvent(name, description, image, date, time, nameEng, descEng, imageEng, nameFin, descFin, imageFin, nameRus, descRus, imageRus){
        var d = $q.defer();
        $http.post('drink/event/add', {
            name: name,
            description: description,
            image: image,
            date: date,
            time: time,
            descEng: descEng,
            nameEng: nameEng,
            imageEng: imageEng,
            descFin: descFin,
            nameFin: nameFin,
            imageFin: imageFin,
            descRus: descRus,
            nameRus: nameRus,
            imageRus: imageRus
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
    function updateEvent(id, name, description, image, date, time, nameEng, descEng, imageEng, nameFin, descFin, imageFin, nameRus, descRus, imageRus){
        var d = $q.defer();
        $http.post('drink/event/update', {
            id: id,
            name: name,
            description: description,
            image: image,
            dateedited: date,
            timeedited: time,
            descEng: descEng,
            nameEng: nameEng,
            imageEng: imageEng,
            descFin: descFin,
            nameFin: nameFin,
            imageFin: imageFin,
            descRus: descRus,
            nameRus: nameRus,
            imageRus: imageRus
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
    function getEvents(){
        var d = $q.defer();
        if($location.url() === "/admin/event") {
            $http.get('food/event/get', { cache: false })
            // .then(console.log('Cache false in get e', ))
            .then(function(response){
                var data = response.data;
                d.resolve(data);
            }).catch(function(response){
                var err = response.data;
                d.reject(err);
            })// initializes slick and its properties
                .then(function () {
                setTimeout(function(){
                    $('.slickinit').not('.slick-initialized').slick({
                        slidesToShow: 1,
                        adaptiveHeight: true,
                        arrows: true,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 10000,
                        infinite: true,
                        accessibility:true
                    });

                },500);
            })
            return d.promise;
        } else {
            $http.get('food/event/get', { cache: true })
            // .then(console.log('Cache true in get e', ))
            .then(function(response){
                var data = response.data;
                d.resolve(data);
            }).catch(function(response){
                var err = response.data;
                d.reject(err);
            })// initializes slick and its properties
                .then(function () {
                setTimeout(function(){
                    $('.slickinit').not('.slick-initialized').slick({
                        slidesToShow: 1,
                        adaptiveHeight: true,
                        arrows: true,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 10000,
                        infinite: true,
                        accessibility:true
                    });

                },500);
            })
            return d.promise;
        }

    }

    /* Calls event banner - is it used at all? */
    // function getNextEvents(){
    //     var d = $q.defer();
    //     if($location.url() === "/admin/event") {
    //         $http.get('food/event/getnext', { cache: false })
    //         .then(function(response){
    //             var data = response.data;
    //             d.resolve(data);
    //         }).catch(function(response){
    //             var err = response.data;
    //             d.reject(err);
    //         })
    //         return d.promise;
    //     } else {
    //         $http.get('food/event/getnext', { cache: true })
    //         .then(function(response){
    //             var data = response.data;
    //             d.resolve(data);
    //         }).catch(function(response){
    //             var err = response.data;
    //             d.reject(err);
    //         })
    //         return d.promise;
    //     }
    // }

    function findByIdEvent(id){
        var d = $q.defer();
        $http.post('food/event/findbyid', {id:id})
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function deleteEvent(id){
        var d = $q.defer();
        $http.post('food/event/delete/'+id, { cache: false })
        .then(function(response){
            var data  = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
});

