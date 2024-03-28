// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => nums.filter(nums => nums % 2 === 0)


// console.log(filterOutOdds(23,23,24,26,27,30))

//FIND MIN
// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...minnum) => Math.min(...minnum)

// console.log(findMin(234,23,3455,43))


//MERGE OBJECTS ??????????????
// const a = {a:1};
// const b = {b:2};
// // mergeObjects({a:1, b:2});

const mergeObjects = (ob1, ob2) => ({ ...ob1, ...ob2 });

// console.log(mergeObjects(a, b));


//DOUBLE AND RETURN ARGS
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs= (arr, ...arg) => [...arr, arg.map (num => num * 2 )]

// console.log(doubleAndReturnArgs([23,48,56],4,4))

//SLICE AND DICE ????
// function removeRandom(items) {
// }
const removeRandom= items => {let it =Math.floor(Math.random()* items.length); return [...items.slice(0, it), items.slice(it +1ß)]}

//2
const extend

const extend = (array1, array2) => {
    return [...array1, ...array2];
  }

//3
const addKeyVal= (obj,key,val) =>  let newObj = { ...obj }
newObj[key] = val;
return newObj;

//4
const removeKey = (obj, key) => {let newObj = { ...obj }
  delete newObj[key];
  return newObj;
}

//5
const combine = (obj1, obj2) => {return { ...obj1, ...obj2 };
}

//6
const update = (obj, key, val) => {let newObj = { ...obj } newObj[key] = val;
  return newObj;
}