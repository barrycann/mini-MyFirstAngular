angular.module('friendsList')
.controller('mainCtrl', function($scope){
   $scope.friends = [
      {
         name: 'Mike',
         birthday: 'Apr 10'
      },
      {
         name: 'Scott',
         birthday: 'Mar 16'
      },
      {
         name: 'David',
         birthday: 'Jan 6'
      },
      {
         name: 'Levi',
         birthday: 'Aug 29'
      }
   ];

   $scope.addFriend = function(name, birthday){
      var newFriend = {  
         name: name,
         birthday: birthday
      }
      $scope.friends.push(newFriend);
      $scope.newFriendName = '';
      $scope.newFriendBirthday = '';
   }
});