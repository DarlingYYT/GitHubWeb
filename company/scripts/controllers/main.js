(function() {
  'use strict';


  angular.module('myApp')
    .controller('mainCtrl', mainCtrl);

  function mainCtrl($scope) {
  		$scope.num1=true;
  		$scope.num2=true;
  		$scope.num3=true;
  		$scope.num4=true;
      $scope.act0="active";
  		$scope.watch=function(){
  		$scope.num1=true;
  		$scope.num2=false;
  		$scope.num3=false;
  		$scope.num4=false;
      $scope.act0="none";
      $scope.act1="active";
      $scope.act2="none";
      $scope.act3="none";
      $scope.act4="none";
  		}
  		$scope.glasses=function(){
  		$scope.num1=false;
  		$scope.num2=true;
  		$scope.num3=false;
  		$scope.num4=false;
      $scope.act0="none";
      $scope.act2="active";
      $scope.act1="none";
      $scope.act3="none";
      $scope.act4="none";
  		}
  		$scope.car=function(){
  		$scope.num3=true;
  		$scope.num2=false;
  		$scope.num1=false;
  		$scope.num4=false;
      $scope.act0="none";
      $scope.act3="active";
      $scope.act2="none";
      $scope.act1="none";
      $scope.act4="none";
  		}
  		$scope.plane=function(){
  		$scope.num4=true;
  		$scope.num2=false;
  		$scope.num3=false;
  		$scope.num1=false;
      $scope.act0="none";
      $scope.act4="active";
      $scope.act2="none";
      $scope.act3="none";
      $scope.act1="none";
  		}
  		$scope.all=function(){
  		$scope.num1=true;
  		$scope.num2=true;
  		$scope.num3=true;
  		$scope.num4=true;
      $scope.act1="none";
      $scope.act0="active";
      $scope.act2="none";
      $scope.act3="none";
      $scope.act4="none";
  		}

  }
})();