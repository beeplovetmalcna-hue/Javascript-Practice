// while loop
// let i=1;
// while(i<=5){
// console.log("i=", i);
// i++;
// }

//Calculate sum of 1 to 5 using for loop

// let sum=0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log("sum=",sum);

// Get user to input a number using prompt("Enter a number"). Check if the number is multiple of 5 or not.

// let num= prompt("Enter a number");
// if(num%5==0){
//     console.log("The number is multiple of 5");
// }
// else{
//     console.log("The number is not a multiple of 5");
// }
// console.log("num");

// do while loop
// let i=1;
// do{
//     console.log("Biplove");
//     i++;
// } while(i<=5);

//

//do while loop later checking proof

// let i=20; 
// do{
//     console.log("biplove");
//     i++
// } while(i<=10);
//Output: biplove
//Checking is done later and biplove is printed once. But in for or while loop this wouldnt work because checking is done earlier as condition is also given earlier.

//for-of loop
// let str ="Biplove";

// for(let i of str){ //iterator==>characters
// console.log("i=",i);
// }

//to calculate size of string

// let str="Biplove";
// let size=0;

// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("size=", size);

//for in loop

// let student={
//     name:"Biplove Timalsina",
//     age:19,
//     cgpa:4,
//     ispass:true,

// };
// for(let key in student){
//     console.log("key=",key, "value=",student[key]);//finding out value of key
// }

//Practice Q1. Print all even numbers from 0 to 100

// for(let num=0;num<=100;num++){
//     if(num%2==0)
//         console.log("num=",num);
// }

//Practice Qs2: Create a game where you start with any random game Number.Ask the user to keep guessing the number until user enter the correct value.

// let gameNum=55;
// let userNum= prompt("Enter a correct game number");

// while(userNum!=gameNum){
    
//     userNum=prompt("Incorrect number:Enter a correct value again");
// }
// console.log("Congratulations you have entered a correct number");


//Practice Q3.Eligibility to vote
// let age= prompt("Enter your age");
// if(age>=18){
//     console.log("You can vote");
// }
// else{
//     console.log("You are not eligible");
// }

//Practice Q4. Check if a year is leap year
// let  year=prompt("Enter the year");

// if((year%4===0 && year%100!=0) || (year%400===0)){
//     console.log("year is leap year");
// }
// else{
//     console.log("Not leap year");
// }

//String in JS
// let str="BiploveTimalsina";
// let str2="Cristiano";

// console.log(str[3]);
// console.log(str2[4]);

//Template literals

// let specialString= `This is a template literal`;
// console.log(typeof specialString);

// //Feautre of template literal
// let  obj={
//     item:"pen",
//     price:10,
// };
// console.log("the cost of",obj.item,"is",obj.price,"ruppes");//Here we have to give information of different variables and commas.

// //Temperate literal style
// let output=(`the cost of ${obj.item} is ${obj.price} ruppes `);//Simpler way to print
// console.log(output);

// //Escape characters
// console.log("Biplove \nTimalsina");

//StringMethods in JS
// let str="biplove"
// let newStr= str.toUpperCase();
// console.log(str);
// console.log(newStr);
//Now better way
// let str="biplove";
// str=str.toUpperCase();
// console.log(str);//BIPLOVE
//Strings are immutable in JS

//str.trim() removes the whitespaces from starting and ending.
// let str="   biplove Js    ";
// console.log(str); //Output==>   biplove JS   
//Now
// let str= "   biplove Js   ";
// console.log(str.trim());//Output==> biplove Js

//String slice
// let str="ramshyamhari";
// console.log(str.slice(2,4));//Output==>ms(4 is non inclusive)
// console.log(str.slice(4,7));//Output:hya

//string concatination
// let str1="biplove";
// let str2="timalsina";
// str1.concat(str2);
// console.log(str1,str2);

//Another way
// let str1="biplove";
// let str2="timalsina";
// let res=str1+str2;
// console.log(res);

//String replace
// let str="biplove"
// console.log(str.replace("b","c"));

//Qs1: Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @followed by their full name and ending with fullname length.

// let username=prompt("Enter a username");
// let str1="@";
// let str2="15";
// username=str1+username+username.length;
// console.log(username);

//Qs2:Check whether the string "computer" includes "put
// let str="computer";
// console.log(str.includes("put"));

//Qs3:Remove extra spaces from both ends of " Nepal ".

// let str="  Nepal ";
// console.log(str.trim());

//Qs4:Replace "dog" with "cat" in "The dog is barking".
// let str="The dog is barking";
// console.log(str.replace("dog","cat"));

//Qs4:Count how many times "a" appears in "banana".

// let str="banana";
// let count=0;

// for(let ch of str){
//     if(ch==="a"){
//         count++;
//     }
    

// }

// console.log(count);

//Qs5:Count the number of vowels in javascript

// let str="javascript";
// let vowels="aeiou";
// let count=0;

// for(let ch of str){
//     if(vowels.includes(ch)){ //ch means one character at time.
//         count++;
//     }
// }
// console.log(count);

//Qs5:Count the number of consonants in computer

// let str="computer";
// let vowels="aeiou"
// let count=0;

// for(let ch of str){
//     if(!vowels.includes(ch)){
//         count++;
//     }
// }
// console.log(count);

//Array in JS
// let marks=[93,84,65,75,30];
// console.log(marks);
// console.log(marks.length);

// let politicians=["Balen","Rabi","Kulman"];
// console.log(politicians);  

//Looping over an array. Printing all elements of array

// for loop:length
// for(let idx=0;idx<array.length;idx++){
    
// ?

// let names=["ram","shyam","hari","krishne"];
// for(let idx=0; idx<name.length ;idx++){
//     console.log(name[idx]);
// }

// Practice. For a given array with marks of student->[85,97,44,37,76,60].Find the average marks of the entire class.
// let marks=[85,97,44,37,76,60];
// let sum=0;

// for(let val of marks){
//     sum=sum+val;
// }
// avg=sum/marks.length;
// console.log(`The average marks of the student is ${avg}`);

//Qs2: For a given array with prices of 5 items->[250,645,300,900,50].All items have an offer of 10% discount.Change the array to store final price after applying offer.
// let items=[250,645,300,900,50];
// let i=0;//index

// for(let val of items){
//     console.log(`Value at index ${i} is ${val} `);
//     let offer= val/10;
//     items[i]=items[i]-offer;
//     console.log(`The prices of items after discount is ${items[i]}`);
//     i++;

// }
          //OR
        //   let items=[250,645,300,900,50];
        //    for(let i=0; i<items.length;i++){
        //     let offer=items[i]/10;
        //     items[i]=items[i]-offer;
        //    }
        //    console.log(items);

//Qs:Count how many spaces are there in "I am a BSc CSIT student"

// let str = "I am a BSc CSIT student";
// let spaces = 0;

// for (let ch of str) {
//   if (ch === " ") {
//     spaces++;
//   }
// }

// console.log(spaces);


//Count how many times "i" appears in "Mississippi"
// let str="Mississippi";
// let count=0;

// for(let ch of str){
//     if (ch==="i"){
//         count++;
//     }
// }
// console.log(count);
//

//Count the number of digits in "csit2025batch"
// let str="csit2025batch";
// let count=0;

// for(let ch of str){
//     if(ch>="0"&&ch<"9"){
//         count++;
//     }
// }
// console.log(count);

//Count occurrences of each character in:banana
// let str="banana";
// let freq={};//Created an empty object.Object will store key and value; Key=>b,a,n Value=>1,2,3


// for(let ch of str){
//     if(freq[ch]){
//         freq[ch]++;
//     }
//     else{
//         freq[ch]=1;
//     }
// }
// console.log(freq);

//Count how many times each word appears in:"I love JS and I love coding"
// let str="I love JS and I love coding";
// let freq={};

// for(let ch of str){
//     if(freq[ch]){
//         freq[ch]++;
//     }
//     else{
//         freq[ch]=1;
//     }
// }
// console.log(freq);

//Count how many times each vowel appears in the string:"education"

// let str="education";
// let vowels="aeiou";
// let freq={ a: 0, e: 0, i: 0, o: 0, u: 0 };

// for(let ch of str){
//     if(vowels.includes(ch)){
//         freq[ch]++;
//     }
//    else{
//     freq[ch]=1;
//    }
// }
// console.log(freq);

//Count how many times each consonant appears in the string:"Cristiano"
// let str = "Cristiano".toLowerCase();
// let vowels = "aeiou";
// let freq = {};

// for (let ch of str) {
//   // check if character is a letter and not a vowel
//   if (ch >= "a" && ch <= "z" && !vowels.includes(ch)) {
//     if (freq[ch]) {
//       freq[ch]++;
//     } else {
//       freq[ch] = 1;
//     }
//   }
// }

// console.log(freq);

//Count number of consonants at odd positions in "programming".
// let str="programming";
// let vowels="aeiou";
// let count=0;

// for(let i=0;i<str.length;i++){
//   if(i%2!==0&&str[i]>="a"&&str[i]<"z"&&!vowels.includes(str[i])){
//     count++;
//   }
//   }
// console.log(count);

//Count digits, letters, spaces, and special characters in "CSIT2025@Batch!"
// let str="CSIT2025@Batch!";
// let digits=0, letters=0, spaces=0, special=0;

// for(let ch of str ){
//   if(ch>="0"&&ch<="9"){
//     digits++;
//   }
//   else if(ch>="a"&&ch<="z"||ch>="A"&&ch<="Z"
//     ){
//       letters++;
//     }
//     else if(ch==" "){
//       spaces++;
//     }
//     else{
//       special++;
//     }

  
//   }
//   console.log(digits,letters,spaces,special);
  
  
// Count number of words in "I am learning JavaScript"
// let str="I am learning JavaScript";
// let words= str.split(" ");//used one space because we need to split the sentence after every one space.
// console.log(words.length);

//Check if "Madam" is a palindrome
// let str="madam";
// let reversed= str.split("").reverse().join("");//split converts string intos array[m,a,d,a,m]

// console.log(str===reversed);//comparing if str is equal to reversed.

// Count the number of times 'a' appears in "banana"

// let str="banana";
// let count=0;

// for(let ch of str){
//   if(ch=="a"){
//     count++;
//   }
// }
// console.log(count);

//Count uppercase letters in "Hello World".
// let str="Hello World";
// let count=0;

// for(let ch of str){
//   if(ch>="A"&&ch<="Z"){
//     count++;
//   }
// }
// console.log(count);

//Count number of vowels in "Programming is fun"
// let str="Programming is fun";
// let vowels="aeiou";
// let count=0;

// for(let ch of str){
//   if(vowels.includes(ch)){
//     count++;
//   }
// }
// console.log(count);

//Count frequency of each vowel in "education system"
// let str="education system";
// let vowels="aeiou";
// let freq={a:0,e:0,i:0,o:0,u:0};

// for(let ch  of str){
//   if(vowels.includes(ch)){
//     freq[ch]++;
//   }
//   else{
//     freq[ch]=1;
//   }
// }
// console.log(freq);

// Find the most frequent character in "programming"

// let str="programming";
// let freq={};

// for(let ch of str ){
//   freq[ch]=(freq[ch]||0)+1;//shorter way
// }

// let maxCount=0;
// let mostFreq="";

// for(let ch in freq){
//   if(freq[ch]>maxCount){
//     maxCount=freq[ch];
//     mostFreq=ch;
//   }
// }
// console.log(`Most frequent character is ${mostFreq} which appeared ${maxCount} times `);

//Count occurrences of each word in "I love JS and I love coding".
// let str="I love JS and I love coding";
// let freq={};

// for(let ch of str){
  
//   if(freq[ch]){
// freq[ch]++;
//   }
//   else{
//     freq[ch]=1;
//   }
// }

// console.log(freq);

//Find the most frequent consonant in "JavaScript Basics".
// let str="javascript basics";
// let vowels="aeiou";
// let freq={};

// for(let ch of str){
//   if(!vowels.includes(ch)){
//    freq[ch]=(freq[ch]||0)+1;
//   }
// }
// let maxCount=0;
// let mostFreq="";

// for(let ch in freq){
//   if(freq[ch]>maxCount){
//     maxCount=freq[ch];
//     maxFreq=ch;
//   }
// }
// console.log(freq);

//Check if "Detartrated" is a palindrome (ignore case and spaces).

// let str="detartrated";
// let reversed= str.split("").reverse().join("");
// if(str==reversed){
//   console.log("Yes the word is palindrome");
// }
// else{
//   console.log("No, the word is not palindrome");
// }

//Reverse all words in "I love JavaScript" → "JavaScript love I".
// let str="i love javascript";
// let reversed=str.split(" ").reverse().join(" ");
// console.log(reversed);

//Mask all characters in the string except the last 4: "CSIT2025Batch" → "********atch"
// let str="CSIT2025Batch";
// let visible=str.slice(9,13);
// let masked="*".repeat(str.length-4)+visible;
// console.log(masked);

//Mask all characters in the string expect the last 2.
// let str="username22";
// let visible=str.slice(8,10);
// let masked="#".repeat(str.length-2)+visible;
// console.log(masked);

//Array methods in Js.
//Push method
//Basic syntax: push();//adds items to end.

//  let snacks=["momo","chowmein","pizza","burger"];//Use feautre in console.
//  snacks.push("khajaset","chhoila","sandwich");
//  console.log(snacks);

//Pop method://Removes from end and return
// let foodItems=["momo","fruits","localfoods","drinks"];
// console.log(foodItems);
// foodItems.pop();
// console.log("updated",foodItems);//Output:drinks is removed.

//tostring method
// let foodItems=["momo","fruits","localfoods","drinks"];
// console.log(foodItems);
// console.log(foodItems.toString());//Changed to string.

//concat
// let soccerPlayer=["CR7","LM10","NJR"];
// let cricketPlayer=["ABD","Steyn","Smith"];
// let players= soccerPlayer.concat(cricketPlayer);
// console.log(players);

//Unshift:Add to start
// let soccerPlayer=["CR7","LM10","NJR"];
// soccerPlayer.unshift("Zizou");
// console.log(soccerPlayer);

//Shift:Delete froms start
// let soccerPlayer=["CR7","LM10","NJR"];
// soccerPlayer.shift();
// console.log(soccerPlayer);

//Splice:add remove or replace
// let arr=[1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
// console.log(arr);
//delete:arr.splice(3,1);
//replace:arr.splice(3,2,15,20);

// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// console.log(companies);


// companies.splice(2,1,"ola");

// companies.push("amazon");
// console.log(companies);

//Functions
// function myFunction(){
// console.log("Hi I am Cr7");
// }
// myFunction();
// myFunction();
// myFunction();

//parameter function calling
// function myFunction(msg){//parameter-->input
// console.log(msg)
// }
// myFunction("I love JS");

// function product(x,y){
//   console.log(x*y);
// }
// product(5,8);//Output:40

 //Return value in function
//  function sum(x,y){
//   s=x+y;
//   return s;
//  }
// let val=sum(4,6);
// console.log(val);

//Arrow JS
//sum function(normal)
// function sum(a,b){
//   return a+b;
// }
//Arrow method(modern Js)
// const arrowSum=(a,b)=>{
//   console.log(a+b);
// };

// const arrowMul=(x,y)=>{
//   console.log(x*y);
// };

// const printHello=()=>{
//   console.log("Jay Rastrabad");
// };

//Qs:Create a function using the "function" keyword that takes a String as an argument and returns the number of vowels in the string.
// function vowels(str){
//  let count=0;
//  for(let ch of str){
//   if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u"){
// count++;
//   }
//  }


// console.log(count);
// }

//Qs2:Use the arrow method to solve the same program.
// const countVow=(str)=>{
//    let count=0;
//   for(let ch of str){ 
//    if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u"){
//  count++;
//    }
//  }
//  return count;
// };;

//For Each Loop
//  let arr=[1,3,5,7,9];
//  arr.forEach(function gameVal(val,idx){//Value of array moves to val at each index.
//  console.log(val,idx);
//  });

//Qs:For a given array of numbers, print the sqaure of each value using the forEach loop.
// let arr=[1,3,5,7,11];
// arr.forEach(function squareVal(val,idx){
// console.log(val*val,idx)
// });

// let num=[2,5,7,8];
// num.forEach((num) =>{
// console.log(num*num);//num**2 also valid
// });

//Map method

// let nums=[3,5,7,9];
// let newArr=nums.map((val)=>{
//   return val**3;//Creating newarray (cube of org array) with the help of map.
// })
// console.log(newArr);

//Filter method

// let arr=[1,2,4,5,7,8,9];

// let evenNum=arr.filter((val)=>{
//   return val%2==0;
// });
// console.log(evenNum);

//Reduce method
// const arr=[1,2,3,4];

// const output=arr.reduce((res,currVal)=>{
//   return res+currVal;
// });

// console.log(output);// 10
//Finding max number.
// let arr=[5,4,3,6,2];
// const output=arr.reduce((prev,curr)=>{
//   return prev>curr ? prev:curr;
// });
// console.log(output);//6

//Practice questions
//We are given array of marks of students. Filter out the marks of the students that scored 90+.
// let arr=[45,91,67,94,54];
// const output=arr.filter(val=>{
//   return val>90;
// });
// console.log(output);

//Qs:Take a number n as input from user.Create an array of numbers from 1 to n.Use the reduce method to calculate sum of all numbers in the array.Use the reduce method to calculate product of all numbers in the array.
//  let n= prompt("Enter a number:");
//  let arr=[];
//  for(let i=1;i<=n;i++){
//   arr[i-1]=i;//1(0=>index),2(1),3(2),4(3),5(4),n(n-1)
//  }
// console.log(arr);

// const sum=arr.reduce((prev,curr)=>{
//   return prev+curr;
// });
// console.log(sum);

// const product=arr.reduce((prev,curr)=>{
//   return prev*curr;
// });
// console.log(product);