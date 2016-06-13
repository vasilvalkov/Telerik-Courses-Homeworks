/*Problem 3. Underage people
Write a function that prints all underaged persons of an array of person
Use Array#filter and Array#forEach
Use only array methods and no regular loops (for, while)
*/
var result,
	persons = [{"age": 20, "firstname": "Petar", "gender": "male", "lastname": "Ivanov"}, 
			{"age": 11, "firstname": "Ivanka", "gender": "female", "lastname": "Vasileva"}, 
			{"age": 33, "firstname": "Vasil", "gender": "male", "lastname": "Kolev"}, 
			{"age": 9, "firstname": "Stoyan", "gender": "male", "lastname": "Mihaylov"}, 
			{"age": 46, "firstname": "Nikolay", "gender": "male", "lastname": "Iliev"}, 
			{"age": 27, "firstname": "Mariika", "gender": "female", "lastname": "Koleva"},
			{"age": 4, "firstname": "Boris", "gender": "male", "lastname": "Boev"}, 
			{"age": 31, "firstname": "Anna", "gender": "female", "lastname": "Petrova"}, 
			{"age": 23, "firstname": "Kiril", "gender": "male", "lastname": "Kotsev"}, 
			{"age": 28, "firstname": "Stoycho", "gender": "male", "lastname": "Mladenov"}];
	
result = persons.filter(function(person){
	return person.age <= 18;
	})
	.forEach(function(item){
		console.log(item);
	});