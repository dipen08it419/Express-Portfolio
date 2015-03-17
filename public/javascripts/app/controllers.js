//File: app.js
//Author: Dipen Shah
//Description: This script contains javascript code to register various controller for the portfolio app.

/// <reference path="../lib/angular.min.js" />

var app = angular.module('portfolioApp');

app.controller('ContactController', ['$scope', '$http', function ($scope, $http) {
    $scope.SendMessage = function () {
        if ($scope.emailId && $scope.message) {

            var data = $http.jsonp('http://aspspider.info/dipen08it419/ContactService.svc/Contact?emailId=' + $scope.emailId + '&message=' + $scope.message);
            
            console.log(data);
            if (data) {
                alert('Your message sent successfully!');

                $scope.contactForm.$setPristine();
                $scope.emailId = "";
                $scope.message = "";
            } else {
                alert('Sorry! Unable to send message, please try again.');
            }
            /*success(function (data, status, header, config) {
                           alert('Your message sent successfully!');

                           $scope.contactForm.$setPristine();
                           $scope.emailId = "";
                           $scope.message = "";
                       })
            .error(function (data, status, header, config) {
                console.log(data);
                console.log(status);
                alert('Sorry! Unable to send message, please try again.');
            });*/
        } else {
            alert('Please fill up the form.');
        }
    }
}])
.controller('NavigationController', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (path) {
        return path === $location.path();
    }
}]);