(function(){
    var app = angular.module('dojo', []);

    app.controller('AccueilController',function(){


    });

    app.directive('lien',function(){
        return {
            restrict : 'E',
            name : 'lien',
            templateUrl : '../../partials/common/header.html'
        }
    });

    app.directive('nav',function(){
        return {
            restrict : 'E',
            name : 'nav',
            templateUrl : '../../partials/common/nav.html'
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

