(function(){
    var app = angular.module('dojo', ['ngRoute', 'ui.calendar', 'ajoslin.promise-tracker','ngSanitize']);

    //app.controller('dojoController',function(){

/****************CONTROLLER**************/

app.controller("PannelController",function(){
});

    app.controller('mainController', function () {

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


        app.controller('documentsController', function($scope, $location){
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
        app.controller('newsController', function ($scope) {
    });
        app.controller('resultatsController', function ($scope,$sce) {
            $scope.resultats = [{
            annee: [{
                date: "2016-2017"
                },
                {
                    date: "2015-2016"
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
                title: "1/4 de finale seniors Orléans - 20 mars 2016 ",
                images: "/img/logo.png",
                description: $sce.trustAsHtml("- 60 kg : -<br/>1er Peter KIERNAN<br/>5ième Tony KIERNAN<br/><br/>- 81 kg : -<br/>3ième Nouar BOUDERGUI<br/><br/>- 100 kg : -<br/>3ième Johanic FERRAND<br/><br/>Tous qualifiés pour les 1/2 finales")
                },
                {
                id: 2,
                title: "Tournoi de Voves Benjamins - 20 mars 2016",
                images: "/img/resultats01.jpg",
                description: $sce.trustAsHtml("- 34 kg : -<br/>1er : Célian<br/>2ième : Tanguy")
                },
                {
                id: 3,
                title: "2ième Grand Prix Benjamins Epernon -13 mars 2016",
                images: "/img/resultats02.jpg",
                description: $sce.trustAsHtml("Matheo 1er et Amine 2ème.")
                },
                {
                id: 4,
                title: "1/4 de Finale Juniors - 27 février 2016",
                images: "/img/resultats.jpg",
                description: "Un peu de blabla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est rem repudiandae magni"
                },
                {
                id: 5,
                title: "Grand Prix Benjamin Départemental de Saint Georges sur Eure- 31 janvier 2016",
                images: "/img/resultats.jpg",
                description: "Un peu de blabla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est rem repudiandae magni"
                },
                {
                id: 6,
                title: "Tournoi de Chateaudun le 06/02/2016",
                images: "/img/resultats.jpg",
                description: "Un peu de blabla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est rem repudiandae magni"
                },
                {
                id: 7,
                title: "Tournoi de Dreux par Equipe - 09 janvier 2016",
                images: "/img/resultats.jpg",
                description: "Un peu de blabla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est rem repudiandae magni"
                },
                {
                id: 8,
                title: "Le 13 et 14 /12/15 - Championnat de France séniors 2ème division et coupe de France",
                images: "/img/resultats.jpg",
                description: "Un peu de blabla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est rem repudiandae magni"
                },
                {
                id: 9,
                title: "Le 29/11/15 - Championnat régional séniors 2ème division",
                images: "/img/resultats.jpg",
                description: "Un peu de blabla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est rem repudiandae magni"
                },
                {
                id: 10,
                title: "Le 28/11/15 - Tournoi excellence Minimes d’Orléans",
                images: "/img/resultats.jpg",
                description: "Un peu de blabla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est rem repudiandae magni"
                },
                {
                id: 11,
                title: "le 23/10/15 - Coupe de France CADETTE à Ceyrat",
                images: "/img/resultats.jpg",
                description: "Un peu de blabla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est rem repudiandae magni"
                },
                {
                id: 12,
                title: "Le 13/10/15 - Coupe départementale cadet à Saint Georges Sur Eure ",
                images: "/img/resultats.jpg",
                description: "Un peu de blabla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est rem repudiandae magni"
                },
                {
                id: 13,
                title: "20 septembre 2015 - Tournoi JC Grand Rouen",
                images: "/img/resultats.jpg",
                description: "Un peu de blabla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est rem repudiandae magni"
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


/**************route***************/
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl:'partials/accueil/accueil.html',
            controller: 'accueilController'
        })
        .when('/accueil', {
            templateUrl:'partials/accueil/accueil.html',
            controller: 'accueilController'
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
            controller:'documentsController',
            controllerAs : 'storeDocument'
        })
        .when('/historique', {
            templateUrl:'partials/historique/historique.html',
            controller: 'historiqueController'
        })
        .when('/horaires', {
            templateUrl:'partials/horaires/horaires.html',
            controller: 'planningController',
            controllerAs : 'storePlanning'
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

})();
