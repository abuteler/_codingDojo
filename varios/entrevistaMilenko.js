/*
1) shape name
2) area of that shape
 3 Circle
 2 squares */

/*shape = {
	name: '',
	type: '',
	dimensions: {
		height: null,
		width: null,
		radius: null
	},
	calculateArea: function(){
	}
}
	*/


var Circle = function(name, radius) {
		this.name = name;
		this.radius = radius;
	},
	Square = {
		name: '',
		height: null,
		width: null,
		getArea: function() {
			return this.height*this.width; 
		}
	};
	Circle.prototype.getArea = function() {
		return this.radius * x; 
	};

var circle1 = new Circle('Circle1', 5),
	square1 = new Square('Square1', 5,5);

var arr = [];
arr.push(circle1);
arr.push(square1);


function drawTable(shapes){
	var html = '<table>',
		area = null;
	$.each(arr, function(index, shape){
		html += "<tr>";
		html += 	"<td>" + shape.name + "</td>";
		html += 	"<td>" + shape.getArea() + "</td>";
		html += "</tr>";
	});
	html += '</table>';
}


/*shape = {
	name: '',
	type: '',
	dimensions: []
}
	*/