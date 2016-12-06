// Coin Sums
// ////////////////Prompt//////////////
// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p
// 2p
// 5p
// 10p
// 20p
// 50p
// £1 (100p)
// £2 (200p)
// Given a given number of pence, return the possible number of ways someone could make change.

// It is possible to make 5 pence in the following ways:

// 5 * 1p

// 3 * 1p + 1 * 2p

// 1 * 1p + 2 * 2p

// 1 * 5p
// In other words, find all the possible combinations of coins that sum to a given pence value.


// Parameters:

// total (required) - the number of 

// You've got Helpers!
// coins
// var coins = [1,2,5,10,20,50,100,200];

// Examples
// Input		Output
// total: 1	  	  1
// total: 17	 28

// ////////////////Prompt-end//////////////



//what is 

function coinSums (total) { 

  // var count = 0;
  var adjCoins = [200, 100, 50, 20, 10, 5, 2, 1];

  var recur = function(sub, choices){
    // if(sub === total){ 
      //theres going to be times that it doesnt equal total thus most of the time blowing the stack
    //   return 1;
    // }
    var coin = choices[0];

    if(coin === 1){
      return 1;
    }
  
  var sum = 0;
    for(var i= sub; i <= total; i=i+coin){
      console.log('i, coin: ', i, coin);
      console.log('choices: ', choices)
      //console.log('xxxx:',recur(i, choices.slice(1)))
      sum += recur(i, choices.slice(1));
    }
    
    return sum;
  }//recur

  return recur(0, adjCoins);
  
}











