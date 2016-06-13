/*Problem 6.
Write a function that groups an array of people by age, first or last name.
The function must return an associative array,
with keys - the groups, and values - arrays with people in this groups
Use function overloading (i.e. just one function)
*/
var people = [
  { firstname: 'Gosho', lastname: 'Goshov', age: 32 }, 
  { firstname: 'Bay', lastname: 'Ivan', age: 81},
  { firstname: 'Petar', lastname: 'Petrov', age: 24},
  { firstname: 'Petar', lastname: 'Ivanov', age: 24}];

console.log(groupPeople(people, 'age'));
console.log(groupPeople(people, 'firstname'));
console.log(groupPeople(people, 'lastname'));

function groupPeople (peopleArr, prop){
	var i,
		len = peopleArr.length,
		group = {};
	for (i = 0; i < len; i += 1){
		//if there is not such prop in group, creates it as new prop/key and sets person as value
		if (!group[peopleArr[i][prop]]){
			group[peopleArr[i][prop]] = [peopleArr[i]];
		//if there is such prop in group, adds the person as another value into the same prop
		} else {
			group[peopleArr[i][prop]].push(peopleArr[i]);
		}
	}
	return group;
}
