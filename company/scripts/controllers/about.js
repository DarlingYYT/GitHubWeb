(function() {
  'use strict';


  angular.module('myApp')
    .controller('aboutCtrl', aboutCtrl);

    function aboutCtrl($scope){
    	$scope.about1=true;
    	$scope.about2=false;
    	$scope.about3=false;
    	$scope.about4=false;
        $scope.act1="active";
    	$scope.c1=function(){
    	$scope.about1=true;
    	$scope.about2=false;
    	$scope.about3=false;
    	$scope.about4=false;
        $scope.act1="active";
        $scope.act2="none";
        $scope.act3="none";
        $scope.act4="none";
    	}
    	$scope.c2=function(){
    	$scope.about2=true;
    	$scope.about1=false;
    	$scope.about3=false;
    	$scope.about1=false;
        $scope.act2="active";
        $scope.act1="none";
        $scope.act3="none";
        $scope.act4="none";
    	}
    	$scope.c3=function(){
    	$scope.about3=true;
    	$scope.about2=false;
    	$scope.about1=false;
    	$scope.about4=false;
        $scope.act3="active";
        $scope.act2="none";
        $scope.act1="none";
        $scope.act4="none";
    	}
    	$scope.c4=function(){
    	$scope.about4=true;
    	$scope.about2=false;
    	$scope.about3=false;
    	$scope.about1=false;
        $scope.act4="active";
        $scope.act2="none";
        $scope.act3="none";
        $scope.act1="none";
    	}
    	
    }

})();