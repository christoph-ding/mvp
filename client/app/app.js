var app = angular.module('toDone', [])

app.controller('taskListCtrl', function($scope) {
  $scope.tasks = [];
  $scope.counter = 5;
  $scope.hasWeightButton = false;

  $scope.graphWidth = 500; 
  $scope.graphHeight = 350;

  $scope.colorBank = []

  $scope.calculateCounter = function() {
    $scope.counter = 5 - $scope.tasks.length;
  }

  $scope.askWeight = function() {  
    if ($scope.hasWeightButton === false) {
      var weightButton = angular.element('<button href=""> Heya </button>');
      angular.element( document.querySelector('body') ).append(weightButton);    
      $scope.hasWeightButton = true;    
    }
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



