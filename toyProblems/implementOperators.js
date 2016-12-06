// // Implement Operators

// //////////////////Prompt///////////////
// Write three functions to replace the multiply, divide, and modulo operators. The only operators you may only use in your solution are addition and subtraction. Your functions will only have to handle integer math.

// Note: Don’t put any complex math in the comments in your code, or the tests may fail.

// EXAMPLES:

// multiply(5, 2) === 10

// divide(5, 2) === 2

// modulo(5, 2) === 1
// //////////////////Prompt-end///////////////



// //////////////////////////Test-end////////////////
// //// Your Code Should Pass:
// var expect = chai.expect;

// describe("Multiply", function() {
//   it("should exist", function() {
//     expect( multiply ).to.be.a('function');
//   });
  
//   it("should not use complex math", function() {
//     expect( multiply.toString() ).to.not.contain('*');
//     expect( multiply.toString() ).to.not.contain('/');
//     expect( multiply.toString() ).to.not.contain('%');
//     expect( multiply.toString() ).to.not.contain('Math');
//   });
  
//   it("should perform integer multiplication", function() {
//     expect( multiply(2, 1) ).to.equal( 2 * 1 );
//     expect( multiply(17, 5) ).to.equal( 17 * 5 );
//     expect( multiply(78, 453) ).to.equal( 78 * 453 );
//     expect( multiply(-79, 82) ).to.equal( -79 * 82 );
//     expect( multiply(-275, -582) ).to.equal( -275 * -582 );
//     expect( multiply(0, 32) ).to.equal( 0 * 32 );
//     expect( multiply(0, 0) ).to.equal( 0 * 0 );
//   });
// });


// describe("Divide", function() {
//   it("should exist", function() {
//     expect( divide ).to.be.a('function');
//   });
  
//   it("should not use complex math", function() {
//     expect( divide.toString() ).to.not.contain('*');
//     expect( divide.toString() ).to.not.contain('/');
//     expect( divide.toString() ).to.not.contain('%');
//     expect( divide.toString() ).to.not.contain('Math');
//   });
  
//   // Bitwise operators must be used to get the proper integer division result
//   it("should perform integer division", function() {
//     expect( divide(2, 1) ).to.equal( ~~(2 / 1) );
//     expect( divide(17, 5) ).to.equal( ~~(17 / 5) );
//     expect( divide(78, 453) ).to.equal( ~~(78 / 453) );
//     expect( divide(-79, 82) ).to.equal( ~~(-79 / 82) );
//     expect( divide(-275, -582) ).to.equal( ~~(-275 / -582) );
//     expect( divide(0, 32) ).to.equal( ~~(0 / 32) );
//     expect( divide(0, 0).toString() ).to.equal( 'NaN' );
//   });
// });


// describe("Modulo", function() {
//   it("should exist", function() {
//     expect( modulo ).to.be.a('function');
//   });
  
//   it("should not use complex math", function() {
//     expect( modulo.toString() ).to.not.contain('*');
//     expect( modulo.toString() ).to.not.contain('/');
//     expect( modulo.toString() ).to.not.contain('%');
//     expect( modulo.toString() ).to.not.contain('Math');
//   });
  
//   it("should return the remainder of integer division", function() {
//     expect( modulo(2, 1) ).to.equal( 2 % 1 );
//     expect( modulo(17, 5) ).to.equal( 17 % 5 );
//     expect( modulo(0, 32) ).to.equal( 0 % 32 );
//     expect( modulo(78, 453) ).to.equal( 78 % 453 );
//     expect( modulo(-79, 82) ).to.equal( -79 % 82 );
//     expect( modulo(-275, -502) ).to.equal( -275 % -502 );
//     expect( modulo(0, 32) ).to.equal( 0 % 32 );
//     expect( modulo(0, 0).toString() ).to.equal( 'NaN' );
//   });
// });
// //////////////////////////Test-end////////////////////////





var multiply = function(x, y) {
  //if x neg//if y neg
  var results = 0
  for(var i = 0; i < y; i++){
    results += x;
  }
  return results;
};

//y= how many pieces of x there need to be
// only a valid piece if the pieces are equal
var divide = function(x, y) {
  //what 
};

var modulo = function(x, y) {
  // Your code goes here
};

multiply(-275, -582)
// divide(10, 2) 











