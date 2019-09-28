/*forech*/

var hobbies=['singing','dancing','playing','watchingtv'];
hobbies.forEach(function(myHobbies,index){
    if(myHobbies.length>7)
    console.log('Hobbies ='+myHobbies);
});
console.log("+++++++++++++++++++++++++++++++");

console.log(myName);
var myName = 'hema';
console.log(myName);

function getAge(){
    console.log(age);
    var age = 10;
    console.log(age);

}
getAge();
console.log("++++++++++++++++++++++++++++++++++++"); 
/*push and pop*/

var hobbies=['singing','dancing','playing','drivig','haircutting'];
var checkArray = Array.isArray(hobbies);
console.log('is arry ='+checkArray);
hobbies.push('sleeping');
console.log('hobbies after push '+hobbies);
hobbies.pop();
console.log('hobbies after pop '+hobbies);
/*unshift and shift*/ 
hobbies.unshift('commenting');
console.log('unshift ='+hobbies)
hobbies.shift();
console.log('shift ='+hobbies);
/* splice */

hobbies.splice(0,2,'eating','cocking');
console.log('splice ='+hobbies);
/*slice*/
hobbies.slice(1,4);
console.log('slice ='+hobbies); 
/* indexarray */ 

/* */
var number=[10,20,30,40,50];
var afterMap=number.map((mapNumbers=>(mapNumbers+10)));
console.log(afterMap);
var afterFilter=number.filter((filterNumbers=>(filterNumbers>1)));
console.log(afterFilter); 

console.log("*********************");
var item=[
    {
        name : 'lipstick',
        price : 90,
        id : 1,

    },
    {
        name : 'perfume',
        price : 100,
        id : 2,
    },
    {
        name : 'watch',
        price : 900,
        id : 3,
    },
    {
        name : 'shoe',
        price : 700,
        id : 4,
    }
];
item.map(function(item){
    item.price=item.price+100;
    return item;

});

console.log("items after adding 100" +mappedItem);






