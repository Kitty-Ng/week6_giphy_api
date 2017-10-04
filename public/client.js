console.log('working client.js')

var myApp = angular.module('myApp', []);

myApp.controller ('ImageController', function($http){
    var vm = this;
    vm.gifContainer = {data: []};

    vm.searchGiphy = function(){
        $http({
            method: "GET",
            url: '/giphy/' + vm.searchIn,  
        }).then(function(res){
            vm.gifContainer.data = res.data;
        })
    }

});