(function(){
    var app = angular.module('dojo', ['ngLoadScript','ngRoute', 'ui.calendar', 'ajoslin.promise-tracker']);

    /**************route***************/
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl:'partials/accueil/accueil.html',
            controller: 'accueilController',
            controllerAs: 'accueilCtrl'
        })
        .when('/accueil', {
            templateUrl:'partials/accueil/accueil.html',
            controller: 'accueilController',
            controllerAs: 'accueilCtrl'
        })
        .when('/calendrier', {
            templateUrl:'partials/calendrier/calendrier.html',
            controller: 'calendarEvents'
        })
        .when('/contact', {
            templateUrl:'partials/contact/contact.html',
            controller: 'FormController'
        })
        .when('/documents', {
            templateUrl:'partials/documents/documents.html',
            controller:'documentsController'
        })
        .when('/historique', {
            templateUrl:'partials/historique/historique.html',
            controller: 'historiqueController'
        })
        .when('/horaires', {
            templateUrl:'partials/horaires/horaires.html',
            controller: 'planningController'
        })
        .when('/inscription', {
            templateUrl:'partials/inscription/Inscription_Tarifs.html',
            controller:'inscriptionController'
        })
        .when('/mentions', {
            templateUrl:'partials/mentions/mentions.html',
            controller:'mentionsController'
        })
        .when('/news', {
            templateUrl:'partials/news/news.html',
            controller: 'newsController'
        })
        .when('/resultats', {
            templateUrl:'partials/resultats/resultats.html',
            controller:'resultatsController'
        })
        .otherwise({
            redirectTo: '/'
        })
            /**controllerAs: **/
        }]);
    /*********************fin route***************/

    //app.controller('dojoController',function(){

/****************CONTROLLER**************/

app.controller("PannelController",function(){
    this.tab = 1;

    this.selectTab = function(setTab){
        this.tab = setTab;
    };

    this.isSelected = function(checkTab){
        if(this.tab === checkTab){
            return true;
        }
    }
});

    app.controller('mainController', function ($scope,$location) {
        $scope.id = 1;
        $scope.setId = function(hash){
            switch(hash){
                case 'carousel-example-generic': this.id = 1;break;
                case 'judo': this.id = 2;break;
                case 'jujitsu': this.id = 3;break;
                case 'taiso': this.id = 4;break;
            }
            console.log(hash)
            $location.hash(hash);
            $location.hash('');
        }
    });





    app.controller('LiensCtrl', function($scope){
        $scope.liens = [{
            links: [{
                name: "accueil",
                li_name: "Accueil"
            },
                {
                    name: "news",
                    li_name: "Actualités"
                },
                {
                    name: "calendrier",
                    li_name: "Calendrier"
                },
                {
                    name: "resultats",
                    li_name: "Résultats"
                },
                {
                    name: "contact",
                    li_name: "Contact"

                }], menu: [{

                sName: "horaires",
                sLi: "Horaires"
            },
                {
                    sName: "inscription",
                    sLi: "Inscription"
                },
                {
                    sName: "historique",
                    sLi: "Historique"
                },
                {
                    sName: "documents",
                    sLi: "Documents"
                }]
        }];

        $scope.lienCourant = null;
        $scope.selectionLien = function(lien) {
            $scope.lienCourant = lien;
        };
    });


        app.controller('documentsController', function($scope,$location){
            $scope.documents = [

            {
                id: 1,
                name: 'Autorisation Permanente',
                link: "/documents/Autorisation_permanente.pdf",
                download: "Autorisation_permanente.pdf",
                images: "/documents/Autorisation_permanente.jpg"
            }, {
                id: 2,
                name: 'Autorisation Photo',
                link: "/documents/Autorisation_photo.pdf",
                download: "Autorisation_photo.pdf",
                images: "/documents/Autorisation_photo.jpg"
            },
            {
                id: 3,
                name: 'Autorisation Test Anti-Dopage',
                link: "/documents/Autorisation_test_anti_dopage.pdf",
                download: "Autorisation_test_anti_dopage.pdf",
                images: "/documents/Autorisation_test_anti_dopage.jpg"
            },
            {
                id: 4,
                name: 'Certificat Médical',
                link: "/documents/Certificat_medical.pdf",
                download: "Certificat_medical.pdf",
                images: "/documents/Certificat_medical.jpg"
            },
            {
                id: 5,
                name: 'Notice renouvellement licence',
                link: "/documents/notice_demande_de_renouvellement.pdf",
                download: "notice_demande_de_renouvellement.pdf",
                images: "/documents/notice_demande_de_renouvellement.jpg"
            },
            {
                id: 6,
                name: 'Coupon AG',
                link: "/documents/Coupon_AG.pdf",
                download: "Coupon_AG.pdf",
                images: "/documents/Coupon_AG.jpg"
            },
            {
                id: 7,
                name: 'Pouvoir AG',
                link: "/documents/Pouvoir_AG.pdf",
                download: "Pouvoir_AG.pdf",
                images: "/documents/Pouvoir_AG.jpg"
            },
            {
                id: 8,
                name: 'Horaires',
                link: "/documents/Horaires.pdf",
                download: "Horaires.pdf",
                images: "/documents/Horaires.jpg"
            },
            {
                id: 9,
                name: 'Tarifs',
                link: "/documents/Tarif.pdf",
                download: "Tarif.pdf",
                images: "/documents/Tarif.jpg"
            }
        ];
            $scope.id = 1;
            $scope.setId = function(hash){
                switch(hash){
                    case 'myCarousel': this.id = 1;break;
                }
                //console.log(hash)
                $location.hash(hash);
                $location.hash('');
            }
    });
        app.controller('accueilController', function () {

    });
        app.controller('FormController', function ($scope, $http, $log, promiseTracker) {
          $scope.submit = function(form) {
            // Trigger validation flag.
            $scope.submitted = true;

            // If form is invalid, return and let AngularJS show validation errors.
            if (form.$invalid) {
              return;
            }

            // Default values for the request.
            var config = {
              params : {
                'callback' : 'JSON_CALLBACK',
                'name' : $scope.name,
                'lastName' : $scope.lastName,
                'email' : $scope.email,
                'comments' : $scope.comments
              },
            };

            // Perform JSONP request.
            var $promise = $http.jsonp('response.json', config)
            .success(function(data, status, headers, config) {
              if (data.status == 'OK') {
                $scope.name = null;
                $scope.lastName = null;
                $scope.email = null;
                $scope.comments = null;
                $scope.messages = 'Your form has been sent!';
                $scope.submitted = false;
              } else {
                $scope.messages = 'Oops, we received your request, but there was an error processing it.';
                $log.error(data);
              }
            })
            .error(function(data, status, headers, config) {
              $scope.progress = data;
              $scope.messages = 'There was a network error. Try again later.';
              $log.error(data);
            })
            .finally(function() {
              // Hide status messages after three seconds.
              $timeout(function() {
                $scope.messages = null;
              }, 3000);
            });

            // Inititate the promise tracker to track form submissions.
            $scope.progress = promiseTracker();

            // Track the request and show its progress to the user.
            $scope.progress.addPromise($promise);
          };
    });
        app.controller('historiqueController', function () {
    });
    app.controller('planningController', function ($scope,$location) {
        $scope.tab = 1;
        $scope.setTab = function(hash){
            switch(hash){
                case 'mainvilliers': this.tab = 1;break;
                case 'madeleine': this.tab = 2;break;
                case 'fontaine' : this.tab = 3;break;
            }
            console.log(hash)
            $location.hash(hash);
            $location.hash('');
        }

    });
        app.controller('inscriptionController', function () {
    });
        app.controller('mentionsController', function () {
    });
        app.controller('newsController', function($scope) {
          $scope.newslist = [
            {
            titre : "TITRE NEWS 1",
            img : "../../img/photo3.jpg",
            texte : "Etiam fermentum non tellus pellentesque bibendum. Nulla quis lacinia sem. Nullam dictum nisl eget nunc pretium, eget interdum mauris volutpat. Etiam fermentum non tellus pellentesque bibendum. Nulla quis lacinia sem. Nullam dictum nisl eget nunc pretium, eget interdum mauris volutpat.",
            lien : 'en savoir plus'},
            {
            titre : "TITRE NEWS 2",
            img : "../../img/slide1.jpg",
            texte : "Etiam fermentum non tellus pellentesque bibendum. Nulla quis lacinia sem. Nullam dictum nisl eget nunc pretium, eget interdum mauris volutpat. Etiam fermentum non tellus pellentesque bibendum. Nulla quis lacinia sem. Nullam dictum nisl eget nunc pretium, eget interdum mauris volutpat.",
            lien : 'en savoir plus'},
            {
            titre : "TITRE NEWS 3",
            img : "../../img/slide2.jpg",
            texte : "Etiam fermentum non tellus pellentesque bibendum. Nulla quis lacinia sem. Nullam dictum nisl eget nunc pretium, eget interdum mauris volutpat. Etiam fermentum non tellus pellentesque bibendum. Nulla quis lacinia sem. Nullam dictum nisl eget nunc pretium, eget interdum mauris volutpat.",
            lien : 'en savoir plus'},
            {
            titre : "TITRE NEWS 4",
            img : "../../img/slide2.jpg",
            texte : "Etiam fermentum non tellus pellentesque bibendum. Nulla quis lacinia sem. Nullam dictum nisl eget nunc pretium, eget interdum mauris volutpat. Etiam fermentum non tellus pellentesque bibendum. Nulla quis lacinia sem. Nullam dictum nisl eget nunc pretium, eget interdum mauris volutpat.",
            lien : 'en savoir plus'},
            {
            titre : "TITRE NEWS 5",
            img : "../../img/photo3.jpg",
            texte : "Etiam fermentum non tellus pellentesque bibendum. Nulla quis lacinia sem. Nullam dictum nisl eget nunc pretium, eget interdum mauris volutpat. Etiam fermentum non tellus pellentesque bibendum. Nulla quis lacinia sem. Nullam dictum nisl eget nunc pretium, eget interdum mauris volutpat.",
            lien : 'en savoir plus'},
            {
            titre : "TITRE NEWS 6",
            img : "../../img/slide1.jpg",
            texte : "Etiam fermentum non tellus pellentesque bibendum. Nulla quis lacinia sem. Nullam dictum nisl eget nunc pretium, eget interdum mauris volutpat. Etiam fermentum non tellus pellentesque bibendum. Nulla quis lacinia sem. Nullam dictum nisl eget nunc pretium, eget interdum mauris volutpat.",
            lien : 'en savoir plus'}
          ];
    });
        app.controller('resultatsController', function ($scope) {
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
                age: "Tous"
            },
                {
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

/************** DIRECTIVES *************/


    app.directive('liens',function(){
        return {
            restrict : 'EA',
            name : 'liens',
            templateUrl : '/partials/common/liens.html'
        }
    });

    app.directive('navigation',function(){
        return {
            restrict : 'EA',
            name : 'navigation',
            templateUrl : '/partials/common/navigation.html'
        }
    });

    app.directive('pied',function(){
        return {
            restrict : 'EA',
            name : 'pied',
            templateUrl: '/partials/common/pied.html'
        }
    });


    app.directive('corpsHistorique', function(){
        return {
            restrict : 'EA',
            name : 'corpsHistorique',
            templateUrl : '/partials/historique/corps-historique.html'
        }
    });

    app.directive('corpsMentions', function(){
        return {
            restrict : 'EA',
            name : 'corpsMentions',
            templateUrl : '/partials/mentions/corps-mentions.html'
        }
    });


    app.directive('sliderDocuments', function(){
        return {
            restrict : 'EA',
            name : 'sliderDocuments',
            templateUrl : '/partials/documents/slider-documents.html'
        }
    });


    app.directive('selectAnnee', function(){
        return {
            restrict : 'EA',
            name : 'selectAnnee',
            templateUrl : '/partials/resultats/select-annee.html'
        }
    });

    app.directive('selectSexe', function(){
        return {
            restrict : 'EA',
            name : 'selectSexe',
            templateUrl : '/partials/resultats/select-sexe.html'
        }
    });

    app.directive('selectCategorie', function(){
        return {
            restrict : 'EA',
            name : 'selectCategorie',
            templateUrl : '/partials/resultats/select-categorie.html'
        }
    });

    app.directive('searchCategorie', function(){
        return {
            restrict : 'EA',
            name : 'searchCategorie',
            templateUrl : '/partials/resultats/search-categorie.html'
        }
    });

    app.directive('photothequeResultats',function(){
        return {
            restrict :'EA',
            name : 'photothequeResultats',
            templateUrl : '/partials/resultats/phototheque-resultats.html'
        }
    });

/* SCRIPTS CALENDRIER  */

    app.controller('calendarEvents', ['$scope', function($scope){

      var date = new Date();
      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear();

      /* event source that contains custom events on the scope */

      $scope.events = [
        { title: 'All Day Event', start: new Date(y, m, 1), description:'Un peu de blabla pour test', color: '#BA515C' },
        { title: 'Long Event', start: new Date(y, m, d - 5), end: new Date(y, m, d - 2), description:'Un peu de blabla pour test', color:'#BA515C' },
        { id: 999, title: 'Repeating Event', start: new Date(y, m, d - 3, 16, 0), allDay: false, description:'Un peu de blabla pour test', color: '#3A87AD' },
        { id: 999, title: 'Repeating Event', start: new Date(y, m, d + 4, 16, 0), allDay: false, description:'Un peu de blabla pour test', color: '#3A87AD' },
        { title: 'Birthday Party', start: new Date(y, m, d + 1, 19, 0), end: new Date(y, m, d + 1, 22, 30), allDay: false, description:'Un peu de blabla pour test', color: '#7A771D' },
        { title: 'Réunion mensuelle', start: new Date(y, m, 28), end: new Date(y, m, 29), description:'Un peu de blabla pour test', color: '#7A771D' }
      ];

      /* config object */

      $scope.uiConfig = {
          calendar: {
          	  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
              monthNamesShort: ['Janv','Févr','Mars','Avr','Mai','Juin','Juill','Août','Sept','Oct','Nov','Déc'],
              dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
              dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
              height: 600,
              header: {
                  left: 'title',
                  center: '',
                  right: 'today prev,next'
              },

              eventRender: $scope.eventRender,

              eventClick:  function(calEvent) {
              $('#modalTitle').html(calEvent.title);
              $('#modalBody').html(calEvent.description);
              $('#fullCalModal').modal();
              }
          }
      };

      /* event sources array */
      $scope.eventSources = [$scope.events];

    }]); /* Fin du calendarEvents controller */

/* FIN SCRIPTS CALENDRIER */


})();
