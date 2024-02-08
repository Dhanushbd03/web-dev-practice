//Learned Slice,alert,prompt,length,uppercase ,lowercase
var text=prompt("Enter your text");
//slice
alert(text.slice(0,179));
//length
alert("Your have written "+ text.length+ "\nyou have "+ (180-text.length)+ " characters left");
//Uppercase
var name = "Dhanush";
name =name.toUpperCase();
//lowercase
name=name.toLowerCase();

//making first letter caps and other small
name=prompt("What is you name ?");
uc=name.slice(0,1);
lc=name.slice(1,name.length);
makelowercase=lc.toLowerCase();
makeuppercase=uc.toUpperCase();
alert("Hello "+makeuppercase+makelowercase);


//basic arithmetic and modulo
var dogAge=prompt("Enter the dog age");
var humanAge=((dogAge-2)*4)+21;
alert("Your dog is "+humanAge+ " Years old");

