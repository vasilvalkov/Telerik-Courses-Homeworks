/*Problem 2. People of age
Write a function that checks if an array of person 
contains only people of age (with age 18 or greater)
Use only array methods and no regular loops (for, while)
*/
var result,
	persons = [{"age": 20, "firstname": "Petar", "gender": "male", "lastname": "Ivanov"}, 
			{"age": 35, "firstname": "Ivanka", "gender": "female", "lastname": "Vasileva"}, 
			{"age": 33, "firstname": "Vasil", "gender": "male", "lastname": "Kolev"}, 
			{"age": 24, "firstname": "Stoyan", "gender": "male", "lastname": "Mihaylov"}, 
			{"age": 46, "firstname": "Nikolay", "gender": "male", "lastname": "Iliev"}, 
			{"age": 27, "firstname": "Mariika", "gender": "female", "lastname": "Koleva"}, 
			{"age": 30, "firstname": "Boris", "gender": "male", "lastname": "Boev"}, 
			{"age": 31, "firstname": "Anna", "gender": "female", "lastname": "Petrova"}, 
			{"age": 23, "firstname": "Kiril", "gender": "male", "lastname": "Kotsev"}, 
			{"age": 28, "firstname": "Stoycho", "gender": "male", "lastname": "Mladenov"}];
	
result = persons.every(function(person){
	return person.age >= 18;
});
console.log(result);
