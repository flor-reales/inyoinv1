angular.module("starter.controllers", ["starter.services"])

.controller("usersCtrl", function($scope, Users, $state)
{
    $scope.initUsers = function()
    {
        Users.all().then(function(users)
        {
            $scope.users = users;
        })
    }

    $scope.initAddUsers = function()
    {
        $scope.save = function(user)
        {
            Users.add(user.categ, user.nivel, user.item, user.path , user.descríp , user.resp1 , user.pathR1 , user.resp2, user.pathR2 , user.resp3, user.pathR3 , user.correcta).then(
              function(res)
              {
                  $state.go("users");
              },
              function(error)
              {
                  console.log(error);
              }
            );
        }
	
		
    }
})
