/*global angular*/
angular.module("builder", [])

.controller("gridController", ["$scope", function ($scope) {
   $scope.letters = [
        ["","","","","","","","","",""],
        ["","","","","f","","","","",""],
        ["","","","","a","","","","",""],
        ["","m","u","m","m","y","","","",""],
        ["","","","","i","","","","",""],
        ["","","","","l","","","","",""],
        ["d","a","d","d","y","","","","",""],
        ["","","","","","","","","",""],
      ];
}]);
