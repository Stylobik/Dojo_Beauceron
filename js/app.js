(function(){
    var app = angular.module('dojo', []);

    //app.controller('dojoController',function(){

        app.controller('DocumentsController', function($scope){
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
                images: "/documents/Autorisation_photo.jpg",
            },
            {
                id: 3,
                name: 'Autorisation Test Anti-Dopage',
                link: "/documents/Autorisation_test_anti_dopage.pdf",
                download: "Autorisation_test_anti_dopage.pdf",
                images: "/documents/Autorisation_test_anti_dopage.jpg",
            },
            {
                id: 4,
                name: 'Certificat Médical',
                link: "/documents/Certificat_medical.pdf",
                download: "Certificat_medical.pdf",
                images: "/documents/Certificat_medical.jpg",
            },
            {
                id: 5,
                name: 'Notice renouvellement licence',
                link: "/documents/notice_demande_de_renouvellement.pdf",
                download: "notice_demande_de_renouvellement.pdf",
                images: "/documents/notice_demande_de_renouvellement.jpg",
            },
            {
                id: 6,
                name: 'Coupon AG',
                link: "/documents/Coupon_AG.pdf",
                download: "Coupon_AG.pdf",
                images: "/documents/Coupon_AG.jpg",
            },
            {
                id: 7,
                name: 'Pouvoir AG',
                link: "/documents/Pouvoir_AG.pdf",
                download: "Pouvoir_AG.pdf",
                images: "/documents/Pouvoir_AG.jpg",
            },
            {
                id: 8,
                name: 'Horaires',
                link: "/documents/Horaires.pdf",
                download: "Horaires.pdf",
                images: "/documents/Horaires.jpg",
            },
            {
                id: 9,
                name: 'Tarifs',
                link: "/documents/Tarif.pdf",
                download: "Tarif.pdf",
                images: "/documents/Tarif.jpg",
            }
            ];
        });

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

        app.directive('slideAccueil', function(){
            return {
                restrict : 'EA',
                name : 'slideAccueil',
                templateUrl:'/partials/accueil/slide-accueil.html'
            }
        });
        app.directive('discipline', function(){
            return {
                restrict : 'EA',
                name : 'discipline',
                templateUrl:'/partials/accueil/disciplines.html'
            }
        });
        app.directive('newsAccueil', function(){
            return {
                restrict : 'EA',
                name : 'newsAccueil',
                templateUrl : '/partials/accueil/news-accueil.html'
            }
        });

    app.directive('slideAccueil', function(){
        return {
            restrict : 'EA',
            name : 'slideAccueil',
            templateUrl:'/partials/accueil/slide-accueil.html'
        }
    });
    app.directive('discipline', function(){
        return {
            restrict : 'EA',
            name : 'discipline',
            templateUrl:'partials/accueil/disciplines.html'
        }
    });
    app.directive('newsAccueil', function(){
        return {
            restrict : 'EA',
            name : 'newsAccueil',
            templateUrl : '/partials/accueil/news-accueil.html'
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
/**************route***************/
    app.config(['$routeProvider',function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl:'partial/accueil/accueil.html',
        })
        .when('/calendrier', {
            templateUrl:'partials/calendrier/calendrier.html',
            controller: 'calendarEvents',
        })
        .when('/contact', {
            templateUrl:'partials/contact/contact.html',
            controller: '',
        })
        .when('/documents', {
            templateUrl:'partials/documents/documents.html',
            controller:'DocumentsController',
        })
        .when('/historique', {
            templateUrl:'partials/historique/historique.html',
            controller: '',
        })
        .when('/horaires', {
            templateUrl:'partials/horaires/horaires.html',
            controller: 'calendarEvents',
        })
        .when('/inscription', {
            templateUrl:'partials/inscription/Inscription_Tarifs.html',
            controller:'',
        })
        .when('/mentions', {
            templateUrl:'partials/mentions/mentions.html',
            controller:'',
        })
        .when('/news', {
            templateUrl:'partials/news/news.html',
            controller:'',
        })
        .when('/resultats', {
            templateUrl:'partials/resultats/resultats.html'
            controller:'',
        })

        ])
 //});
})();

