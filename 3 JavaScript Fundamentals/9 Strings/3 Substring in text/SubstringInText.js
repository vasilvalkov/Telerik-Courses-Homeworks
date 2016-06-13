/*Problem 3. Sub-string in text
Write a JavaScript function that finds how many times a substring 
is contained in a given text (perform case insensitive search).
*/

//You can alter the argument to test it
var text = "The text is as follows: We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."
console.log(text);
console.log();
console.log('"in" is found '+ substrInText(text) + ' times');

function substrInText(str){	
	var i,
		count = 0,
		len = str.length;

	for (i = 0; i < len; i += 1){
		if (str.charAt(i) === 'i' && str.charAt(i + 1) === 'n'){
			count += 1;
		}
	}return count;	

}