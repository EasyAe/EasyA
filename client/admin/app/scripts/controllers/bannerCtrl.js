'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:quizCtrl
 * @description
 * # quizCtrl
 * Controller of the minovateApp
 */
app
    .controller('bannerCtrl', function($scope, bannerServices, examServices, Upload, $uibModal, $state, $stateParams) {
        $scope.page = {
            title: 'Profile Page',
            subtitle: 'Place subtitle here...'
        };
        bannerServices.getAllBanners().then(function(response){
           $scope.banners = response.data;
        });

        $scope.createBanner = function(){
            var bannerImageData = {
                container:"edootech-banner-images",
                file : $scope.bannerImage
            }
            examServices.uploadImages(bannerImageData).then(function successCallback(response) {
                var imageUrl = response.data.result.files.file[0].providerResponse.location;
                var bannerData = {
                    pageTitle: $scope.bannerPage,
                    image: imageUrl,
                    url : $scope.url,
                    date : currentDate()
                }
                console.log(currentDate());
                bannerServices.bannerCreate(bannerData).then(function successCallback(response) {
                    $state.reload();
                }, function errorCallback(response) {
                    return response;
                });
            });
        }

        function currentDate(){
            var today = new Date();  
            var dd = today.getDate();  
              
            var mm = today.getMonth()+1;   
            var yyyy = today.getFullYear();  
            if(dd<10){  
                dd='0'+dd;  
            }   
            if(mm<10){  
                mm='0'+mm;  
            }   
            today = yyyy+'-'+mm+'-'+dd;  
            return today; 
        }

        $scope.showDeleteModel = function(id){
            $scope.bannerId = id;
            var modalInstance = $uibModal.open({
                templateUrl: 'bannerDeleteModel.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    items: function () {
                        return $scope.bannerId;
                    }
                }
            });
        }

        var ModalInstanceCtrl = function ($scope, $uibModalInstance,items) {
            $scope.bannerId = items;
            $scope.ok = function (id) {
                bannerServices.getBanner(id).then(function successCallback(response) {
                    var data = {
                        container : "edootech-banner-images",
                        file : response.image
                    };
                    console.log(data);
                    examServices.deleteImages(data).then(function successCallback(response) {
                    }, function errorCallback(response) {
                        return response;
                    });
                }, function errorCallback(response) {
                    return response;
                });
                
                bannerServices.deleteBanner(id).then(function successCallback(response) {
                    $uibModalInstance.close();
                    $state.reload();
                }, function errorCallback(response) {
                    return response;
                });
            };
            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }

        $scope.showBannerEditModel = function(id){
            $scope.bannerId = id;
            bannerServices.getBanner(id).then(function successCallback(response) {
                var modalInstance = $uibModal.open({
                    templateUrl: 'bannerEditModel.html',
                    controller: BannerModalInstanceCtrl,
                    resolve: {
                        items: function () {
                            return response;
                        }
                    }
                });
            }, function errorCallback(response) {});
        }

        var BannerModalInstanceCtrl = function ($scope, $uibModalInstance,items) {
            $scope.banner = items;
            $scope.updateBanner = function (id) {
                var bannerId = id;
                if($scope.bannerImage != null){
                    var bannerImageData = {
                        container:"edootech-banner-images",
                        file : $scope.bannerImage
                    }
                    examServices.uploadImages(bannerImageData).then(function successCallback(response) {
                        var imageUrl = response.data.result.files.file[0].providerResponse.location;
                        var bannerData = {
                            pageTitle: $scope.bannerPage,
                            image: imageUrl,
                            date : currentDate(),
                            url : $scope.banner.url,
                            id : id
                        }
                        console.log(currentDate());
                        bannerServices.bannerUpdate(bannerData).then(function successCallback(response) {
                            $uibModalInstance.close();
                            $state.reload();
                        }, function errorCallback(response) {
                            return response;
                        });
                    });
                }else{
                    var bannerData = {
                        pageTitle: $scope.bannerPage,
                        date : currentDate(),
                        url : $scope.banner.url,
                        id : id
                    }
                    console.log(currentDate());
                    bannerServices.bannerUpdate(bannerData).then(function successCallback(response) {
                        $uibModalInstance.close();
                        $state.reload();
                    }, function errorCallback(response) {
                        return response;
                    });
                }
            };
        }
        
    });
