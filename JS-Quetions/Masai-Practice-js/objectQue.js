/* 2nd quetion : Contributer : Pravin */
let a = {};
let b = { b: "mery" };
let c = { c: "lanty" };

a[b] = b;
a[c] = c;

console.log(a[b]);

/* Explanation
In this code, three objects a, b, and c are defined using 
JavaScript object literal notation. The object a is initially 
an empty object, while b and c have a single property each,
 named b and c, respectively, with values "mery" and "lanty".
The code then sets two properties on the a object using the 
square bracket notation. The first property has a key of b and 
a value of the b object, while the second property has a key of c 
and a value of the c object.
Now, the interesting part is the last line
 console.log(a[b]). Here, we are trying to access the value 
 of the property on the a object with the key b, which we set 
 earlier to the value of the b object.
However, when an object is used as a key in JavaScript,
 it is converted to a string using the toString() method. 
 So, b.toString() will return [object Object], and c.toString() 
 will also return [object Object].
Therefore, the a[b] and a[c] properties are actually equivalent
 to a["[object Object]"], which means that both properties have 
 the same key. When we set the second property with the key c, it 
 overwrites the first property with the key b. So, a[b] and a[c] both
point to the c object, and console.log(a[b]) will output { c: "lanty" }.
*/