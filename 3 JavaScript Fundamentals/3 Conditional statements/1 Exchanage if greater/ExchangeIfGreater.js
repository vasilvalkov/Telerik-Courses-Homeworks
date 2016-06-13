function nChange(){
	var a = (document.getElementById('entryA').value)*1;
	var b = (document.getElementById('entryB').value)*1;
	var x;
	
	if (a > b) {
		x = a;
		a = b;
		b = x;
		document.getElementById('answer').innerHTML = a + ', ' + b;
	}	else {
		document.getElementById('answer').innerHTML = a + ', ' + b;			
		}
}
