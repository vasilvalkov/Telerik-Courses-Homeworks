function nChange(){
	var a = (document.getElementById('entryA').value)*1;
	var b = (document.getElementById('entryB').value)*1;
	var c = (document.getElementById('entryC').value)*1;	
	
	if ((a > b) && (a > c)) { //test if a is biggest
		document.getElementById('answer').innerHTML = a;
	}	else if ((b > a) && (b > c)) { //test if b is biggest
			document.getElementById('answer').innerHTML = b;
		}	else if ((c > a) && (c > b)){ //test if c is biggest
				document.getElementById('answer').innerHTML = c;
			}	
}