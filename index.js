/**
 * Type des données primitifs
 * 
 * Boolean -> résultats assertion logique -> true pour vraie logique , false pour faux logique
 * Null -> Valeur null 
 * Undefined -> non défini
 * number -> nombre
 * string -> chaine de caractere
 * 
 * Type objet
 */

/**
 * New array
 */
var test = new Array(1,2,4)

/**
 * Create array from params{any}
 */
Array.from(params)

/**
 * Create array from args{any}
 */
Array.of(1,"1");

/**
 * Operate right to left
 */
test.reduce(( item, value ) => item + value, 1)

/**
 * Check if item is operate by function params
 * Bool 
 */
test.some( item => item < 6)

/**
 * Check if all element is passed by test
 * Bool
 */
test.every( item => item < 5)

/**
 * Find element in array
 * Bool 
 */
test.includes(2)

/**
 * Concat array with other value 
 */
test.concat(new Array(6,8))

/**
 * Filtre
 */
test.filter( item => item < 8 )

/**
 * Sort descending
 */
test.sort((a , b ) =>a < b ? 1 : -1 )

/**
 * Sort ascending
 */
test.sort(( a , b )=> a < b ? -1 : 1 )

var sum = 0;
/**
* Sum of array
*/
for (var i=0;i<test.length;i++){
        sum += test[i];
}
// OR
var sumArray = test.reduce( (a, b) => { return a + b })

/**
* Min value of array
*/
var minValue = test.reduce( (a, b) => { return a < b ? a : b })

/**
* Max value of array
*/
var maxValue = test.reduce( (a, b) => { return a > b ? a : b })

/**
 * Push element to array
 */
test.push()

/**
 * Remove element in middle of array
 */
test.splice(0,2)

/**
 * Couper un array
 */
test.slice(0,3)

/**
 * Add element in middle of array
 */
test.splice(1,2,"Hihi")

// Difference betwen this splice is the third parameters means add value

/**
 * add element at first
 */
test.unshift("a")

/**
 * Remove first element
 */
test.shift()

/**
 * remove last element
 */
test.pop()

/**
 * Append all element
 */
test.toString()

/**
 * Join array with string
 */
test.join('-')

/**
 * Itterate the array then add the provide function in all item 
 */
test.map(item => item + 1)

/**
 * Foreach item from array
 */
test.forEach(function(item,index){
    console.log(item,index);
})

/** ------------------------------
 * Localstorage manipulation
 * -------------------------------
 */

/**
 * Add item to LocalStorage
 */
localStorage.setItem("mickie","jul");

/**
 * Set localstorage array element
 */
localStorage.setItem("array",JSON.stringify(test));

/**
 * Get localstorage array
 */
JSON.parse(localStorage.getItem("array"))

/**
 * Get item from localStorage
 */
localStorage.getItem("mickie");

/**
 * Remove item from localstorage
 */
localStorage.removeItem("mickie");

/**
 * clear all LocalStorage 
 */
localStorage.clear();
