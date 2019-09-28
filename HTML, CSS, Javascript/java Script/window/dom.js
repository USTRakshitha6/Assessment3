letpElement = document.getElementById('demo');
console.log(pElement);
pElement.textContent='This is new p tag';
let divElements=document.getElementsByClassName('blue');
console.log(divElements);
let pElements=document.getElementsByTagName('p');
console.log(pElements);
let nameElements=document.getElementsByName('helement');
console.log(nameElements);
let demoElement=document.querySelector('demo')
console.log(demoElement);
let blueClassElement=document.querySelectorAll('blue')
console.log(blueClassElement);
let buttonElement=document.createElement('button')
 buttonElement.textContent='click me';
console.log(buttonElement);
document.body.appendChild(buttonElement);
let spanEle=document.getElementById('spanid');
 spanEle.style.color='pink';
let buttonElement1=document.getElementById('buttonEle')
//buttonElement1.className='add';
buttonElement1.classList="add add1" ;
document.getElementById('tableid').innerHTML=`<table>
<tr>
<td>Name</td>
<td>Age</td>
</tr>r
<tr>
    <td>jhon</td>
    <td>15</td>
</tr>
<tr>
 <td>sucji</td>
 <td>20</td>
</tr>
<tr>
    <td>hema</td>
    <td>19</td>
</tr>
<tr>
    <td>uday</td>
    <td>18</td>
</tr>
</table>`
                       
let pElementData=document.getElementById('domo1');
pElementData.style.color='Blue';