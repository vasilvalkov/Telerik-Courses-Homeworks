/*Problem 8. Replace tags
Write a JavaScript function that replaces in a HTML document given as string
all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].
*/

var input = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. ' +
    'Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';

console.log(input);
console.log();
console.log(replaceTags(input));

function replaceTags(str){	
	var result = str.replace(/<a href/g, '<URL');
		result = result.replace(/<\/a/g, '</URL');
		return result;	
}