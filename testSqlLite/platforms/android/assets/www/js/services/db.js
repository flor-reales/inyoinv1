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
    return DBA.query("SELECT nivel, categ, item, descríp , pathImagen1, pathImagen2, pathImagen3, resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , correcta, frase, frasecompleta  FROM items WHERE id = (?)", parameters);
      }
  
  self.get = function(categ, nivel, item) {
    var parameters = [categ, nivel, item];
    return DBA.query("SELECT id, categ, nivel, item, path , descríp , resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , correcta  FROM items WHERE id = (?)", parameters)
      .then(function(result) {
        return DBA.getById(result);
      });
  }

  self.add = function(categ, nivel, item, path , descríp , resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , correcta) {
    var parameters = [categ, nivel, item, path , descríp , resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , correcta];
    return DBA.query("INSERT INTO items (categ, nivel, item, path , descríp , resp1 , pathR1 , resp2, pathR2 , resp3 , pathR3 , correcta) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", parameters);
  }

  self.remove = function(user) {	
    var parameters = [user.id];
    return DBA.query("DELETE FROM items2 WHERE id = (?)", parameters);
  }

  self.update = function(editUser) {
    var parameters = [editUser.name, editUser.id];
    return DBA.query("UPDATE items2 descrip = (?) WHERE id = (?)", parameters);
  }

  return self;
})
