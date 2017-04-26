function MainController($scope) {
  $scope.name = 'Laura!';
}

angular
  .module('app')
  .controller('MainController', MainController);
  