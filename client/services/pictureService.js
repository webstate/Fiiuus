var pictureService = angular.module('pictureService', []);

pictureService.factory('pictureService', function($q, $timeout, $http, $location){
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

    function addBannerPicture(menuPosition, path){
        var d = $q.defer();
        $http.post('user/bannerpicture/add', {menuPosition:menuPosition, path: path}
        ).then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }

    function getBannerPicture(menuPosition){
        var d = $q.defer();
        $http.post('user/bannerpicture/get', {menuPosition:menuPosition}
        ).then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }

    /* BannerTitle Position */
    function addBannerTitlePosition(dbPosition, top, left){
        var d = $q.defer();
        $http.post('user/bannerpicture/title/add', {dbPosition: dbPosition, top: top, left: left}
        ).then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }

    function getBannerTitlePosition(dbPosition){
        var d = $q.defer();
        $http.post('user/bannerpicture/title/get', {dbPosition: dbPosition}
        ).then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    } /* End of BannerTitle Pos */

    function addMenuPicture(menuPosition, path, optPath){
        var d = $q.defer();
        $http.post('user/design/add', {menuPosition:menuPosition, path: path, optPath: optPath})
        .then(function(response){
            var data = response.data;
            d.resolve(data);
            console.log('DATA @ d.resolve PS', data); // REMOVE
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }

    function getMenuPicture(menuPosition){
        var d = $q.defer();
        if($location.url() === "/admin/design") {
            $http.post('user/design/get', { cache: false, menuPosition:menuPosition})
                .then(function(response){
                    var data = response.data;
                    d.resolve(data);
                }).catch(function(response){
                    var err = response.data;
                    d.reject(err);
                })
                return d.promise;
        } else {
            $http.post('user/design/get', { cache: true, menuPosition:menuPosition})
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

    return({
        saveImage:saveImage,
        addBannerPicture:addBannerPicture,
        getBannerPicture: getBannerPicture,
        addMenuPicture: addMenuPicture,
        getMenuPicture: getMenuPicture,
        getBannerTitlePosition: getBannerTitlePosition,
        addBannerTitlePosition: addBannerTitlePosition
    })
})
