/*Problem 9. Extract e-mails
Write a function for extracting all email addresses from given text.
All sub-strings that match the format @… should be recognized as emails.
Return the emails as array of strings.
*/

var text = 'Tova e nyakakav mail ime_to@mail.com, "nyakakvo ime" <chovek@gmail.com>, "Drugo Ime" <gosho@gmal.com>, "Oshte imena" <john.sl@gmail.com>, i oshte "mnogo techno" <chisto@toducts.com>, "Nedelya Sutrin" <pesho@ysahoo.in>,salata  "akasdfsh kasdfstla" <a_ponedelnik@yahsdfsfoo.in>, "Tazi Sedmica" <televizia@live.com>,;"balgarski seriali" f <dvete.fukli@gmail.com>';
console.log(text);
console.log();
console.log(extractEmail(text));

function extractEmail(str){
	return str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}