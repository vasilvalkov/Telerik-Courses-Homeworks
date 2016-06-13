function nChange(){
	var a = (document.getElementById('entryA').value)*1;
	var b = (document.getElementById('entryB').value)*1;
	var c = (document.getElementById('entryC').value)*1;
	var D = ((b * b) - (4 * a * c)) | 0;
	var x1 = ((-b - Math.sqrt(D)) /( 2 * a)) | 0;
	var x2 = ((-b + Math.sqrt(D)) /( 2 * a)) | 0;
	
	if (D < 0) {
		document.getElementById('answer').innerHTML = 'no real roots';
	}	else if (D === 0) {
			document.getElementById('answer').innerHTML = 'x1' + '=' + 'x2' + '=' + (-b / (2 * a));
		}	else {
				document.getElementById('answer').innerHTML = 'x1' + '=' + x1 + '; ' + 'x2' + '=' + x2;
			}	
}