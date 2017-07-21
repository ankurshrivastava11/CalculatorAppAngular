 var app = angular.module("calculatorapp",[]);
 app.controller("calctrl",calctrl);

 function calctrl(){
 	this.result = 0;
 	this.buttonclicked = function(button){
 		this.selectedop = button;
 	}
 	this.compute = function(){
 		var num1 = parseFloat(this.input1);
 		var num2 = parseFloat(this.input2);

 		if(this.selectedop === '+')
 		{
 			this.result = num1 + num2;
 		}
 		else if(this.selectedop === '-')
 		{
 			this.result = num1 - num2;
 		}
 		else if(this.selectedop === '/')
 		{
 			this.result = num1 / num2;
 		}
 		else if(this.selectedop === '*')
 		{
 			this.result = num1 * num2;
 		}
 	}
 }