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

	  $cordovaSQLite.execute(db,"DROP TABLE items");

	  $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS items (id integer primary key,  nivel integer, categ integer, item integer, desc text, pathImagen1 text, pathImagen2 text, pathImagen3 text, resp1 text, pathR1 text, resp2 text, pathR2 text, resp3 text, pathR3 text, frase text, frasecompleta text)");

	  //Nivel 0
		//Categoria 1
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,1, 'ONE', 'img/0101.jpg','','','TEN','sonidos/0110.mp3','THREE','sonidos/0103.mp3','ONE','sonidos/0101.mp3', ' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,2, 'TWO', 'img/0102.jpg','','','TWO','sonidos/0102.mp3','FOUR','sonidos/0104.mp3','SIX','sonidos/0106.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,3, 'THREE', 'img/0103.jpg','','','SEVEN','sonidos/0107.mp3','FIVE','sonidos/0105.mp3','THREE','sonidos/0103.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,4, 'FOUR', 'img/0104.jpg','','','EIGHT','sonidos/0108.mp3','FOUR','sonidos/0104.mp3','NINE','sonidos/0109.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,5, 'FIVE', 'img/0105.jpg','','','SEVEN','sonidos/0107.mp3','ONE','sonidos/0101.mp3','FIVE','sonidos/0105.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,6, 'SIX', 'img/0106.jpg','','','TEN','sonidos/0110.mp3','TWO','sonidos/0102.mp3','SIX','sonidos/0106.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,7, 'SEVEN', 'img/0107.jpg','','','SEVEN','sonidos/0107.mp3','ONE','sonidos/0101.mp3','SIX','sonidos/0106.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,8, 'EIGHT', 'img/0108.jpg','','','EIGHT','sonidos/0108.mp3','ONE','sonidos/0101.mp3','FIVE','sonidos/0105.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,9, 'NINE', 'img/0109.jpg','','','NINE','sonidos/0109.mp3','ONE','sonidos/0101.mp3','THREE','sonidos/0103.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,10, 'TEN', 'img/0110.jpg','','','FOUR','sonidos/0104.mp3','SIX','sonidos/0106.mp3','TEN','sonidos/0110.mp3',' ',' ')");

		//Categoria 3
      $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,1, 'HORSE',  'img/0301.jpg','','','DOG','sonidos/0304.mp3','HORSE','sonidos/0301.mp3','CAT','sonidos/0303.mp3', ' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,2, 'RABBIT', 'img/0302.jpg','','','TURTLE','sonidos/0305.mp3','RABBIT','sonidos/0302.mp3','DUCK','sonidos/0306.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,3, 'CAT',    'img/0303.jpg','','','PIG','sonidos/0307.mp3','HORSE','sonidos/0302.mp3','DUCK','sonidos/0306.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,4, 'DOG',    'img/0304.jpg','','','DOG','sonidos/0301.mp3','CAT','sonidos/0303.mp3','TURTLE','sonidos/0305.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,5, 'TURTLE', 'img/0305.jpg','','','HORSE','sonidos/0301.mp3','DUCK','sonidos/0306.mp3','TURTLE','sonidos/0305.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,6, 'DUCK',   'img/0306.jpg','','','DUCK','sonidos/0306.mp3','CAT','sonidos/0303.mp3','RABBIT','sonidos/0302.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,7, 'PIG',    'img/0307.jpg','','','HORSE','sonidos/0301.mp3','PIG','sonidos/0307.mp3','DOG','sonidos/0304.mp3',' ',' ')");

		//Categoria 4
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,1, 'DOLL', 'img/0401.jpg','','','DOLL','sonidos/0401.mp3','MARBLE','sonidos/0409.mp3','CLAY','sonidos/0408.mp3', ' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,2, 'BALL', 'img/0402.jpg','','','PUPPET','sonidos/0407.mp3','BALL','sonidos/0402.mp3','TRICYCLE','sonidos/0406.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,3, 'PUZZLE', 'img/0403.jpg','','','BLOCKS','sonidos/0405.mp3','TEDDY BEAR','sonidos/0404.mp3','PUZZLE','sonidos/0403.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,4, 'TEDDY BEAR', 'img/0404.jpg','','','PUZZLE','sonidos/0403.mp3','BALL','sonidos/0402.mp3','TEDDY BEAR','sonidos/0404.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,5, 'BLOCKS', 'img/0405.jpg','','','DALL','sonidos/0401.mp3','BLOCKS','sonidos/0405.mp3','MARBLE','sonidos/0409.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,6, 'TRICYCLE', 'img/0406.jpg','','','TRICYCLE','sonidos/0406.mp3','CLAY','sonidos/0408.mp3','BALL','sonidos/0402.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,7, 'PUPPET', 'img/0407.jpg','','','PUPPET','sonidos/0407.mp3','PUZZLE','sonidos/0403.mp3','DOLL','sonidos/0401.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,8, 'CLAY', 'img/0408.jpg','','','TEDDY BEAR','sonidos/0404.mp3','BLOCKS','sonidos/0405.mp3','CLAY','sonidos/0408.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,9, 'MARBLE', 'img/0409.jpg','','','BALL','sonidos/0402.mp3','MARBLE','sonidos/0409.mp3','PUPPET','sonidos/0407.mp3',' ',' ')");

	//Nivel 1  (En frasecompleta esta el sonido del item correcto)
		//Categoria 1
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,1, 'BEE',    'img/1101.jpg','img/1107.jpg','img/1103.jpg','BEE','sonidos/1101.mp3','SHARK','sonidos/1107.mp3','ANT','sonidos/1103.mp3', ' ','sonidos/1101.mp3')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,2, 'SPIDER', 'img/1105.jpg','img/1102.jpg','img/1104.jpg','FISH','sonidos/1105.mp3','SPIDER','sonidos/1102.mp3','SHEEP','sonidos/1104.mp3',' ','sonidos/1102.mp3')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,3, 'ANT',    'img/1101.jpg','img/1106.jpg','img/1103.jpg','BEE','sonidos/1101.mp3','FROG','sonidos/1106.mp3','ANT','sonidos/1103.mp3',' ','sonidos/1103.mp3')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,4, 'SHEEP',  'img/1102.jpg','img/1107.jpg','img/1104.jpg','SPIDER','sonidos/1102.mp3','SHARK','sonidos/1107.mp3','SHEEP','sonidos/1104.mp3',' ','sonidos/1104.mp3')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,5, 'FISH',   'img/1103.jpg','img/1105.jpg','img/1101.jpg','ANT','sonidos/1103.mp3','FISH','sonidos/1105.mp3','BEE','sonidos/1101.mp3',' ','sonidos/1105.mp3')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,6, 'FROG',   'img/1106.jpg','img/1102.jpg','img/1104.jpg','FROG','sonidos/1106.mp3','SPIDER','sonidos/1102.mp3','SHEEP','sonidos/1104.mp3',' ','sonidos/1106.mp3')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,7, 'SHARK',  'img/1103.jpg','img/1107.jpg','img/1101.jpg','ANT','sonidos/1103.mp3','SHARK','sonidos/1107.mp3','BEE','sonidos/1101.mp3',' ','sonidos/1107.mp3')");

	//Nivel 2  ()
		//Categoria 1
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,1,1, '',  'img/2101.jpg','img/2102.jpg','img/2103.jpg','LIGHT BLUE','sonidos/2101.mp3','BROWN','sonidos/2103.mp3','GREY','sonidos/2102.mp3', ' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,1,2, '',  'img/2104.jpg','img/2105.jpg','img/2106.jpg','GREEN','sonidos/2106.mp3','PINK','sonidos/2104.mp3','ORANGE','sonidos/2105.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,1,3, '',  'img/2107.jpg','img/2108.jpg','img/2109.jpg','SILVER','sonidos/2108.mp3','GOLDEN','sonidos/2109.mp3','VIOLET','sonidos/2107.mp3',' ',' ')");

		//Categoria 6
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,6,1, 'WATERMELON', 'img/2601.jpg','','','MELON','sonidos/2605.mp3','GREEN','sonidos/2106.mp3','WATERMELON','sonidos/2601.mp3', ' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,6,2, 'GRAPE',      'img/2602.jpg','','','VIOLET','sonidos/2107.mp3','GRAPE','sonidos/2602.mp3','STRAWBERRY','sonidos/2604.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,6,3, 'MANDARIN',   'img/2603.jpg','','','MANDARIN','sonidos/2603.mp3','WATERMELON','sonidos/2601.mp3','ORANGE','sonidos/2105.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,6,4, 'STRAWBERRY', 'img/2604.jpg','','','RED','sonidos/0205.mp3','STRAWBERRY','sonidos/2604.mp3','GRAPE','sonidos/2602.mp3',' ',' ')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,6,5, 'MELON',      'img/2605.jpg','','','MANDARIN','sonidos/2603.mp3','YELLOW','sonidos/0201.mp3','MELON','sonidos/2605.mp3',' ',' ')");

	 //Nivel 4  ()
		//Categoria 4
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,4,1, '',    'img/1101.jpg','img/1107.jpg','img/1103.jpg','BEE','sonidos/1101.mp3','SHARK','sonidos/1107.mp3','ANT','sonidos/1103.mp3', ' ','sonidos/1101.mp3')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,4,2, 'SPIDER', 'img/1105.jpg','img/1102.jpg','img/1104.jpg','FISH','sonidos/1105.mp3','SPIDER','sonidos/1102.mp3','SHEEP','sonidos/1104.mp3',' ','sonidos/1102.mp3')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,4,3, 'ON',    'img/4403.jpg','','','ON','sonidos/4403.mp3','IN','sonidos/4405.mp3','UNDER','sonidos/4404.mp3','THE CAT IS _ THE TABLE','THE CAT IS ON THE TABLE')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,4,4, 'SHEEP',  'img/1102.jpg','img/1107.jpg','img/1104.jpg','SPIDER','sonidos/1102.mp3','SHARK','sonidos/1107.mp3','SHEEP','sonidos/1104.mp3',' ','sonidos/1104.mp3')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,4,5, 'FISH',   'img/1103.jpg','img/1105.jpg','img/1101.jpg','ANT','sonidos/1103.mp3','FISH','sonidos/1105.mp3','BEE','sonidos/1101.mp3',' ','sonidos/1105.mp3')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,4,6, 'FROG',   'img/1106.jpg','img/1102.jpg','img/1104.jpg','FROG','sonidos/1106.mp3','SPIDER','sonidos/1102.mp3','SHEEP','sonidos/1104.mp3',' ','sonidos/1106.mp3')");
	  $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,4,7, 'SHARK',  'img/1103.jpg','img/1107.jpg','img/1101.jpg','ANT','sonidos/1103.mp3','SHARK','sonidos/1107.mp3','BEE','sonidos/1101.mp3',' ','sonidos/1107.mp3')");

  });
})

.controller ("AppExit", function ($scope) {
 $scope.exit = function(){
   var r=window.confirm("ARE YOU SURE YOU WANT TO QUIT?");
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
