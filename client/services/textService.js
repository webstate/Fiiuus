var textService = angular.module('textService', []);

textService.factory('textService', function($q, $timeout, $http){
    function updateContent(category, title, text){
        var d = $q.defer();
        $http.post('user/texts/update', {category: category, title: title, text: text}
        ).then(function(response){
            var data = response.data;
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            d.reject(err);
        })
        return d.promise;
    }
    return({
        updateContent:updateContent
    })
})
