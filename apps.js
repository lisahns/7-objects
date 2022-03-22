// 1. Write a function capitaliseKeys, which takes an object as an argument,
//and returns a new object with the same key-value pairs except all the keys
//have been capitalised.
//pass object to function(maybe array?)
//capitalise key
//return object with capitalised key

const ingredients = {
  water: "500ml",
  carrots: "4",
  coriander: "a handful",
  spices: {
    cumin: "1 tsp",
    paprika: "2 tsp",
    cayenne: "1 tsp",
  },
};

ingredients["cucumber"] = "20";
console.log(typeof ingredients["coriander"]);
console.log(typeof ingredients["spices"]);
console.log(ingredients["spices"]["cumin"]);

function capitaliseKeys(object) {
  const newObject = {};
  for (let key in object) {
    let upperCase = key.charAt(0).toUpperCase() + key.slice(1);
    newObject[upperCase] = object[key];
    if (typeof object[key] == "object"){
      for (let subKey in object[key]){       
      let subUpperCase = subKey.charAt(0).toUpperCase() + subKey.slice(1);
     newObject[upperCase][subUpperCase] = object[key][subKey];
     delete newObject[upperCase][subKey];
    }}
  }
  return newObject;
}
console.log(capitaliseKeys(ingredients));




/*
2. Write a function stringToObject

stringToObject takes one parameter, a string. The string is made up of 
key-value pairs formatted as follows: “key1:value1,key2:value2,…”

stringToObject should return an object made up of the key-value pairs in 
the string. Assume all values are strings.
*/


function stringToOjbect(string) {
var temp = string.split(","),
    theobj = {};
    console.log(temp);
for (let i=0; i<temp.length; i++) {
  var newArray = temp[i].split(":");
  theobj[newArray[0]] = newArray[1];
}return theobj
}

console.log(stringToOjbect('key1:value1,key2:value2,key3:value3'));



/* 3. Write a function shoppingList that accepts a single parameter, a string. 
The string is a list of ingredients, separated by a comma, formatted as below:

“2 tomatoes, 1 egg, 3 pumpkins”

The function shoppingList should return an object where the keys are 
the ingredient names, and the values are the number of the ingredients needed.
 */

function shoppingList(string) {
  var temp = string.split(",");
      theobj = {};
  for (let i=0; i<temp.length; i++) {
    var newTemp = temp[i].trim();
    console.log(newTemp);
    var newArray = newTemp.split(" ");
    theobj[newArray[1]] = newArray[0];
  }return theobj
  }
  
  console.log(shoppingList('2 tomatoes, 1 egg, 3 pumpkins'));


  /*
Map Object 
Write a function mapObject that takes two parameters: an object obj and a function fn.

mapObject should return a new object whose keys are the same as those of obj, and whose 
values are the result of calling fn with the values of obj.
  */

const obj ={
  a:2,
  b:4
};

fn = (n) => n + 2;



function mapObject (obj, fn) {
const newObject = {};
let func = Object.values(obj).map(fn);
for (let i=0; i<func.length; i++){
let key = Object.keys(obj);
newObject[key[i]] = func[i];
}
return newObject;
}

console.log(mapObject(obj,fn));

