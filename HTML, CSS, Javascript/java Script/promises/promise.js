 let employeeData=new Promise(function(resolve,reject){
     const employee =[
         {
             name : 'uday',
             age : 18
         },
         {
             name : 'hema',
             age : 20,
         },
         {
             name : 'ragu',
             age :22
         },

     ];
     if(10>10){
         reject("Failed");
     }else{
         resolve(employee);
     }
 });
 employeeData.then((data)=>{
    // console.log('Then block=',data);
return data;
 }).
 catch((error)=>{
     console.log('Catch block = '+error);
 }).then(function(data1){
     console.log('This is then block',data1)
 })