var app = angular.module('AngularGoogleMap', ['google-maps','ngRoute','ui.bootstrap','ngAside']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "views/mapa.html",
        controller: "mapController"
    })
    .when("/registro", {
        templateUrl: "views/formulario_registro.html",
        controller: "userController"
    })
    .otherwise({ redirectTo : "/"});
}]);

a