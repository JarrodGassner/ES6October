//Classes

class length {  
    constructor (id, distFrom, distTo) {
        this.id = id
        this.calc(distFrom, distTo)
    }
    calc (distFrom, distTo) {
		this.distFrom = distFrom
        this.distTo = distTo
		return this.distTo - this.distFrom
    }
}

//*---------------------------------------------END---------------------------------------------*//


//Arrow Function
odds = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums = evens.map((v, i) => v + i)

nums.forEach(v => {
if (v % 8 === 0)
eights.push(v)
})

//*---------------------------------------------END---------------------------------------------*//


//	Destructuring

var a, b, c;
[a, b] = [1, 3];

//
var a = 1;
var z = 26;

[a, b] = [b, a]

//
function a(){
	return [10, 100, 1000];
}

var [a, , c] = a();
alert("a equals: " + a ", b equals: " + b);


//*---------------------------------------------END---------------------------------------------*//
//Spread and rest

function a(v, t=14) {
  return x * (t/100);
}
a(100) == 14 //(tax)

function b(x, ...y) {
  return x * y.length;
}
b(10, "hello", true, 3) == 30

function c(x, y, z) {
  return x + y + z;
}
f(...[10,15,20]) == 45

//*---------------------------------------------END---------------------------------------------*//

//Template Strings


var todaysTemp = "Bob", 
	date = "October 21 2015";
	condition = {cold: ' Rainy', warm: 'Sunny'}
	
`Good morning South Africa, we will have a $(condition.warm) day reaching temperatures of ${todaysTemp}, for today ${date}?`

//Tagged Template

let value = function(literals, ...values) {
    expect(literals.length).toBe(1);
    expect(literals[0]).toBe("Hello, ");
    return "Jarrod";
};
 
let name = "Scott";
let result = value `Hello, ${name}`;
expect(result).toBe("Jarrod");














