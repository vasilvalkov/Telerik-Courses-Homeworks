function nChange(){
	var n = (document.getElementById('entry').value)*1;
	var x = 2;
	var y = Math.sqrt(n);
	var isPrime = true;
	
	//define the scope of n
	if (isNaN(n) || !isFinite || n % 1 || n < 2) {
		isPrime = false;
	}
	
	//test if n has other dividers
	while (isPrime && (x <= y))	{
		if (n % x == 0) {
			isPrime = false;
		}
		x++;		
	}
	{document.getElementById('answer').innerHTML = n + ' is ' + (isPrime ? '' : ' not ') + ' prime';}
}