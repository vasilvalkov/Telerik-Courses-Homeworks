function nChange(){
	var a = (document.getElementById('entryAside').value)*=1;
	var b = (document.getElementById('entryBside').value)*=1;
	var h = (document.getElementById('entryHeight').value)*=1;
	document.getElementById('answer').innerHTML = 'Area is: ' + ' ' + ((a + b) / 2) * h + ' ' + 'cm<sup>2</sup>';
}