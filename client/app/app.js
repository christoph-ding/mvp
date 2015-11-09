var app = angular.module('toDone', [])

app.factory('Tasks', function() {
  var tasks = {
    "first":"fuck bitches",
    "second": "get money"
  };
  return {
    tasks: tasks
  };
})

app.controller('taskListCtrl', function($scope, Tasks) {
  $scope.message = 'hello'  
  $scope.tasks = Tasks.tasks;
});


// <h3>FIFA Mactch Summary:</h3>
// <div ng-app ng-controller="MyCtrl">
//     <ul>
//         <li ng-repeat="(country,goals) in items">{{country}}: {{goals}}</li>
//     </ul>
// </div>

// var m = {
//     "India": "2",
//     "England": "2",
//     "Brazil": "3",
//     "UK": "1",
//     "USA": "3",
//     "Syria": "2"
// };

// function MyCtrl($scope) {
//     $scope.items = m;
// }


// <div ng-controller="DemoController">
//   <h4>The simplest adding machine ever</h4>
//   <button ng-click="add(1)" class="button">Add</button>
//   <button ng-click="subtract(1)" class="button">Subtract</button>
//   <h4>Current count: {{ counter }}</h4>
// </div>

// app.controller('DemoController', function($scope) {
//   $scope.counter = 0;
//   $scope.add = function(amount) { $scope.counter += amount; };
//   $scope.subtract = function(amount) { $scope.counter -= amount; };
// });
