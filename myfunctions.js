//Normal Function
function sum(a, b){
    console.log(a+b);
}
sum(12, 15);


//Function Expression
var fn = function sum(a, b){
    console.log(a+b);
}
fn(13, 15); // can't call with sum();


//Anonymous Function
var fn = function (a, b){
    console.log(a+b);
}
fn(14, 15); // without function name;


//Immediately Invoked Function Expression
(function(a, b){
    console.log(a+b);
})(10,20) // calling function with parameters or can be empty

// or store it in variable too
var w = (function(a, b){
    console.log(a+b);
    return a+b;
})(10,20)

console.log(w);