/*Problem 3. Maximal sequence
Write a script that finds the maximal sequence
of equal elements in an array.
*/

//You can alter arr to test the result with different numbers
var i,
	arr = [2,1,1,2,3,3,2,2,2,2,1],
	counter = [];
	maxSeq = [],	
	len = arr.length;
	
for (i = 0;i < len; i += 1){
	if (arr[i] !== counter[0]){ //Checks if index is different than counter[0]
		counter = [arr[i]]; //If true, overrides counter
	}	else {
			counter.push(arr[i]); //If equal, adds the index value to counter
		}
		if (maxSeq.length < counter.length){
			maxSeq = counter; //Assigns the longest found array of equal values
		} 
}
console.log(maxSeq.join(', '));