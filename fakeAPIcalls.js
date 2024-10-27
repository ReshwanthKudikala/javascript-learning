fetch('https://jsonplaceholder.typicode.com/users')
.then(Response=>Response.json())
.then(data=>{
    console.log(data);
})
.catch(err=>console.log("error in API call",err));