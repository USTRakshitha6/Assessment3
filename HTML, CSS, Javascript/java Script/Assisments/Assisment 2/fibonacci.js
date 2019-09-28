var fibonacci_series = function(n)
{
    if(n==1)
    {
        return [0,1];
    }
    else{
        var s = fibonacci_series(n-1);
        s.push(s[s.length-1]+s[s.length-2]);
        return s;
    }
};
console.log(fibonacci_series(7));







function fibb(n){
    var a=0;
    var b=1;
    var c=0;
    console.log(a);
    console.log(b)
    for(var j=1;j<=n;j++){
        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
    }
    fibb(10);//naming function
    var fibbo = function(m){
        var a=0;
    var b=1;
    var c=0;
    console.log(a);
    console.log(b)
    for(var j=1;j<=m;j++){
        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }//ananymus function
    }
    fibbo(10);
    (function fibbon(o){
        var a=0;
        var b=1;
        console.log(a);
        console.log(b);
        var c=0;
    
        for(var i=1;i<=o;i++){
            c=a+b;
            console.log(c);
            a=b;
            b=c;
        }
    
    }(9));//iife(immediate invoked function expression)
    var fibbonacci = (p) => {
        var a=0;
        var b=1;
        console.log(a);
        console.log(b);
        var c=0;
    
        for(var i=1;i<=p;i++){
            c=a+b;
            console.log(c);
            a=b;
            b=c;
        }
    
    }
    fibbonacci(10);//fat arrow function