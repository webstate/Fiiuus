var workerAdminController = angular.module('workerAdminController', []);

workerAdminController.controller('workerAdminController', function($scope, workerService, pictureService){
    $scope.workerModal = false;
    $scope.estModal = true;
    $scope.engModal = false;
    $scope.engEditModal = false;
    $scope.estEditModal = true;
    workerService.getWorkers().then(function(data){
        $scope.workers = data;
    }, function(err){
        console.log(err);
    })
    $scope.showModal = function(){
        $scope.workerModal = true;
    }
    $scope.hideModal = function(){
        $scope.workerModal = false;
    }
    $scope.filesChanged = function(elm){
        $scope.pictureElm = elm;
        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function(file){
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function(path){

            pictureService.compress().then(function() {
                if(path.indexOf('/')>=0 && path.indexOf('/') != -1){
                    var splitstr = path.split("/");
                } else {
                    var splitstr = path.split(/(\u005C)/g);
                }
                var correctPath = 'uploads/test/'+ splitstr[splitstr.length - 1];
                var optPath = 'uploads/compressed/'+ splitstr[splitstr.length - 1];
                // var added = new Date(Date.now()).toLocaleString();

                $scope.picture = correctPath;
                $scope.optPath = optPath;

                // $(".picture-holder").css({"background-image": "url(" + path + ")", "border": "none"});
                $(".picture-holder").css({"background-image": "url(" + optPath + ")", "border": "none"});
                // $(".picture-holder").css({"background-image": "url(" + picture + ")", "border": "none"});

            })
            // $scope.picture = path;

        }, function(err){
            console.log(err);
        })
    }

    /* Add new worker */
    $scope.submitWorker = function(){
        workerService.addWorker(
            $scope.worker.name,
            $scope.worker.occupationEst,
            $scope.worker.email,
            $scope.worker.infoEst,
            $scope.picture,
            $scope.optPath,
            $scope.worker.infoEng,
            $scope.worker.occupationEng,
            $scope.worker.infoFin,
            $scope.worker.occupationFin,
            $scope.worker.infoRus,
            $scope.worker.occupationRus)
            .then(function(data){
                $scope.worker = {};
                workerService.getWorkers().then(function(data){
                    $scope.workers = data;
                }, function(err){
                    console.log(err);
                })
            }, function(err){
                    console.log(err);
        })
    }

    $scope.removeWorker = function(id){
        workerService.removeWorker(id).then(function(data){
            workerService.getWorkers().then(function(data){
                $scope.workers = data;
            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        })
    }

    $scope.showEst = function(){

        $scope.estModal = true;
        $scope.engModal = false;
        $scope.finModal = false;
        $scope.rusModal = false;
    }

    $scope.showEng = function(){

        $scope.engModal = true;
        $scope.estModal = false;
        $scope.finModal = false;
        $scope.rusModal = false;
    }

    $scope.showFin = function(){

        $scope.finModal = true;
        $scope.engModal = false;
        $scope.estModal = false;
        $scope.rusModal = false;
    }
    $scope.showRus = function(){

        $scope.rusModal = true;
        $scope.finModal = false;
        $scope.engModal = false;
        $scope.estModal = false;
    }

    $scope.showEstEdit = function(){

        $scope.estEditModal = true;
        $scope.engEditModal = false;
        $scope.finEditModal = false;
        $scope.rusEditModal = false;
    }

    $scope.showEngEdit = function(){

        $scope.engEditModal = true;
        $scope.estEditModal = false;
        $scope.finEditModal = false;
        $scope.rusEditModal = false;
    }

    $scope.showFinEdit = function(){

        $scope.finEditModal = true;
        $scope.engEditModal = false;
        $scope.estEditModal = false;
        $scope.rusEditModal = false;
    }

    $scope.showRusEdit = function(){

        $scope.rusEditModal = true;
        $scope.finEditModal = false;
        $scope.engEditModal = false;
        $scope.estEditModal = false;
    }

    $scope.getWorker = function(id){
        $scope.workerModalEdit = true;
        workerService.getWorkerById(id).then(function(data){
            $scope.workerId = data._id;
            $scope.editNameEst = data.name;
            $scope.editOccupationEst = data.occupationEst;
            $scope.editEmail = data.email;
            $scope.editInfoEst = data.infoEst;
            $scope.editOccupationEng = data.occupationEng;
            $scope.editInfoEng = data.infoEng;
            $scope.editOccupationFin = data.occupationFin;
            $scope.editInfoFin = data.infoFin;
            $scope.editOccupationRus = data.occupationRus;
            $scope.editInfoRus = data.infoRus;
            $scope.picture = data.picture;
            $scope.optPath = data.optPath;
        })
    }
    $scope.updateWorker = function(){
        var name = "";
        var estOccupation = "";
        var email = "";
        var estInfo = "";
        var engOccupation = "";
        var engInfo = "";
        var finOccupation = "";
        var finInfo = "";
        var rusOccupation = "";
        var rusInfo = "";
        var picture = "";
        var optPath = "";

        estName = $scope.editNameEst;
        estOccupation = $scope.editOccupationEst;
        email = $scope.editEmail;
        estInfo = $scope.editInfoEst;
        engOccupation = $scope.editOccupationEng;
        engInfo = $scope.editInfoEng;
        finOccupation = $scope.editOccupationFin;
        finInfo = $scope.editInfoFin;
        rusOccupation = $scope.editOccupationRus;
        rusInfo = $scope.editInfoRus;
        picture = $scope.picture;
        optPath = $scope.optPath;

        if($scope.editNameEst === "{{nameEditEst}}"){
            estName = $scope.nameEditEst;
        }
        if($scope.editOccupationEst === "{{editOccupationEst}}"){
            estOccupation = $scope.editOccupationEst;
        }
        if($scope.editEmail === "{{editEmail}}"){
            email = $scope.editEmail;
        }
        if($scope.editInfoEst === "{{infoEditEst}}"){
            estInfo = $scope.descEstEdit
        }
        if($scope.editOccupationEng ==="{{editOccupationEng}}"){
            engOccupation = $scope.editOccupationEng;
        }
        if($scope.editInfoEng === "{{infoEditEng}}"){
            engInfo = $scope.infoEditEng;
        }
        if($scope.editOccupationFin ==="{{editOccupationFin}}"){
            finOccupation = $scope.editOccupationFin;
        }
        if($scope.editInfoFin === "{{infoEditFin}}"){
            finInfo = $scope.infoEditFin;
        }
        if($scope.editOccupationRus ==="{{editOccupationRus}}"){
            rusOccupation = $scope.editOccupationRus;
        }
        if($scope.editInfoRus === "{{infoEditRus}}"){
            rusInfo = $scope.infoEditRus;
        }

        workerService.updateWorker(
            $scope.workerId,
            estName,
            estOccupation,
            email,
            estInfo,
            engOccupation,
            engInfo,
            finOccupation,
            finInfo,
            rusOccupation,
            rusInfo,
            picture,
            optPath)
            .then(function(data){
            workerService.getWorkers({ cache: false }).then(function(data){
                $scope.workers = data;
            }, function(err){
                console.log(err);
            })
        })
    }
})
