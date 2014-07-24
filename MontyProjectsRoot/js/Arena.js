function Arena() {
	this.draw = function(gc) {
		gc.drawPlaneXZ(-10, 0, -10, 20, 20, "red");
		gc.drawPlaneYZ(0, -10, -10, 20, 20, "blue");
		gc.drawPlaneXY(-10, -10, 10, 20, 20, "white");
	}
	
	this.update = function( delta ) {
		
	}
}