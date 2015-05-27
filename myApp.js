angular.module('myApp', [])
  .directive('optIn', function(){
    return{
      restrict: 'E',
      transclude: true,
      templateUrl:'signup.html'
    }
  })
