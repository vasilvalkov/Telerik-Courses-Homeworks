/*Problem 7. Parse URL
Write a script that parses an URL address given in the format: 
[protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
Return the elements in a JSON object.
*/

var url = "http://telerikacademy.com/Courses/Courses/Details/239"
console.log(url);
console.log();
console.log(parseURL(url));

function parseURL(url){
	var result = {};
		result.protocol = url.split(':')[0];
		result.server = url.split('/')[2];
		result.resource = url.substr(url.indexOf('.') + 4);
	return result;
}