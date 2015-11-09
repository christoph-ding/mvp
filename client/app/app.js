var app = angular.module('toDone', [])

app.controller('taskListCtrl', function($scope) {
  $scope.tasks = [];
  $scope.counter = 5;
  $scope.addTask = function() {    
    $scope.tasks.push($scope.task);    
  }
});

