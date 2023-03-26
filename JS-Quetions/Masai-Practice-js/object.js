// q) new object quetion

let Person = (property , bunch) =>{
   return bunch.push(property)
}

let result = Person("apple" , ["banana"])
console.log(result)

// 2     ....ans

/* explaination

In this code, Person is a function that takes in two arguments: property and bunch. The property argument is a string that represents a new item to be added to an array, and bunch is an array that already exists and to which we want to add the new item.

The Person function then calls the push() method on the bunch array, passing in the property argument as the value to be added to the end of the array. The push() method modifies the original array in place by adding the property value to the end of it.

Finally, the Person function returns the new length of the bunch array after the property value has been added to it.

The result variable is assigned the value returned by the Person function when it is called with arguments "apple" and ["banana"]. Since push() method returns the new length of the array, the value of result will be 2, which is the new length of the bunch array after "apple" has been added to it.

So, the output of console.log(result) will be 2

*/