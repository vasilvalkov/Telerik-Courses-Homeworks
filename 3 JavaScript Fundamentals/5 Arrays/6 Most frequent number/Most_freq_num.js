/*Problem 6. Most frequent number
Write a script that finds the most frequent number in an array.
*/

//You can alter arr to test the result with different numbers
var i,
	meet,
	counter = 0;
	arr = [4,1,1,4,2,3,4,4,1,2,4,9,3],		
	len = arr.length;
	sorter = arr.slice(0);
	sortArr = sorter.sort(sortOrder);
	
function sortOrder(a, b) {
	return (a == b) ? 0 : (a > b) ? 1 : -1;
}
	
for (i = 0;i < len; i += 1){
	if (sortArr[i] !== meet){ //Checks if index is different than meet
		meet = sortArr[i]; //If true, overrides meet
		counter = 1; //and resets the counter
	}	else {
			counter += 1; //If equal increases the counter
		}
}
console.log(arr.join(', '));
console.log('Most frequent number is: ' + meet + ' (' + counter + ' times)');