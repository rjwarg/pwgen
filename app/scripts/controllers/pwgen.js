'use strict';

/**
 * @ngdoc function
 * @name pwgenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pwgenApp
 */
angular.module('pwgenApp')
  .controller('PwgenCtrl', function($scope){
  	var textone = 'sixtenrchadjwg2016345789bfklmopquvyz';
  	$scope.input = "";
  	$scope.output = "xxxx";
  	$scope.translate = function(){
  	    console.log('button pressed')
  		$scope.output = xlate($scope.input,textone);
  	}
  });

  var getIndex = function(iteration, index){
  		switch(iteration %4){
  			case 0: return index +((index+1) % 6 ? 1 : -5);
  					
  			case 1: return index +((index + 1) <= 30 ? 6 : -30);
  			case 2: return index +(index  % 6 ? -1 : +5);
  			case 3: return index +(index < 6 ? +30 : -6);
  		}
  		return index + iteration % 4;
  };

  var xlate = function(input, textone){
    var retval = '';
    var iteration = 0; 
    for(var i= 0 ; i < input.length ; i++){
    		var index = textone.indexOf(input.charAt(i).toLowerCase());
    		index = getIndex(iteration++, index);
    		retval = retval + textone.charAt(index);
    }
  	return  retval;
  };
