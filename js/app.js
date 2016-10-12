(function(){
    var app = angular.module('dojo', []);

    app.controller('dojoController',function(){


    });

    app.directive('liens',function(){
        return {
            restrict : 'E',
            name : 'liens',
            templateUrl : '../../partials/common/liens.html'
        }
    });

    app.directive('navigation',function(){
        return {
            restrict : 'E',
            name : 'navigation',
            templateUrl : '../../partials/common/navigation.html'
        }
    });

    app.directive('pied',function(){
        return {
            restrict : 'E',
            name : 'pied',
            templateUrl: '../../partials/common/pied.html'
        }
    });

})();

