var foodService = angular.module('foodService', []);

foodService.factory('foodService', function($q, $http){
    return{
        addFood: addFood,
        getFood: getFood,
        getStarters: getStarters,
        getKids: getKids,
        getMain: getMain,
        getDessert: getDessert,
        removeFood: removeFood,
        getFoodById: getFoodById,
        updateFood: updateFood
    }
    function getFoodById(id){
        var d = $q.defer();
        $http.get('food/food/byid/'+id)
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        })
        .catch(function(response){
            var err= response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function getStarters(){
        var d = $q.defer();
        $http.get('food/food/starters')
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function getMain(){
        var d = $q.defer();
        $http.get('food/food/main')
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function getDessert(){
        var d = $q.defer();
        $http.get('food/food/dessert')
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function getKids(){
        var d = $q.defer();
        $http.get('food/food/kids')
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function addFood(name, course, price, description, nameEng, descEng, nameFin, descFin, nameRus, descRus){
        var d = $q.defer();
        $http.post('food/food/add', {
            name: name,
            course:course,
            price:price,
            description: description,
            nameEng: nameEng,
            descEng: descEng,
            nameFin: nameFin,
            descFin: descFin,
            nameRus: nameRus,
            descRus: descRus
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
    function updateFood(id,name, course, price, description, nameEng, descEng, nameFin, descFin, nameRus, descRus){
        var d = $q.defer();
        $http.post('food/food/update', {
            id: id,
            name: name,
            course:course,
            price:price,
            description: description,
            nameEng: nameEng,
            descEng: descEng,
            nameFin: nameFin,
            descFin: descFin,
            nameRus: nameRus,
            descRus: descRus
        })
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err= response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function getFood(){
        var d = $q.defer();
        $http.get('food/food/all')
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }

    function removeFood(id){
        var d = $q.defer();
        $http.get('food/food/remove/'+id)
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
})
