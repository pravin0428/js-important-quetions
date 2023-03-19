//https://fakestoreapi.com/products

async function getData(){
   try{
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json() 
    return data
   }catch(err){
    console.log(err)
   }
}

getData().then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

 