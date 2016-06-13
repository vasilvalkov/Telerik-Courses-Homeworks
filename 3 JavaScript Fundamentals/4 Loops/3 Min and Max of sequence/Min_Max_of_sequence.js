// You can alter the numbers in n to test with different numbers
var n = [7, 1, 2, 3, 2, 0.5, 6, 11, 90, -3];

//Ascending sort rule for numbers
function sortOrder(a, b) {
	return (a == b) ? 0 : (a > b) ? 1 : -1;
}
//Sorts sequence and logs the first index as Min, and last index as Max
	n.sort(sortOrder);
	{console.log(n);}
	{console.log('Min is: ' + n[0]);}
	{console.log('Max is: ' + n[n.length-1]);}