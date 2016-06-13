function nChange(){
	var a = (document.getElementById('entryA').value)*1;
	var b = (document.getElementById('entryB').value)*1;
	var c = (document.getElementById('entryC').value)*1;
	var d = (document.getElementById('entryD').value)*1;
	var e = (document.getElementById('entryE').value)*1;	
	
	if ((a > b) && (a > c) && (a > d) && (a > e)) { //test if a is biggest
		document.getElementById('answer').innerHTML = a;
	}	else if ((b > a) && (b > c) && (b > d) && (b > e)) { //test if b is biggest
			document.getElementById('answer').innerHTML = b;
		}	else if ((c > a) && (c > b) && (c > d) && (c > e)){ //test if c is biggest
				document.getElementById('answer').innerHTML = c;
			}	else if ((d > a) && (d > b) && (d > c) && (d > e)){ //test if d is biggest
					document.getElementById('answer').innerHTML = d;
				}	else if ((e > a) && (e > b) && (e > c) && (e > d)){ //test if e is biggest
						document.getElementById('answer').innerHTML = e;
					}
}