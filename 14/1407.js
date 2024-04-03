//QUESTION 1
new Set([1,1,2,2,3,4])
    1,2,3,4

//QUESTION 2
[...new Set("referee")].join("")
    'ref'

//QUESTION 3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

m0: {array(3)} => true
m1: {array(3)} => false


//hasDuplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;


//vowelCount
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

const vowelCount = (str) => {
    const vowels = 'aeiou';
    const map = new Map();

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            map.set(char, (map.get(char) || 0) + 1);
        }
    }

    return map;
};