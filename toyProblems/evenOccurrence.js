// Even Occurrence

// ////////////////prompt///////////
// 3/4/16 UPDATE: If you solved this challenge previously, you may have to update your function name from evenOccurence (with 1 r) to evenOccurrence (with 2 rs)


// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

// Examples
// Input:
// arr: [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]	

// Output:
// 2

// Input:
// arr:
// [ "cat", "dog", "dig", "cat" ]	

// Output:
// "cat"

// ////////////////Prompt-end//////////////


var evenOccurrence =  function(arr){
	
	for(var i = 0; i < arr.length; i++){
		var count = 0
		var curr = arr[i];
		arr.forEach(function(val, i){
			if(val===curr){
				count++
			}
			
		});//each
		if(count % 2 === 0){
			return curr;
		}
	}//for
}








/////////////my soln

//store ele and counter in Object

//loop through array (not the obj) bc its still in order
//check if the count is even if it is return it

//out of the loop then return null



var evenOccurrence = function(array){
  
  //need to count every element and % 2 === 0 if so return the element
  
  //need to store the count somehow
  
  var results = {};
  
  array.forEach ( function (ele) {
    results[ele] = results[ele]+1 || 1;
  });
  
  
  // for(var key of array){
  //   if(results[key] % 2 === 0){
  //     return key;
  //   } 
  // }

  for(var i=0; i<array.length; i++){
    if(results[array[i]] % 2 === 0){
      return array[i];
    } 
  }
  
  return null
};
/////////////////////
