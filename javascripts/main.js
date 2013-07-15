/*global angular*/
angular.module("builder", [])

    .controller("gridController", ["$scope", function ($scope) {
        "use strict";
        $scope.letters = [
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "f", "", "", "", "", ""],
            ["", "", "", "", "a", "", "", "", "", ""],
            ["", "m", "u", "m", "m", "y", "", "", "", ""],
            ["", "", "", "", "i", "", "", "", "", ""],
            ["", "", "", "", "l", "", "", "", "", ""],
            ["d", "a", "d", "d", "y", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""]
        ];
    }])
    .controller("letterController", ["$scope", function ($scope) {
        "use strict";
        $scope.mode = "empty";
        $scope.$watch("letter", function (newVal, oldVal) {
            $scope.letter = newVal.toUpperCase();
            $scope.mode = newVal === "" ? "empty" : "tile";
        });
    }]);
