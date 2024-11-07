// let input=document.querySelector('input')
// let btn=document.querySelector('button')

// btn.addEventListener('click',()=>{
//     let username=input.value;
//     let h1=document.createElement('h1');
//     h1.textContent=username;
//     document.body.appendChild(h1);
// })

let add=document.querySelector('#first');
let sub=document.querySelector('#second');
let addBtn=document.querySelector('.add');
let subBtn=document.querySelector('.sub');
let result=document.querySelector(".result");

result.style.fontSize='100px'
let fn,sn;
function getValues(){
    fn=Number(first.value);
    sn=Number(second.value);
}

addBtn.addEventListener('click',()=>{
    getValues();
    let sum=fn+sn;
    result.textContent=sum;
});
subBtn.addEventListener('click',()=>{
    getValues();
    let sum=fn-sn;
    result.textContent=sum;
})