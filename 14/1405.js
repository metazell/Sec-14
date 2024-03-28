//SAME KEYS AND VALUES
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

 
const createInstructor= (firstName, lastname) => ({firstName,lastname})

// console.log(createInstructor('manny', 'johnson'))

//COMPUTED PROPERTY NAMES
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber= 42; 
const instructor= {
    firstName: 'Colt'
    [favoriteNumber]:'That is my favorite!'
}

//OBJECT METHODS
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

  const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

//CREATE ANIMAL FUNCTION ????????
// const d = createAnimal("dog", "bark", "Woooof!")
// d.bark()  

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// s.bleet()

function createAnimal(species, verb, noise){
    return{
        species,
        [verb](){
            return noise;
        }
    }
}