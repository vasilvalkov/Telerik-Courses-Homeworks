function nChange(){
	var n = document.getElementById('entry').value;
if (n % (5*7))
	{document.getElementById('answer').innerHTML = 'Not divisible to 7 and 5';}
else 
	{document.getElementById('answer').innerHTML = 'Divisible to 7 and 5';}
}