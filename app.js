'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a1, a2) {
  // let a1=prompt('enter number 1:');
  // let a2=prompt('enter number 2:')    [b,'The sum of 4 and 7 is 11.'];
  let b=a1+a2;

    return [b,'The sum of 4 and 7 is 11.']
//   //eslint-disable-line
}
// //Here is the test for sum(); uncomment it to run it
 testSum(4, 7);

  



// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here

function multiply(b1, b2) {
  let c=b1 * b2;
  // console.log(b1,b2);
  // console.log();
       return [c,'The product of 5 and 9 is 45.'];
  //eslint-disable-line
}
testMultiply(5,9);

// // Here is the test for multiply(); uncomment it to run it


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here

 function sumAndMultiply(c1, c2, c3) {
let y=c1+c2+c3
let y2=c1*c2*c3
// sum((y[0],5),0)
// console.log(y2,'tr1')
// //multiply
// let y3=multiply(4,7)
// console.log(y3,'tr2')

// let y4=multiply(y[0],5)
// console.log(y3,'tr4')
return [y, y2,'4 and 7 and 5 sum to 16.','The product of 4 and 7 and 5 is 140.'];
 }


testSumAndMultiply(4,7,5);

///====exprt
// console.log('multip='+mul1);

// let dds=mul1
// console.log('hiiiii'+dds);
// console.log('hiiiiijjjjjjjjjjjjjjjjjjjjjjjjj');
// let mul2=multiply(28,5)
// console.log('hiiiii'+mul2);
//  let mul2=multiply(mul1,5)
// console.log('multip='+mul2);
///====exprt
// Here is the test for sumAndMultiply(); uncomment it to run it
  

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4]; 

function sumArray(testArray) {
  let count=sum(testArray[0],testArray[1]);
  let count2=sum(count[0],testArray[2]);
  count=sum(count[0],testArray[2])
  console.log(count[0]);
  return [count[0],'2,3,4 was passed in as an array of numbers, and 9 is their sum.']
 }
  //eslint-disable-line


// Here is the test for sumArray(); uncomment it to run it

 testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!
///exper
// count=sum(testArray[0],testArray[1])
// count= sum(count[0]+testArray[2]);
// console.log(count[0]);
// count=sum(textArray[0],textArray[1]);
  // count=sum(count[0],testArray[1])      
  // count= sum(count[0],textArray[2]) 
  // console.log(count);
/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/
let multArr=[2,3,4]
let count1=1
function multiplyArray(multArr) {
  
  count1=multiply(count1,multArr[0]);
     count1=multiply(count1[0],multArr[1]);
     count1=multiply(count1[0],multArr[2]);
    //  console.log(count1,'tr5tr');
     return [count1[0],'The numbers 2,3,4 have a product of 24.']
 }
 
 // Here is the test for multiplyArray(); uncomment it to run it
 testMultiplyArray(multArr);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
//   //eslint-disable-line
//   for(let i=0; i<= testDynamicArray.length;i++){
  //   o=multiply1(o,testDynamicArray.includes(i));
// let testDynamicArray= [1, 2, 3, 4, 5];
// let multiar = 1;
//  function testMultiplyAnyArray(testDynamicArray) {
//   multiar=testMultiply(multiar,multArr[0]);
//   multiar=testMultiply(multiar[0],multArr[1]);
//   multiar=testMultiply(multiar[0],multArr[2]);
//   console.log(count1);
  
//   return [multiar,"The numbers 1,2,3,4,5 have a product of 120."]
// //   //eslint-disable-line
//  }

// Here is the test for multiplyArray(); uncomment it to run it
//  testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.