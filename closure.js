### Questions

// 1. What does "lexical scope" mean in JavaScript?

//A: A state of a convention that an inner function has access to the outer function's
// variables but an outer function doesn't have access to a variable defined
//inside of the inner function.

// 2. What is an advantage of a programming language that uses lexical scoping?

//A: Inner function retains the information of outer function even if the outer
//function is returned.

// 3. What is a closure?

//A: Closure is an inner function which is created inside of the parent function.

// 4. What would be a use case of a closure?

//A: One use case would be an event handler which adjusts a text size of a body
// paragraph by clicking an anchor text. By wrapping a closure which selects a
// CSS text-size property, you can return the parent function while calling
// certain property size and retain the state into a variable.
// By assigning each state to each anchor text utilizing onclick event handler,
// you can instantly adjust the size of the body text.

//Reference: MDS Closure document
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

###Coding

var macDonaldSet = function(outerFood){
	var mealOne = outerFood;
	var outputFood = function(innerFood){
		var mealTwo = innerFood;
		console.log('You have ordered '+mealOne+' and '+mealTwo);
	}
	return outputFood;
}

var bigMacSet = macDonaldSet('Big Mac');
bigMacSet('frenchfries');
