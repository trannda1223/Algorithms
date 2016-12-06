// // All Anagrams
// // ////////////////Prompt//////////////
// // Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

// // Parameters:

// // string (required) - a string of characters.

// // Examples
// // Input	
// // string: "abc"

// // Output
// // [ "abc", "acb", "bac", "bca", "cab", "cba" ]

// ////////////////Prompt-end//////////////



// // // All Anagrams
// // // ////////////////Prompt//////////////
// // // Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

// // // Parameters:

// // // string (required) - a string of characters.

// // // Examples
// // // Input	
// // // string: "abc"

// // // Output
// // // [ "abc", "acb", "bac", "bca", "cab", "cba" ]


// // //'abcdefg'


// // var str = 'abc'

// // for(var i=0; i<str.length; i++){
// // 	var result = str[i];
// // 	for(var j=0; j<str.length; j++){
// // 		if(str[j] !== str[i]){
// // 			var result2 = result + str[j];
// // 			for(var k=0; k<str.length; k++){
// // 				if(str[k] !== str[j] && str[k] !== str[i]){
// // 					var result3 = result2 + str[k];
// // 					console.log(result3);
// // 				}
// // 			}		
// // 		}
// // 	}
// // }

// // All Anagrams
// // ////////////////Prompt//////////////
// // Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

// // Parameters:

// // string (required) - a string of characters.

// // Examples
// // Input	
// // string: "abc"

// // Output
// // [ "abc", "acb", "bac", "bca", "cab", "cba" ]



// ////////////////Prompt-end//////////////



// ////////////my SOLUTIONS//////////////
// function allAnagrams (string) {
// 	var recur = function(count){
// 		var resultsArr =[];
		
// 		//base case
// 		if(count === 1){
// 			for(var i=0; i<string.length; i++){
// 				resultsArr.push(string[i]);
// 			}
// 			return resultsArr;
// 		}
		
// 		var fuck = recur(count-1);
// 		//dont want string[k] to equal any character perviously (recursively)!!
// 		for(var j=0; j<fuck.length; j++){
// 			for(var k=0; k<string.length; k++){

// 				var currentEqualsAnycharacterBefore = false;
// 				for(var l=0; l<fuck[j].length; l++){
// 					if(string[k] === fuck[j][l]){
// 						currentEqualsAnycharacterBefore = true;
// 					}
// 				}
				
// 				if(!currentEqualsAnycharacterBefore){
// 					resultsArr.push(fuck[j]+string[k]);	
// 				}
// 				// if(string[k] !== fuck[j]){
// 				// 	console.log('f[j]: ', fuck[j], 'str[k]: ', string[k])
// 				// 	resultsArr.push(fuck[j]+string[k]);
// 				// 	// console.log(resultsArr)	
// 				// }
// 			}
// 		}
// 		return resultsArr;
		
// 	};//recur
// 	return recur(string.length);
// }

// allAnagrams('abc')




// All Anagrams
// ////////////////Prompt//////////////
// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

// Parameters:

// string (required) - a string of characters.

// Examples
// Input	
// string: "abc"

// Output
// [ "abc", "acb", "bac", "bca", "cab", "cba" ]

////////////////Prompt-end//////////////



/////////////////////soln working//////////////////////
var allAnagrams = function(string){
	/*
		want to get all permuations at each position


		its recursion bc each position is repeated 
	*/

	var recur = function(n){

		var results = [];

		//base case
		//gives me each character at the first position
		if(n === 1){
			for(var i=0; i<string.length; i++){
				results.push(string[i]);
			}
			return results;
		}

		//recursion
		//now i want to add the other positions
		//recur(n-1)+ //current position

		//array of strings with multiple characters
		var prevResult = recur(n-1);

		//need to check prevResults with current so no repeats
		for(var j=0; j<prevResult.length; j++){
			for(var k=0; k<string.length; k++){
				var checkIfCharIsAlreadyPresent = false;
				/*
					need to check current string character we want to add
						-with all the characters of prevResult[j]
				*/
				for(var l=0; l<prevResult[j].length; l++){
					//have the individual char
					if(prevResult[j][l] === string[k]){
						checkIfCharIsAlreadyPresent = true;
					}
				}

				if(!checkIfCharIsAlreadyPresent){
					results.push(prevResult[j]+string[k]);
				}

			}
		}

		return results;
	}//recur

	return recur(string.length);
}



allAnagrams('abc')
/////////////////////soln working-end//////////////////////


// //need each character in the string at different positions
// //should have 1'a' 2'p' 1's'
// allAnagrams('apps')



//////////////////////////SOLUTIONS-N-QUEENS///////////////

function allAnagrams(string) {
  var results = {};
  
  //
  function subRoutine(text, options) {
  	console.log('text: ', text);
  	console.log('options: ', options)
    if(text.length === string.length) {
      results[text] = true;
    }
    for (let i = 0; i < options.length; i++) {
      subRoutine(text + options[i], options.slice(0, i) + options.slice(i + 1));//recursion
      
      //'' + 'a', '' + 'pps' //text is adding each letter
      //'a' + 'p', 'a' + 'ps' //options is cutting off each letter left to right
      //HOW YOU GET THE DIFFERENT COMBOS THO??!!
    }
  }
  subRoutine('', string);
  return Object.keys(results);//returns the keys
}

// allAnagrams('abc')



// //N-QUEENS FOLLOW THE STACK!!!
// // 'apps'.slice(2)
// //wheres the base case??


////////////better solution-david////////

function allAnagrams(string) {
  //store results in obj
  var results = {};
  
  var recur = function(buildsToAnagram, options){
    //base case
    if(buildsToAnagram.length === string.length){
      results[buildsToAnagram] = true;
    }
    
    for(var i=0; i<options.length; i++){
      recur(buildsToAnagram + options[i], options.slice(0,i) + options.slice(i+1))
    }
    
  };
  
  recur('', string);
  return Object.keys(results);
  
}

allAnagrams('abc')



