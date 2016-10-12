(function(){
    var app = angular.module('dojo', []);

    app.controller('AccueilController',function(){


    });

    app.directive('header',function(){
        return {
            restrict : 'EA',
            name : 'header',
            templateUrl : 'header.html'
        }
    });



})();

