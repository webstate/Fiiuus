var designViewController = angular.module('designViewController', []);

designViewController.controller('designViewController', function ($scope, pictureService, landingTextService, $timeout, $rootScope) {
    $scope.activeTab = 'est';
    $scope.changeActiveTab = function (item) {
        $scope.activeTab = item;
    }
    $scope.estDesign = true;
    $scope.engDesign = false;
    $scope.finDesign = false;
    $scope.rusDesign = false;

    $scope.changeEng = function () {
        $scope.estDesign = false;
        $scope.engDesign = true;
        $scope.finDesign = false;
        $scope.rusDesign = false;
    }

    $scope.changeEst = function () {
        $scope.estDesign = true;
        $scope.engDesign = false;
        $scope.finDesign = false;
        $scope.rusDesign = false;
    }

    $scope.changeFin = function () {
        $scope.finDesign = true;
        $scope.estDesign = false;
        $scope.engDesign = false;
        $scope.rusDesign = false;
    }

    $scope.changeRus = function () {
        $scope.finDesign = false;
        $scope.estDesign = false;
        $scope.engDesign = false;
        $scope.rusDesign = true;
    }



    // LANDING PAGE ESTONIAN VERSION

    landingTextService.getLandingText("bannerTitleEst", "ee").then(function (data) {
        if (data.text == null || data.text == undefined) {
            $scope.bannerTitleEst = "Nothing here";
        }
        $timeout(function() {
            $scope.bannerTitleEst = data.text;
        }, 200);
        var estb = data.text;
        $scope.estb = estb;
    })

    $scope.insertBannerTitleEst = function () {
        var update = "";
        update = $scope.bannerTitleEst;
        if ($scope.bannerTitleEst === "editBannerTitleEst") {
            update = $scope.editBannerTitleEst;
        }
        landingTextService.addOrUpdateLandingText("bannerTitleEst", update, "ee").then(function (data) {
            landingTextService.getLandingText("bannerTitleEst", "ee").then(function (data) {
                if (data.text == null || data.text == undefined) {
                    $scope.bannerTitleEst = "Nothing here";
                }
                $scope.bannerTitleEst = data.text;
            }, function (err) {
                console.log(err);
            })
        });

        if ($scope.mydiv) {
            var top;
            var left;
            top = $scope.mydiv.top;
            left = $scope.mydiv.left;
            pictureService.addBannerTitlePosition("bannerTitlePositionEst", top, left).then(function (data) {
            }), function (err) {
                console.log(err);
            }
            // pictureService.getBannerTitlePosition();
        } else {
            console.log('There is no myDiv', ); // REMOVE
        }

    }

    landingTextService.getLandingText("aboutTitleEst", "ee").then(function (data) {
        if (data.text == null) {
            $scope.aboutTitleEst = "There is nothing yet inserted";

        } else {
            $scope.aboutTitleEst = data.text;
        }
    }, function (err) {
        console.log(err);
    })

    $scope.insertAboutTitleEst = function () {
        var update = "";
        update = $scope.aboutTitleEst;
        if ($scope.aboutTitleEst === "{{ editAboutTitleEst }}") {
            update = $scope.editAboutTitleEst;
        }
        landingTextService.addOrUpdateLandingText("aboutTitleEst", update, "ee").then(function (data) {
            landingTextService.getLandingText("aboutTitleEst", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.aboutTitleEst = "Nothing here";
                }
                $scope.aboutTitleEst = data.text;
            })
        });
    }

    landingTextService.getLandingText("workerTitle", "ee").then(function (data) {
        if (data.text == null) {
            $scope.workerTitle = "There is nothing yet inserted";

        } else {
            $scope.workerTitle = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertWorkerTitle = function () {
        var update = "";
        update = $scope.workerTitle;
        if ($scope.workerTitle === "{{editWorkerTitle}}") {
            update = $scope.editWorkerTitle;
        }
        landingTextService.addOrUpdateLandingText("workerTitle", update, "ee").then(function (data) {
            landingTextService.getLandingText("workerTitle", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.workerTitle = "Nothing here";
                }
                $scope.workerTitle = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerTitle.title', function(val){
        landingTextService.addOrUpdateLandingText("workerTitle", val, "ee");
    })
    */

    landingTextService.getLandingText("workerText", "ee").then(function (data) {
        if (data.text == null) {
            $scope.workerText = "There is nothing yet inserted";
        } else {
            $scope.workerText = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertWorkerText = function () {
        var update = "";
        update = $scope.workerText;
        if ($scope.workerText === "{{editWorkerText}}") {
            update = $scope.editWorkerText;
        }
        landingTextService.addOrUpdateLandingText("workerText", update, "ee").then(function (data) {
            landingTextService.getLandingText("workerText", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.workerText = "Nothing here";
                }
                $scope.workerText = data.text;
            })
        });
    }
    /*
    $scope.$watch('worker.text', function(val){
        landingTextService.addOrUpdateLandingText("workerText", val, "ee");
    })
    */

    /*Controller for changing the course title*/

    landingTextService.getLandingText("courseTitleStarter", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleStarter = "There is nothing yet inserted";
        } else {
            $scope.courseTitleStarter = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleStarter = function () {
        var update = "";
        update = $scope.courseTitleStarter;
        if ($scope.courseTitle === "{{editCourseTitleStarter}}") {
            update = $scope.editCourseTitleStarter;
        }
        landingTextService.addOrUpdateLandingText("courseTitleStarter", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleStarter", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleStarter = "Nothing here";
                }
                $scope.courseTitleStarter = data.text;
            })
        });
    }

    landingTextService.getLandingText("courseTitleDrinks", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleDrinks = "There is nothing yet inserted";
        } else {
            $scope.courseTitleDrinks = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleDrinks = function () {
        var update = "";
        update = $scope.courseTitleDrinks;
        if ($scope.courseTitle === "{{editCourseTitleDrinks}}") {
            update = $scope.editCourseTitleDrinks;
        }
        landingTextService.addOrUpdateLandingText("courseTitleDrinks", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleDrinks", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleDrinks = "Nothing here";
                }
                $scope.courseTitleDrinks = data.text;
            })
        });
    }

    landingTextService.getLandingText("courseTitleKids", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleKids = "There is nothing yet inserted";
        } else {
            $scope.courseTitleKids = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleKids = function () {
        var update = "";
        update = $scope.courseTitleKids;
        if ($scope.courseTitle === "{{editCourseTitleKids}}") {
            update = $scope.editCourseTitleKids;
        }
        landingTextService.addOrUpdateLandingText("courseTitleKids", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleKids", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleKids = "Nothing here";
                }
                $scope.courseTitleKids = data.text;
            })
        });
    }

    landingTextService.getLandingText("courseTitleMain", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleMain = "There is nothing yet inserted";
        } else {
            $scope.courseTitleMain = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleMain = function () {
        var update = "";
        update = $scope.courseTitleMain;
        if ($scope.courseTitle === "{{editCourseTitleMain}}") {
            update = $scope.editCourseTitleMain;
        }
        landingTextService.addOrUpdateLandingText("courseTitleMain", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleMain", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleMain = "Nothing here";
                }
                $scope.courseTitleMain = data.text;
            })
        });
    }
    landingTextService.getLandingText("courseTitleDessert", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleDessert = "There is nothing yet inserted";
        } else {
            $scope.courseTitleDessert = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleDessert = function () {
        var update = "";
        update = $scope.courseTitleDessert;
        if ($scope.courseTitle === "{{editCourseTitleDessert}}") {
            update = $scope.editCourseTitleDessert;
        }
        landingTextService.addOrUpdateLandingText("courseTitleDessert", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleDessert", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleDessert = "Nothing here";
                }
                $scope.courseTitleDessert = data.text;
            })
        });
    }

    landingTextService.getLandingText("menuSectionSubTitleEst", "ee").then(function (data) {
        if (data.text == null) {
            $scope.menuSectionSubTitleEst = "There is nothing yet inserted";
        } else {
            $scope.menuSectionSubTitleEst = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertMenuSectionSubTitleEst = function () {
        var update = "";
        update = $scope.menuSectionSubTitleEst;
        if ($scope.menuSectionSubTitleEst === "{{editMenuSectionSubTitleEst}}") {
            update = $scope.editMenuSectionSubTitleEst;
        }
        landingTextService.addOrUpdateLandingText("menuSectionSubTitleEst", update, "ee").then(function (data) {
            landingTextService.getLandingText("menuSectionSubTitleEst", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.menuSectionSubTitleEst = "Nothing here";
                }
                $scope.menuSectionSubTitleEst = data.text;
            })
        });
    }


    landingTextService.getLandingText("menuTitle", "ee").then(function (data) {
        if (data.text == null) {
            $scope.menuTitle = "There is nothing yet inserted";
        } else {
            $scope.menuTitle = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertMenuTitle = function () {
        var update = "";
        update = $scope.menuTitle;
        if ($scope.menuTitle === "{{editMenuTitle}}") {
            update = $scope.editMenuTitle;
        }
        landingTextService.addOrUpdateLandingText("menuTitle", update, "ee").then(function (data) {
            landingTextService.getLandingText("menuTitle", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.menuTitle = "Nothing here";
                }
                $scope.menuTitle = data.text;
            })
        });
    }

    /* $scope.$watch('menuTitle.title', function(val){
        landingTextService.addOrUpdateLandingText("menuTitle", val, "ee");
    })
    */

    landingTextService.getLandingText("menuText", "ee").then(function (data) {
        if (data.text == null) {
            $scope.menuText = "There is nothing yet inserted";
        } else {
            $scope.menuText = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertMenuText = function () {
        var update = "";
        update = $scope.menuText;
        if ($scope.menuText === "{{editMenuText}}") {
            update = $scope.editMenuText;
        }
        landingTextService.addOrUpdateLandingText("menuText", update, "ee").then(function (data) {
            landingTextService.getLandingText("menuText", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.menuText = "Nothing here";
                }
                $scope.menuText = data.text;
            })
        });
    }
    /*
    $scope.$watch('menuText.text', function(val){
        landingTextService.addOrUpdateLandingText("menuText", val, "ee");
    })
    */

    /* Est Tasting Heading */
    landingTextService.getLandingText("tastingHeadingEst", "ee").then(function (data) {
        if (data.text == null) {
            $scope.tastingHeadingEst = "Nothing here";
        } else {
            $scope.tastingHeadingEst = data.text;
        }
    }, function (err) {
        console.log(err);
    })

    $scope.insertTastingHeadingEst = function () {
        var update = "";
        update = $scope.tastingHeadingEst;
        if ($scope.tastingHeadingEst === "{{editTastingHeadingEst}}") {
            update = $scope.editTastingHeadingEst;
        }
        landingTextService.addOrUpdateLandingText("tastingHeadingEst", update, "ee").then(function (data) {
            landingTextService.getLandingText("tastingHeadingEst", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.tastingHeadingEst = "Nothing here";
                }
                $scope.tastingHeadingEst = data.text;
            })
        });
    }

    landingTextService.getLandingText("tastingText", "ee").then(function (data) {
        if (data.text == null) {
            $scope.tastingText = "There is nothing yet inserted";
        } else {
            $scope.tastingText = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertTastingText = function () {
        var update = "";
        update = $scope.tastingText;
        if ($scope.tastingText === "{{editTastingText}}") {
            update = $scope.editTastingText;
        }
        landingTextService.addOrUpdateLandingText("tastingText", update, "ee").then(function (data) {
            landingTextService.getLandingText("tastingText", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.tastingText = "Nothing here";
                }
                $scope.tastingText = data.text;
            })
        });
    }
    /*
    $scope.$watch('tastingText.text', function(val){
        landingTextService.addOrUpdateLandingText("tastingText", val, "ee");
    })
    */

    /* Est groupMenuButton */
    landingTextService.getLandingText("groupMenuButtonEst", "ee").then(function (data) {
        if (data.text == null) {
            $scope.groupMenuButtonEst = "Nothing here";
        }
        $scope.groupMenuButtonEst = data.text;
    })

    $scope.insertGroupMenuButtonEst = function () {
        var update = "";
        update = $scope.groupMenuButtonEst;
        if ($scope.groupMenuButtonEst === "{{editGroupMenuButtonEst}}") {
            update = $scope.editGroupMenuButtonEst;
        }
        landingTextService.addOrUpdateLandingText("groupMenuButtonEst", update, "ee").then(function (data) {
            landingTextService.getLandingText("groupMenuButtonEst", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.groupMenuButtonEst = "Nothing here";
                }
                $scope.groupMenuButtonEst = data.text;
            })
        });
    }

    landingTextService.getLandingText("eventTitle", "ee").then(function (data) {
        if (data.text == null) {
            $scope.eventTitle = "There is nothing yet inserted";
        } else {
            $scope.eventTitle = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertEventTitle = function () {
        var update = "";
        update = $scope.eventTitle;
        if ($scope.eventTitle === "{{editEventTitle}}") {
            update = $scope.editEventTitle;
        }
        landingTextService.addOrUpdateLandingText("eventTitle", update, "ee").then(function (data) {
            landingTextService.getLandingText("eventTitle", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.eventTitle = "Nothing here";
                }
                $scope.eventTitle = data.text;
            })
        });
    }

    /*
    $scope.$watch('eventTitle.title', function(val){
        landingTextService.addOrUpdateLandingText("eventTitle", val, "ee");
    })
    */

    landingTextService.getLandingText("contactSubTitleEst", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactSubTitleEst = "There is nothing yet inserted";
        } else {
            $scope.contactSubTitleEst = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactSubTitleEst = function () {
        var update = "";
        update = $scope.contactSubTitleEst;
        if ($scope.contactSubTitleEst === "{{editContactSubTitleEst}}") {
            update = $scope.editContactSubTitleEst;
        }
        landingTextService.addOrUpdateLandingText("contactSubTitleEst", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactSubTitleEst", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactSubTitleEst = "Nothing here";
                }
                $scope.contactSubTitleEst = data.text;
            })
        });
    }

    /*
    landingTextService.getLandingText("contactCall", "ee").then(function(data){
        if(data.text == null){
            $scope.contactCall = "There is nothing yet inserted";
        }else{
            $scope.contactCall = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })*/

    landingTextService.getLandingText("contactCallEst", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactCallEst = "There is nothing yet inserted";
        } else {
            $scope.contactCallEst = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactCallEst = function () {
        var update = "";
        update = $scope.contactCallEst;
        if ($scope.contactCallEst === "{{editContactCallEst}}") {
            update = $scope.editContactCallEst;
        }
        landingTextService.addOrUpdateLandingText("contactCallEst", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactCallEst", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactCallEst = "Nothing here";
                }
                $scope.contactCallEst = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactCall.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCall", val, "ee");
    })
    */
    /*
    $scope.$watch('contactCallEst.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCallEst", val, "ee");
    })
    */

    landingTextService.getLandingText("contactVisitEst", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactVisitEst = "There is nothing yet inserted";
        } else {
            $scope.contactVisitEst = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactVisitEst = function () {
        var update = "";
        update = $scope.contactVisitEst;
        if ($scope.contactVisitEst === "{{editContactVisitEst}}") {
            update = $scope.editContactVisitEst;
        }
        landingTextService.addOrUpdateLandingText("contactVisitEst", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactVisitEst", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactVisitEst = "Nothing here";
                }
                $scope.contactVisitEst = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactVisitEst.text', function(val){
        landingTextService.addOrUpdateLandingText("contactVisitEst", val, "ee");
    })
    */

    landingTextService.getLandingText("contactEmailEst", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactEmailEst = "There is nothing yet inserted";
        } else {
            $scope.contactEmailEst = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactEmailEst = function () {
        var update = "";
        update = $scope.contactEmailEst;
        if ($scope.contactEmailEst === "{{editContactEmailEst}}") {
            update = $scope.editContactEmailEst;
        }
        landingTextService.addOrUpdateLandingText("contactEmailEst", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactEmailEst", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactEmailEst = "Nothing here";
                }
                $scope.contactEmailEst = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactEmailEst.text', function(val){
        landingTextService.addOrUpdateLandingText("contactEmailEst", val, "ee");
    })
    */


    landingTextService.getLandingText("contactTimeWorkWeek", "ee").then(function (data) {
        if (data.text == null) {
            $scope.workWeekTime = "Nothing here";
        }
        $scope.workWeekTime = data.text;
    })
    $scope.insertWorkWeek = function () {
        var update = "";
        update = $scope.workWeekTime;
        if ($scope.workWeekTime === "{{editWorkWeekTime}}") {
            update = $scope.editWorkWeekTime;
        }
        landingTextService.addOrUpdateLandingText("contactTimeWorkWeek", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactTimeWorkWeek", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.workWeekTime = "Nothing here";
                }
                $scope.workWeekTime = data.text;
            })
        });
    }

    // landingTextService.getLandingText("contactTimeWeekend", "ee").then(function (data) {
    //     if (data.text == null) {
    //         $scope.weekendTime = "Nothing here";
    //     }
    //     $scope.weekendTime = data.text;
    // })
    // $scope.insertWeekend = function () {
    //     var update = "";
    //     update = $scope.weekendTime;
    //     if ($scope.weekendTime === "{{editWeekendTime}}") {
    //         update = $scope.editWeekendTime;
    //     }
    //     landingTextService.addOrUpdateLandingText("contactTimeWeekend", update, "ee").then(function (data) {
    //         landingTextService.getLandingText("contactTimeWeekend", "ee").then(function (data) {
    //             if (data.text == null) {
    //                 $scope.weekendTime = "Nothing here";
    //             }
    //             $scope.weekendTime = data.text;
    //         })
    //     });
    // }
    // //
    // landingTextService.getLandingText("contactWeekend", "ee").then(function (data) {
    //     if (data.text == null) {
    //         $scope.contactWeekend = "There is nothing yet inserted";
    //     } else {
    //         $scope.contactWeekend = data.text;
    //     }
    // }, function (err) {
    //     console.log(err);
    // })
    // $scope.insertContactWeekend = function () {
    //     var update = "";
    //     update = $scope.contactWeekend;
    //     if ($scope.contactWeekend === "{{editContactWeekend}}") {
    //         update = $scope.editContactWeekend;
    //     }
    //     landingTextService.addOrUpdateLandingText("contactWeekend", update, "ee").then(function (data) {
    //         landingTextService.getLandingText("contactWeekend", "ee").then(function (data) {
    //             if (data.text == null) {
    //                 $scope.contactWeekend = "Nothing here";
    //             }
    //             $scope.contactWeekend = data.text;
    //         })
    //     });
    // }
    landingTextService.getLandingText("contactDays", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactDays = "There is nothing yet inserted";
        } else {
            $scope.contactDays = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactDays = function () {
        var update = "";
        update = $scope.contactDays;
        if ($scope.contactDays === "{{editContactDays}}") {
            update = $scope.editContactDays;
        }
        landingTextService.addOrUpdateLandingText("contactDays", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactDays", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactDays = "Nothing here";
                }
                $scope.contactDays = data.text;
            })
        });
    }




    // LANDING PAGE ENGLISH VERSION

    landingTextService.getLandingText("bannerTitleEng", "ee").then(function (data) {
        if (data.text == null || data.text == undefined) {
            $scope.bannerTitleEng = "Nothing here";
        }
        $timeout(function() {
            $scope.bannerTitleEng = data.text;
        }, 200);
        var engb = data.text;
        $scope.engb = engb;
    })

    $scope.insertBannerTitleEng = function () {
        var update = "";
        update = $scope.bannerTitleEng;
        if ($scope.bannerTitleEng === "editBannerTitleEng") {
            update = $scope.editBannerTitleEng;
        }
        landingTextService.addOrUpdateLandingText("bannerTitleEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("bannerTitleEng", "ee").then(function (data) {
                if (data.text == null || data.text == undefined) {
                    $scope.bannerTitleEng = "Nothing here";
                }
                $scope.bannerTitleEng = data.text;
            }, function (err) {
                console.log(err);
            })
        });

        if ($scope.mydiv) {
            var top;
            var left;
            top = $scope.mydiv.top;
            left = $scope.mydiv.left;
            pictureService.addBannerTitlePosition("bannerTitlePositionEng", top, left).then(function (data) {
            }), function (err) {
                console.log(err);
            }
            // pictureService.getBannerTitlePosition();
        } else {
            console.log('There is no myDiv', ); // REMOVE
        }

    }


    landingTextService.getLandingText("aboutTitleEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.aboutTitleEng = "There is nothing yet inserted";

        } else {
            $scope.aboutTitleEng = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertAboutTitleEng = function () {
        var update = "";
        update = $scope.aboutTitleEng;
        if ($scope.aboutTitleEng === "{{editAboutTitleEng}}") {
            update = $scope.editAboutTitleEng;
        }
        landingTextService.addOrUpdateLandingText("aboutTitleEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("aboutTitleEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.aboutTitleEng = "Nothing here";
                }
                $scope.aboutTitleEng = data.text;
            })
        });
    }

    landingTextService.getLandingText("workerTitleEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.workerTitleEng = "There is nothing yet inserted";

        } else {
            $scope.workerTitleEng = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertWorkerTitleEng = function () {
        var update = "";
        update = $scope.workerTitleEng;
        if ($scope.workerTitleEng === "{{editWorkerTitleEng}}") {
            update = $scope.editWorkerTitleEng;
        }
        landingTextService.addOrUpdateLandingText("workerTitleEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("workerTitleEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.workerTitleEng = "Nothing here";
                }
                $scope.workerTitleEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerTitleEng.title', function(val){
        landingTextService.addOrUpdateLandingText("workerTitleEng", val, "ee");
    })*/

    landingTextService.getLandingText("workerTextEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.workerTextEng = "There is nothing yet inserted";
        } else {
            $scope.workerTextEng = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertWorkerTextEng = function () {
        var update = "";
        update = $scope.workerTextEng;
        if ($scope.workerTextEng === "{{editWorkerTextEng}}") {
            update = $scope.editWorkerTextEng;
        }
        landingTextService.addOrUpdateLandingText("workerTextEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("workerTextEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.workerTextEng = "Nothing here";
                }
                $scope.workerTextEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerEng.text', function(val){
        landingTextService.addOrUpdateLandingText("workerTextEng", val, "ee");
    })*/

    landingTextService.getLandingText("courseTitleStarterEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleStarterEng = "There is nothing yet inserted";
        } else {
            $scope.courseTitleStarterEng = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleStarterEng = function () {
        var update = "";
        update = $scope.courseTitleStarterEng;
        if ($scope.courseTitle === "{{editCourseTitleStarterEng}}") {
            update = $scope.editCourseTitleStarterEng;
        }
        landingTextService.addOrUpdateLandingText("courseTitleStarterEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleStarterEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleStarterEng = "Nothing here";
                }
                $scope.courseTitleStarterEng = data.text;
            })
        });
    }

    landingTextService.getLandingText("courseTitleDrinksEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleDrinksEng = "There is nothing yet inserted";
        } else {
            $scope.courseTitleDrinksEng = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleDrinksEng = function () {
        var update = "";
        update = $scope.courseTitleDrinksEng;
        if ($scope.courseTitle === "{{editCourseTitleDrinksEng}}") {
            update = $scope.editCourseTitleDrinksEng;
        }
        landingTextService.addOrUpdateLandingText("courseTitleDrinksEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleDrinksEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleDrinksEng = "Nothing here";
                }
                $scope.courseTitleDrinksEng = data.text;
            })
        });
    }

    landingTextService.getLandingText("courseTitleKidsEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleKidsEng = "There is nothing yet inserted";
        } else {
            $scope.courseTitleKidsEng = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleKidsEng = function () {
        var update = "";
        update = $scope.courseTitleKidsEng;
        if ($scope.courseTitle === "{{editCourseTitleKidsEng}}") {
            update = $scope.editCourseTitleKidsEng;
        }
        landingTextService.addOrUpdateLandingText("courseTitleKidsEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleKidsEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleKidsEng = "Nothing here";
                }
                $scope.courseTitleKidsEng = data.text;
            })
        });
    }


    landingTextService.getLandingText("courseTitleMainEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleMainEng = "There is nothing yet inserted";
        } else {
            $scope.courseTitleMainEng = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleMainEng = function () {
        var update = "";
        update = $scope.courseTitleMainEng;
        if ($scope.courseTitle === "{{editCourseTitleMainEng}}") {
            update = $scope.editCourseTitleMainEng;
        }
        landingTextService.addOrUpdateLandingText("courseTitleMainEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleMainEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleMainEng = "Nothing here";
                }
                $scope.courseTitleMainEng = data.text;
            })
        });
    }
    landingTextService.getLandingText("courseTitleDessertEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleDessertEng = "There is nothing yet inserted";
        } else {
            $scope.courseTitleDessertEng = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleDessertEng = function () {
        var update = "";
        update = $scope.courseTitleDessertEng;
        if ($scope.courseTitle === "{{editCourseTitleDessertEng}}") {
            update = $scope.editCourseTitleDessertEng;
        }
        landingTextService.addOrUpdateLandingText("courseTitleDessertEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleDessertEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleDessertEng = "Nothing here";
                }
                $scope.courseTitleDessertEng = data.text;
            })
        });
    }

    landingTextService.getLandingText("menuSectionSubTitleEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.menuSectionSubTitleEng = "There is nothing yet inserted";
        } else {
            $scope.menuSectionSubTitleEng = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertMenuSectionSubTitleEng = function () {
        var update = "";
        update = $scope.menuSectionSubTitleEng;
        if ($scope.menuSectionSubTitleEng === "{{editMenuSectionSubTitleEng}}") {
            update = $scope.editMenuSectionSubTitleEng;
        }
        landingTextService.addOrUpdateLandingText("menuSectionSubTitleEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("menuSectionSubTitleEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.menuSectionSubTitleEng = "Nothing here";
                }
                $scope.menuSectionSubTitleEng = data.text;
            })
        });
    }


    landingTextService.getLandingText("menuTitleEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.menuTitleEng = "There is nothing yet inserted";
        } else {
            $scope.menuTitleEng = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertMenuTitleEng = function () {
        var update = "";
        update = $scope.menuTitleEng;
        if ($scope.menuTitleEng === "{{editMenuTitleEng}}") {
            update = $scope.editMenuTitleEng;
        }
        landingTextService.addOrUpdateLandingText("menuTitleEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("menuTitleEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.menuTitleEng = "Nothing here";
                }
                $scope.menuTitleEng = data.text;
            })
        });
    }
    /*$scope.$watch('menuTitleEng.title', function(val){
        landingTextService.addOrUpdateLandingText("menuTitleEng", val, "ee");
    })*/

    landingTextService.getLandingText("menuTextEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.menuTextEng = "There is nothing yet inserted";
        } else {
            $scope.menuTextEng = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertMenuTextEng = function () {
        var update = "";
        update = $scope.menuTextEng;
        if ($scope.menuTextEng === "{{editMenuTextEng}}") {
            update = $scope.editMenuTextEng;
        }
        landingTextService.addOrUpdateLandingText("menuTextEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("menuTextEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.menuTextEng = "Nothing here";
                }
                $scope.menuTextEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('menuTextEng.text', function(val){
        landingTextService.addOrUpdateLandingText("menuTextEng", val, "ee");
    })*/


    /* Eng Tasting Heading */
    landingTextService.getLandingText("tastingHeadingEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.tastingHeadingEng = "Nothing here";
        } else {
            $scope.tastingHeadingEng = data.text;
        }
    }, function (err) {
        console.log(err);
    })

    $scope.insertTastingHeadingEng = function () {
        var update = "";
        update = $scope.tastingHeadingEng;
        if ($scope.tastingHeadingEng === "{{editTastingHeadingEng}}") {
            update = $scope.editTastingHeadingEng;
        }
        landingTextService.addOrUpdateLandingText("tastingHeadingEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("tastingHeadingEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.tastingHeadingEng = "Nothing here";
                }
                $scope.tastingHeadingEng = data.text;
            })
        });
    }


    landingTextService.getLandingText("tastingTextEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.tastingTextEng = "There is nothing yet inserted";
        } else {
            $scope.tastingTextEng = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertTastingTextEng = function () {
        var update = "";
        update = $scope.tastingTextEng;
        if ($scope.tastingTextEng === "{{editTastingTextEng}}") {
            update = $scope.editTastingTextEng;
        }
        landingTextService.addOrUpdateLandingText("tastingTextEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("tastingTextEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.tastingTextEng = "Nothing here";
                }
                $scope.tastingTextEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('tastingTextEng.text', function(val){
        landingTextService.addOrUpdateLandingText("tastingTextEng", val, "ee");
    })*/

    landingTextService.getLandingText("groupMenuButtonEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.groupMenuButtonEng = "Nothing here";
        }
        $scope.groupMenuButtonEng = data.text;
    })

    $scope.insertGroupMenuButtonEng = function () {
        var update = "";
        update = $scope.groupMenuButtonEng;
        if ($scope.groupMenuButtonEng === "{{editGroupMenuButtonEng}}") {
            update = $scope.editGroupMenuButtonEng;
        }
        landingTextService.addOrUpdateLandingText("groupMenuButtonEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("groupMenuButtonEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.groupMenuButtonEng = "Nothing here";
                }
                $scope.groupMenuButtonEng = data.text;
            })
        });
    }

    landingTextService.getLandingText("eventTitleEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.eventTitleEng = "There is nothing yet inserted";
        } else {
            $scope.eventTitleEng = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertEventTitleEng = function () {
        var update = "";
        update = $scope.eventTitleEng;
        if ($scope.eventTitleEng === "{{editEventTitleEng}}") {
            update = $scope.editEventTitleEng;
        }
        landingTextService.addOrUpdateLandingText("eventTitleEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("eventTitleEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.eventTitleEng = "Nothing here";
                }
                $scope.eventTitleEng = data.text;
            })
        });
    }

    /*
    $scope.$watch('eventTitleEng.title', function(val){
        landingTextService.addOrUpdateLandingText("eventTitleEng", val, "ee");
    })*/

    landingTextService.getLandingText("contactSubTitleEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactSubTitleEng = "There is nothing yet inserted";
        } else {
            $scope.contactSubTitleEng = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactSubTitleEng = function () {
        var update = "";
        update = $scope.contactSubTitleEng;
        if ($scope.contactSubTitleEng === "{{editContactSubTitleEng}}") {
            update = $scope.editContactSubTitleEng;
        }
        landingTextService.addOrUpdateLandingText("contactSubTitleEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactSubTitleEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactSubTitleEng = "Nothing here";
                }
                $scope.contactSubTitleEng = data.text;
            })
        });
    }

    landingTextService.getLandingText("contactCallEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactCallEng = "There is nothing yet inserted";
        } else {
            $scope.contactCallEng = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactCallEng = function () {
        var update = "";
        update = $scope.contactCallEng;
        if ($scope.contactCallEng === "{{editContactCallEng}}") {
            update = $scope.editContactCallEng;
        }
        landingTextService.addOrUpdateLandingText("contactCallEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactCallEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactCallEng = "Nothing here";
                }
                $scope.contactCallEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactCallEng.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCallEng", val, "ee");
    })*/

    landingTextService.getLandingText("contactVisitEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactVisitEng = "There is nothing yet inserted";
        } else {
            $scope.contactVisitEng = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactVisitEng = function () {
        var update = "";
        update = $scope.contactVisitEng;
        if ($scope.contactVisitEng === "{{editContactVisitEng}}") {
            update = $scope.editContactVisitEng;
        }
        landingTextService.addOrUpdateLandingText("contactVisitEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactVisitEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactVisitEng = "Nothing here";
                }
                $scope.contactVisitEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactVisitEng.text', function(val){
        landingTextService.addOrUpdateLandingText("contactVisitEng", val, "ee");
    })*/

    landingTextService.getLandingText("contactEmailEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactEmailEng = "There is nothing yet inserted";
        } else {
            $scope.contactEmailEng = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactEmailEng = function () {
        var update = "";
        update = $scope.contactEmailEng;
        if ($scope.contactEmailEst === "{{editContactEmailEng}}") {
            update = $scope.editContactEmailEng;
        }
        landingTextService.addOrUpdateLandingText("contactEmailEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactEmailEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactEmailEng = "Nothing here";
                }
                $scope.contactEmailEng = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactEmailEng.text', function(val){
        landingTextService.addOrUpdateLandingText("contactEmailEng", val, "ee");
    })*/

    // landingTextService.getLandingText("contactTimeWeekendEng", "ee").then(function (data) {
    //     if (data.text == null) {
    //         $scope.weekendTimeEng = "Nothing here";
    //     }
    //     $scope.weekendTimeEng = data.text;
    // })
    // $scope.insertWeekendEng = function () {
    //     var update = "";
    //     update = $scope.weekendTimeEng;
    //     if ($scope.weekendTimeEng === "{{editWeekendTimeEng}}") {
    //         update = $scope.editWeekendTimeEng;
    //     }
    //     landingTextService.addOrUpdateLandingText("contactTimeWeekendEng", update, "ee").then(function (data) {
    //         landingTextService.getLandingText("contactTimeWeekendEng", "ee").then(function (data) {
    //             if (data.text == null) {
    //                 $scope.weekendTimeEng = "Nothing here";
    //             }
    //             $scope.weekendTimeEng = data.text;
    //         })
    //     });
    // }

    // landingTextService.getLandingText("contactTimeWorkWeekEng", "ee").then(function (data) {
    //     if (data.text == null) {
    //         $scope.workWeekTimeEng = "Nothing here";
    //     }
    //     $scope.workWeekTimeEng = data.text;
    // })

    $scope.insertWorkWeekEng = function () {
        var update = "";
        update = $scope.workWeekTimeEng;
        if ($scope.workWeekTimeEng === "{{editWorkWeekTimeEng}}") {
            update = $scope.editWorkWeekTimeEng;
        }
        landingTextService.addOrUpdateLandingText("contactTimeWorkWeekEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactTimeWorkWeekEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.workWeekTimeEng = "Nothing here";
                }
                $scope.workWeekTimeEng = data.text;
            })
        });
    }
    /**/
    landingTextService.getLandingText("contactDaysEng", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactDaysEng = "There is nothing yet inserted";
        } else {
            $scope.contactDaysEng = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactDaysEng = function () {
        var update = "";
        update = $scope.contactDaysEng;
        if ($scope.contactDaysEng === "{{editContactDaysEng}}") {
            update = $scope.editContactDaysEng;
        }
        landingTextService.addOrUpdateLandingText("contactDaysEng", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactDaysEng", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactDaysEng = "Nothing here";
                }
                $scope.contactDaysEng = data.text;
            })
        });
    }
    /**/
    // landingTextService.getLandingText("contactWeekendEng", "ee").then(function (data) {
    //     if (data.text == null) {
    //         $scope.contactWeekendEng = "There is nothing yet inserted";
    //     } else {
    //         $scope.contactWeekendEng = data.text;
    //     }
    // }, function (err) {
    //     console.log(err);
    // })
    // $scope.insertContactWeekendEng = function () {
    //     var update = "";
    //     update = $scope.contactWeekendEng;
    //     if ($scope.contactWeekendEng === "{{editContactWeekendEng}}") {
    //         update = $scope.editContactWeekendEng;
    //     }
    //     landingTextService.addOrUpdateLandingText("contactWeekendEng", update, "ee").then(function (data) {
    //         landingTextService.getLandingText("contactWeekendEng", "ee").then(function (data) {
    //             if (data.text == null) {
    //                 $scope.contactWeekendEng = "Nothing here";
    //             }
    //             $scope.contactWeekendEng = data.text;
    //         })
    //     });
    // }

    ////// FINNISH LANGUAGE DESIGN VIEW
    landingTextService.getLandingText("bannerTitleFin", "ee").then(function (data) {
        if (data.text == null || data.text == undefined) {
            $scope.bannerTitleFin = "Nothing here";
        }
        $timeout(function() {
            $scope.bannerTitleFin = data.text;
        }, 200);
        var finb = data.text;
        $scope.finb = finb;
    })

    $scope.insertBannerTitleFin = function () {
        var update = "";
        update = $scope.bannerTitleFin;
        if ($scope.bannerTitleFin === "editBannerTitleFin") {
            update = $scope.editBannerTitleFin;
        }
        landingTextService.addOrUpdateLandingText("bannerTitleFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("bannerTitleFin", "ee").then(function (data) {
                if (data.text == null || data.text == undefined) {
                    $scope.bannerTitleFin = "Nothing here";
                }
                $scope.bannerTitleFin = data.text;
            }, function (err) {
                console.log(err);
            })
        });

        if ($scope.mydiv) {
            var top;
            var left;
            top = $scope.mydiv.top;
            left = $scope.mydiv.left;
            pictureService.addBannerTitlePosition("bannerTitlePositionFin", top, left).then(function (data) {
            }), function (err) {
                console.log(err);
            }
        } else {
            console.log('There is no myDiv', ); // REMOVE
        }

    }


    landingTextService.getLandingText("aboutTitleFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.aboutTitleFin = "There is nothing yet inserted";

        } else {
            $scope.aboutTitleFin = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertAboutTitleFin = function () {
        var update = "";
        update = $scope.aboutTitleFin;
        if ($scope.aboutTitleFin === "{{editAboutTitleFin}}") {
            update = $scope.editAboutTitleFin;
        }
        landingTextService.addOrUpdateLandingText("aboutTitleFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("aboutTitleFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.aboutTitleFin = "Nothing here";
                }
                $scope.aboutTitleFin = data.text;
            })
        });
    }

    landingTextService.getLandingText("workerTitleFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.workerTitleFin = "There is nothing yet inserted";

        } else {
            $scope.workerTitleFin = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertWorkerTitleFin = function () {
        var update = "";
        update = $scope.workerTitleFin;
        if ($scope.workerTitleFin === "{{editWorkerTitleFin}}") {
            update = $scope.editWorkerTitleFin;
        }
        landingTextService.addOrUpdateLandingText("workerTitleFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("workerTitleFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.workerTitleFin = "Nothing here";
                }
                $scope.workerTitleFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerTitleFin.title', function(val){
        landingTextService.addOrUpdateLandingText("workerTitleFin", val, "ee");
    })*/


    landingTextService.getLandingText("workerTextFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.workerTextFin = "There is nothing yet inserted";
        } else {
            $scope.workerTextFin = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertWorkerTextFin = function () {
        var update = "";
        update = $scope.workerTextFin;
        if ($scope.workerTextFin === "{{editWorkerTextFin}}") {
            update = $scope.editWorkerTextFin;
        }
        landingTextService.addOrUpdateLandingText("workerTextFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("workerTextFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.workerTextFin = "Nothing here";
                }
                $scope.workerTextFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerFin.text', function(val){
        landingTextService.addOrUpdateLandingText("workerTextFin", val, "ee");
    })*/

    landingTextService.getLandingText("courseTitleStarterFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleStarterFin = "There is nothing yet inserted";
        } else {
            $scope.courseTitleStarterFin = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleStarterFin = function () {
        var update = "";
        update = $scope.courseTitleStarterFin;
        if ($scope.courseTitle === "{{editCourseTitleStarterFin}}") {
            update = $scope.editCourseTitleStarterFin;
        }
        landingTextService.addOrUpdateLandingText("courseTitleStarterFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleStarterFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleStarterFin = "Nothing here";
                }
                $scope.courseTitleStarterFin = data.text;
            })
        });
    }

    landingTextService.getLandingText("courseTitleDrinksFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleDrinksFin = "There is nothing yet inserted";
        } else {
            $scope.courseTitleDrinksFin = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleDrinksFin = function () {
        var update = "";
        update = $scope.courseTitleDrinksFin;
        if ($scope.courseTitle === "{{editCourseTitleDrinksFin}}") {
            update = $scope.editCourseTitleDrinksFin;
        }
        landingTextService.addOrUpdateLandingText("courseTitleDrinksFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleDrinksFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleDrinksFin = "Nothing here";
                }
                $scope.courseTitleDrinksFin = data.text;
            })
        });
    }

    landingTextService.getLandingText("courseTitleKidsFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleKidsFin = "There is nothing yet inserted";
        } else {
            $scope.courseTitleKidsFin = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleKidsFin = function () {
        var update = "";
        update = $scope.courseTitleKidsFin;
        if ($scope.courseTitle === "{{editCourseTitleKidsFin}}") {
            update = $scope.editCourseTitleKidsFin;
        }
        landingTextService.addOrUpdateLandingText("courseTitleKidsFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleKidsFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleKidsFin = "Nothing here";
                }
                $scope.courseTitleKidsFin = data.text;
            })
        });
    }


    landingTextService.getLandingText("courseTitleMainFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleMainFin = "There is nothing yet inserted";
        } else {
            $scope.courseTitleMainFin = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleMainFin = function () {
        var update = "";
        update = $scope.courseTitleMainFin;
        if ($scope.courseTitle === "{{editCourseTitleMainFin}}") {
            update = $scope.editCourseTitleMainFin;
        }
        landingTextService.addOrUpdateLandingText("courseTitleMainFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleMainFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleMainFin = "Nothing here";
                }
                $scope.courseTitleMainFin = data.text;
            })
        });
    }
    landingTextService.getLandingText("courseTitleDessertFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleDessertFin = "There is nothing yet inserted";
        } else {
            $scope.courseTitleDessertFin = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleDessertFin = function () {
        var update = "";
        update = $scope.courseTitleDessertFin;
        if ($scope.courseTitle === "{{editCourseTitleDessertFin}}") {
            update = $scope.editCourseTitleDessertFin;
        }
        landingTextService.addOrUpdateLandingText("courseTitleDessertFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleDessertFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleDessertFin = "Nothing here";
                }
                $scope.courseTitleDessertFin = data.text;
            })
        });
    }

    landingTextService.getLandingText("menuSectionSubTitleFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.menuSectionSubTitleFin = "There is nothing yet inserted";
        } else {
            $scope.menuSectionSubTitleFin = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertMenuSectionSubTitleFin = function () {
        var update = "";
        update = $scope.menuSectionSubTitleFin;
        if ($scope.menuSectionSubTitleFin === "{{editMenuSectionSubTitleFin}}") {
            update = $scope.editMenuSectionSubTitleFin;
        }
        landingTextService.addOrUpdateLandingText("menuSectionSubTitleFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("menuSectionSubTitleFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.menuSectionSubTitleFin = "Nothing here";
                }
                $scope.menuSectionSubTitleFin = data.text;
            })
        });
    }


    landingTextService.getLandingText("menuTitleFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.menuTitleFin = "There is nothing yet inserted";
        } else {
            $scope.menuTitleFin = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertMenuTitleFin = function () {
        var update = "";
        update = $scope.menuTitleFin;
        if ($scope.menuTitleFin === "{{editMenuTitleFin}}") {
            update = $scope.editMenuTitleFin;
        }
        landingTextService.addOrUpdateLandingText("menuTitleFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("menuTitleFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.menuTitleFin = "Nothing here";
                }
                $scope.menuTitleFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('menuTitleFin.title', function(val){
        landingTextService.addOrUpdateLandingText("menuTitleFin", val, "ee");
    })*/

    landingTextService.getLandingText("menuTextFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.menuTextFin = "There is nothing yet inserted";
        } else {
            $scope.menuTextFin = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertMenuTextFin = function () {
        var update = "";
        update = $scope.menuTextFin;
        if ($scope.menuTextFin === "{{editMenuTextFin}}") {
            update = $scope.editMenuTextFin;
        }
        landingTextService.addOrUpdateLandingText("menuTextFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("menuTextFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.menuTextFin = "Nothing here";
                }
                $scope.menuTextFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('menuTextFin.text', function(val){
        landingTextService.addOrUpdateLandingText("menuTextFin", val, "ee");
    })*/


    /* Fin Tasting Heading */
    landingTextService.getLandingText("tastingHeadingFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.tastingHeadingFin = "Nothing here";
        } else {
            $scope.tastingHeadingFin = data.text;
        }
    }, function (err) {
        console.log(err);
    })

    $scope.insertTastingHeadingFin = function () {
        var update = "";
        update = $scope.tastingHeadingFin;
        if ($scope.tastingHeadingFin === "{{editTastingHeadingFin}}") {
            update = $scope.editTastingHeadingFin;
        }
        landingTextService.addOrUpdateLandingText("tastingHeadingFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("tastingHeadingFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.tastingHeadingFin = "Nothing here";
                }
                $scope.tastingHeadingFin = data.text;
            })
        });
    }


    landingTextService.getLandingText("tastingTextFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.tastingTextFin = "There is nothing yet inserted";
        } else {
            $scope.tastingTextFin = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertTastingTextFin = function () {
        var update = "";
        update = $scope.tastingTextFin;
        if ($scope.tastingTextFin === "{{editTastingTextFin}}") {
            update = $scope.editTastingTextFin;
        }
        landingTextService.addOrUpdateLandingText("tastingTextFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("tastingTextFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.tastingTextFin = "Nothing here";
                }
                $scope.tastingTextFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('tastingTextFin.text', function(val){
        landingTextService.addOrUpdateLandingText("tastingTextFin", val, "ee");
    })*/

    landingTextService.getLandingText("groupMenuButtonFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.groupMenuButtonFin = "Nothing here";
        }
        $scope.groupMenuButtonFin = data.text;
    })

    $scope.insertGroupMenuButtonFin = function () {
        var update = "";
        update = $scope.groupMenuButtonFin;
        if ($scope.groupMenuButtonFin === "{{editGroupMenuButtonFin}}") {
            update = $scope.editGroupMenuButtonFin;
        }
        landingTextService.addOrUpdateLandingText("groupMenuButtonFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("groupMenuButtonFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.groupMenuButtonFin = "Nothing here";
                }
                $scope.groupMenuButtonFin = data.text;
            })
        });
    }

    landingTextService.getLandingText("eventTitleFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.eventTitleFin = "There is nothing yet inserted";
        } else {
            $scope.eventTitleFin = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertEventTitleFin = function () {
        var update = "";
        update = $scope.eventTitleFin;
        if ($scope.eventTitleFin === "{{editEventTitleFin}}") {
            update = $scope.editEventTitleFin;
        }
        landingTextService.addOrUpdateLandingText("eventTitleFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("eventTitleFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.eventTitleFin = "Nothing here";
                }
                $scope.eventTitleFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('eventTitleFin.title', function(val){
        landingTextService.addOrUpdateLandingText("eventTitleFin", val, "ee");
    })*/

    landingTextService.getLandingText("contactCallFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactCallFin = "There is nothing yet inserted";
        } else {
            $scope.contactCallFin = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactCallFin = function () {
        var update = "";
        update = $scope.contactCallFin;
        if ($scope.contactCallFin === "{{editContactCallFin}}") {
            update = $scope.editContactCallFin;
        }
        landingTextService.addOrUpdateLandingText("contactCallFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactCallFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactCallFin = "Nothing here";
                }
                $scope.contactCallFin = data.text;
            })
        });
    }

    /*
    $scope.$watch('contactCallFin.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCallFin", val, "ee");
    })*/

    landingTextService.getLandingText("contactSubTitleFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactSubTitleFin = "There is nothing yet inserted";
        } else {
            $scope.contactSubTitleFin = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactSubTitleFin = function () {
        var update = "";
        update = $scope.contactSubTitleFin;
        if ($scope.contactSubTitleFin === "{{editContactSubTitleFin}}") {
            update = $scope.editContactSubTitleFin;
        }
        landingTextService.addOrUpdateLandingText("contactSubTitleFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactSubTitleFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactSubTitleFin = "Nothing here";
                }
                $scope.contactSubTitleFin = data.text;
            })
        });
    }

    landingTextService.getLandingText("contactVisitFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactVisitFin = "There is nothing yet inserted";
        } else {
            $scope.contactVisitFin = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactVisitFin = function () {
        var update = "";
        update = $scope.contactVisitFin;
        if ($scope.contactVisitFin === "{{editContactVisitFin}}") {
            update = $scope.editContactVisitFin;
        }
        landingTextService.addOrUpdateLandingText("contactVisitFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactVisitFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactVisitFin = "Nothing here";
                }
                $scope.contactVisitFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactVisitFin.text', function(val){
        landingTextService.addOrUpdateLandingText("contactVisitFin", val, "ee");
    })*/


    landingTextService.getLandingText("contactEmailFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactEmailFin = "There is nothing yet inserted";
        } else {
            $scope.contactEmailFin = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactEmailFin = function () {
        var update = "";
        update = $scope.contactEmailFin;
        if ($scope.contactEmailFin === "{{editContactEmailFin}}") {
            update = $scope.editContactEmailFin;
        }
        landingTextService.addOrUpdateLandingText("contactEmailFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactEmailFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactEmailFin = "Nothing here";
                }
                $scope.contactEmailFin = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactEmailFin.text', function(val){
        landingTextService.addOrUpdateLandingText("contactEmailFin", val, "ee");
    })*/

    // landingTextService.getLandingText("contactWeekendFin", "ee").then(function (data) {
    //     if (data.text == null) {
    //         $scope.contactWeekendFin = "There is nothing yet inserted";
    //     } else {
    //         $scope.contactWeekendFin = data.text;
    //     }
    // }, function (err) {
    //     console.log(err);
    // })
    // $scope.insertContactWeekendFin = function () {
    //     var update = "";
    //     update = $scope.contactWeekendFin;
    //     if ($scope.contactWeekendFin === "{{editContactWeekendFin}}") {
    //         update = $scope.editContactWeekendFin;
    //     }
    //     landingTextService.addOrUpdateLandingText("contactWeekendFin", update, "ee").then(function (data) {
    //         landingTextService.getLandingText("contactWeekendFin", "ee").then(function (data) {
    //             if (data.text == null) {
    //                 $scope.contactWeekendFin = "Nothing here";
    //             }
    //             $scope.contactWeekendFin = data.text;
    //         })
    //     });
    // }
    landingTextService.getLandingText("contactDaysFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactDaysFin = "There is nothing yet inserted";
        } else {
            $scope.contactDaysFin = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactDaysFin = function () {
        var update = "";
        update = $scope.contactDaysFin;
        if ($scope.contactDaysFin === "{{editContactDaysFin}}") {
            update = $scope.editContactDaysFin;
        }
        landingTextService.addOrUpdateLandingText("contactDaysFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactDaysFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactDaysFin = "Nothing here";
                }
                $scope.contactDaysFin = data.text;
            })
        });
    }

    landingTextService.getLandingText("contactTimeWorkWeekFin", "ee").then(function (data) {
        if (data.text == null) {
            $scope.workWeekTimeFin = "Nothing here";
        }
        $scope.workWeekTimeFin = data.text;
    })
    $scope.insertWorkWeekFin = function () {
        var update = "";
        update = $scope.workWeekTimeFin;
        if ($scope.workWeekTimeFin === "{{editWorkWeekTimeFin}}") {
            update = $scope.editWorkWeekTimeFin;
        }
        landingTextService.addOrUpdateLandingText("contactTimeWorkWeekFin", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactTimeWorkWeekFin", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.workWeekTimeFin = "Nothing here";
                }
                $scope.workWeekTimeFin = data.text;
            })
        });
    }

    // landingTextService.getLandingText("contactTimeWeekendFin", "ee").then(function (data) {
    //     if (data.text == null) {
    //         $scope.weekendTimeFin = "Nothing here";
    //     }
    //     $scope.weekendTimeFin = data.text;
    // })
    // $scope.insertWeekendFin = function () {
    //     var update = "";
    //     update = $scope.weekendTimeFin;
    //     if ($scope.weekendTimeFin === "{{editWeekendTimeFin}}") {
    //         update = $scope.editWeekendTimeFin;
    //     }
    //     landingTextService.addOrUpdateLandingText("contactTimeWeekendFin", update, "ee").then(function (data) {
    //         landingTextService.getLandingText("contactTimeWeekendFin", "ee").then(function (data) {
    //             if (data.text == null) {
    //                 $scope.weekendTimeFin = "Nothing here";
    //             }
    //             $scope.weekendTimeFin = data.text;
    //         })
    //     });
    // }


    //// RUSSIAN DESIGN VIEW

    landingTextService.getLandingText("bannerTitleRus", "ee").then(function (data) {
        if (data.text == null || data.text == undefined) {
            $scope.bannerTitleRus = "Nothing here";
        }
        $timeout(function() {
            $scope.bannerTitleRus = data.text;
        }, 200);
        var rusb = data.text;
        $scope.rusb = rusb;
    })

    $scope.insertBannerTitleRus = function () {
        var update = "";
        update = $scope.bannerTitleRus;
        if ($scope.bannerTitleRus === "editBannerTitleRus") {
            update = $scope.editBannerTitleRus;
        }
        landingTextService.addOrUpdateLandingText("bannerTitleRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("bannerTitleRus", "ee").then(function (data) {
                if (data.text == null || data.text == undefined) {
                    $scope.bannerTitleRus = "Nothing here";
                }
                $scope.bannerTitleRus = data.text;
            }, function (err) {
                console.log(err);
            })
        });

        if ($scope.mydiv) {
            var top;
            var left;
            top = $scope.mydiv.top;
            left = $scope.mydiv.left;
            pictureService.addBannerTitlePosition("bannerTitlePositionRus", top, left).then(function (data) {
            }), function (err) {
                console.log(err);
            }
            // pictureService.getBannerTitlePosition();
        } else {
            console.log('There is no myDiv', ); // REMOVE
        }

    }


    landingTextService.getLandingText("aboutTitleRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.aboutTitleRus = "There is nothing yet inserted";

        } else {
            $scope.aboutTitleRus = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertAboutTitleRus = function () {
        var update = "";
        update = $scope.aboutTitleRus;
        if ($scope.aboutTitleRus === "{{editAboutTitleRus}}") {
            update = $scope.editAboutTitleRus;
        }
        landingTextService.addOrUpdateLandingText("aboutTitleRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("aboutTitleRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.aboutTitleRus = "Nothing here";
                }
                $scope.aboutTitleRus = data.text;
            })
        });
    }

    landingTextService.getLandingText("workerTitleRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.workerTitleRus = "There is nothing yet inserted";

        } else {
            $scope.workerTitleRus = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertWorkerTitleRus = function () {
        var update = "";
        update = $scope.workerTitleRus;
        if ($scope.workerTitleRus === "{{editWorkerTitleRus}}") {
            update = $scope.editWorkerTitleRus;
        }
        landingTextService.addOrUpdateLandingText("workerTitleRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("workerTitleRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.workerTitleRus = "Nothing here";
                }
                $scope.workerTitleRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerTitleRus.title', function(val){
        landingTextService.addOrUpdateLandingText("workerTitleRus", val, "ee");
    })*/

    landingTextService.getLandingText("workerTextRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.workerTextRus = "There is nothing yet inserted";
        } else {
            $scope.workerTextRus = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertWorkerTextRus = function () {
        var update = "";
        update = $scope.workerTextRus;
        if ($scope.workerTextRus === "{{editWorkerTextRus}}") {
            update = $scope.editWorkerTextRus;
        }
        landingTextService.addOrUpdateLandingText("workerTextRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("workerTextRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.workerTextRus = "Nothing here";
                }
                $scope.workerTextRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('workerRus.text', function(val){
        landingTextService.addOrUpdateLandingText("workerTextRus", val, "ee");
    })*/

    landingTextService.getLandingText("courseTitleStarterRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleStarterRus = "There is nothing yet inserted";
        } else {
            $scope.courseTitleStarterRus = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleStarterRus = function () {
        var update = "";
        update = $scope.courseTitleStarterRus;
        if ($scope.courseTitle === "{{editCourseTitleStarterRus}}") {
            update = $scope.editCourseTitleStarterRus;
        }
        landingTextService.addOrUpdateLandingText("courseTitleStarterRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleStarterRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleStarterRus = "Nothing here";
                }
                $scope.courseTitleStarterRus = data.text;
            })
        });
    }

    landingTextService.getLandingText("courseTitleDrinksRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleDrinksRus = "There is nothing yet inserted";
        } else {
            $scope.courseTitleDrinksRus = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleDrinksRus = function () {
        var update = "";
        update = $scope.courseTitleDrinksRus;
        if ($scope.courseTitle === "{{editCourseTitleDrinksRus}}") {
            update = $scope.editCourseTitleDrinksRus;
        }
        landingTextService.addOrUpdateLandingText("courseTitleDrinksRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleDrinksRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleDrinksRus = "Nothing here";
                }
                $scope.courseTitleDrinksRus = data.text;
            })
        });
    }

    landingTextService.getLandingText("courseTitleKidsRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleKidsRus = "There is nothing yet inserted";
        } else {
            $scope.courseTitleKidsRus = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleKidsRus = function () {
        var update = "";
        update = $scope.courseTitleKidsRus;
        if ($scope.courseTitle === "{{editCourseTitleKidsRus}}") {
            update = $scope.editCourseTitleKidsRus;
        }
        landingTextService.addOrUpdateLandingText("courseTitleKidsRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleKidsRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleKidsRus = "Nothing here";
                }
                $scope.courseTitleKidsRus = data.text;
            })
        });
    }


    landingTextService.getLandingText("courseTitleMainRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleMainRus = "There is nothing yet inserted";
        } else {
            $scope.courseTitleMainRus = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleMainRus = function () {
        var update = "";
        update = $scope.courseTitleMainRus;
        if ($scope.courseTitle === "{{editCourseTitleMainRus}}") {
            update = $scope.editCourseTitleMainRus;
        }
        landingTextService.addOrUpdateLandingText("courseTitleMainRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleMainRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleMainRus = "Nothing here";
                }
                $scope.courseTitleMainRus = data.text;
            })
        });
    }
    landingTextService.getLandingText("courseTitleDessertRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.courseTitleDessertRus = "There is nothing yet inserted";
        } else {
            $scope.courseTitleDessertRus = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertCourseTitleDessertRus = function () {
        var update = "";
        update = $scope.courseTitleDessertRus;
        if ($scope.courseTitle === "{{editCourseTitleDessertRus}}") {
            update = $scope.editCourseTitleDessertRus;
        }
        landingTextService.addOrUpdateLandingText("courseTitleDessertRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("courseTitleDessertRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.courseTitleDessertRus = "Nothing here";
                }
                $scope.courseTitleDessertRus = data.text;
            })
        });
    }

    landingTextService.getLandingText("menuSectionSubTitleRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.menuSectionSubTitleRus = "There is nothing yet inserted";
        } else {
            $scope.menuSectionSubTitleRus = data.text
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertMenuSectionSubTitleRus = function () {
        var update = "";
        update = $scope.menuSectionSubTitleRus;
        if ($scope.menuSectionSubTitleRus === "{{editMenuSectionSubTitleRus}}") {
            update = $scope.editMenuSectionSubTitleRus;
        }
        landingTextService.addOrUpdateLandingText("menuSectionSubTitleRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("menuSectionSubTitleRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.menuSectionSubTitleRus = "Nothing here";
                }
                $scope.menuSectionSubTitleRus = data.text;
            })
        });
    }


    landingTextService.getLandingText("menuTitleRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.menuTitleRus = "There is nothing yet inserted";
        } else {
            $scope.menuTitleRus = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertMenuTitleRus = function () {
        var update = "";
        update = $scope.menuTitleRus;
        if ($scope.menuTitleRus === "{{editMenuTitleRus}}") {
            update = $scope.editMenuTitleRus;
        }
        landingTextService.addOrUpdateLandingText("menuTitleRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("menuTitleRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.menuTitleRus = "Nothing here";
                }
                $scope.menuTitleRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('menuTitleRus.title', function(val){
        landingTextService.addOrUpdateLandingText("menuTitleRus", val, "ee");
    })*/


    landingTextService.getLandingText("menuTextRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.menuTextRus = "There is nothing yet inserted";
        } else {
            $scope.menuTextRus = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertMenuTextRus = function () {
        var update = "";
        update = $scope.menuTextRus;
        if ($scope.menuTextRus === "{{editMenuTextRus}}") {
            update = $scope.editMenuTextRus;
        }
        landingTextService.addOrUpdateLandingText("menuTextRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("menuTextRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.menuTextRus = "Nothing here";
                }
                $scope.menuTextRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('menuTextRus.text', function(val){
        landingTextService.addOrUpdateLandingText("menuTextRus", val, "ee");
    })*/


    /* Rus Tasting Heading */
    landingTextService.getLandingText("tastingHeadingRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.tastingHeadingRus = "Nothing here";
        } else {
            $scope.tastingHeadingRus = data.text;
        }
    }, function (err) {
        console.log(err);
    })

    $scope.insertTastingHeadingRus = function () {
        var update = "";
        update = $scope.tastingHeadingRus;
        if ($scope.tastingHeadingRus === "{{editTastingHeadingRus}}") {
            update = $scope.editTastingHeadingRus;
        }
        landingTextService.addOrUpdateLandingText("tastingHeadingRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("tastingHeadingRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.tastingHeadingRus = "Nothing here";
                }
                $scope.tastingHeadingRus = data.text;
            })
        });
    }


    landingTextService.getLandingText("tastingTextRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.tastingTextRus = "There is nothing yet inserted";
        } else {
            $scope.tastingTextRus = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertTastingTextRus = function () {
        var update = "";
        update = $scope.tastingTextRus;
        if ($scope.tastingTextRus === "{{editTastingTextRus}}") {
            update = $scope.editTastingTextRus;
        }
        landingTextService.addOrUpdateLandingText("tastingTextRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("tastingTextRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.tastingTextRus = "Nothing here";
                }
                $scope.tastingTextRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('tastingTextRus.text', function(val){
        landingTextService.addOrUpdateLandingText("tastingTextRus", val, "ee");
    })*/

    landingTextService.getLandingText("groupMenuButtonRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.groupMenuButtonRus = "Nothing here";
        }
        $scope.groupMenuButtonRus = data.text;
    })

    $scope.insertGroupMenuButtonRus = function () {
        var update = "";
        update = $scope.groupMenuButtonRus;
        if ($scope.groupMenuButtonRus === "{{editGroupMenuButtonRus}}") {
            update = $scope.editGroupMenuButtonRus;
        }
        landingTextService.addOrUpdateLandingText("groupMenuButtonRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("groupMenuButtonRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.groupMenuButtonRus = "Nothing here";
                }
                $scope.groupMenuButtonRus = data.text;
            })
        });
    }

    landingTextService.getLandingText("eventTitleRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.eventTitleRus = "There is nothing yet inserted";
        } else {
            $scope.eventTitleRus = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertEventTitleRus = function () {
        var update = "";
        update = $scope.eventTitleRus;
        if ($scope.eventTitleRus === "{{editEventTitleRus}}") {
            update = $scope.editEventTitleRus;
        }
        landingTextService.addOrUpdateLandingText("eventTitleRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("eventTitleRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.eventTitleRus = "Nothing here";
                }
                $scope.eventTitleRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('eventTitleRus.title', function(val){
        landingTextService.addOrUpdateLandingText("eventTitleRus", val, "ee");
    })*/

    landingTextService.getLandingText("contactCallRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactCallRus = "There is nothing yet inserted";
        } else {
            $scope.contactCallRus = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactCallRus = function () {
        var update = "";
        update = $scope.contactCallRus;
        if ($scope.contactCallRus === "{{editContactCallRus}}") {
            update = $scope.editContactCallRus;
        }
        landingTextService.addOrUpdateLandingText("contactCallRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactCallRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactCallRus = "Nothing here";
                }
                $scope.contactCallRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactCallRus.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCallRus", val, "ee");
    })*/


    landingTextService.getLandingText("contactSubTitleRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactSubTitleRus = "There is nothing yet inserted";
        } else {
            $scope.contactSubTitleRus = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactSubTitleRus = function () {
        var update = "";
        update = $scope.contactSubTitleRus;
        if ($scope.contactSubTitleRus === "{{editContactSubTitleRus}}") {
            update = $scope.editContactSubTitleRus;
        }
        landingTextService.addOrUpdateLandingText("contactSubTitleRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactSubTitleRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactSubTitleRus = "Nothing here";
                }
                $scope.contactSubTitleRus = data.text;
            })
        });
    }

    landingTextService.getLandingText("contactVisitRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactVisitRus = "There is nothing yet inserted";
        } else {
            $scope.contactVisitRus = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactVisitRus = function () {
        var update = "";
        update = $scope.contactVisitRus;
        if ($scope.contactVisitRus === "{{editContactVisitRus}}") {
            update = $scope.editContactVisitRus;
        }
        landingTextService.addOrUpdateLandingText("contactVisitRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactVisitRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactVisitRus = "Nothing here";
                }
                $scope.contactVisitRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactVisitRus.text', function(val){
        landingTextService.addOrUpdateLandingText("contactVisitRus", val, "ee");
    })*/


    landingTextService.getLandingText("contactEmailRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactEmailRus = "There is nothing yet inserted";
        } else {
            $scope.contactEmailRus = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactEmailRus = function () {
        var update = "";
        update = $scope.contactEmailRus;
        if ($scope.contactEmailRus === "{{editContactEmailRus}}") {
            update = $scope.editContactEmailRus;
        }
        landingTextService.addOrUpdateLandingText("contactEmailRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactEmailRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactEmailRus = "Nothing here";
                }
                $scope.contactEmailRus = data.text;
            })
        });
    }
    /*
    $scope.$watch('contactEmailRus.text', function(val){   // watch is so-called digest cycle, considered as a loop during which angular checks if there are any changes to all the variables watched
        landingTextService.addOrUpdateLandingText("contactEmailRus", val, "ee");
    })*/

    // /**/
    // landingTextService.getLandingText("contactWeekendRus", "ee").then(function (data) {
    //     if (data.text == null) {
    //         $scope.contactWeekendRus = "There is nothing yet inserted";
    //     } else {
    //         $scope.contactWeekendRus = data.text;
    //     }
    // }, function (err) {
    //     console.log(err);
    // })
    // $scope.insertContactWeekendRus = function () {
    //     var update = "";
    //     update = $scope.contactWeekendRus;
    //     if ($scope.contactWeekendRus === "{{editContactWeekendRus}}") {
    //         update = $scope.editContactWeekendRus;
    //     }
    //     landingTextService.addOrUpdateLandingText("contactWeekendRus", update, "ee").then(function (data) {
    //         landingTextService.getLandingText("contactWeekendRus", "ee").then(function (data) {
    //             if (data.text == null) {
    //                 $scope.contactWeekendRus = "Nothing here";
    //             }
    //             $scope.contactWeekendRus = data.text;
    //         })
    //     });
    // }
    landingTextService.getLandingText("contactDaysRus", "ee").then(function (data) {
        if (data.text == null) {
            $scope.contactDaysRus = "There is nothing yet inserted";
        } else {
            $scope.contactDaysRus = data.text;
        }
    }, function (err) {
        console.log(err);
    })
    $scope.insertContactDaysRus = function () {
        var update = "";
        update = $scope.contactDaysRus;
        if ($scope.contactDaysRus === "{{editContactDaysRus}}") {
            update = $scope.editContactDaysRus;
        }
        landingTextService.addOrUpdateLandingText("contactDaysRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactDaysRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.contactDaysRus = "Nothing here";
                }
                $scope.contactDaysRus = data.text;
            })
        });
    }

    // landingTextService.getLandingText("contactTimeWorkWeekRus", "ee").then(function (data) { // This is a service. Once the program has the promice "getLandingText" it does the following function
    //     if (data.text == null) { //"ee" is a language, "contactTimeForWeekRus" is a place
    //         $scope.workWeekTimeRus = "Nothing here";
    //     }
    //     $scope.workWeekTimeRus = data.text;
    // })
    $scope.insertWorkWeekRus = function () {
        var update = "";
        update = $scope.workWeekTimeRus;
        if ($scope.workWeekTimeRus === "{{editWorkWeekTimeRus}}") {
            update = $scope.editWorkWeekTimeRus;
        }
        landingTextService.addOrUpdateLandingText("contactTimeWorkWeekRus", update, "ee").then(function (data) {
            landingTextService.getLandingText("contactTimeWorkWeekRus", "ee").then(function (data) {
                if (data.text == null) {
                    $scope.workWeekTimeRus = "Nothing here";
                }
                $scope.workWeekTimeRus = data.text;
            })
        });
    }

    // landingTextService.getLandingText("contactTimeWeekendRus", "ee").then(function (data) {
    //     if (data.text == null) {
    //         $scope.weekendTimeRus = "Nothing here";
    //     }
    //     $scope.weekendTimeRus = data.text;
    // })
    // $scope.insertWeekendRus = function () {
    //     var update = "";
    //     update = $scope.weekendTimeRus;
    //     if ($scope.weekendTimeRus === "{{editWeekendTimeRus}}") {
    //         update = $scope.editWeekendTimeRus;
    //     }
    //     landingTextService.addOrUpdateLandingText("contactTimeWeekendRus", update, "ee").then(function (data) {
    //         landingTextService.getLandingText("contactTimeWeekendRus", "ee").then(function (data) {
    //             if (data.text == null) {
    //                 $scope.weekendTimeRus = "Nothing here";
    //             }
    //             $scope.weekendTimeRus = data.text;
    //         })
    //     });
    // }
    /* End of Russian design view */



    /* Additional functions */

    /* Map image */
    pictureService.getMenuPicture('map').then(function (data) {
        if (data == null) {
            $scope.mapPicturePath = "";

        } else {
            $scope.mapPicturePath = data.picturePath;
        }
    })

    /* Whiteguide logo */
    pictureService.getMenuPicture('whiteguide').then(function (data) {
        if (data == null) {
            $scope.whiteguidePicturePath = "css/img/whiteguide2019.png";
        } else {
            $scope.whiteguidePicturePath = data.picturePath;
        }
    })

    /* Event images */
    // pictureService.getMenuPicture('event').then(function (data) {
    //     if (data == null) {
    //         $scope.eventPicturePath = "";
    //     } else {
    //         $scope.eventPicturePath = data.picturePath;
    //     }
    // })
    pictureService.getMenuPicture('eventEst').then(function (data) {
        if (data == null) {
            $scope.eventPicturePathEst = "";
        } else {
            $scope.eventPicturePathEst = data.picturePath;
        }
    })
    pictureService.getMenuPicture('eventFin').then(function (data) {
        if (data == null) {
            $scope.eventPicturePathFin = "";
        } else {
            $scope.eventPicturePathFin = data.picturePath;
        }
    })
    pictureService.getMenuPicture('eventEng').then(function (data) {
        if (data == null) {
            $scope.eventPicturePathEng = "";
        } else {
            $scope.eventPicturePathEng = data.picturePath;
        }
    })
    pictureService.getMenuPicture('eventRus').then(function (data) {
        if (data == null) {
            $scope.eventPicturePathRus = "";
        } else {
            $scope.eventPicturePathRus = data.picturePath;
        }
    })

    /* Menu pics */
    pictureService.getMenuPicture('first').then(function (data) {
        if (data == null) {
            $scope.firstPicturePath = "";
        } else {
            $scope.firstPicturePath = data.picturePath;
        }
    })
    pictureService.getMenuPicture('second').then(function (data) {
        if (data == null) {
            $scope.secondPicturePath = "";
        } else {
            $scope.secondPicturePath = data.picturePath;
        }
    })
    pictureService.getMenuPicture('third').then(function (data) {
        if (data == null) {
            $scope.thirdPicturePath = "";
        } else {
            $scope.thirdPicturePath = data.picturePath;
        }
    })


    /* Banners @admin */
    pictureService.getBannerPicture('bannerEst').then(function (data) {
        if (data === null || data.picturePath === undefined) {
            $scope.bannerPicturePathEst = "";
        } else {
            $scope.bannerPicturePathEst = data.picturePath;
        }
    })

    pictureService.getBannerPicture('bannerEstMobile').then(function (data) {
        if (data === null || data.picturePath === undefined) {
            $scope.bannerPicturePathEstMobile = "";
        } else {
            $scope.bannerPicturePathEstMobile = data.picturePath;
        }
    })

    pictureService.getBannerPicture('bannerEng').then(function (data) {
        if (data === null || data.picturePath === undefined) {
            $scope.bannerPicturePathEng = "";
        } else {
            $scope.bannerPicturePathEng = data.picturePath;
        }
    })

    pictureService.getBannerPicture('bannerEngMobile').then(function (data) {
        if (data === null || data.picturePath === undefined) {
            $scope.bannerPicturePathEngMobile = "";
        } else {
            $scope.bannerPicturePathEngMobile = data.picturePath;
        }
    })

    pictureService.getBannerPicture('bannerFin').then(function (data) {
        if (data === null || data.picturePath === undefined) {
            $scope.bannerPicturePathFin = "";
        } else {
            $scope.bannerPicturePathFin = data.picturePath;
        }
    })

    pictureService.getBannerPicture('bannerFinMobile').then(function (data) {
        if (data === null || data.picturePath === undefined) {
            $scope.bannerPicturePathFinMobile = "";
        } else {
            $scope.bannerPicturePathFinMobile = data.picturePath;
        }
    })

    pictureService.getBannerPicture('bannerRus').then(function (data) {
        if (data === null || data.picturePath === undefined) {
            $scope.bannerPicturePathRus = "";
        } else {
            $scope.bannerPicturePathRus = data.picturePath;
        }
    })

    pictureService.getBannerPicture('bannerRusMobile').then(function (data) {
        if (data === null || data.picturePath === undefined) {
            $scope.bannerPicturePathRusMobile = "";
        } else {
            $scope.bannerPicturePathRusMobile = data.picturePath;
        }
    })



    /* Get BannerTitle Position */
    pictureService.getBannerTitlePosition('bannerTitlePositionEst').then(function (data) {
        if (data === null) {
            $scope.bannerTitlePositionTopEst = 35;
            $scope.bannerTitlePositionLeftEst = 1;
        } else {
            $scope.bannerTitlePositionTopEst = data.top;
            $scope.bannerTitlePositionLeftEst = data.left;
        }
    })

    pictureService.getBannerTitlePosition('bannerTitlePositionEng').then(function (data) {
        if (data === null) {
            $scope.bannerTitlePositionTopEng = 35;
            $scope.bannerTitlePositionLeftEng = 1;
        } else {
            $scope.bannerTitlePositionTopEng = data.top;
            $scope.bannerTitlePositionLeftEng = data.left;
        }
    })

    pictureService.getBannerTitlePosition('bannerTitlePositionFin').then(function (data) {
        if (data === null) {
            $scope.bannerTitlePositionTopFin = 35;
            $scope.bannerTitlePositionLeftFin = 1;
        } else {
            $scope.bannerTitlePositionTopFin = data.top;
            $scope.bannerTitlePositionLeftFin = data.left;
        }
    })

    pictureService.getBannerTitlePosition('bannerTitlePositionRus').then(function (data) {
        if (data === null) {
            $scope.bannerTitlePositionTopRus = 35;
            $scope.bannerTitlePositionLeftRus = 1;
        } else {
            $scope.bannerTitlePositionTopRus = data.top;
            $scope.bannerTitlePositionLeftRus = data.left;
        }
    })



    $scope.user = {
        name: 'awesome user'
    };
    $scope.$watch('user.name', function (val) {})

    $scope.bannerPicChanged = function (elm, type) {
        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function (file) {
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function (file) {
            if (type === "bannerEst") {
                $scope.bannerPicturePathEst = file;
            }
            /* TODO - Mobile banner @admin preview */
            // if (type === "bannerEstMobile") {
            //     $scope.bannerPicturePathEst = file;
            // }
            if (type === "bannerEng") {
                $scope.bannerPicturePathEng = file;
            }
            /* TODO - Mobile banner @admin preview */
            // if (type === "bannerEngMobile") {
            //     $scope.bannerPicturePathEng = file;
            // }
            if (type === "bannerFin") {
                $scope.bannerPicturePathFin = file;
            }
            /* TODO - Mobile banner @admin preview */
            // if (type === "bannerFinMobile") {
            //     $scope.bannerPicturePathFin = file;
            // }
            if (type === "bannerRus") {
                $scope.bannerPicturePathRus = file;
            }
            /* TODO - Mobile banner @admin preview */
            // if (type === "bannerRusMobile") {
            //     $scope.bannerPicturePathRus = file;
            // }
            pictureService.addBannerPicture(type, file).then(function (data) {
                elm.parentNode.style.backgroundImage = "url(" + data + ")";
            }, function (err) {
                console.log(err);
            })
        }, function (err) {
            console.log(err);
        })
    }

    $scope.menuPicChanged = function (elm, type) {
        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function (file) {
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function (file) {
            if (type === "first") {
                $scope.firstPicturePath = file;
            }
            if (type === "second") {
                $scope.secondPicturePath = file;
            }
            if (type === "third") {
                $scope.thirdPicturePath = file;
            }
            if (type === "eventEst") {
                $scope.eventPicturePathEst = file;
            }
            if (type === "eventEng") {
                $scope.eventPicturePathEng = file;
            }
            if (type === "eventFin") {
                $scope.eventPicturePathFin = file;
            }
            if (type === "eventRus") {
                $scope.eventPicturePathRus = file;
            }
            pictureService.addMenuPicture(type, file).then(function (data) {
                elm.parentNode.style.backgroundImage = "url(" + data + ")";
            }, function (err) {
                console.log(err);
            })
        }, function (err) {
            console.log(err);
        })
    }

    $scope.eventPicChanged = function (elm, type) {

        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function (file) {
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function (file) {
            // if (type === "event") {
            //     $scope.eventPicturePath = file;
            // }
            if (type === "eventEst") {
                $scope.eventPicturePathEst = file;
            }
            if (type === "eventEng") {
                $scope.eventPicturePathEng = file;
            }
            if (type === "eventFin") {
                $scope.eventPicturePathFin = file;
            }
            if (type === "eventRus") {
                $scope.eventPicturePathRus = file;
            }
            pictureService.addMenuPicture(type, file).then(function (data) {
                elm.parentNode.style.backgroundImage = "url(" + data + ")";
                $timeout(function () {
                    $scope.$apply();
                }, 100);
            }, function (err) {
                console.log(err);
            })
        }, function (err) {
            console.log(err);
        })
    }
    $scope.mapPicChanged = function (elm, type) {

        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function (file) {
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function (file) {
            if (type === "map") {
                $scope.mapPicturePath = file;
            }
            if (type === "whiteguide") {
                $scope.whiteguidePicturePath = file;
            }
            // if (type === "event") {
            //     $scope.eventPicturePath = file;
            // }
            if (type === "eventEst") {
                $scope.eventPicturePathEst = file;
            }
            if (type === "eventEng") {
                $scope.eventPicturePathEng = file;
            }
            if (type === "eventFin") {
                $scope.eventPicturePathFin = file;
            }
            if (type === "eventRus") {
                $scope.eventPicturePathRus = file;
            }
            if (type === "first") {
                $scope.firstPicturePath = file;
            }
            if (type === "second") {
                $scope.secondPicturePath = file;
            }
            if (type === "third") {
                $scope.thirdPicturePath = file;
            }
            pictureService.addMenuPicture(type, file).then(function (data) {

            }, function (err) {
                console.log(err);
            })
        }, function (err) {
            console.log(err);
        })
    }



    /* test */
    angular.module('getterSetterExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
    var _text = 'TEST';
    $scope.block = {
        text: function(newText) {
        // Note that newText can be undefined for two reasons:
        // 1. Because it is called as a getter and thus called with no arguments
        // 2. Because the property should actually be set to undefined. This happens e.g. if the
        //    input is invalid
        return arguments.length ? (_text = newText) : _text;
        }
    };
    }]);

    $(document).ready( function() {

        // Make the DIV element draggable:
        dragElement(document.getElementById("mydiv"));
        dragElement(document.getElementById("mydivEng"));
        dragElement(document.getElementById("mydivFin"));
        dragElement(document.getElementById("mydivRus"));

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                // if present, the header is where you move the DIV from:
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
                // otherwise, move the DIV from anywhere inside the DIV:
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;

                $scope.mydiv = {
                    top: (elmnt.offsetTop - pos2),
                    left: (elmnt.offsetLeft - pos1)
                }


                var banner = $(elmnt.parentNode);

                var leftP, topP;
                leftP = ($scope.mydiv.left * 100) / window.innerWidth;
                topP = ($scope.mydiv.top * 100) / banner.height();

                $scope.mydiv = {

                    /* Top & Left in '%' */
                    left: ($scope.mydiv.left * 100) / window.innerWidth,/* leftP */
                    top: ($scope.mydiv.top * 100) / banner.height()/* topP */
                }

                /* If element is outside from the left */
                if ($scope.mydiv.left < 0) {
                    $scope.mydiv.left = 1;
                    elmnt.style.left = 1 + "%";
                } else {
                    $scope.mydiv.left = $scope.mydiv.left;
                }

                /* If element bottom is lower than banner bottom */
                var offsetBottom = (elmnt.offsetTop - pos2) + ($(elmnt).height());
                if (offsetBottom > banner.height()) {
                    elmnt.style.top = "auto";
                    elmnt.style.bottom = 0 + "px";

                    /* Recalculate & reassign element top position percentage */
                    $scope.mydiv.top = ((banner.height() - $(elmnt).height()) * 100) / banner.height();
                }
            }
        }
    })

})