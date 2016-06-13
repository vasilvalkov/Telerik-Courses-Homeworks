/*Problem 11. String format
Write a function that formats a string using placeholders.
The function should work with up to 30 placeholders and all types.
*/

var str = "'{0}, {1}, {0} text {2}',  1, 'Pesho', 'Gosho'";
console.log(str);
console.log();
console.log(stringFormat('{0}, {1}, {0} text {2}',  1, 'Pesho', 'Gosho'));

function stringFormat(){
    var i,
		len = arguments.length,
		string = arguments[0],
		placeholder;
    for (i = 1; i < len; i += 1) {
        placeholder ='{' + (i - 1) + '}';		
        while(string.indexOf(placeholder) > -1) {
            string = string.replace(placeholder, arguments[i]);
        }
    }
    return string;
}