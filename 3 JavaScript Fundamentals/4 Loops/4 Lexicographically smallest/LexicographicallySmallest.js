//To get results, please copy/paste this script into the browser's console
	var	objects = [document, window, navigator],
		object,
		properties,
		property;
//Takes an object from objects
	for (object in objects){
		properties = [];
//Logs the taken object
		console.log('In ' + objects[object] + ':');
//Builds a new array from the object's properties
		for (property in objects[object]){
			properties.push(property);
		}
//Sorts the properties lexicographically
		properties.sort();
//Logs smallest and largest property
		{console.log('Smallest is: ' + properties[0]);}
		{console.log('Largest is: ' + properties[properties.length-1]);}
	}