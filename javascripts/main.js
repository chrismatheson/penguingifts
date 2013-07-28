/*global angular*/
angular.module("builder", [])

    .controller("gridController", ["$scope", "LettersModel", function ($scope, LettersModel) {
        "use strict";
        $scope.letters = LettersModel.letters;
    }])
    .controller("actions", ["$scope", "LettersModel", function ($scope, LettersModel) {
        "use strict";
        $scope.reset = LettersModel.reset();
    }])
    .service("LettersModel", [function () {
        "use strict";
        var instance = {};
        instance.letters = [
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "f", "", "", "", "", ""],
            ["", "", "", "", "a", "", "", "", "", ""],
            ["", "m", "u", "m", "m", "y", "", "", "", ""],
            ["", "", "", "", "i", "", "", "", "", ""],
            ["", "", "", "", "l", "", "", "", "", ""],
            ["d", "a", "d", "d", "y", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""]
        ];
        
        instance.reset = function () {
            this.letters = [
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""]
            ];
        };
        
        return instance;
    }])
    .controller("letterController", ["$scope", function ($scope) {
        "use strict";
        $scope.mode = "empty";
        $scope.$watch("letter", function (newVal, oldVal) {
            $scope.letter = newVal.toUpperCase();
            $scope.mode = newVal === "" ? "empty" : "tile";
        });
    }]);
