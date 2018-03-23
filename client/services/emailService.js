var emailService = angular.module('emailService', []);

emailService.factory('emailService', function($q, $http){
    return{
        sendFeedBack: sendFeedBack
    }
    function sendFeedBack(email, name, message, lang){
        var d = $q.defer();
        $http.get('drink/email/feedback', {
            name: name,
            email: email,
            message: message,
            lang: lang
        })
        .then(function(response){
            var data = response.data;
            console.log(data);
            d.resolve(data);
        }).catch(function(response){
            var err = response.data;
            console.log(err);
            d.reject(err);
        })
        return d.promise;

    }
})
