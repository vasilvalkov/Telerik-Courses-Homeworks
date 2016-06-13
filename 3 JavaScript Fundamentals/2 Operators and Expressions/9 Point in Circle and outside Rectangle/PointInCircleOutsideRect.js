function nChange(){
	var x = (document.getElementById('entryX').value) | 0;
	var y = (document.getElementById('entryY').value) | 0;
	var outRect = (x < -1) && (x > 5) && (y < 1) && (y > -1);
	var inCircle = (x - 1)*(x - 1) + (y - 1)*(y - 1) <= 3*3;
	if (inCircle || outRect)
		{document.getElementById('answer').innerHTML = 'yes';}
	else 
		{document.getElementById('answer').innerHTML = 'no';}
}