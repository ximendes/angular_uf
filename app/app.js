'use strict';
var app = angular.module('app', ['ngRoute',
                                'app.listagem',
                                'ui.utils.masks']);

app.constant('urls', {
    USER_SERVICE_API : 'https://java-app-uf.herokuapp.com/api/uf/'
});

app.config(['$locationProvider', '$routeProvider', '$httpProvider', function ($locationProvider, $routeProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/uflistagem.html',
        controller: 'UfListagemController'
    }).otherwise({redirectTo: '/'});
}]);


