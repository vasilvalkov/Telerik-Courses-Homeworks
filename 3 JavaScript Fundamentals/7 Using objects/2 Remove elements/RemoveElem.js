/*Problem 2. Remove elements
Write a function that removes all elements with a given value.
Attach it to the array type.
*/

var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];

Array.prototype.remove = function (value) {
	while (this.indexOf(value) >= 0) {
        this.splice(this.indexOf(value), 1);
    }
    return this;
}
console.log(arr);
console.log(arr.remove(1));
//expected => arr = [2,4,3,4,111,3,2,'1']