/*Problem 2. Correct brackets
Write a JavaScript function to check
if in a given expression the brackets are put correctly.
*/

//You can alter the argument to test it
var text = 'Example of incorrect expression: )(a+b)).'
console.log(text);
console.log(backetCorr(text));

function backetCorr(str){	
	var i,
		j,
		len = str.length,
		corrected,
		closeBracket = ')',
		openBracket = '(';
		
	for (i = 0; i < len; i += 1){
		if (str[i] === closeBracket){
			for (j = i + 1; j < len; j += 1){
				if (str[j] === closeBracket && str[j] !== openBracket){
					corrected = str[j].replace(closeBracket, openBracket);
				}
			}
		}
	}
		corrected = str.replace(closeBracket, openBracket);
	return corrected;	
}