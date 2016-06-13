/*Problem 3. Occurrences of word
Write a function that finds all the occurrences of word in a text.
The search can be case sensitive or case insensitive.
Use function overloading.
*/

//You can alter the arguments to test it

var text = 'Lorem lorem Lorem Lorem lorem LOREM LoReM Lorem.',
	word = 'LOREM';

function wordOccur (text, word, isCaseSensitive){
	var word = word || '',
		text = text || '',
		wordStr = text.split(word),
		args = [].slice.apply(arguments);
	switch (args.length){
		case 3: return text.match(word).length;
		default: {word = word.toLowerCase();
				text = text.toLowerCase();
				wordStr = text.split(word);
				return wordStr.length - 1;
		}
	}
}
console.log('String: ' + text);
console.log('Word: ' + word);
console.log('Non case sensitive: ' + wordOccur(text, 'lorem'));
console.log('Case sensitive: ' + wordOccur(text, 'Lorem', true));