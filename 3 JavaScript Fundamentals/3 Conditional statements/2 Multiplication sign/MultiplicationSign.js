function nChange(){
	var a = (document.getElementById('entryA').value)*1;
	var b = (document.getElementById('entryB').value)*1;
	var c = (document.getElementById('entryC').value)*1;	
	
	if ((a == 0) || (b == 0) || (c == 0)) { //test if at least one is 0
		document.getElementById('answer').innerHTML = '0';
	}	else if ((a < 0) ^ (b < 0) ^ (c < 0)) { //test if there is only one < 0
			document.getElementById('answer').innerHTML = '-';
		}	else if ((a < 0) && (b < 0) && (c < 0)){ //test if all are < 0
				document.getElementById('answer').innerHTML = '-';
			}	else { //all other combinations will be positive
					document.getElementById('answer').innerHTML = '+';
			}	
}