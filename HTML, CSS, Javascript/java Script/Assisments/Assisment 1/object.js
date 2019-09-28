var student={
    id :5,
    class :10,
    marks :100,
    per : 80,
    getId : function() {
        return this.per;

    }
}
console.log(student);
 var id=student.id;
 console.log("id ="+id);
 var per=student.per;
 console.log("class ="+per);
 
 var employee={
     id :10,
     dep :'developer',
     salary :40000,
     getId : function(){
         return this.dep;
     }
 }
 console.log(employee); 

 var city={
     name :'punganur',
     popu :3777777777709,
     lit :57888989,
     getId : function(){
         return this.popu;
     }
 }
 console.log(city);

 var person={
     name:'suchi',
     age:22,
     color: 'medium',
     getId : function(){
         return this.age;
     }
 }
 console.log(person); 
 var fruits=new Object();
 fruits='apple';
 console.log(fruits);


