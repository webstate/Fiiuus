var modalDemoCtrl = angular.module('modalDemoCtrl', []);

modalDemoCtrl.controller('modalDemoCtrl', function($scope, $rootScope, $timeout){
    $scope.leftVisible = false;
    $scope.rightVisible = false;

    $scope.close = function() {
        $scope.showSideNav = false;
        $scope.leftVisible = false;
        $scope.rightVisible = false;
    };

    $scope.close_mobile = function() {
        $('body').css('overflow', 'scroll');
        $scope.showSideNav = false;
        $scope.leftVisible = false;
        $scope.rightVisible = false;
    }

    $scope.showLeft = function(e) {
        $('body').css('overflow', 'hidden');
        $scope.showSideNav = true;
        if($(e.currentTarget.childNodes[1]).hasClass('active-sandwich')){
            $scope.showSideNav = false;
            $timeout(function(){
                $scope.close_mobile();
                $scope.$apply();
            }, 100);
        }
        $scope.leftVisible = true;
        e.stopPropagation();
    };

    $(document)
    .on("click", "menu-item", function(){
        $('body').css({'overflow-x': 'hidden;', 'overflow-y': 'scroll'});
    })


    $scope.showRight = function(e) {
        $scope.rightVisible = true;
        e.stopPropagation();
    }

    $rootScope.$on("documentClicked", _close);
    $rootScope.$on("escapePressed", _close);

    function _close() {
        $scope.$apply(function() {
            $scope.close();
        });
    }
})
