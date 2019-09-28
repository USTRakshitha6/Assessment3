function sayHello()
{
    alert('Hello!!');
}
let buttonElement=document.getElementById('clickButton');
buttonElement.Click=function(){
alert('Hello World!!');
}
function createPElement(){
    let pElementData=document.createElement('p');
    pElementData.textContent='This is p Element';
    document.body.appendChild(pElementData);
}
let alertElement=document.getElementById('alertHi');
alertElement.addEventListener('click',function(){
    alert('Good evng');
});
let h1Element=document.createElement('h1');
function showText(){
    let inputElement = document.getElementById('showData');
    console.log(inputElement.value);
   
    h1Element.textContent=inputElement.value;
    document.body.appendChild(h1Element);
}