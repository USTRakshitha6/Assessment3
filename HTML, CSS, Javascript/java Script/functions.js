function sum(num1,num2){
    if(num1!==undefined && num2!=undefined ){
        sumValue =num1+num2;
      return sumValue;  
    }
}
var sumVal=sum(10,20);
console.log('sum = '+ sumValue);
console.log("***********************************");
var addData=function(num1,num2)
{
    sumVal=num1+num2;
    return sumVal;
}
addData(20,40)
console.log('sum'+ " "+sumVal);
console.log("****************************************");
(function(num1,num2)      {
   var sumData=num1+num2;
    console.log("sum"+" "+sumData);
} (50,60))
console.log("*****************************************");
var sumVal = (num1,num2)=>{
    var totalSum=num1+num2;
    return totalSum;
}
var valueData = sumVal(10,20);
console.log('value ='+valueData);
console.log("**********************************************");
var sumVal=(num1,num2)=>num1+num2;
var sumData = sumVal(10,50)
console.log('sum ='+sumData);
