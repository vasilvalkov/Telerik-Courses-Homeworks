/*Problem 6. Extract text from HTML
Write a function that extracts the content of a html page given as text.
The function should return anything that is in a tag, without the tags.
*/

var text = '<html><head><title>Sample site</title></head> <body> ' +
        '<div>text <div>more text</div>and more... </div>in body </body>';

console.log(text);
console.log();
console.log(extractText(text));

function extractText(str){	
	var result = str.replace(/<[^>]*>/g, '');
		return result;	
}