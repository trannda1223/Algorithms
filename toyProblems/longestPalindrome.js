// Longest Palindrome

////////////////////prompt////////////////////////
// Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

// Examples
// Input	
// string:
// "aibohphobia"	

// Output:
// "aibohphobia"

// Input
// string:
// "My dad is a racecar athlete"	

// Output:
// "a racecar a"
////////////////////prompt-end////////////////////////


function isPalin (palin) {
  let result = true;
  for(let i = 0; i < palin.length/2; i++){
    //check if the first and last is equal
    if(palin[i] !== palin[palin.length-1-i]){
        result = false;
        //I want to go to the end and see if**** FUCK YOU
    }
  }//end for
  return result;
}


function longestPalindrome (string) {
  
  let result = '';
  var x; 
  
  for(let i = 0; i < string.length; i++){
    for(let j = string.length; j > i; j--){
      //get the string then cut it down
      
      x = string.slice(i, j);
      // console.log("i: ", i, "j: ", j, 'x: ', x)
      if(isPalin(x)){
        if(x.length > result.length){
          result = x;
        }
      }
    }
  }
  return result;
}
