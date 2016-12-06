// Character Frequency

// ////////////////Prompt//////////////
// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

// Examples1
// string: "aaabbc"	===> [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

// E2
// string:"mississippi"	===> [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

// E3
// string:""	===> [ ]

// ////////////////Prompt-end//////////////

function characterFrequency (string) {
  var results =[];
  var store = {};
  //want to count the ele and push the tuple
  for(var i = 0; i < string.length; i++){
    if(store[string[i]]===undefined){
       store[string[i]] = 1;
    }
    else{
      store[string[i]] = store[string[i]] + 1
    }
  }
  
  
  
  for(var key in store){
    // if(store[key])
    results.push([key, store[key]]);
  }
  
  result.sort(function(a,b){
    if(a)
  })  
}


