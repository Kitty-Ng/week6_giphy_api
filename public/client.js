console.log('working client.js')

var myApp = angular.module('myApp', []);

myApp.controller ('ImageController', function($http){
    var vm = this;
    vm.funny = {gifs:[]}
    vm.getGiphy = function(){
        $http({
            method: 'GET',
            url: '/giphy'
        }).then(function(res){
            vm.funny.gifs = res.data
        })
    };

    // vm.searchGiphy = function(commentIn , id){
    //     var newSearch = {
    //         id: id,
    //         comment: commentIn
    //     };
    //     $http({
    //         method: "POST",
    //         url: '/images',
    //         data: newComment,   
    //     }).then(function(res){
    //         vm.imgArr = res.data
    //     })
    // }

});