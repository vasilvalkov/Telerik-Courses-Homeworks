/*Problem 5. Selection sort
Sorting an array means to arrange its elements in increasing order.
Write a script to sort an array.
Use the selection sort algorithm: Find the smallest element,
move it at the first position,
find the smallest from the rest, move it at the second position, etc.
*/

//You can alter arr to test the result with different numbers
var i,
	getMin,
	aux,
	giveMin,
	arr = [3,12,83,64,70,2,11],
	sortArr = arr.slice();
	sorter = sortArr.sort(sortOrder);
	len = sorter.length;
	
function sortOrder(a, b) {
	return (a == b) ? 0 : (a > b) ? 1 : -1;
}
	console.log(arr.join(', ')); //logs the initial array
for (i = 0;i < len; i += 1){
	getMin = sorter.shift(0); //get min number
	aux = arr.indexOf(getMin); //get the index of min number in arr
	giveMin = arr.splice(aux, 1); //cuts min number from arr
	arr.splice(i, 0, giveMin); //adds min number at current index
	console.log(arr.join(', ')); //logs the sorting runtime
}