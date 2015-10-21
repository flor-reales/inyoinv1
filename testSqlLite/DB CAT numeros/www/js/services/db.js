angular.module("starter.services", [])

.factory('DBA', function($cordovaSQLite, $q, $ionicPlatform) {
  var self = this;

  // Handle query's and potential errors
  self.query = function (query, parameters) {
    parameters = parameters || [];
    var q = $q.defer();

    $ionicPlatform.ready(function () {
      $cordovaSQLite.execute(db, query, parameters)
        .then(function (result) {
          q.resolve(result);
        }, function (error) {
          console.warn('I found an error');
          console.warn(error);
          q.reject(error);
        });
    });
    return q.promise;
  }

  // Process a result set
  self.getAll = function(result) {
    var output = [];

    for (var i = 0; i < result.rows.length; i++) {
      output.push(result.rows.item(i));
    }

    return output;
  }

  // Proces a single result
  self.getById = function(result) {
    var output = null;
    output = angular.copy(result.rows.item(0));
    return output;
  }

  return self;
})

.factory('Users', function($cordovaSQLite, DBA) {
  var self = this;

  self.all = function() {
    return DBA.query("SELECT id, categ, nivel, item FROM items")
      .then(function(result){
        return DBA.getAll(result);
      });
  }

  self.select = function ( nivel, categ, item) {
    var parameters = [categ, nivel, item];
    return DBA.query("SELECT * FROM items WHERE  categ = (?) and nivel = (?) and item = (?)", parameters)
      .then(function(result){
        return DBA.getAll(result);
      });
	  }



  self.get = function(categ, nivel, item) {
    var parameters = [categ, nivel, item];
    return DBA.query("SELECT id, categ, nivel, item, path , desc , resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , correcta  FROM items WHERE id = (?)", parameters)
      .then(function(result) {
        return DBA.getById(result);
      });
  }

  return self;
})

.controller("factoriaController", function($scope, Users){

   var contadorNivelCero = 1;
   var contadorNivelUno = 1;

   $scope.cargarNivelCero = function(nivel, categ) {

     Users.select(nivel, categ, contadorNivelCero).then(function(users)
     {
          $scope.datos = users;
          contadorNivelCero++;

        rehacerNivelCero();
		    document.getElementById('b01').textContent= $scope.datos[0].resp1;
        document.getElementById('b01').value= $scope.datos[0].resp1;
        document.getElementById('b02').textContent=$scope.datos[0].resp2;
        document.getElementById('b02').value= $scope.datos[0].resp2;
        document.getElementById('b03').textContent= $scope.datos[0].resp3;
        document.getElementById('b03').value= $scope.datos[0].resp3;

        document.getElementById("img01").src=$scope.datos[0].pathImagen1;

        document.getElementById("s01").src= $scope.datos[0].pathR1;
        document.getElementById("s02").src= $scope.datos[0].pathR2;
        document.getElementById("s03").src= $scope.datos[0].pathR3;

        rtaNivelCero = $scope.datos[0].desc;
   })

//nivel, categ, item, desc , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , frase, frasecompleta
	};

  $scope.cargarNivelUno = function(nivel, categ ) {

      Users.select(nivel, categ, contadorNivelUno).then(function(users)
      {
         $scope.datos = users;
         contadorNivelUno++;

         rehacerNivelUno();
         document.getElementById('b11').textContent= $scope.datos[0].desc;
         document.getElementById('b11').value= $scope.datos[0].desc;


         document.getElementById("s11").src= $scope.datos[0].frasecompleta;

         document.getElementById("img11").alt=$scope.datos[0].resp1;
         document.getElementById("img12").alt=$scope.datos[0].resp2;
         document.getElementById("img13").alt=$scope.datos[0].resp3;


         document.getElementById("img11").src=$scope.datos[0].pathImagen1;
         document.getElementById("img12").src=$scope.datos[0].pathImagen2;
         document.getElementById("img13").src=$scope.datos[0].pathImagen3;

         document.getElementById("s12").src= $scope.datos[0].pathR1;
         document.getElementById("s13").src= $scope.datos[0].pathR2;
         document.getElementById("s14").src= $scope.datos[0].pathR3;

         rtaNivelUno = $scope.datos[0].desc;
    })
  };

  $scope.cargarNivelDos = function(nivel, categ ) {

      Users.select(nivel, categ, contadorNivelDos).then(function(users)
      {
         $scope.datos = users;
         contadorNivelDos++;

         rehacerNivelDos();
         document.getElementById('b21').textContent= $scope.datos[0].resp1;
         document.getElementById('b21').value= $scope.datos[0].resp1;

         document.getElementById('b22').textContent= $scope.datos[0].resp2;
         document.getElementById('b22').value= $scope.datos[0].resp2;

         document.getElementById('b23').textContent= $scope.datos[0].resp3;
         document.getElementById('b23').value= $scope.datos[0].resp3;


         document.getElementById("img21").alt=$scope.datos[0].resp1;
         document.getElementById("img21").src=$scope.datos[0].pathImagen1;



         document.getElementById("img12").src=$scope.datos[0].pathImagen2;
         document.getElementById("img13").src=$scope.datos[0].pathImagen3;

         document.getElementById("s12").src= $scope.datos[0].pathR1;
         document.getElementById("s13").src= $scope.datos[0].pathR2;
         document.getElementById("s14").src= $scope.datos[0].pathR3;

         rtaNivelDos = $scope.datos[0].desc;
    })
  };




  $scope.validacionNivelCero= function(button){

      borrar();
     var rtaUsuario = document.getElementById(button).value;
     var n =rtaUsuario.localeCompare(rtaNivelCero);

 		if( n!=0 ){

       document.getElementById("soundincorrecto").play();
       document.getElementById("incorrecto").innerHTML='Try again';
       document.getElementById("img01").style.border="outset red";
       document.getElementById(button).style.border="outset red";
       document.getElementById(button).disabled='disabled';
      }else{
       document.getElementById("soundcorrecto").play();
       document.getElementById("correcto").innerHTML='Very Good!';
       document.getElementById(button).style.border="outset green";
       document.getElementById("img01").style.border="outset green";

   }
 };

 $scope.validacionNivelUno= function(button){
   borrar();

   var rtaUsuario2 = document.getElementById(button).alt;
   var n =rtaUsuario2.localeCompare(rtaNivelUno);

   if( n != 0 ){
     musicplay("soundincorrecto");
     document.getElementById("incorrecto").innerHTML='Try again';
     document.getElementById("b11").style.border="outset red";
     document.getElementById(button).style.border="outset red";
     document.getElementById("img11").disabled=true;
   }else{
       musicplay("soundcorrecto");
       document.getElementById("correcto").innerHTML='Very Good!';
       document.getElementById("b11").style.border="outset green";
       document.getElementById(button).style.border="outset green";
       }

};


})
