/*Problem 2. Lexicographically comparison
Write a script that compares two char arrays 
lexicographically (letter by letter).*/

//You can alter the arrays to test the result
var charArr1 = ['a','a','c','r','S','x','oo','JavaScript','c'],
	charArr2 = ['a','a','e','ivan'],
	a = charArr1.join(),
	b = charArr2.join();

	if (a > b) {
		console.log('The greater is:');
		console.log(a);
	} else if (a < b){console.log('The greater is:');
		console.log(b);}