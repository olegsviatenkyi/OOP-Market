// CONSTRUKTOR

function Products(name, weight, price, iden){
	this.name = name;
	this.weight = weight;
	this.price = price;
	this.iden = iden;
	this.result = function(){
		if (document.getElementById(this.iden).value <= 0){return ""}
		else if (Math.ceil(document.getElementById(this.iden).value) - document.getElementById(this.iden).value > 0){return this.name + ": number must be integer\n"}
		else return "price of " + document.getElementById(this.iden).value+ " " + this.name + " = " + (document.getElementById(this.iden).value * this.weight * this.price).toFixed(2) + "$\n" ;
	}
	this.toPay = function(){
		return (document.getElementById(this.iden).value * this.weight * this.price);
	}
}

var potato = new Products("potato", 0.2, 2, "potato");
var beet = new Products("beet", 0.5, 5, "beet");
var carrot = new Products("carrot", 0.3, 3, "carrot");
var cabbage = new Products("cabbage", 1, 4, "cabbage");
var onion = new Products("onion", 0.1, 3, "onion");
var tomato = new Products("tomato", 0.3, 5, "tomato");
var cucumber = new Products("cucumber", 0.4, 4, "cucumber");
var apple = new Products("apple", 0.3, 5, "apple");
var pear = new Products("pear", 0.2, 4, "pear");
var plum = new Products("plum", 0.1, 3, "plum");
var grape = new Products("grape", 0.4, 6, "grape");
var cherry = new Products("cherry", 0.1, 4, "cherry");
var strawberries = new Products("strawberries", 0.1, 7, "strawberries");
var milk = new Products("milk", 0.5, 8, "milk");
var butter = new Products("butter", 0.3, 9, "butter");
var sour_cream = new Products("sour cream", 0.25, 7, "sour_cream");
var cheese = new Products("cheese", 0.2, 10, "cheese");
var yogurt = new Products("yogurt", 0.1, 9, "yogurt");
var beef = new Products("beef", 0.5, 12, "beef");
var pork = new Products("pork", 0.5, 11, "pork");
var turkey = new Products("turkey", 0.3, 13, "turkey");
var chicken = new Products("chicken", 0.3, 12, "chicken");
var sausage = new Products("sausage", 0.2, 9, "sausage");


function sum(){

	alert(potato.result() + beet.result() + carrot.result() + cabbage.result() + onion.result() + 
		tomato.result() + cucumber.result() + apple.result() + pear.result() + plum.result() +
		grape.result() + cherry.result() + strawberries.result() + milk.result() + butter.result() + 
		sour_cream.result() + cheese.result() + yogurt.result() + beef.result() + pork.result() + 
		turkey.result() + chicken.result() + sausage.result());
	alert("To pay: " + (potato.toPay() + beet.toPay() + carrot.toPay() + cabbage.toPay() + onion.toPay() + 
		tomato.toPay() + cucumber.toPay() + apple.toPay() + pear.toPay() + plum.toPay() +
		grape.toPay() + cherry.toPay() + strawberries.toPay() + milk.toPay() + butter.toPay() + 
		sour_cream.toPay() + cheese.toPay() + yogurt.toPay() + beef.toPay() + pork.toPay() + 
		turkey.toPay() + chicken.toPay() + sausage.toPay()).toFixed(2) + "$");
}
