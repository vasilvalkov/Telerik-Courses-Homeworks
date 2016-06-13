function nChange(){
	var x = (document.getElementById('entryX').value)*1;
	var y = (document.getElementById('entryY').value)*1;
	
	if ((Math.sqrt(x*x + y*y)) <= 5)  //tests if the radius of (x,y) is <= than the given r
		{document.getElementById('answer').innerHTML = 'The point ' + '(' + x + ', ' + y + ')'+ ' is inside';}
	else 
		{document.getElementById('answer').innerHTML = 'The point ' + '(' + x + ', ' + y + ')' + ' is outside';}
}