/*Problem 4. Maximal increasing sequence
Write a script that finds the maximal increasing sequence in an array.
*/

//You can alter arr to test the result with different numbers
var i,
	arr = [3,2,3,4,2,2,4],
	counter = [];
	maxSeq = [],	
	len = arr.length;
	
for (i = 0;i < len; i += 1){
	if (arr[i] !== counter[counter.length-1] + 1){ //Checks if index is different than counter[lastIndex]+1
		counter = [arr[i]]; //If true, overrides counter
	}	else {
			counter.push(arr[i]); //If equal, adds the index value to counter
		}
		if (maxSeq.length < counter.length){
			maxSeq = counter; //Assigns the longest found array of sequential values
		} 
}
console.log(maxSeq.join(', '));