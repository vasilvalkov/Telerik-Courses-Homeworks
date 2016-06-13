/*Problem 1. Make person
Write a function for creating persons.
Each person must have firstname, lastname, age and gender (true is female, false is male)
Generate an array with ten person with different names, ages and genders
*/
var fname = ['Petar', 'Ivanka', 'Vasil', 'Stoyan', 'Nikolay', 'Mariika', 'Boris', 'Anna', 'Kiril', 'Stoycho']
	lname = ['Ivanov', 'Vasileva', 'Kolev', 'Mihaylov', 'Iliev', 'Koleva', 'Boev', 'Petrova', 'Kotsev', 'Mladenov'],
	age = [20, 35, 33, 24, 46, 27, 30, 31, 23, 28],
	gender = ['male', 'female', 'male', 'male', 'male', 'female', 'male', 'female', 'male', 'male'],
	persons = [1,1,1,1,1,1,1,1,1,1].map(function(_, i){
		return buildPerson (fname[i], lname[i], age[i], gender[i]);
});
	
function buildPerson(fname, lname, age, gender){
	return {
		firstname: fname,
		lastname: lname,
		age: age,
		gender: gender
	};
};
console.log(persons);
