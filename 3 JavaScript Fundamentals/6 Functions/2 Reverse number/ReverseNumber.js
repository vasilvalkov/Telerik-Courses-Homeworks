/*Problem 2. Reverse number
Write a function that reverses the digits of given decimal number.
*/

//You can alter the arguments to test it
console.log(revNumber(256));
console.log(revNumber(123.45));

function revNumber (number){	
	var i,
		nArr = [],
		nStr = number.toString();
	for (i = nStr.length-1; i >= 0; i -= 1)
	nArr += nStr[i];
	return nArr;	
}