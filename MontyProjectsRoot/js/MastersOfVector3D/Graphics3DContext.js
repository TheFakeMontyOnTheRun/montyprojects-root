function Graphics3DContext(worldSpace, cameraSpace, screenSpace, canvasContext) {

	this.cameraSpace = cameraSpace;
	this.worldSpace = worldSpace;
	this.screenSpace = screenSpace;
	this.context = canvasContext;

	this.setCurrentCamera = function(camera) {
		this.currentCamera = camera;
	}

	this.drawLine = function(x1, y1, z1, x2, y2, z2, style) {

		var cX = ( screenSpace.size.x / 2 ) + screenSpace.origin.x;
		var cY = ( screenSpace.size.y / 2 ) + screenSpace.origin.y;

		var camX = this.currentCamera.position.x;
		var camY = this.currentCamera.position.y;
		var camZ = this.currentCamera.position.z;

		var newX1 = cX + ((x1 - camX ) / (z1 + camZ ) ) * screenSpace.size.x;
		var newX2 = cX + ((x2 - camX ) / (z2 + camZ ) ) * screenSpace.size.x;
		var newY1 = cY + ((y1 - camY ) / (z1 + camZ ) ) * screenSpace.size.y;
		var newY2 = cY + ((y2 - camY ) / (z2 + camZ ) ) * screenSpace.size.y;

		this.context.beginPath();

		this.context.strokeStyle = style;
		this.context.moveTo(newX1, newY1);
		this.context.lineTo(newX2, newY2);
		this.context.stroke();

	}
	//desenha um cubo passando os dois vertices das suas extremidades
	this.drawCube = function(x1, y1, z1, x2, y2, z2, style) {

		this.drawLine(x1, y1, z1, x2, y1, z1, style);
		this.drawLine(x2, y1, z2, x2, y1, z1, style);
		this.drawLine(x2, y1, z2, x1, y1, z2, style);
		this.drawLine(x1, y1, z1, x1, y1, z2, style);

		this.drawLine(x1, y2, z1, x2, y2, z1, style);
		this.drawLine(x2, y2, z2, x2, y2, z1, style);
		this.drawLine(x2, y2, z2, x1, y2, z2, style);
		this.drawLine(x1, y2, z1, x1, y2, z2, style);

		this.drawLine(x1, y1, z1, x1, y2, z1, style);
		this.drawLine(x2, y1, z1, x2, y2, z1, style);
		this.drawLine(x2, y1, z2, x2, y2, z2, style);
		this.drawLine(x1, y1, z2, x1, y2, z2, style);

	}
	//desenha uma area fechada paralela ao plano do chão (se for em y=0, é no chão)
	this.drawPlaneXZ = function(x, y, z, dx, dz, style) {

		this.drawLine(x, y, z, x, y, z + dz, style);
		this.drawLine(x + dx, y, z, x + dx, y, z + dz, style);
		this.drawLine(x, y, z + dz, x + dx, y, z + dz, style);
		this.drawLine(x, y, z, x + dx, y, z, style);
	}
	
	
	this.drawPlaneYZ = function(x, y, z, dy, dz, style) {

		this.drawLine(x, y, z, x, y, z + dz, style);
		this.drawLine(x, y + dy, z + dz, x, y, z + dz, style);
		this.drawLine(x, y + dy, z + dz, x, y + dy, z, style);
		this.drawLine(x, y + dy, z, x, y, z, style);
	}
	
	
	this.drawPlaneXY = function(x, y, z, dx, dy, style) {

		this.drawLine(x, y, z, x + dx, y, z, style);
		this.drawLine(x + dx, y + dy, z, x + dx, y, z, style);
		this.drawLine(x + dx, y + dy, z, x, y + dy, z, style);
		this.drawLine(x, y + dy, z, x, y, z, style);
	}
	
	//desenha um cubo apenas passando sua posição e seu "raio" (distância do centro para seus vertices, ao longo dos eixos)
	this.drawEasyCube = function(x1, y1, z1, radius, style) {
		this.drawCube(x1 - radius, y1 - radius, z1 - radius, x1 + radius, y1 + radius, z1 + radius, style);
	}
	
	//desenha um cubo apenas passando sua posição e seu "raio" (distância do centro para seus vertices, ao longo dos eixos)
	this.drawEasyParalelogram = function(x1, y1, z1, dx, dy, dz, style) {
		this.drawCube(x1 - dx, y1 - dy, z1 - dz, x1 + dx, y1 + dy, z1 + dz, style);
	}	

	this.drawPieChart = function(x, y, z, dy, radius, startAngle, endAngle) {

		var x1;
		var y1;
		var z1;

		var x2;
		var y2;
		var z2;

		for (var c = startAngle; c < endAngle; c += 0.5) {

			x1 = x;
			x2 = x - Math.sin(c * rad) * radius;
			y1 = y - dy;
			y2 = y - dy;
			z1 = z;
			z2 = z - Math.cos(c * rad) * radius;

			this.drawLine(x1, y1, z1, x2, y2, z2, "red");
		}

		for (var c = startAngle; c < endAngle; c += 0.5) {

			x1 = x - Math.sin(c * rad) * radius;
			x2 = x1;
			y1 = y;
			y2 = y - dy;
			z1 = z - Math.cos(c * rad) * radius;
			z2 = z1;

			this.drawLine(x1, y1, z1, x2, y2, z2, "yellow");
		}

		for (var c = startAngle; c < endAngle; c += 0.5) {

			x1 = x;
			x2 = x - Math.sin(c * rad) * radius;
			y1 = y;
			y2 = y;
			z1 = z;
			z2 = z - Math.cos(c * rad) * radius;

			this.drawLine(x1, y1, z1, x2, y2, z2, "blue");
		}

	}

	this.drawScene = function(ctx) {
		ctx.fillStyle = "#000000";
		ctx.fillRect( this.screenSpace.origin.x, this.screenSpace.origin.y, this.screenSpace.size.x, this.screenSpace.size.y);
	}
}