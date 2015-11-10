var app = angular.module('toDone', [])

app.controller('taskListCtrl', function($scope) {
  $scope.tasks = [];
  $scope.counter = 5;
  
  $scope.calculateCounter = function() {
    $scope.counter = 5 - $scope.tasks.length;
  }

  $scope.askWeight = function() {    
    
  }

  $scope.addTask = function() {    
    if ($scope.counter > 0 && document.querySelector('#taskText').value !== '') {
      var taskObj = {toDo:$scope.task, weight:0}
      $scope.tasks.push(taskObj);  
      document.querySelector('#taskText').value = '';
      $scope.calculateCounter();
      if ($scope.counter === 0) {
        $scope.askWeight();
      }
    }
  }


  $scope.deleteTask = function(index) {
    $scope.tasks.splice(index, 1);
    $scope.calculateCounter();
  }

});



