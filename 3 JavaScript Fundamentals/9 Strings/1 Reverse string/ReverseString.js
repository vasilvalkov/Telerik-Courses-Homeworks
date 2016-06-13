/*Problem 1. Reverse string
Write a JavaScript function that reverses a string and returns it.
*/

//You can alter the argument to test it
console.log(revString('sample'));

function revString (str){	
	var i,
		revStr = [],
		objStr;
		objStr = new String(str);
	for (i = objStr.length-1; i >= 0; i -= 1)
		revStr += objStr[i];
	return revStr;	
}