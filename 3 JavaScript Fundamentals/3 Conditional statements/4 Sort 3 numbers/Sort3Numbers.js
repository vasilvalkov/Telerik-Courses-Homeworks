function nChange(){
	var a = (document.getElementById('entryA').value)*1;
	var b = (document.getElementById('entryB').value)*1;
	var c = (document.getElementById('entryC').value)*1;	
	
	if ((a > b) && (a > c) && (b >= c)) {
		document.getElementById('answer').innerHTML = a + ' ' + b + ' ' + c;
	}	else if ((a > b) && (a > c) && (b < c)) {
			document.getElementById('answer').innerHTML = a + ' ' + c + ' ' + b;
		}	else if ((a === b) && (a > c)) {
				document.getElementById('answer').innerHTML = a + ' ' + b + ' ' + c;
			}	else if ((b > a) && (b > c) && (a >= c)) {
					document.getElementById('answer').innerHTML = b + ' ' + a + ' ' + c;
				}	else if ((b > a) && (b > c) && (a < c)) {
						document.getElementById('answer').innerHTML = b + ' ' + c + ' ' + a;
					}	else if ((b === c) && (b > a)) {
							document.getElementById('answer').innerHTML = b + ' ' + c + ' ' + a;
						}	else if ((c > a) && (c > b) && (a >= b)) {
								document.getElementById('answer').innerHTML = c + ' ' + a + ' ' + b;
							}	else if ((c > a) && (c > b) && (a < b)) {
									document.getElementById('answer').innerHTML = c + ' ' + b + ' ' + a;
								}	else if ((c === a) && (c > b)) {
										document.getElementById('answer').innerHTML = c + ' ' + a + ' ' + b;
									}	else if ((a === b) && (a === c)) {
											document.getElementById('answer').innerHTML = a + ' ' + b + ' ' + c;
										}
}