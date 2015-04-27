// The amount of symbol we want to place;
var count = 50;

// Create a symbol, which we will use to place instances of later:
var path = new Path.RegularPolygon({
	center: [0, 0],
	sides: 3,
	radius: 25,
	fillColor: 'white',
	strokeColor: '#003A70',
	strokeWeight: .8
});

var symbol = new Symbol(path);

var symbol2 = new Symbol(path);

// Place the instances of the symbol:
for (var i = 0; i < count / 2; i++) {
	// The center position is a random point in the view:
	var center = Point.random() * view.size;
	var placed = symbol.place(center);
	var scalar = i / count + 0.025
	if (scalar < .5) {
		scalar += .15;
	}
	placed.scale(scalar);
	placed.data.vector = new Point({
		angle: Math.random() * 360,
		length : (i / count) * Math.random() / 3
	});
}

for (var i = 0; i < count / 2; i++) {
	// The center position is a random point in the view:
	var center = Point.random() * view.size;
	var placed = symbol2.place(center);
	var scalar = i / count + 0.025
	if (scalar < .5) {
		scalar += .25;
	}
	placed.scale(scalar);
	placed.data.vector = new Point({
		angle: Math.random() * 360,
		length : (i / count) * Math.random() / 2
	});
}

var vector = new Point({
	angle: 45,
	length: 0
});

var mouseVector = vector.clone() * Math.random();

function onMouseMove(event) {
	mouseVector = view.center - event.point;
}

// The onFrame function is called up to 60 times a second:
function onFrame(event) {
	vector = vector + (mouseVector - vector) / 1000000;
	
	// Run through the active layer's children list and change
	// the position of the placed symbols:
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];
		var size = item.bounds.size;
		var length = vector.length / 8 * size.width / 8;
		item.position += vector.normalize(length) + item.data.vector;
		keepInView(item);
	}
	symbol.definition.rotate(Math.random() * 1.25);
	symbol2.definition.rotate(-1.25 * Math.random());
}

function keepInView(item) {
	var position = item.position;
	var viewBounds = view.bounds;
	if (position.isInside(viewBounds))
		return;
	var itemBounds = item.bounds;
	if (position.x > viewBounds.width + 5) {
		position.x = -item.bounds.width;
	}

	if (position.x < -itemBounds.width - 5) {
		position.x = viewBounds.width;
	}

	if (position.y > viewBounds.height + 5) {
		position.y = -itemBounds.height;
	}

	if (position.y < -itemBounds.height - 5) {
		position.y = viewBounds.height
	}
}