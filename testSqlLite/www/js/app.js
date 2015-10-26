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
   //Nivel 0 (en frasecompleta se encuentra el sonido de la opcion correcta)
   //Categoria 1
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,1, 'ONE', 'img/0101.jpg','','','TEN','sonidos/0110.mp3','THREE','sonidos/0103.mp3','ONE','sonidos/0101.mp3', ' ','sonidos/0101.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,2, 'TWO', 'img/0102.jpg','','','TWO','sonidos/0102.mp3','FOUR','sonidos/0104.mp3','SIX','sonidos/0106.mp3',' ','sonidos/0102.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,3, 'THREE', 'img/0103.jpg','','','SEVEN','sonidos/0107.mp3','FIVE','sonidos/0105.mp3','THREE','sonidos/0103.mp3',' ','sonidos/0103.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,4, 'FOUR', 'img/0104.jpg','','','EIGHT','sonidos/0108.mp3','FOUR','sonidos/0104.mp3','NINE','sonidos/0109.mp3',' ','sonidos/0104.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,5, 'FIVE', 'img/0105.jpg','','','SEVEN','sonidos/0107.mp3','ONE','sonidos/0101.mp3','FIVE','sonidos/0105.mp3',' ','sonidos/0105.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,6, 'SIX', 'img/0106.jpg','','','TEN','sonidos/0110.mp3','TWO','sonidos/0102.mp3','SIX','sonidos/0106.mp3',' ','sonidos/0106.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,7, 'SEVEN', 'img/0107.jpg','','','SEVEN','sonidos/0107.mp3','ONE','sonidos/0101.mp3','SIX','sonidos/0106.mp3',' ','sonidos/0107.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,8, 'EIGHT', 'img/0108.jpg','','','EIGHT','sonidos/0108.mp3','ONE','sonidos/0101.mp3','FIVE','sonidos/0105.mp3',' ','sonidos/0108.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,9, 'NINE', 'img/0109.jpg','','','NINE','sonidos/0109.mp3','ONE','sonidos/0101.mp3','THREE','sonidos/0103.mp3',' ','sonidos/0109.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,1,10, 'TEN', 'img/0110.jpg','','','FOUR','sonidos/0104.mp3','SIX','sonidos/0106.mp3','TEN','sonidos/0110.mp3',' ','sonidos/0110.mp3')");

   //Categoria 2
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,2,1, 'YELLOW', 'img/0201.jpg','','','RED','sonidos/0205.mp3','WHITE','sonidos/0203.mp3','YELLOW','sonidos/0201.mp3', ' ','sonidos/0201.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,2,2, 'BLUE',   'img/0202.jpg','','','BLUE','sonidos/0202.mp3','BLACK','sonidos/0204.mp3','RED','sonidos/0205.mp3',' ','sonidos/0202.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,2,3, 'WHITE',  'img/0203.jpg','','','YELLOW','sonidos/0201.mp3','WHITE','sonidos/0203.mp3','BLUE','sonidos/0202.mp3',' ','sonidos/0203.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,2,4, 'BLACK',  'img/0204.jpg','','','RED','sonidos/0205.mp3','BLACK','sonidos/0204.mp3','YELLOW','sonidos/0201.mp3',' ','sonidos/0204.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,2,5, 'RED',    'img/0205.jpg','','','RED','sonidos/0205.mp3','BLUE','sonidos/0202.mp3','WHITE','sonidos/0203.mp3',' ','sonidos/0205.mp3')");

   //Categoria 3
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,1, 'HORSE',  'img/0301.jpg','','','DOG','sonidos/0304.mp3','HORSE','sonidos/0301.mp3','CAT','sonidos/0303.mp3', ' ','sonidos/0301.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,2, 'RABBIT', 'img/0302.jpg','','','TURTLE','sonidos/0305.mp3','RABBIT','sonidos/0302.mp3','DUCK','sonidos/0306.mp3',' ','sonidos/0302.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,3, 'CAT',    'img/0303.jpg','','','PIG','sonidos/0307.mp3','HORSE','sonidos/0302.mp3','CAT','sonidos/0303.mp3',' ','sonidos/0303.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,4, 'DOG',    'img/0304.jpg','','','DOG','sonidos/0301.mp3','CAT','sonidos/0303.mp3','TURTLE','sonidos/0305.mp3',' ','sonidos/0304.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,5, 'TURTLE', 'img/0305.jpg','','','HORSE','sonidos/0301.mp3','DUCK','sonidos/0306.mp3','TURTLE','sonidos/0305.mp3',' ','sonidos/0305.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,6, 'DUCK',   'img/0306.jpg','','','DUCK','sonidos/0306.mp3','CAT','sonidos/0303.mp3','RABBIT','sonidos/0302.mp3',' ','sonidos/0306.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,3,7, 'PIG',    'img/0307.jpg','','','HORSE','sonidos/0301.mp3','PIG','sonidos/0307.mp3','DOG','sonidos/0304.mp3',' ','sonidos/0307.mp3')");

   //Categoria 4
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,1, 'DOLL',       'img/0401.jpg','','','DOLL','sonidos/0401.mp3','MARBLE BALL','sonidos/0401.mp3','CLAY','sonidos/0408.mp3', ' ','sonidos/0401.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,2, 'BALL',       'img/0402.jpg','','','PUPPET','sonidos/0407.mp3','BALL','sonidos/0402.mp3','TRICYCLE','sonidos/0406.mp3',' ','sonidos/0402.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,3, 'PUZZLE',     'img/0403.jpg','','','BLOCKS','sonidos/0405.mp3','TEDDY BEAR','sonidos/0404.mp3','PUZZLE','sonidos/0403.mp3',' ','sonidos/0403.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,4, 'TEDDY BEAR', 'img/0404.jpg','','','PUZZLE','sonidos/0403.mp3','BALL','sonidos/0402.mp3','TEDDY BEAR','sonidos/0404.mp3',' ','sonidos/0404.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,5, 'BLOCKS',     'img/0405.jpg','','','DALL','sonidos/0401.mp3','BLOCKS','sonidos/0405.mp3','MARBLE BALL','sonidos/0409.mp3',' ','sonidos/0405.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,6, 'TRICYCLE',   'img/0406.jpg','','','TRICYCLE','sonidos/0406.mp3','CLAY','sonidos/0408.mp3','BALL','sonidos/0402.mp3',' ','sonidos/0406.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,7, 'PUPPET',     'img/0407.jpg','','','PUPPET','sonidos/0407.mp3','PUZZLE','sonidos/0403.mp3','DOLL','sonidos/0401.mp3',' ','sonidos/0407.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,8, 'CLAY',       'img/0408.jpg','','','TEDDY BEAR','sonidos/0404.mp3','BLOCKS','sonidos/0405.mp3','CLAY','sonidos/0408.mp3',' ','sonidos/0408.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,4,9, 'MARBLE BALL','img/0409.jpg','','','BALL','sonidos/0402.mp3','MARBLE BALL','sonidos/0409.mp3','PUPPET','sonidos/0407.mp3',' ','sonidos/0409.mp3')");

   //Categoria 5
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,5,1, 'HEAD',  'img/0501.jpg','','','HEAD','sonidos/0501.mp3','ARM','sonidos/0505.mp3','LEG','sonidos/0504.mp3', ' ','sonidos/0501.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,5,2, 'HANDS', 'img/0502.jpg','','','FEET','sonidos/0503.mp3','HANDS','sonidos/0502.mp3','ARM','sonidos/0505.mp3',' ','sonidos/0502.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,5,3, 'FEET',  'img/0503.jpg','','','LEG','sonidos/0504.mp3','HEAD','sonidos/0501.mp3','FEET','sonidos/0503.mp3',' ','sonidos/0503.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,5,4, 'LEG',   'img/0504.jpg','','','LEG','sonidos/0504.mp3','ARM','sonidos/0505.mp3','HANDS','sonidos/0502.mp3',' ','sonidos/0504.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,5,5, 'ARM',   'img/0505.jpg','','','FEET','sonidos/0503.mp3','ARM','sonidos/0505.mp3','HEAD','sonidos/0501.mp3',' ','sonidos/0505.mp3')");

   //Categoria 6
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,6,1, 'BYE',           'img/0601.jpg','','','GOOD AFTERNOON','sonidos/0604.mp3','GOOD EVENING','sonidos/0605.mp3','BYE','sonidos/0601.mp3', ' ','sonidos/0601.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,6,2, 'HELLO',         'img/0602.jpg','','','GOOD MORNING','sonidos/0603.mp3','GOOD EVENING','sonidos/0605.mp3','HELLO','sonidos/0602.mp3',' ','sonidos/0602.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,6,3, 'GOOD MORNING',  'img/0603.jpg','','','BYE','sonidos/0601.mp3','GOOG MORNING','sonidos/0603.mp3','GOOD AFTERNOON','sonidos/0604.mp3',' ','sonidos/0603.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,6,4, 'GOOD AFTERNOON','img/0604.jpg','','','GOOD AFTERNOON','sonidos/0604.mp3','HELLO','sonidos/0602.mp3','GOOD EVENING','sonidos/0605.mp3',' ','sonidos/0604.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (0,6,5, 'GOOD EVENING',  'img/0605.jpg','','','GOOD EVENING','sonidos/0605.mp3','BYE','sonidos/0601.mp3','GOOD MORNING','sonidos/0603.mp3',' ','sonidos/0605.mp3')");

 //Nivel 1  (En frasecompleta esta el sonido del item correcto)
   //Categoria 1
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,1, 'BEE',    'img/1101.jpg','img/1107.jpg','img/1103.jpg','BEE','sonidos/1101.mp3','SHARK','sonidos/1107.mp3','ANT','sonidos/1103.mp3', ' ','sonidos/1101.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,2, 'SPIDER', 'img/1105.jpg','img/1102.jpg','img/1104.jpg','FISH','sonidos/1105.mp3','SPIDER','sonidos/1102.mp3','SHEEP','sonidos/1104.mp3',' ','sonidos/1102.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,3, 'ANT',    'img/1101.jpg','img/1106.jpg','img/1103.jpg','BEE','sonidos/1101.mp3','FROG','sonidos/1106.mp3','ANT','sonidos/1103.mp3',' ','sonidos/1103.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,4, 'SHEEP',  'img/1102.jpg','img/1107.jpg','img/1104.jpg','SPIDER','sonidos/1102.mp3','SHARK','sonidos/1107.mp3','SHEEP','sonidos/1104.mp3',' ','sonidos/1104.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,5, 'FISH',   'img/1103.jpg','img/1105.jpg','img/1101.jpg','ANT','sonidos/1103.mp3','FISH','sonidos/1105.mp3','BEE','sonidos/1101.mp3',' ','sonidos/1105.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,6, 'FROG',   'img/1106.jpg','img/1102.jpg','img/1104.jpg','FROG','sonidos/1106.mp3','SPIDER','sonidos/1102.mp3','SHEEP','sonidos/1104.mp3',' ','sonidos/1106.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,1,7, 'SHARK',  'img/1103.jpg','img/1107.jpg','img/1101.jpg','ANT','sonidos/1103.mp3','SHARK','sonidos/1107.mp3','BEE','sonidos/1101.mp3',' ','sonidos/1107.mp3')");

   //Categoria 2
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,2,1, 'BANANA', 'img/1201.jpg','img/1203.jpg','img/1204.jpg','BANANA','sonidos/1201.mp3','APPLE','sonidos/1203.mp3','ORANGE','sonidos/1204.mp3', ' ','sonidos/1201.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,2,2, 'LEMON',  'img/1205.jpg','img/1201.jpg','img/1202.jpg','PEAR','sonidos/1205.mp3','BANANA','sonidos/1201.mp3','LEMON','sonidos/1202.mp3',' ','sonidos/1202.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,2,3, 'APPLE',  'img/1204.jpg','img/1203.jpg','img/1205.jpg','ORANGE','sonidos/1204.mp3','APPLE','sonidos/1203.mp3','PEAR','sonidos/1205.mp3',' ','sonidos/1203.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,2,4, 'ORANGE', 'img/1201.jpg','img/1202.jpg','img/1204.jpg','BANANA','sonidos/1201.mp3','LEMON','sonidos/1202.mp3','ORANGE','sonidos/1204.mp3',' ','sonidos/1204.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,2,5, 'PEAR',   'img/1202.jpg','img/1205.jpg','img/1203.jpg','LEMON','sonidos/1202.mp3','PEAR','sonidos/1205.mp3','APPLE','sonidos/1203.mp3',' ','sonidos/1205.mp3')");

   //Categoria 3
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,3,1, 'BED',      'img/1304.jpg','img/1303.jpg','img/1301.jpg','CHAIR','sonidos/1304.mp3','TABLE','sonidos/1303.mp3','BED','sonidos/1301.mp3', ' ','sonidos/1301.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,3,2, 'COMPUTER', 'img/1302.jpg','img/1305.jpg','img/1304.jpg','COMPUTER','sonidos/1302.mp3','PHONE','sonidos/1305.mp3','CHAIR','sonidos/1304.mp3',' ','sonidos/1302.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,3,3, 'TABLE',    'img/1301.jpg','img/1303.jpg','img/1302.jpg','BED','sonidos/1301.mp3','TABLE','sonidos/1303.mp3','COMPUTER','sonidos/1302.mp3',' ','sonidos/1303.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,3,4, 'CHAIR',    'img/1304.jpg','img/1305.jpg','img/1301.jpg','CHAIR','sonidos/1304.mp3','PHONE','sonidos/1305.mp3','BED','sonidos/1301.mp3',' ','sonidos/1304.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,3,5, 'PHONE',    'img/1303.jpg','img/1305.jpg','img/1302.jpg','TABLE','sonidos/1303.mp3','PHONE','sonidos/1305.mp3','COMPUTER','sonidos/1302.mp3',' ','sonidos/1305.mp3')");

   //Categoria 4
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,4,1, 'MOUTH', 'img/1403.jpg','img/1401.jpg','img/1404.jpg','NOSE','sonidos/1403.mp3','MOUTH','sonidos/1401.mp3','EYE','sonidos/1404.mp3', ' ','sonidos/1401.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,4,2, 'TEETH', 'img/1402.jpg','img/1405.jpg','img/1404.jpg','TEETH','sonidos/1402.mp3','EAR','sonidos/1405.mp3','EYE','sonidos/1404.mp3',' ','sonidos/1402.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,4,3, 'NOSE',  'img/1401.jpg','img/1403.jpg','img/1402.jpg','MOUTH','sonidos/1401.mp3','NOSE','sonidos/1403.mp3','TEETH','sonidos/1402.mp3',' ','sonidos/1403.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,4,4, 'EYE',   'img/1405.jpg','img/1401.jpg','img/1404.jpg','EAR','sonidos/1405.mp3','MOUTH','sonidos/1401.mp3','EYE','sonidos/1404.mp3',' ','sonidos/1404.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,4,5, 'EAR',   'img/1405.jpg','img/1402.jpg','img/1403.jpg','EAR','sonidos/1405.mp3','TEETH','sonidos/1402.mp3','NOSE','sonidos/1403.mp3',' ','sonidos/1405.mp3')");

   //Categoria 5
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,5,1, 'PANTS',   'img/1501.jpg','img/1503.jpg','img/1504.jpg','PANTS','sonidos/1501.mp3','T-SHIRT','sonidos/1503.mp3','SHOE','sonidos/1504.mp3', ' ','sonidos/1501.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,5,2, 'SKIRT',   'img/1504.jpg','img/1502.jpg','img/1501.jpg','SHOE','sonidos/1504.mp3','SKIRT','sonidos/1502.mp3','PANTS','sonidos/1501.mp3',' ','sonidos/1502.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,5,3, 'T-SHIRT', 'img/1502.jpg','img/1501.jpg','img/1503.jpg','SKIRT','sonidos/1502.mp3','PANTS','sonidos/1501.mp3','T-SHIRT','sonidos/1503.mp3',' ','sonidos/1503.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,5,4, 'SHOE',    'img/1502.jpg','img/1503.jpg','img/1504.jpg','SKIRT','sonidos/1502.mp3','T-SHIRT','sonidos/1503.mp3','SHOE','sonidos/1504.mp3',' ','sonidos/1504.mp3')");

   //Categoria 6
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,6,1, 'DINING ROOM','img/1603.jpg','img/1601.jpg','img/1604.jpg','BEDROOM','sonidos/1603.mp3','DINING ROOM','sonidos/1601.mp3','BATHROOM','sonidos/1604.mp3', ' ','sonidos/1601.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,6,2, 'KITCHEN',    'img/1602.jpg','img/1604.jpg','img/1601.jpg','KITCHEN','sonidos/1602.mp3','BATHROOM','sonidos/1604.mp3','DINING ROOM','sonidos/1601.mp3',' ','sonidos/1602.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,6,3, 'BEDROOM',    'img/1601.jpg','img/1602.jpg','img/1603.jpg','DINING ROOM','sonidos/1601.mp3','KITCHEN','sonidos/1602.mp3','BEDROOM','sonidos/1603.mp3',' ','sonidos/1603.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (1,6,4, 'BATHROOM',   'img/1603.jpg','img/1604.jpg','img/1602.jpg','BEDROOM','sonidos/1603.mp3','BATHROOM','sonidos/1604.mp3','KITCHEN','sonidos/1602.mp3',' ','sonidos/1604.mp3')");

 //Nivel 2  ()
   //Categoria 1
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,1,1, '',  'img/2101.jpg','img/2102.jpg','img/2103.jpg','LIGHT BLUE','sonidos/2101.mp3','GREY','sonidos/2102.mp3','BROWN','sonidos/2103.mp3', ' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,1,2, '',  'img/2104.jpg','img/2105.jpg','img/2106.jpg','PINK','sonidos/2104.mp3','ORANGE','sonidos/2105.mp3','GREEN','sonidos/2106.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,1,3, '',  'img/2107.jpg','img/2108.jpg','img/2109.jpg','VIOLET','sonidos/2107.mp3','SILVER','sonidos/2108.mp3','GOLDEN','sonidos/2109.mp3',' ',' ')");

   //Categoria 2
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,2,1, '',  'img/2201.jpg','img/2202.jpg','img/2203.jpg','CAMEL','sonidos/2201.mp3','GIRAFFE','sonidos/2202.mp3','OWL','sonidos/2203.mp3', ' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,2,2, '',  'img/2204.jpg','img/2205.jpg','img/2206.jpg','LION','sonidos/2204.mp3','MONKEY','sonidos/2205.mp3','BEAR','sonidos/2206.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,2,3, '',  'img/2207.jpg','img/2208.jpg','img/2209.jpg','PUMA','sonidos/2207.mp3','TIGER','sonidos/2208.mp3','ELEPHANT','sonidos/2209.mp3',' ',' ')");

   //Categoria 3
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,3,1, '',  'img/2301.jpg','img/2302.jpg','img/2303.jpg','ONION','sonidos/2301.mp3','LETTUCE','sonidos/2302.mp3','POTATO','sonidos/2303.mp3', ' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,3,2, '',  'img/2304.jpg','img/2305.jpg','img/2306.jpg','TOMATO','sonidos/2304.mp3','CARROT','sonidos/2305.mp3','PUMPKIN','sonidos/2306.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,3,3, '',  'img/2307.jpg','img/2308.jpg','img/2309.jpg','EGGPLANT','sonidos/2307.mp3','CUCUMBER','sonidos/2308.mp3','BROCCOLI','sonidos/2309.mp3',' ',' ')");

   //Categoria 4
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,4,1, '',  'img/2401.jpg','img/2402.jpg','img/2403.jpg','SCARF','sonidos/2401.mp3','SHIRT','sonidos/2402.mp3','JACKET','sonidos/2403.mp3', ' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,4,2, '',  'img/2404.jpg','img/2405.jpg','img/2406.jpg','GLOVES','sonidos/2404.mp3','HAT','sonidos/2405.mp3','SNEAKER','sonidos/2406.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,4,3, '',  'img/2407.jpg','img/2408.jpg','img/2409.jpg','DRESS','sonidos/2407.mp3','SWEATSHIRT','sonidos/2408.mp3','SOCKS','sonidos/2409.mp3',' ',' ')");

   //Categoria 5
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,5,1, '',  'img/2501.jpg','img/2502.jpg','img/2503.jpg','KNEE','sonidos/2501.mp3','ELBOW','sonidos/2502.mp3','SHOULDER','sonidos/2503.mp3', ' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,5,2, '',  'img/2504.jpg','img/2505.jpg','img/2506.jpg','FINGERS','sonidos/2504.mp3','BACK','sonidos/2505.mp3','NECK','sonidos/2506.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,5,3, '',  'img/2507.jpg','img/2508.jpg','img/2501.jpg','HEEL','sonidos/2507.mp3','WRIST','sonidos/2508.mp3','KNEE','sonidos/2501.mp3',' ',' ')");

   //Categoria 6 (en FRASE se encuentra el nombre del item a buscar y en FRASECOMPLETA esta el path del sonido correpondiente )
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,6,1, 'WATERMELON', 'img/2601.jpg','','','MELON','sonidos/2605.mp3','GREEN','sonidos/2106.mp3','WATERMELON','sonidos/2601.mp3', 'MELON','sonidos/2605.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,6,2, 'GRAPE',      'img/2602.jpg','','','VIOLET','sonidos/2107.mp3','GRAPE','sonidos/2602.mp3','STRAWBERRY','sonidos/2604.mp3','STRAWBERRY','sonidos/2604.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,6,3, 'MANDARIN',   'img/2603.jpg','','','MANDARIN','sonidos/2603.mp3','WATERMELON','sonidos/2601.mp3','ORANGE','sonidos/2105.mp3','WATERMELON','sonidos/2601.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,6,4, 'STRAWBERRY', 'img/2604.jpg','','','RED','sonidos/0205.mp3','STRAWBERRY','sonidos/2604.mp3','GRAPE','sonidos/2602.mp3','GRAPE','sonidos/2602.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,6,5, 'MELON',      'img/2605.jpg','','','MANDARIN','sonidos/2603.mp3','YELLOW','sonidos/0201.mp3','MELON','sonidos/2605.mp3','MANDARIN','sonidos/2603.mp3')");

   //Categoria 7
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,7,1, '',  'img/2701.jpg','img/2702.jpg','img/2703.jpg','HOME','sonidos/2701.mp3','SCHOOL','sonidos/2702.mp3','CHURCH','sonidos/2703.mp3', ' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,7,2, '',  'img/2704.jpg','img/2705.jpg','img/2706.jpg','HOSPITAL','sonidos/2704.mp3','MUSEUM','sonidos/2705.mp3','FIRE STATION','sonidos/2706.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (2,7,3, '',  'img/2707.jpg','img/2708.jpg','img/2709.jpg','LIBRARY','sonidos/2707.mp3','THEATRE','sonidos/2708.mp3','CINEMA','sonidos/2709.mp3',' ',' ')");

  //NIVEL 3
   //Categoria 1
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,1,1, '',  'img/3101.jpg','img/3102.jpg','img/3103.jpg','BORED','sonidos/3101.mp3','TIRED','sonidos/3102.mp3','HAPPY','sonidos/3103.mp3', ' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,1,2, '',  'img/3104.jpg','img/3105.jpg','img/3106.jpg','SAD','sonidos/3104.mp3','COLD','sonidos/3105.mp3','HOT','sonidos/3106.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,1,3, '',  'img/3107.jpg','img/3108.jpg','img/3109.jpg','BIG','sonidos/3107.mp3','SMALL','sonidos/3108.mp3','DIRTY','sonidos/3109.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,1,4, '',  'img/3110.jpg','img/3111.jpg','img/3112.jpg','CLEAN','sonidos/3110.mp3','FAT','sonidos/3111.mp3','SKINNY','sonidos/3112.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,1,5, '',  'img/3113.jpg','img/3114.jpg','img/3115.jpg','LONG','sonidos/3113.mp3','SHORT','sonidos/3114.mp3','HIGH','sonidos/3115.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,1,6, '',  'img/3116.jpg','img/3101.jpg','img/3106.jpg','LOW','sonidos/3116.mp3','BORED','sonidos/3101.mp3','HOT','sonidos/3106.mp3',' ',' ')");

   //Categoria 2
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,2,1, '',  'img/3201.jpg','img/3202.jpg','img/3203.jpg','MONDAY','sonidos/3201.mp3','TUESDAY','sonidos/3202.mp3','WEDNESDAY','sonidos/3203.mp3', ' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,2,2, '',  'img/3204.jpg','img/3205.jpg','img/3206.jpg','THURSDAY','sonidos/3204.mp3','FRIDAY','sonidos/3205.mp3','SATURDAY','sonidos/3206.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,2,3, '',  'img/3207.jpg','img/3202.jpg','img/3204.jpg','SUNDAY','sonidos/3207.mp3','TUESDAY','sonidos/3202.mp3','THURSDAY','sonidos/3204.mp3',' ',' ')");

   //Categoria 3
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,3,1, '',  'img/3301.jpg','img/3302.jpg','img/3303.jpg','ELEVEN','sonidos/3301.mp3','TWELVE','sonidos/3302.mp3','THIRTEEN','sonidos/3303.mp3', ' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,3,2, '',  'img/3304.jpg','img/3305.jpg','img/3306.jpg','FOURTEEN','sonidos/3304.mp3','FIFTEEN','sonidos/3305.mp3','SIXTEEN','sonidos/3306.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,3,3, '',  'img/3307.jpg','img/3308.jpg','img/3309.jpg','SEVENTEEN','sonidos/3307.mp3','EIGHTEEN','sonidos/3308.mp3','NINETEEN','sonidos/3309.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,3,4, '',  'img/3310.jpg','img/3311.jpg','img/3312.jpg','TWENTY','sonidos/3310.mp3','TWENTY ONE','sonidos/3311.mp3','TWENTY TWO','sonidos/3312.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,3,5, '',  'img/3313.jpg','img/3314.jpg','img/3315.jpg','TWENTY THREE','sonidos/3313.mp3','TWENTY FOUR','sonidos/3314.mp3','TWENTY FIVE','sonidos/3315.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,3,6, '',  'img/3316.jpg','img/3317.jpg','img/3318.jpg','TWENTY SIX','sonidos/3316.mp3','TWENTY SEVEN','sonidos/3317.mp3','TWENTY EIGHT','sonidos/3118.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,3,7, '',  'img/3319.jpg','img/3320.jpg','img/3310.jpg','TWENTY NINE','sonidos/3319.mp3','THIRTY','sonidos/3320.mp3','TWENTY','sonidos/3310.mp3',' ',' ')");

   //Categoria 4
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,4,1, '',  'img/3401.jpg','img/3402.jpg','img/3403.jpg','CAR','sonidos/3401.mp3','PLANE','sonidos/3402.mp3','BOAT','sonidos/3403.mp3', ' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,4,2, '',  'img/3404.jpg','img/3405.jpg','img/3406.jpg','BICYCLE','sonidos/3404.mp3','BUS','sonidos/3405.mp3','MOTORCYCLE','sonidos/3406.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,4,3, '',  'img/3407.jpg','img/3408.jpg','img/3409.jpg','SUBWAY','sonidos/3407.mp3','TRAIN','sonidos/3408.mp3','HELICOPTER','sonidos/3409.mp3',' ',' ')");

   //Categoria 5
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,5,1, '',  'img/3501.jpg','img/3502.jpg','img/3503.jpg','GOODBYE','sonidos/3501.mp3','THANK YOU','sonidos/3502.mp3','YOURE WELCOME','sonidos/3503.mp3', ' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,5,2, '',  'img/3504.jpg','img/3505.jpg','img/3506.jpg','GOOD LUCK','sonidos/3504.mp3','HUGS','sonidos/3505.mp3','KISSES','sonidos/3506.mp3',' ',' ')");

   //Categoria 6
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,6,1, '',  'img/3601.jpg','img/3602.jpg','img/3603.jpg','DANCE','sonidos/3601.mp3','SING','sonidos/3602.mp3','EAT','sonidos/3603.mp3', ' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,6,2, '',  'img/3604.jpg','img/3605.jpg','img/3606.jpg','RUN','sonidos/3604.mp3','SLEEP','sonidos/3605.mp3','LIKE','sonidos/3606.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,6,3, '',  'img/3607.jpg','img/3608.jpg','img/3609.jpg','DO','sonidos/3607.mp3','PLAY','sonidos/3608.mp3','GET UP','sonidos/3609.mp3',' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,6,4, '',  'img/3610.jpg','img/3611.jpg','img/3612.jpg','LOOK','sonidos/3610.mp3','SIT','sonidos/3611.mp3','LIVE','sonidos/3612.mp3',' ',' ')");

   //Categoria 7
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,7,1, '',  'img/3701.jpg','img/3702.jpg','img/3703.jpg','I','sonidos/3701.mp3','YOU','sonidos/3702.mp3','HE','sonidos/3703.mp3', ' ',' ')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (3,7,2, '',  'img/3704.jpg','img/3705.jpg','img/3706.jpg','SHE','sonidos/3704.mp3','WE','sonidos/3705.mp3','THEY','sonidos/3706.mp3',' ',' ')");

  //Nivel 4  ()

   //Categoria 1
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,1,1, 'AUTUMN', 'img/4101.jpg','','','SUMMER','sonidos/4104.mp3','SPRING','sonidos/4103.mp3','AUTUMN','sonidos/4101.mp3', ' ','sonidos/4101.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,1,2, 'WINTER', 'img/4102.jpg','','','WINTER','sonidos/4102.mp3','SUMMER','sonidos/4104.mp3','AUTUMN','sonidos/4101.mp3',' ','sonidos/4102.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,1,3, 'SPRING', 'img/4103.jpg','','','AUTUMN','sonidos/4101.mp3','SPRING','sonidos/4103.mp3','WINTER','sonidos/4102.mp3',' ','sonidos/4103.mp3')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,1,4, 'SUMMER', 'img/4104.jpg','','','WINTER','sonidos/4102.mp3','SUMMER','sonidos/4104.mp3','SPRING','sonidos/4103.mp3',' ','sonidos/4104.mp3')");

   //Categoria 4
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,4,1, 'UP',   'img/4401.jpg','','','UP','sonidos/4401.mp3','ON','sonidos/4403.mp3','UNDER','sonidos/4404.mp3', ' ','')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,4,2, 'DOWN', 'img/4402.jpg','','','OUT','sonidos/4406.mp3','UP','sonidos/4401.mp3','DOWN','sonidos/4402.mp3',' ','')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,4,3, 'ON',   'img/4403.jpg','','','ON','sonidos/4403.mp3','IN','sonidos/4405.mp3','UNDER','sonidos/4404.mp3','THE CAT IS _ THE TABLE','THE CAT IS ON THE TABLE')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,4,4, 'UNDER','img/4404.jpg','','','OUT','sonidos/4406.mp3','UNDER','sonidos/4404.mp3','UP','sonidos/4401.mp3','THE CAT IS _ THE CHAIR','THE CAT IS UNDER THE CHAIR')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,4,5, 'IN',   'img/4405.jpg','','','DOWN','sonidos/4402.mp3','IN','sonidos/4405.mp3','ON','sonidos/4403.mp3',' ','')");
   $cordovaSQLite.execute(db, "INSERT INTO items (nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta) VALUES (4,4,6, 'OUT',  'img/4406.jpg','','','UNDER','sonidos/4404.mp3','UP','sonidos/4401.mp3','OUT','sonidos/4406.mp3',' ','')");

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
