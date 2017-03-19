angular.module('app', [
  'ngAnimate',
  'ngMapHilight',
  'ui.router',
  'ui.bootstrap'
])

.controller('appController', function($scope) {
  $scope.$on('collapseNavBar', function() {
    $scope.navCollapsed = true;
  });
})

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "documentation/html/home.html",
      controller: 'homeController'
    })

  .state('example1', {
    url: "/Example1",
    templateUrl: "documentation/html/example1.html",
    controller: 'example1Controller'
  })

  .state('example2', {
      url: "/Example2",
      templateUrl: "documentation/html/example2.html",
      controller: 'example2Controller'
    })
    .state('example3', {
      url: "/Example3",
      templateUrl: "documentation/html/example3.html",
      controller: 'example3Controller'
    })
    .state('example4', {
      url: "/Example4",
      templateUrl: "documentation/html/example4.html",
      controller: 'example4Controller'
    })

  .state('contact', {
    url: "/Contact",
    templateUrl: "documentation/html/contact.html",
    controller: 'contactController'
  })


  .state('documentation', {
    url: "/Docs",
    templateUrl: "documentation/html/documentation.html",
    controller: 'documentationController'
  });


  $urlRouterProvider.otherwise("/");
})

.run(function($rootScope) {

  $rootScope.$on('$stateChangeStart', function(e, toState, toParams,
    fromState, fromParams) {
    $rootScope.$broadcast('collapseNavBar');
  });

});
