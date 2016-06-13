/*Problem 5. nbsp
Write a function that replaces non breaking white-spaces in a text with &nbsp;
*/

var text = "We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."
console.log(text);
console.log();
console.log(nbsp(text));

function nbsp(str){	
	var result = str.replace(' ', '&nbsp;');
	while(result.indexOf(' ') >= 0){
		result = result.replace(' ', '&nbsp;');
	}
	return result;	
}