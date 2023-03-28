// Q) what will the output of following code snippet

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1); //one milisecond time delay
}

// output : 0 1 2