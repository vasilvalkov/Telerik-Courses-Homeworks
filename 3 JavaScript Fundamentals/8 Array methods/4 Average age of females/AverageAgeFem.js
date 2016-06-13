/*Problem 4. Average age of ffemaleemales
 Write a function that calculates the average age of all females, extracted from an array of persons
Use Array#filter
Use only array methods and no regular loops (for, while)
*/
var result,
	females,
	sum,
	average,
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
	
females = persons.filter(function(person){
	return person.gender == 'female';
	});
sum = females.reduce(function(sum, person){
		return (sum + person.age);
	}, 0);
average = sum / females.length;

console.log(average);