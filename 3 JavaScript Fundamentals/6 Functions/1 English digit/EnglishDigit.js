/*Problem 1. English digit
Write a function that returns the last digit
of given integer as an English word.
*/

//You can alter the argument to test it
console.log(engDigit(512));
console.log(engDigit(1024));
console.log(engDigit(12309));

function engDigit (number){	
	switch (Math.floor(number) % 10) {
		case 0: return 'Zero';
		case 1: return 'One';
		case 2: return 'Two';
		case 3: return 'Three';
		case 4: return 'Four';
		case 5: return 'Five';
		case 6: return 'Six';
		case 7: return 'Seven';
		case 8: return 'Eight';
		case 9: return 'Nine';
		default: return 'Not a digit';
	}
}