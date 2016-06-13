function nChange(){
	var n = document.getElementById('entry').value;

	{document.getElementById('binRep').innerHTML = 'Binary rep is:' + ' ' + (n*1).toString(2);}
	if (n & (1<<3))  //tests if 3rd bit is set
		{document.getElementById('answer').innerHTML = 'The third bit is: 1';}
	else 
		{document.getElementById('answer').innerHTML = 'The third bit is: 0';}
}