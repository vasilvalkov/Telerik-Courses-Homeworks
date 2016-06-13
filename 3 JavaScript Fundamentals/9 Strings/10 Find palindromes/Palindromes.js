/*Problem 10. Find palindromes
Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
*/

var text = 'pali palin nilpa pap apa nilin drom mod dod morom palid palad palel lelel';
console.log(text);
console.log();
console.log(palindrome(text));

function palindrome(str){
	var words = text.split(/\W+/),
        pals = [],
		leng = words.length;
    for (var i = 0; i < leng; i += 1) {
        var isPals = true,
			len = Math.round(words[i].length / 2);
		for (var j = 0; j < len; j += 1) {
            if (words[i][j] !== words[i][words[i].length - 1 - j]) {
                isPals = false;
                break;
            }
        }
        if (isPals && words[i].length > 1) {
			pals.push(words[i]);
        }
    }
	return pals.join('\n');
    }