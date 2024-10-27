console.log("Three customers reached restaurant");

// //synchronous
console.log("customer-1 ordered biryani which takes 5 min to prepare");
setTimeout(()=>{
    console.log("customer-1 received biryani");
},5000);


console.log("customer-2 ordered pizza which takes 3 min to prepare");
setTimeout(()=>{
    console.log("customer-2 received pizza");
},3000)


console.log("customer-3 ordered soup which takes 1 min min to prepare");
setTimeout(() => {
    console.log("customer-3 received soup");
}, 1000);



//asynchronous(timer functions,promises)


//timer functions
setTimeout(()=>{
    console.log("callback executed");
},5000);

console.log("hello");
console.log("good evening");

//setInterval and setTimeout are both almost same but setInterval continously gets executed after the given time is completed
