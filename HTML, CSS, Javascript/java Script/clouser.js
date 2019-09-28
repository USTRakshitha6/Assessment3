function sum(a,b){
    function addSum(){
        return a+b;
    }
    return addSum;
}
var addFunc=sum(10,40);
var total=addFunc();
console.log('Total =',total)
console.log(window)
console.log(this);
console.log(this===window)
var name='rakhi';
console.log(window.name);                                                                


var person={
    name : 'raj',
    age : 24,
    getName :function(){
        console.log(this.name);
        console.log(window);
        getData;
        function getData()
        {
            console.log('get data method' +this.name);
        }
        return this.name;
    }
}
var heroName=person.getName();
console.log("name ="+heroName);
console.log("+=======================");
for(var i=0;i<5;i++)
{
    console.log('i ='+i);
}
for(let j=0;j<5;j++){
    console.log('value of j'+j);

}
console.log("****************");
/* var */
var hobbies=['dancing','singing','playing'];
console.log('hobbies ='+hobbies);
var hobbies=['numismatic'];
console.log('hobbies '+hobbies);
/* let */
let fruits=['orange','banana'];
console.log('fruits ='+fruits);
 fruits=['jack']; /*re initializing */
console.log('fruits ='+fruits);
/* const */
const frnds=['achi','wahi','bhan','harshitha'];
console.log('frds ='+frnds);
/* const frds=['sucji']; redeclaration is not possible by const */
 /* frds=['kiwi']; reinitilize not possible */
 


