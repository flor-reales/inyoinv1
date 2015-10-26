angular.module("starter.services", [])

.controller('LoadingCtrl', function($scope, $ionicLoading) {
  $scope.hide = function(){
    $ionicLoading.hide();
  };
  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...'
    });
    window.setTimeout(function(){mostrar('principal','inicio');$scope.hide();},8000);
  };
})

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

  self.all = function(niv) {
    var parameter = [niv];
    return DBA.query("SELECT * FROM items WHERE nivel = (?)",parameter)
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
   var contadorNivelDos = 1;
   var contadorNivelTres = 1;
   var contadorNivelCuatro = 1;
   var flagCheck = 0;
   var progresoNivelCero = [1,1,1,1,1,1,1,1];
   var progresoNivelUno = [1,1,1,1,1,1,1,1];
   var progresoNivelDos = [1,1,1,1,1,1,1,1];
   var progresoNivelTres = [1,1,1,1,1,1,1,1];
   var progresoNivelCuatro = [1,1,1,1,1,1];
   var contadorAprender = [0,0,0,0,0];
   var progresoAprender = [0,0,0,0,0];


   $scope.guardarProgresoAprender = function() {
     switch (getNivel()) {
       case 0:
          progresoAprender[0]= contadorAprender[0]-1;
          break;
       case 1:
          progresoAprender[1]= contadorAprender[1]-1;
          break;
       case 2:
          progresoAprender[2]= contadorAprender[2]-1;
          break;
       case 3:
           progresoAprender[3]= contadorAprender[3]-1;
           break;
       case 4:
           progresoAprender[4]= contadorAprender[4]-1;
           break;
     }
   };

   $scope.guardarProgreso = function() {
     switch (getNivel()) {
       case 0:
         progresoNivelCero[getCategoria()]=contadorNivelCero-1;
         break;
       case 1:
         progresoNivelUno[getCategoria()]=contadorNivelUno-1;
         break;
       case 2:
            if (getCategoria() == 6) {
                progresoNivelDos[getCategoria()]=contadorNivelDos-1;
            } else {
                progresoNivelDos[getCategoria()]=contadorNivelTres-1;
            }

           break;
       case 3:
           progresoNivelTres[getCategoria()]=contadorNivelTres-1;
           break;
       case 4:
            if (getCategoria <= 2) {
                progresoNivelCuatro[getCategoria()]=contadorNivelCero-1;
            } else {
                progresoNivelCuatro[getCategoria()]=contadorNivelCuatro-1;
            }
           break;
     }
   };

   $scope.cargarNivelCero = function() {
     nivel = getNivel();
     categ = getCategoria();
     cantItemsCateg = getCantItems(categ);
     Users.select(nivel, categ, contadorNivelCero).then(function(users)
     {
          $scope.datos = users;

          if(contadorNivelCero <= cantItemsCateg) {
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
            }else{
              //mostrar finalizacion de categ
              borrar();
              mostrar('finCategoria','nivel0');
              contadorNivelCero = 1;
            }
        })
	     };

  $scope.cargarNivelUno = function() {
      nivel = getNivel();
      categ = getCategoria();
      cantItemsCateg = getCantItems(categ);
      Users.select(nivel, categ, contadorNivelUno).then(function(users)
      {
         $scope.datos = users;

        if(contadorNivelUno <= cantItemsCateg) {
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

        }else{
          borrar();
          mostrar('finCategoria','nivel1');
          contadorNivelUno = 1;
        }
    })
  };

  $scope.cargarNivelDos = function() {
      nivel = getNivel();
      categ = getCategoria();
      cantItemsCateg = getCantItems(categ);
      Users.select(nivel, categ, contadorNivelDos).then(function(users)
      {


        if(contadorNivelDos <= cantItemsCateg) {
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

          /*         document.getElementById("s12").src= $scope.datos[0].pathR1;
         document.getElementById("s13").src= $scope.datos[0].pathR2;
         document.getElementById("s14").src= $scope.datos[0].pathR3;
         */
          rtaIncorrectaNivelDos = $scope.datos[0].frase;

        }else{
          borrar();
          mostrar('finCategoria','nivel2');
          contadorNivelDos = 1;
        }
    })
  };

  $scope.cargarNivelTres = function() {
      nivel = getNivel();
      categ = getCategoria();
      cantItemsCateg = getCantItems(categ);
      Users.select(nivel, categ, contadorNivelTres).then(function(users)
      {
         $scope.datos = users;

      if(contadorNivelTres <= cantItemsCateg) {
          contadorNivelTres++;
          flagCheck = 0;

          rehacerNivelTres();
          document.getElementById('b31').textContent= $scope.datos[0].resp1;
          document.getElementById('b31').value= $scope.datos[0].resp1;

          document.getElementById('b32').textContent= $scope.datos[0].resp2;
          document.getElementById('b32').value= $scope.datos[0].resp2;

          document.getElementById('b33').textContent= $scope.datos[0].resp3;
          document.getElementById('b33').value= $scope.datos[0].resp3;

          document.getElementById("img31").alt=$scope.datos[0].resp1;
          document.getElementById("img31").src=$scope.datos[0].pathImagen1;

          document.getElementById("img32").alt=$scope.datos[0].resp2;
          document.getElementById("img32").src=$scope.datos[0].pathImagen2;

          document.getElementById("img33").alt=$scope.datos[0].resp3;
          document.getElementById("img33").src=$scope.datos[0].pathImagen3;

         /*document.getElementById("s12").src= $scope.datos[0].pathR1;
         document.getElementById("s13").src= $scope.datos[0].pathR2;
         document.getElementById("s14").src= $scope.datos[0].pathR3;
         */
       }else{
         borrar();
         mostrar('finCategoria','nivel3');
         contadorNivelTres = 1;
       }

    })
  };

  $scope.cargarNivelCuatro = function() {
      nivel = getNivel();
      categ = getCategoria();
      cantItemsCateg = getCantItems(categ);
      Users.select(nivel, categ, contadorNivelCuatro).then(function(users)
      {
         $scope.datos = users;

          if(contadorNivelCuatro <= cantItemsCateg) {
            contadorNivelCuatro++;
            rehacerNivelCuatro();

            fraseCorrecta =  $scope.datos[0].frasecompleta;
            fraseIncompleta =  $scope.datos[0].frase;
            document.getElementById("frase").innerHTML=$scope.datos[0].frase;

            document.getElementById('b41').textContent= $scope.datos[0].resp1;
            document.getElementById('b41').value= $scope.datos[0].resp1;

            document.getElementById('b42').textContent= $scope.datos[0].resp2;
            document.getElementById('b42').value= $scope.datos[0].resp2;

            document.getElementById('b43').textContent= $scope.datos[0].resp3;
            document.getElementById('b43').value= $scope.datos[0].resp3;

            document.getElementById("img41").alt=$scope.datos[0].desc;
            document.getElementById("img41").src=$scope.datos[0].pathImagen1;

            rtaNivelCuatro = $scope.datos[0].desc;

         /*document.getElementById("s12").src= $scope.datos[0].pathR1;
         document.getElementById("s13").src= $scope.datos[0].pathR2;
         document.getElementById("s14").src= $scope.datos[0].pathR3;
         */

       }else{
         borrar();
         mostrar('finCategoria','nivel4');
         contadorNivelCuatro = 1;
       }

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

  $scope.validacionNivelDos= function(button){
    borrar();

    //rtaIncorrecta='APPLE'; //Cuando se carga el ejercicio se cargara esta rta, asi que esta  linea se debe borrar
    var rtaUsuario = document.getElementById(button).value;
    var n =rtaUsuario.localeCompare(rtaIncorrectaNivelDos);

    if( n == 0 ){
      musicplay("soundincorrecto");
      document.getElementById("incorrecto").innerHTML='Try again';
      document.getElementById("img21").style.border="outset red";
      document.getElementById(button).style.border="outset red";
      document.getElementById(button).disabled=true;
    }else{
      musicplay("soundcorrecto");
      document.getElementById("correcto").innerHTML='Very Good!';
      document.getElementById(button).style.border="outset green";
      document.getElementById("img21").style.border="outset green";
    }
  };

  $scope.validacionNivelTres= function(button){

    borrar();
    if(flagCheck == 0){

      //Apago boton clickeado y borde punteado
      document.getElementById("bbi31").style.border="solid transparent";
      document.getElementById(button).style.display="none";
      //Guardo los valores a comparar para validar respuesta
      var rtaNivelTres= document.getElementById(button).value;
      var imagenvalue= document.getElementById("img31").alt;
      //Prendo boton oculto y modifico atributos
      document.getElementById("brtaelegida31").textContent= rtaNivelTres;

      document.getElementById("rtaoculta31").style.display = "block";
      //Compruebo respuesta
      var n =rtaNivelTres.localeCompare(imagenvalue);
          if( n != 0 ){
              musicplay("soundincorrecto");
              document.getElementById("brtaelegida31").style.border= "outset red";
              window.setTimeout(function(){
                    document.getElementById(button).style.display="block";
                    document.getElementById("rtaoculta31").style.display = "none";
                    document.getElementById("bbi31").style.border="dashed black";
              },200);
          }else{
              document.getElementById("brtaelegida31").style.border= "outset blue";
              document.getElementById("img32").style.border="outset magenta";
              document.getElementById("brtaelegida31").disabled='disabled';
              musicplay("soundcorrecto");
              flagCheck++;
          }
    }else{
          if(flagCheck == 1){
      //Apago boton clickeado y borde punteado
          document.getElementById("bbi32").style.border="solid transparent";
          document.getElementById(button).style.display="none";
      //Guardo los valores a comparar para validar respuesta
          var rtaNivelTres= document.getElementById(button).value;
          var imagenvalue= document.getElementById("img32").alt;
      //Prendo boton oculto y modifico atributos
          document.getElementById("brtaelegida32").textContent= rtaNivelTres;

          document.getElementById("rtaoculta32").style.display = "block";
      //Compruebo respuesta
          var n =rtaNivelTres.localeCompare(imagenvalue);
              if( n != 0 ){
                  musicplay("soundincorrecto");
                  document.getElementById("brtaelegida32").style.border= "outset red";
                  window.setTimeout(function(){
                          document.getElementById(button).style.display="block";
                          document.getElementById("rtaoculta32").style.display = "none";
                          document.getElementById("bbi32").style.border="dashed black";
                 },200);
               }else{
                 document.getElementById("brtaelegida32").style.border= "outset magenta";
                 document.getElementById("img33").style.border="outset OrangeRed";
                 document.getElementById("brtaelegida32").disabled='disabled';
                 musicplay("soundcorrecto");
                 flagCheck++;
               }
          }else{
            //Apago boton clickeado y borde punteado
                document.getElementById("bbi33").style.border="solid transparent";
                document.getElementById(button).style.display="none";
            //Prendo boton oculto y modifico atributos
                var rtaNivelTres= document.getElementById(button).value;
                document.getElementById("brtaelegida33").textContent= rtaNivelTres;
                document.getElementById("brtaelegida33").style.border= "outset OrangeRed";
                document.getElementById("rtaoculta33").style.display = "block";
            //Todo salio correcto
                document.getElementById("brtaelegida33").disabled='disabled';
                musicplay("soundcorrecto");
                document.getElementById("correcto").innerHTML='Very Good!';
                botonesVerdes();
              }
      }
  };

  $scope.validacionNivelCuatro= function(button){
    borrar();

    var rtaUsuario = document.getElementById(button).value;
    var n =rtaUsuario.localeCompare(rtaNivelCuatro);

		if( n!=0 ){
      musicplay("soundincorrecto");
      document.getElementById("incorrecto").innerHTML='Try again';
      document.getElementById("img41").style.border="outset red";
      document.getElementById(button).style.border="outset red";
      document.getElementById("frase").innerHTML=fraseIncompleta;
      document.getElementById(button).disabled='disabled';
     }else{
      musicplay("soundcorrecto");
      document.getElementById("correcto").innerHTML='Very Good!';
      document.getElementById(button).style.border="outset green";
      document.getElementById("img41").style.border="outset green";
      document.getElementById("frase").innerHTML=fraseCorrecta;

    }
  };

  $scope.cargarProgreso = function(n,c) {
    switch (n) {
    case 0:
       contadorNivelCero = progresoNivelCero[c];
       $scope.cargarNivelCero();
       break;
    case 1:
       contadorNivelUno = progresoNivelUno[c];
       $scope.cargarNivelUno();
       break;
    case 2:
        if (c == 6) {
           contadorNivelDos = progresoNivelDos[c];
           $scope.cargarNivelDos();
        } else {
           contadorNivelTres = progresoNivelDos[c];
           $scope.cargarNivelTres();
        }
        break;
    case 3:
        contadorNivelTres = progresoNivelTres[c];
        $scope.cargarNivelTres();
        break;
    case 4:
        if (c <= 2) {
           contadorNivelCero = progresoNivelCuatro[c];
           $scope.cargarNivelCero();
        } else {
           contadorNivelCuatro = progresoNivelCuatro[c];
           $scope.cargarNivelCuatro();
        }
        break;
      }
  };

  $scope.cargarAprender = function() {

        i = getNivel();

       Users.all(i).then(function(users)
       {
            numeroItem =  contadorAprender[i];
            $scope.datos = users;
            document.getElementById('bapIngles').textContent = $scope.datos[numeroItem].desc;
            document.getElementById("imgap").src = $scope.datos[numeroItem].pathImagen1;
            document.getElementById("audioAprender").src = $scope.datos[numeroItem].frasecompleta;
            contadorAprender[i]++;
      })

  };

  $scope.cargarProgresoAprender = function() {

        i = getNivel();
        contadorAprender[i] = progresoAprender[i];
        $scope.cargarAprender();

  };


})
