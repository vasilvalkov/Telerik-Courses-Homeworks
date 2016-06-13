function nChange(){
	var n = (document.getElementById('entry').value)*1;
if ((Math.floor(n / 100) % 10) === 7)
	{document.getElementById('answer').innerHTML = 'true';}
else 
	{document.getElementById('answer').innerHTML = 'false';}
}