function Scene(canvas, ctx, width, height ) {

	var screenSpace = new Space2D(0.0, 0.0, width, height );
	var worldSpace = new Space3D(0.0, 0.0, 0.0, 1.0, 1.0, 1.0);
	var cameraSpace = new Space3D(0.0, 0.0, 0.0, 1.0, 1.0, 1.0);

	this.camera = new Camera3D();
	this.gameObjects = new Array();
	this.canvas = canvas;
	this.canvasContext = ctx;
	this.graphicsContext = new Graphics3DContext(worldSpace, cameraSpace, screenSpace, this.canvasContext);
	this.graphicsContext.setCurrentCamera(this.camera);

	this.getCamera = function() {
		return this.camera;
	}

	this.addObjectToScene = function(obj) {
		this.gameObjects[this.gameObjects.length] = obj;
	}

	this.draw = function(scene) {

		this.graphicsContext.drawScene(this.canvasContext);

		// for (var obj in this.gameObjects ) {
		// obj.draw( this.graphicsContext );
		// }

		for (var c = 0; c < this.gameObjects.length; ++c) {

			this.gameObjects[c].draw( this.graphicsContext );
		}
	}
	
	this.update = function(delta) {

		this.camera.update( delta );

		for (var c = 0; c < this.gameObjects.length; ++c) {

			this.gameObjects[c].update( delta );
		}
	}
}

