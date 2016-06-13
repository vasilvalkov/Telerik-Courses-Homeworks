/*Problem 7. Binary search
Write a script that finds the index of given element
in a sorted array of integers by using the binary search algorithm.
*/

//You can alter arr to test the result with different integers
var i,
	found,
	arr = [1,4,5,6,7,9,11,17,21,22,25,27,31],		
	sortArr = arr.sort(sortOrder),
	len = sortArr.length,
	min = 0,
	max = len,
	middle = sortArr[Math.floor((min + max) / 2)] | 0,
	midIndex = sortArr.indexOf(middle),
	x = 17; //This is the value to be found. you can alter to test for other numbers
	
function sortOrder(a, b) {
	return (a == b) ? 0 : (a > b) ? 1 : -1;
}
console.log(sortArr.join(', '));
//tests if x is within the array scope
	if ((x < sortArr[min]) || (x > sortArr[len-1])){
		console.log(x + ' is not in the array');
	}
	if (x !== middle){ //compare x to middle
		while (max >= min) {
			found = false;
			if (x < middle) { //if smaller
				max = midIndex - 1; //trims max
				middle = sortArr[Math.floor((min + max) / 2)] | 0; //finds new middle
				midIndex = sortArr.indexOf(middle); //updates middle index
			} else if (x > middle) { //if greater
				min = midIndex + 1; //trims min
				middle = sortArr[Math.floor((min + max) / 2)] | 0; //find new middle
				midIndex = sortArr.indexOf(middle); //updates middle index
			} else {
				found = true;
				break;
			}
		}
		if (found = 0) {
			console.log(x + ' is not in the array');
		} else if (x !== middle){
			console.log(x + ' is not in the array');
		} else {
			console.log(x + ' is at index ' + sortArr.indexOf(middle));
		}
	} else {
		console.log(x + ' is at index ' + sortArr.indexOf(middle));
	}