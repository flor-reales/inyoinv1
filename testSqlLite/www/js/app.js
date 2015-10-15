// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function()
  {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }

      if(window.cordova)
      {
          db = $cordovaSQLite.openDB("curso.db");
      }
      else
      {
          db = window.openDatabase("curso.db", "1.0", "Curso", -1);
      }

	  $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS items (id integer primary key,  nivel integer, categ integer, item integer, descríp text, pathImagen1 text, pathImagen2 text, pathImagen3 text, resp1 text, pathR1 text, resp2 text, pathR2 text, resp3 text, pathR3 text, correcta text, frase text, frasecompleta text)");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, descríp , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , correcta, frase, frasecompleta) VALUES (2,3,1, 'Caballo', 'img\caballo.png','img\gato.png','img\perro.png','Dog','sonidos\perro.mp3', 'Horse','sonidos\caballo.mp3','Cat','sonidos\gato.mp3','Horse',' ',' ')");
  });
})

.controller ("AppExit", function ($scope) {
 $scope.exit = function(){
   var r=window.confirm("¿Esta seguro que desea salir?");
    if (r==true){
      if(window.navigator.app){
        navigator.app.exitApp();
        } else if(window.device.app){
          device.app.exitApp();
        }
    }
 }
})

.config(function($stateProvider, $urlRouterProvider)
{
    $stateProvider
      .state("users", {
        url: "/users",
        templateUrl: "templates/users.html",
        controller: "usersCtrl",
        cache: false
      })
      .state("addUsers", {
        url: "/users/add",
        templateUrl: "templates/add.html",
        controller: "usersCtrl"
      })

    $urlRouterProvider.otherwise("/users");
})
