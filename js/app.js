(function(){
    var app = angular.module('dojo', []);

    app.controller('AccueilController',function(){


    });

    app.directive('navigation',function(){
        return {
            restrict : 'E',
            name : 'navigation',
            templateUrl : '../../partials/common/header.html'
        }
    });

    app.directive('pied',function(){
        return {
            restrict : 'E',
            name : 'pied',
            templateUrl: '../../partials/common/footer.html'
        }
    });

})();

