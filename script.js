// AritchMetich Operator example
let a = 5;
let b = (100+50)*a;
let result = String(b)
console.log(result);
console.log(typeof(result));
let x = 5;
let y = x+"";
console.log(y);

let k=null;
console.log(typeof(k));


let w = null;
console.log(String(w));
// type chake a toString null and undifind a erro show kore but string a erro dai na null hole null undifind hole undifind.

// js string addition
let tex1 = 'john';
let tex2 = 'doe';

let tex3 = tex1 + " " + tex2;
let tex4 = tex1 + tex2;
console.log(tex3);
console.log(tex4);

// number and string auto convert
let age = 23;
let text = "Age is: " + age;
console.log(text);
console.log(typeof(text));


// multiple value concaenate
let a = 20
let b = 20
let result = "total = " + a+b;
// right way
let r = "total is = " +(a+b)
console.log(result);
console.log(r);

//Using concate()Method;
let text1 = "hello"
let text2 = "world"
let added = text1.concat(text2)
console.log(added);
// Template Literals (Best & Modern way ⭐)
let name = "Asik";
let age = 25;
let text = `My name is ${name} and I am ${age} years old`
console.log(text);
// Real example (number → string + concatenate)
let price = 750;
let message = "Totla price: " + String(price) + " taka";
console.log(message);

let num = 20;
let str = "5";
console.log(num+str);