
var x = 5;
var y = 30;
var z = x + y;
console.log(z);

var name = "Ali Michael";
console.log(name);

document.getElementById("bol").innerHTML = Boolean(10 > 9);


function myFunction() {
  let age = document.getElementById("age").value;
  let voteage = (age < 18) ? "Too young":"Old enough";
  document.getElementById("demo").innerHTML = voteage + " to vote.";
}

const names = ["Ali", "Michael", "Bello"];
console.log(names);

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car);


let text = "loo";
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("loo").innerHTML = text;