'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOMâ„˘ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOMâ„˘',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});

var mujModul = angular.module('testModul', []);

mujModul.controller('naKlik', function($scope) {
    $scope.obce = [
        {'nazev' : 'Praha',
            'id' : 1,
            'kraj' : 'Praha'},
        {'nazev' : 'Plzeň',
            'id' : 5,
            'kraj' : 'Západní Čechy'},
        {'nazev' : 'Vsetín',
            'id' : 3,
            'kraj' : 'Morava'}
    ];
})
