const double = arr => arr.map(val => val*2)

const squareAndFindEvens = (numbers) => numbers.map((num) => num**2).filter((square) =>  square % 2 === 0) 

// double([3])
console.log(double([4,2,3,4]))

