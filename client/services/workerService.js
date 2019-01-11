var workerService = angular.module('workerService', []);

workerService.factory('workerService', function($q, $timeout, $http, $location){
    function addWorker(name, occupationEst, email, infoEst, picture, infoEng, occupationEng,
        infoFin, occupationFin, infoRus, occupationRus){
        var d = $q.defer();
        $http.post('worker/add', {
            name: name,
            occupationEst: occupationEst,
            email: email,
            infoEst: infoEst,
            picture: picture,
            infoEng: infoEng,
            occupationEng: occupationEng,
            infoFin: infoFin,
            occupationFin: occupationFin,
            infoRus: infoRus,
            occupationRus: occupationRus,
        }
        ).then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function getWorkers(){
        var d = $q.defer();
        if($location.url() === "/admin/workers") {
            $http.get('worker/all', { cache: false })
            .then(function(response){
                var data = response.data;
                d.resolve(data);
            }).catch(function(response){
                var err = response.data;
                d.reject(err);
            })
            return d.promise;
        } else {
            $http.get('worker/all', { cache: true })
            .then(function(response){
                var data = response.data;
                d.resolve(data);
            }).catch(function(response){
                var err = response.data;
                d.reject(err);
            })
            return d.promise;
        }
    }
    function removeWorker(id){
        var d = $q.defer();
        $http.get('worker/worker/remove/'+id)
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function getWorkerById(id){
        var d = $q.defer();
        $http.post('worker/worker/getbyid', {id:id})
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function updateWorker(id, name, estPosition, email, infoEst, engPosition, engInfo, finPosition, finInfo, rusPosition, rusInfo, picture){
        var d = $q.defer();
        $http.post('worker/worker/update', {
            id:id,
            name:name,
            estPosition:estPosition,
            email: email,
            infoEst:infoEst,
            engPosition:engPosition,
            engInfo:engInfo,
            finPosition:finPosition,
            finInfo:finInfo,
            rusPosition:rusPosition,
            rusInfo:rusInfo,
            picture:picture
        }
        ).then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var data = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    return({
        addWorker:addWorker,
        getWorkers:getWorkers,
        removeWorker:removeWorker,
        getWorkerById: getWorkerById,
        updateWorker: updateWorker
    })
})
