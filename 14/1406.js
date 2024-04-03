//OBJECT DESTRUCTURING 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); 8
console.log(yearNeptuneDiscovered); 1846

//OBJECT DESTRUCTURING 2
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); 
  yearNeptuneDiscovered 1846 and
  yearMarsDiscovered 1659


//OBJECT DESTRUCTURING 3
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"})
    Your name is Alejandro and you like purple

  getUserData({firstName: "Melissa"})
    Your name is Melissa and you like green

  getUserData({}) 
    

