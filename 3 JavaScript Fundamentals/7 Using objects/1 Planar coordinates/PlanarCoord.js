/*Problem 1. Planar coordinates
Write functions for working with shapes in standard Planar coordinate system.
Points are represented by coordinates P(X, Y)
Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
Calculate the distance between two points.
Check if three segment lines can form a triangle.
*/

var somePoint = buildPoint(3, 6),
	someLine = buildLine(3, 6, 7, 12),
	sideA = buildLine(1, 1, 3, 1),
	sideB = buildLine(1, 3, 3, 1),
	sideC = buildLine(1, 1, 1, 3),
	someTriangle = canFormTriangle(sideA, sideB, sideC);

	console.log('Point representation: ');
	console.log(somePoint);
	console.log('');
	console.log('Line representation:');
	console.log(someLine);
	console.log('');
	console.log('Can these lines form triangle?');
	console.log('Side A = ' + sideA.lineLength() + 'cm');
	console.log('Side B = ' + sideB.lineLength() + 'cm');
	console.log('Side C = ' + sideC.lineLength() + 'cm');
	console.log('');
	console.log(someTriangle);

//JSON point constructor
function buildPoint(x, y) {
	var point = {
			x: x,
			y: y
		};
	return point;
}
//JSON line constructor
function buildLine(p1x, p1y, p2x, p2y) {
	var line = {
			point1: buildPoint(p1x, p1y),
			point2: buildPoint(p2x, p2y),
			lineLength: function (){
				return Math.sqrt((this.point1.x - this.point2.x) * (this.point1.x - this.point2.x) +
								(this.point1.y - this.point2.y) * (this.point1.y - this.point2.y));
			} 
		};
		return line;
}

//checks if every side is smaller than the sum of the others
function canFormTriangle(sideA, sideB, sideC) {
    if ((sideA.lineLength + sideB.lineLength > sideC.lineLength) &&
        (sideA.lineLength + sideC.lineLength > sideB.lineLength) &&
        (sideB.lineLength + sideC.lineLength > sideA.lineLength)) {
        return true;
    } else {
        return false;
    }
}