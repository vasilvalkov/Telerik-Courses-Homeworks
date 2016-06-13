function nChange(){
	var digit = (document.getElementById('entryDigit').value)*1;
	
	switch (digit) {
		case 0: document.getElementById('answer').innerHTML = 'Zero'; break;
		case 1: document.getElementById('answer').innerHTML = 'One'; break;
		case 2: document.getElementById('answer').innerHTML = 'Two'; break;
		case 3: document.getElementById('answer').innerHTML = 'Three'; break;
		case 4: document.getElementById('answer').innerHTML = 'Four'; break;
		case 5: document.getElementById('answer').innerHTML = 'Five'; break;
		case 6: document.getElementById('answer').innerHTML = 'Six'; break;
		case 7: document.getElementById('answer').innerHTML = 'Seven'; break;
		case 8: document.getElementById('answer').innerHTML = 'Eight'; break;
		case 9: document.getElementById('answer').innerHTML = 'Nine'; break;
		default: document.getElementById('answer').innerHTML = 'Not a digit'; break;
	}
}