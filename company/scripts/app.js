(function(){
"use strict";

angular.module('myApp',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.when("","/");
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('/',{
				url:'/',
				templateUrl:'views/main.html',
				controller:'mainCtrl'
			})
			.state('product',{
				url:'/product',
				templateUrl:'views/product/product.html',
				controller:'productCtrl'
			})			
			.state('product.page1',{
				url:'/page1',
				views: {
					'productList': {
						templateUrl:'views/product/product-page1.html',

						
					}
				}
			})			
			.state('product.page2',{
				url:'/page2',
				views:{
					'productList':{
						templateUrl:'views/product/product-page2.html',

					},
				}
			})

			.state('support',{
				url:'/support',
				templateUrl:'views/support.html',
				controller:'supportCtrl'
			})
			.state('about',{
				url:'/about',
				templateUrl:'views/about.html',
				controller:'aboutCtrl'
			})
			.state('detail',{
				url:'/detail',
				templateUrl:'views/detail/detail1.html',
				controller:'detailCtrl'
			})
			.state('signup',{
				url:'/signup',
				templateUrl:'views/signup.html',
				controller:'signupCtrl'
			})
			.state('login',{
				url:'/login',
				templateUrl:'views/login.html',
				controller:'signupCtrl'
			})
	})
})()
	

