/*Problem 5. Appearance count
Write a function that counts how many times given number appears in given array.
Write a test function to check if the function is working correctly.
*/
var number = 4,
	arr = [1,2,3,4,5,6,4,4,34,5,4,1,4]

console.log('Number '+ number + ' appears ' + appearCount(number, arr) + ' times');
console.log(test());
function appearCount (number, arr){	
	var i,
	counter = 0,
	len = arr.length;
	for (i = 0; i < len; i += 1) {
		if (arr[i] === number)
			counter += 1;
	}
	return counter;
}
function test (){
    var testArray = [1,2,2,3,3,3,4,4,4,5,5,5,5,5],
		test1 = appearCount(1, testArray),
        test2 = appearCount(2, testArray),
        test3 = appearCount(3, testArray),
        test4 = appearCount(4, testArray),
        test5 = appearCount(5, testArray),
        test1ExpectedResult = 1,
        test2ExpectedResult = 2,
        test3ExpectedResult = 3,
        test4ExpectedResult = 4,
        test5ExpectedResult = 5;
	return [console.log(test1 + ' = ' + test1ExpectedResult),
			console.log(test2 + ' = ' + test2ExpectedResult),
			console.log(test3 + ' = ' + test3ExpectedResult),
			console.log(test4 + ' = ' + test4ExpectedResult),
	console.log(test5 + ' = ' + test5ExpectedResult)]
}