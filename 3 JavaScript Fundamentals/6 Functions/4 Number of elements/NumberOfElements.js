/*Problem 4. Number of elements
Write a function to count the number of div elements on the web page
*/

//You can add/remove divs in the html file to test it

function elemNumber (){	
	var count = document.getElementsByTagName('div').length; //counts the divs
	    document.getElementById('result').innerHTML = 'There are ' + count + ' divs'; //shows the result
		console.log('There are ' + count + ' divs');
}