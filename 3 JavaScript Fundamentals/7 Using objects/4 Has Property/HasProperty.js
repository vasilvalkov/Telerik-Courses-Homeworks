/*Problem 4. Has property
Write a function that checks if a given object contains a given property.
*/


var obj1 = {
    name: 'Gosho',
    age: 23,
    hair: 'curly'
	},
	arr = [1,2,3];

console.log(obj1);
console.log('has age: ' + hasProp(obj1, 'age'));
console.log('has height: ' + hasProp(obj1, 'height'));
obj1.height = 170;
console.log(obj1);
console.log('has height: ' + hasProp(obj1, 'height'));
console.log();
console.log('arr = ' + arr);
console.log('has arr length: '  + hasProp(arr, 'length'));
console.log('has arr age: ' + hasProp(arr, 'age'));

function hasProp(obj, prop){
	if (obj[prop] !== undefined){
		return true;
	}
    return false;
}