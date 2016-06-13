/*Problem 7. First larger than neighbours
Write a function that returns the index of the first element in array
that is larger than its neighbours or -1, if there’s no such element.
Use the function from the previous exercise.
*/

//You can alter arr to test it
var arr = [2, 3, 4, 4, 8, 3, 33, 2, 3, 5, 1, 62];
	console.log(arr);
	console.log(firstLargerThanNeigh(arr));

function firstLargerThanNeigh(arr) {
    var i,
        arr = arr || [],
        len = arr.length;
    for (i = 0; i < len; i += 1) {
        if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
            return console.log(arr[i] + ' at index ' + i + ' is the first larger than its two neighbours');
        }
    }return -1;
}