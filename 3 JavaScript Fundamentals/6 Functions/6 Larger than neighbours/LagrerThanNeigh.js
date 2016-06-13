/*Problem 6. Larger than neighbours
 Write a function that checks if the element at given position
 in given array of integers
 is bigger than its two neighbours (when such exist).
*/

//You can alter the arguments to test it
var arr = [2, 3, 5, 6, 8, 3, 33, 2, 3, 5, 21, 62]
console.log(arr);
console.log(largerNeigh(4, arr));
console.log(largerNeigh(9, arr));

function largerNeigh (pos, arr){	
	var nArr = [],
		arr = arr || [],
		val = arr[pos];
	if (val > arr[pos + 1] && val > arr[pos - 1]) {
	    return console.log(val + ' at index ' + pos + ' is larger than its two neighbours');
	} else return console.log(val + ' at index ' + pos + ' is not larger than its two neighbours');
}