(function(){
    var app = angular.module('fullcal', ['ui.calendar']);

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

    app.controller('calendarEvents', ['$scope', function($scope){

      var date = new Date();
      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear();

      /* event source that contains custom events on the scope */

      $scope.events = [
        { title: 'All Day Event', start: new Date(y, m, 1) },
        { title: 'Long Event', start: new Date(y, m, d - 5), end: new Date(y, m, d - 2) },
        { id: 999, title: 'Repeating Event', start: new Date(y, m, d - 3, 16, 0), allDay: false },
        { id: 999, title: 'Repeating Event', start: new Date(y, m, d + 4, 16, 0), allDay: false },
        { title: 'Birthday Party', start: new Date(y, m, d + 1, 19, 0), end: new Date(y, m, d + 1, 22, 30), allDay: false },
        { title: 'Click for Google', start: new Date(y, m, 28), end: new Date(y, m, 29), url: 'http://google.com/' }
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
              eventRender: $scope.eventRender
          }   
      };

      /* event sources array*/
      $scope.eventSources = [$scope.events];

    }]);

 //});
})();

