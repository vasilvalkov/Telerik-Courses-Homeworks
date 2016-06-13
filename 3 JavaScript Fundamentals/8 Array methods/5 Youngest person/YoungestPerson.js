/*Problem 5. Youngest person
Write a function that finds the youngest male person
in a given array of people and prints his full name
Use only array methods and no regular loops (for, while)
Use Array#find
*/
var result,
	youngest,
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
function fullName(firstname, lastname){
	return console.log(firstname + ' ' + lastname);
}
if (!Array.prototype.find){
	Array.prototype.find = function(callback){
		var i,
			len;
		for (i = 0, len = this.length; i < len; i +=1){
			if (callback(this[i], i, this)){
				return this[i];
			}
		}
		return undefined;
	};
}
if (!Array.prototype.findIndex){
	Array.prototype.findIndex = function(callback){
		var i,
			len;
		for (i = 0, len = this.length; i < len; i +=1){
			if (callback(this[i], i, this)){
				return i;
			}
		}
		return -1;
	};
}

youngest = persons.filter(function(person){
	return person.gender == 'male';
	})
	.sort(function(a, b){
		return a.age - b.age;
	})	
	.find(function(_, i, arr){
		if (i === 0){
		return fullName(arr[i].firstname, arr[i].lastname);
		}
	});
console.log(youngest);