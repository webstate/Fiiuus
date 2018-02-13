var pictureService = angular.module('pictureService', []);

pictureService.factory('pictureService', function($q, $timeout, $http){
    function saveImage(fd){
        var d = $q.defer();
        $http.post('user/picture/add', fd, {
            transformRequest: angular.identity,
            headers: {'Content-type': undefined}
        }).then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err=response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function addBannerPicture(path){
        var d = $q.defer();
        $http.post('user/bannerpicture/add', {picturePath: path}
        ).then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function getBannerPicture(){
        var d = $q.defer();
        $http.get('user/bannerpicture/get'
        ).then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function addMenuPicture(menuPosition, path){
        var d = $q.defer();
        $http.post('user/design/add', {menuPosition:menuPosition, path: path})
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    function getMenuPicture(menuPosition){
        var d = $q.defer();
        $http.post('user/design/get', {menuPosition:menuPosition})
        .then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    return({
        saveImage:saveImage,
        addBannerPicture:addBannerPicture,
        getBannerPicture: getBannerPicture,
        addMenuPicture: addMenuPicture,
        getMenuPicture: getMenuPicture
    })
})
