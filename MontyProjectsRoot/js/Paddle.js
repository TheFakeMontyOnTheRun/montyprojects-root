function Paddle() {

	this.position = new Vec3(0.0, 0.0, -10.0);
	this.speed = new Vec3( 0.0, 0.0 , 0.0 );
	this.style = "white";
	
	this.draw = function(gc) {

		gc.drawEasyParalelogram(this.position.x, this.position.y, this.position.z, 2, 2, 0.5, this.style );
	}

	this.update = function(delta) {
		this.position.addTo( this.speed );
		this.speed.mulScalarTo( 0.9 );
		
	
		if ( this.position.x > 8.0 )
			this.position.x = 8.0;
			
		if ( this.position.y > 8.0 )
			this.position.y = 8.0;
			
		if ( this.position.x < -8.0 )
			this.position.x = -8.0;
			
		if ( this.position.y < -8.0 )
			this.position.y = -8.0;
		
	}
	
	this.collide = function( ball ) {
		
		var result = false;
		
		result = result || this.isPointInside( ball.position.add( new Vec3( .5, 0.0 , 0.0 ) ) );
		result = result || this.isPointInside( ball.position.add( new Vec3( -.5, 0.0 , 0.0 ) ) );
		result = result || this.isPointInside( ball.position.add( new Vec3( 0.0, .5, 0.0 ) ) );
		result = result || this.isPointInside( ball.position.add( new Vec3( 0.0, -.5, 0.0 ) ) );
		result = result || this.isPointInside( ball.position.add( new Vec3( 0.0, 0.0 , 0.5 ) ) );
		result = result || this.isPointInside( ball.position.add( new Vec3( 0.0, 0.0 , -0.5 ) ) );
		
		// console.log( ball.position.toString() + " inside " + this.position.toString() + "?" + result );
		
		if ( result ) {
			this.style = "yellow";
		} else {
			this.style = "white";
		}
	}
	
	this.isPointInside = function( vec ) {
		
		
			
		if ( vec.x <= ( this.position.x + 1 ) && vec.x >= ( this.position.x - 1 ) ) {
			
			if ( vec.y <= ( this.position.y + 1 ) && vec.y >= ( this.position.y - 1 ) ) {
				
				if ( vec.z <= ( this.position.z + .25 ) && vec.z >= ( this.position.z - .25 ) ) {
					// console.log( "is " + vec.toString() + " inside? true" ); // + this.position.add( -1, -1, -1 ).toString() + " - " + this.position.add( 1, 1, 1 ).toString() );
					return true;
				}				
			}
		}		
		// console.log( "is " + vec.toString() + " inside? false " ); // + this.position.add( -1, -1, -1 ).toString() + " - " + this.position.add( 1, 1, 1 ).toString() );
		return false;
	}
}