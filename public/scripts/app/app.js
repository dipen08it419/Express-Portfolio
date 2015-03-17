
//File: app.js
//Author: Dipen Shah
//Description: This script contains javascript code to register application module and to handle various paths of the web app.


/// <reference path="../lib/angular.js" />
$home = "";
var app = angular.module('portfolioApp', ['ngRoute'])
            .config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', function ($routeProvider, $locationProvider, $sceDelegateProvider) {
                $routeProvider.when('/home', {
                    templateUrl: 'partials/home.html',
                    $home:'home'
                }).when('/about', {
                    templateUrl: 'partials/about.html'
                }).when('/contact', {
                    templateUrl: 'partials/contact.html',
                    controller: 'ContactController'
                }).when('/projects', {
                    templateUrl: 'partials/projects.html'
                }).when('/services', {
                    templateUrl: 'partials/services.html'
                })
                .when('/termsOfUse', {
                    templateUrl: 'partials/terms.html'
                })
                .when('/privacyPolicy', {
                    templateUrl: 'partials/privacy.html'
                })
                .when('/sitemap', {
                    templateUrl: 'partials/sitemap.html'
                })
                .otherwise({ redirectTo: '/home' });

                $locationProvider.html5Mode({ enabled: true, requireBase: false });

                //Enable cross domain calls
                $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://aspspider.info/dipen08it419/**']);
            }]);