/*Problem 6. Group people
Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
Use Array#reduce
Use only array methods and no regular loops (for, while)
*/
var result,
	persons = [{"age": 20, "firstname": "Petar", "gender": "male", "lastname": "Ivanov"}, 
			{"age": 11, "firstname": "Atanaska", "gender": "female", "lastname": "Vasileva"}, 
			{"age": 33, "firstname": "Vasil", "gender": "male", "lastname": "Kolev"}, 
			{"age": 9, "firstname": "Stoyan", "gender": "male", "lastname": "Mihaylov"}, 
			{"age": 46, "firstname": "Nikolay", "gender": "male", "lastname": "Iliev"}, 
			{"age": 27, "firstname": "Mariika", "gender": "female", "lastname": "Koleva"},
			{"age": 4, "firstname": "Boris", "gender": "male", "lastname": "Boev"}, 
			{"age": 31, "firstname": "Anna", "gender": "female", "lastname": "Petrova"}, 
			{"age": 23, "firstname": "Kiril", "gender": "male", "lastname": "Kotsev"}, 
			{"age": 28, "firstname": "Stoycho", "gender": "male", "lastname": "Mladenov"}];

	result = persons.sort(function(a, b){
						return a.firstname > b.firstname;
					})
					.reduce(function(letter, person){
						var firstLetter = person.firstname[0].toLowerCase();
							if (!letter[firstLetter]){
								letter[firstLetter] = [person];
							} else letter[firstLetter].push(person);
							return letter;
					}, {});
	console.log(result);