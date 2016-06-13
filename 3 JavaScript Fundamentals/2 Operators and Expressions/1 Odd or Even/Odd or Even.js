function nChange(){
	var n = (document.getElementById('entry').value)*1;
if (n % 2)
	{document.getElementById('answer').innerHTML = 'Odd';}
else 
	{document.getElementById('answer').innerHTML = 'Even';}
}