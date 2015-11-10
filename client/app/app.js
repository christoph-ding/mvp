var app = angular.module('toDone', [])

app.controller('taskListCtrl', function($scope) {
  $scope.tasks = [];
  $scope.counter = 5;
  
  $scope.calculateCounter = function() {
    $scope.counter = 5 - $scope.tasks.length;
  }
  $scope.addTask = function() {    
    if ($scope.counter > 0) {
      $scope.tasks.push($scope.task);  
      $scope.task = ''
      $scope.calculateCounter();
    }
  }
  $scope.deleteTask = function(index) {
    $scope.tasks.splice(index, 1);
    $scope.calculateCounter();
  }

});

//   <h2>Add contact</h2>
//   <form ng-submit="addMail()">
//     <input type="mail" ng-model="mailAdress"/>
//     <button type="submit">Add contact</button>
//   </form>
// </div>

  
//   $scope.addMail = function() {
//     if(this.mailAdress) {
//       $scope.contacts.push($scope.mailAdress);
//       $scope.mailAdress = "";
//     }
//   };
// }


