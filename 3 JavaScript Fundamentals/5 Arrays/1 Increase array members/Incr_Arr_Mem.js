/*Problem 1. Increase array members
Write a script that allocates array of 20 integers
and initializes each element by its index multiplied by 5.
Print the obtained array on the console.
*/

var i,
	arr = [5,32,4,54,,6,7,,34,3,2,34,566,4,3,,22,4,5,0],
	len = arr.length;

for (i = 0; i < len; i += 1){
	arr[i] = i*5;
}
console.log(arr);