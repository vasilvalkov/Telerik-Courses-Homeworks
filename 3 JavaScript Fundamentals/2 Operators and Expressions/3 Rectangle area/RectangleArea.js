function nChange(){
	var w = (document.getElementById('entryWidth').value)*1;
	var h = (document.getElementById('entryHeight').value)*1;
	document.getElementById('answer').innerHTML = 'Area is: ' + ' ' + (w * h) + ' ' + 'cm<sup>2</sup>';
}