/*Problem 12. Generate list
Write a function that creates a HTML <ul> using a template for every HTML <li>.
The source of the list should be an array of elements.
Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.
*/

var people = [{name: 'Peter', age: 30},
			  {name: 'Pavel', age: 32},
			  {name: 'Gosho', age: 34}],
    template = '<strong>-{name}-</strong> <span>-{age}-</span>';
console.log(people);
console.log(template);
console.log();
console.log(generateList(people, template));

function generateList(people, template) {
    var i,
		li,
		len = people.length,
		result = '<ul>';
    for (i = 0; i < len; i += 1) {
        result += '<li>';
        li = template.replace('-{name}-', people[i].name);
        li = li.replace('-{age}-', people[i].age);
        result += li;
        result += '</li>';
    }
		result += '</ul>';
    return result;
}