var output= [];
var count = 1;
function fizzbuzz(){
    // if ((count%3==0)&&(count%5==0))
    // {
    //     output.push("fizzbuzz");
        
    // }
    if (count%3==0){
        if ((count%3==0)&&(count%5==0))
    {
        output.push("fizzbuzz");
        
    }
        else{
        output.push("fizz");    
    }
    }
    else if (count%5==0){
        if ((count%3==0)&&(count%5==0))
    {
        output.push("fizzbuzz");
        
    }else{
        output.push("buzz");
        
    }
    }
    else{
    output.push(count);
    
    
}
    count++;
    console.log(output);
}
fizzbuzz();

//same with while loop
var output= [];
var count = 1;
while(count<=100){
    // if ((count%3==0)&&(count%5==0))
    // {
    //     output.push("fizzbuzz");
        
    // }
    if (count%3==0){
        if ((count%3==0)&&(count%5==0))
    {
        output.push("fizzbuzz");
        
    }
        else{
        output.push("fizz");    
    }
    }
    else if (count%5==0){
        if ((count%3==0)&&(count%5==0))
    {
        output.push("fizzbuzz");
        
    }else{
        output.push("buzz");
        
    }
    }
    else{
    output.push(count);
    
    
}
    count++;
    console.log(output);
}
//99 Bottles of beer
var count=99;
while(count>1){
    console.log(count+" bottles of beer on the wall,"+count+" bottle of beer");
console.log("Take one down and pass it down ,"+(count-1)+" bottles of beer on the wall");
    console.log("\n");
count--;
}
//fizzbuzz using for loop
var output= [];

    for(var count=1;count<=100;count++){
    // if ((count%3==0)&&(count%5==0))
    // {
    //     output.push("fizzbuzz");
        
    // }
    if (count%3==0){
        if ((count%3==0)&&(count%5==0))
    {
        output.push("fizzbuzz");
        
    }
        else{
        output.push("fizz");    
    }
    }
    else if (count%5==0){
        if ((count%3==0)&&(count%5==0))
    {
        output.push("fizzbuzz");
        
    }else{
        output.push("buzz");
        
    }
    }
    else{
    output.push(count);
    
    
}
    console.log(output);
}

//Fibonacci series 


function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var output=[];
        if (n==1){
            output=[0];   
        }
        if(n==2){
            output=[0,1];
            
        }else{
            output=[0,1];
            for (var i=2;i<n;i++){
            output.push(output[output.length-2]+output[output.length-1]);
            }
        }
        return output;
            
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    