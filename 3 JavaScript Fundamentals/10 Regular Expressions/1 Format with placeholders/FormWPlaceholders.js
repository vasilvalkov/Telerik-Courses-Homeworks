/*Problem 1. Format with placeholders
Write a function that formats a string. The function should have placeholders, as shown in the example
Add the function to the String.prototype
*/

var text = "'Hello, there! Are you #{name}?'",
	text2 = "'My name is #{name} and I am #{age}-years-old')",
	options = {name: 'John'},
	options2 = {name: 'John', age: 13};;

String.prototype.format = function(options) {
    var prop,
        regex,
        result = this;
	for (prop in options) {
		regex = new RegExp('#{' + prop + '}', 'g');
		result = result.replace(regex, options[prop]);
	}
    return result;
};
console.log(options);
console.log(text);
console.log();
console.log(text.format(options));
console.log('---------------');
console.log();
console.log(options2);
console.log(text2);
console.log();
console.log(text2.format(options2));