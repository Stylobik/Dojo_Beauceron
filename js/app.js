
(function(){

    var app = angular.module('dojo', ['ngRoute', 'ui.calendar', 'ajoslin.promise-tracker','ngSanitize', 'ngLoadScript']);

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

app.controller("TabbController", function() {
    this.tabb = 0;

    this.isSet = function(checkTabb) {
      return this.tabb === checkTabb;
    };

    this.setTabb = function(setTabb) {
      this.tabb = setTabb;
    };
});

app.controller("PannelController",function(){
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
        app.controller('resultatsController', function ($scope,$sce) {
            $scope.resultats = [{
            annee: [
                {
                    date: "2016 - 2017"
                },
                {
                    date: "2015 - 2016"
                }
            ],
            genders: [
                {
                    sexe : "Tous"
                },
                {
                    sexe : "Homme"
                },
                {
                    sexe : "Femme"
                }
            ],
            categories: [
                {
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
                }
            ],
            podium: [
                {
                id: 1,
                year: "2015 - 2016",
                sex: ["Tous", "Homme"],
                category: ["Tous", "Seniors"],
                title: "1/4 de finale seniors Orléans - 20 mars 2016 ",
                images: ["/img/logo.png"],
                description: $sce.trustAsHtml("- 60 kg : -<br/>1er Peter KIERNAN<br/>5ième Tony KIERNAN<br/><br/>- 81 kg : -<br/>3ième Nouar BOUDERGUI<br/><br/>- 100 kg : -<br/>3ième Johanic FERRAND<br/><br/>Tous qualifiés pour les 1/2 finales")
                },
                {
                id: 2,
                year: "2015 - 2016",
                sex: ["Tous", "Homme"],
                category: ["Tous", "Benjamins"],
                title: "Tournoi de Voves Benjamins - 20 mars 2016",
                images: ["/img/resultats01.jpg"],
                description: $sce.trustAsHtml("- 34 kg : -<br/>1er : Célian<br/>2ième : Tanguy")
                },
                {
                id: 3,
                year: "2015 - 2016",
                sex: ["Tous", "Homme"],
                category: ["Tous", "Benjamins"],
                title: "2ième Grand Prix Benjamins Epernon -13 mars 2016",
                images: ["/img/resultats02.jpg", "/img/resultats03.jpg", "/img/resultats04.jpg", "/img/resultats05.jpg"],
                description: $sce.trustAsHtml("Photo 1 : Matheo 1er et Amine 2ème.<br/>Photo 2 : 1er : Célian<br/>Photo 3 : 2ième : Mathis<br/>Photo 4 : 1er : Tanguy")
                },
                {
                id: 4,
                year: "2015 - 2016",
                sex: ["Tous", "Homme", "Femme"],
                category: ["Tous", "Juniors"],
                title: "1/4 de Finale Juniors - 27 février 2016",
                images: ["/img/resultats06.jpg", "/img/resultats07.jpg"],
                description: $sce.trustAsHtml("Photo 1 : Laurine BALLESTERO (cadette) : 1ère qualifiée pour les 1/2 finales<br/>Photo 2 : Quentin MARTEAU : 4ème qualifié pour les 1/2 finales<br/>ohamed BANGOURA ALKALY : participation")
                },
                {
                id: 5,
                year: "2015 - 2016",
                sex: ["Tous", "Homme"],
                category: ["Tous", "Benjamins"],
                title: "Grand Prix Benjamin Départemental de Saint Georges sur Eure- 31 janvier 2016",
                images: ["/img/resultats08.jpg", "/img/resultats09.jpg"],
                description: $sce.trustAsHtml("Photo 1 : 1er Célian<br/>Photo 2 : 1er Tanguy<br/>Merci à Allain et Jean-François")
                },
                {
                id: 6,
                year: "2015 - 2016",
                sex: ["Tous", "Homme"],
                category: ["Tous", "Seniors"],
                title: "Tournoi de Chateaudun le 06/02/2016",
                images: ["/img/resultats10.jpg", "/img/resultats11.jpg", "/img/resultats12.jpg", "/img/resultats13.jpg"],
                description: $sce.trustAsHtml("L’équipe finit 2ème, composée de Flora(AUNEAU), Thibault (AUNEAU), Peter, Tony, Johannic, Nouar, Salim")
                },
                {
                id: 7,
                year: "2015 - 2016",
                sex: ["Tous", "Homme", "Femme"],
                category: ["Tous", "Benjamins"],
                title: "Tournoi de Dreux par Equipe - 09 janvier 2016",
                images: ["/img/resultats14.jpg", "/img/resultats15.jpg", "/img/resultats16.jpg"],
                description: $sce.trustAsHtml("3ième par Equipe :<br/>Mathis, Tanguy, Célian, Amine, Alexandra et Clément")
                },
                {
                id: 8,
                year: "2015 - 2016",
                sex: ["Tous", "Homme"],
                category: ["Tous", "Seniors"],
                title: "Le 13 et 14 /12/15 - Championnat de France séniors 2ème division et coupe de France",
                images: ["/img/resultats17.jpg", "/img/resultats18.jpg", "/img/resultats19.jpg"],
                description: $sce.trustAsHtml("Photo 1 : 5ème : KIERNAN Peter (sur la gauche)<br/>Photo 2 : 3ème : KIERNAN Tony")
                },
                {
                id: 9,
                year: "2015 - 2016",
                sex: ["Tous", "Homme"],
                category: ["Tous", "Seniors"],
                title: "Le 29/11/15 - Championnat régional séniors 2ème division",
                images: ["/img/resultats20.jpg", "/img/resultats21.jpg"],
                description: $sce.trustAsHtml("3ème : KIERNAN Peter qualifié au championnat de France 2ème division<br/>3ème :KIERNAN Tony qualifié à la coupe de France<br/>2ème : BOUDERGUI Salim qualifié au championnat de France 2ème division")
                },
                {
                id: 10,
                year: "2015 - 2016",
                sex: ["Tous", "Femme"],
                category: ["Tous", "Minimes"],
                title: "Le 28/11/15 - Tournoi excellence Minimes d’Orléans",
                images: ["/img/resultats22.jpg", "/img/resultats23.jpg"],
                description: $sce.trustAsHtml("3ème:CHEVEREAU Julie qualifiée au tournoi de France Cadet.")
                },
                {
                id: 11,
                year: "2015 - 2016",
                sex: ["Tous", "Femme"],
                category: ["Tous", "Cadets"],
                title: "le 23/10/15 - Coupe de France CADETTE à Ceyrat",
                images: ["/img/resultats24.jpg"],
                description: $sce.trustAsHtml("Participation de BALLESTERO Laurine")
                },
                {
                id: 12,
                year: "2015 - 2016",
                sex: ["Tous", "Homme", "Femme"],
                category: ["Tous", "Cadets"],
                title: "Le 13/10/15 - Coupe départementale cadet à Saint Georges Sur Eure ",
                images: ["/img/resultats25.jpg"],
                description: $sce.trustAsHtml("1ère : Laurine BALLESTERO qualifiée à la coupe de France à Ceyrat<br/>3ème : Ronan KUBIAC")
                },
                {
                id: 13,
                year: "2015 - 2016",
                sex: ["Tous", "Homme"],
                category: ["Tous", "Seniors"],
                title: "20 septembre 2015 - Tournoi JC Grand Rouen",
                images: ["/img/resultats26.jpg"],
                description: $sce.trustAsHtml("L’équipe senior du Dojo Beauceron fini 5ième au tournoi Grand Rouen Equipe composée de :<br/>-60 kg : KIERNAN Peter<br/>-73 kg : KIERNAN Tony<br/>-81 kg : BOUDERGUI Nouar<br/>-90 kg : BOUDERGUI Salim<br/>+90 kg : FERRAND Johanic")
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
