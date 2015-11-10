var app = angular.module('toDone', [])

app.controller('taskListCtrl', function($scope) {
  $scope.tasks = [];
  $scope.counter = 5;
  $scope.hasWeightButton = false;

  $scope.graphWidth = 500; 
  $scope.graphHeight = 350;

  $scope.colorBank = ['#F0A202', '#F18805', '#D95D39', '#202C59', '#E71D36',
    '#381D2A', '#C32F27', '#780116', '#084887', '#BCE784', '#525174', '#348AA7',
    '#841C26', '#8FB8DE', '#E0F47F', '#A9FDAC', '#44CF6C', '#32A287', '#8EA604',
    '#FF4E00', '#F5BB00', '#EC9F05', '#BF3100', '#D36135', '#A24936', '#46B1C9',
    '#720026', '#BA5624', '#90FCF9'   
  ]

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
      var taskColor = $scope.colorBank[Math.floor(Math.random() * $scope.colorBank.length)];
      var taskObj = {toDo:$scope.task, color:taskColor, height:350}
      $scope.tasks.push(taskObj);  
      document.querySelector('#taskText').value = '';
      $scope.calculateCounter();
      if ($scope.counter === 0) {
        $scope.askWeight();
      }
    }
  }

  $scope.chipAway = function(index) {
    $scope.tasks[index]['height'] = $scope.tasks[index]['height'] - 35;
    if ($scope.tasks[index]['height'] === 0) {
      $scope.deleteTask(index);      
    }
  } 

  $scope.deleteTask = function(index) {
    $scope.tasks.splice(index, 1);
    $scope.calculateCounter();
  }
});

