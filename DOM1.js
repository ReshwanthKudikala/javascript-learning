//access elements from DOM

// let headElement=document.head;
// console.log(headElement);

// let bodyElement=document.body;
// console.log(bodyElement);

// only head and body can be accessed directly like this

// let h1=document.getElementById('heading');
// console.log(h1);

// let h1a=document.getElementsByTagName('h1');
// console.log(h1a)


// let h2=document.querySelector('#heading')
// console.log(h2)

// let div=document.querySelector('.main')
// console.log(div)

// let h1al=document.querySelectorAll('h1')
// console.log(h1al);

//////////////////////////////////////////////

// let heading=document.querySelector('#heading');
// let img=document.querySelector('img')
// let div=document.querySelector('.main');

// let btn=document.querySelector('button');

// btn.addEventListener('click',()=>{
//     heading.textContent='hello';
//     heading.style.color='blue';
//     img.src="https://tse4.mm.bing.net/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&pid=Api&P=0&h=180"
// })

// div.innerHTML=div.innerHTML+`<h2>Heading-2</h2>
// <p>This is a para</p>`

///////////////////////////////////////////

let main=document.querySelector('.main');
let btn=document.querySelector("button");

// btn.addEventListener('click',()=>{
//     let para=document.createElement('p');
//     para.textContent='paragraph';
//     main.appendChild(para);
// })



let emps=[
    {eno:100,name:'ravi',age:1,city:'hyd'},
    {eno:200,name:'raghu',age:2,city:'knr'},
    {eno:300,name:'ramesh',age:3,city:'mnt'},
    {eno:400,name:'rakhi',age:4,city:'vjy'},
    {eno:500,name:'rakesh',age:5,city:'ped'},
    {eno:600,name:'rashi',age:6,city:'kam'},
]

let tbody=document.querySelector('tbody');
for(let empObj of emps){
    tbody.innerHTML=tbody.innerHTML+`<tr>
    <td>${empObj.eno}</td>
    <td>${empObj.name}</td>
    <td>${empObj.age}</td>
    <td>${empObj.city}</td>
    </tr>`
}

let table=document.querySelector('table');
let tog=document.querySelector('.toggle');
tog.addEventListener('click',()=>{
    if(table.hidden===true){
        table.hidden=false;
        tog.textContent='Hide table'
    }
    else{
        table.hidden=true;
        tog.textContent='Show table'
    }
    
    
})
