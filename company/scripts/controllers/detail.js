(function() {
  'use strict';


  angular.module('myApp')
    .controller('detailCtrl', detailCtrl);

    function detailCtrl($scope){
    	$scope.change1=function(){
    		$scope.color1="active";
    		$scope.color2="color";
    	};
    	$scope.change2=function(){
    		$scope.color1="color";
    		$scope.color2="active";
    	}

    	$scope.counter=0;
		$scope.add=function(amount) {
		$scope.counter+=amount;

		};
		$scope.subtract=function(amount){
		if($scope.counter==0){
			$scope.counter=0;
		}else{
		$scope.counter-=amount;
		}
		};

		$scope.b1="active";
		$scope.p1=true;
		$scope.p2=false;
		console.log($scope.p2);
		$scope.blue1=function(){
			$scope.b1="active";
			$scope.b2="";
			$scope.p1=true;
			$scope.p2=false;
		}
		$scope.blue2=function(){
			$scope.b2="active";
			$scope.b1="";
			$scope.p2=true;
			$scope.p1=false;
			console.log($scope.p2);
		}
    }

})();