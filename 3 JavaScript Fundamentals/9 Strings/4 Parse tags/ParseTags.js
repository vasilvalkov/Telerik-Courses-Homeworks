/*Problem 4. Parse tags
You are given a text. Write a function that changes the text in all regions:
<upcase>text</upcase> to uppercase.
<lowcase>text</lowcase> to lowercase
<mixcase>text</mixcase> to mix casing(random)
*/


var text = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else."
console.log(text);
console.log();
console.log('Expected result is:');
console.log("We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.")
console.log();
console.log('My result is:')
console.log(parseText(text));

function randChar(text){
	var i,
		len = text.length,
		arr = text.split(''),
		result = [];
	for (i = 0; i < len; i += 1){
		if (!Math.round(Math.random())) {
			result.push(arr[i].toLowerCase());
		} else {
			result.push(arr[i].toUpperCase());
		}
	}
	return result.join('');
}

function parseText(str){	
	var i,
		len = str.length,
		uOpen = '<upcase>',
		uClose = '</upcase>',
		lOpen = '<lowcase>',
		lClose = '</lowcase>',
		mOpen = '<mixcase>',
		mClose = '</mixcase>';
		str = str.replace(str.substring(str.lastIndexOf(uOpen) +1, str.indexOf(uClose)), str.substring(str.lastIndexOf(uOpen) +1, str.indexOf(uClose)).toUpperCase());
		uOpen = uOpen.toUpperCase();
		str = str.replace(str.substring(str.lastIndexOf(lOpen) +1, str.indexOf(lClose)), str.substring(str.lastIndexOf(lOpen) +1, str.indexOf(lClose)).toLowerCase());
		lOpen = lOpen.toLowerCase();
		//str = str.replace(str.substring(str.lastIndexOf(mOpen) +1, str.indexOf(mClose)), randChar(str.substring(str.lastIndexOf(mOpen) +1, str.indexOf(mClose))));
	for (i = 0; i < len; i += 1){
		while(str.indexOf(uOpen) >= 0){
			str = str.replace(uOpen, '');
			str = str.replace(uClose, '');
		}
		while(str.indexOf(lOpen) >= 0){
			str = str.replace(lOpen, '');
			str = str.replace(lClose, '');
		}
		while(str.indexOf(mOpen) >= 0){
			str = str.replace(mOpen, '');
			str = str.replace(mClose, '');
		}	
	}
	return str;	
}