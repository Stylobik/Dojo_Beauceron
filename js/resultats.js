(function() {
    var app = angular.module('result', []);

    app.controller('resultatsController', function($scope){
        $scope.resultats = [{
            annee: [{
                date: "2016-2017"
                },
                {
                    date: "2015-2016"
                },
                {
                    date: "2014-2015"
                },
                {
                    date: "2013-2014"
                },
                {
                    date: "2012-2013"
                },
                {
                    date: "2011-2012"
                },
                {
                    date: "2010-2011"
                }],
            categories: [{
                age: "Poussins"
            },
                {
                    age: "Benjamins"
                },
                {
                    age: "Minimes"
                },
                {
                    age: "Cadets"
                },
                {
                    age: "Juniors"
                },
                {
                    age: "Seniors"
                },
                {
                    age: "Vétérans"
                }],
            podium: [{
                id: 1,
                title: "Compétition du 12/06/16",
                images: "/img/resultats.jpg",
                description: "Un peu de blabla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est rem repudiandae magni"
            },
                {
                    id: 2,
                    title: "Compétition du 2/06/16",
                    images: "/img/resultats.jpg",
                    description: "Un peu de bla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est rem repudiandae magni"
                }]
        }];
    });
})();


