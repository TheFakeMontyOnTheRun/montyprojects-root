function Ball( colour ) {

	this.position = new Vec3( 0.0 ,0.0 ,0.0);
	this.speed = new Vec3( 0.0 ,0.0 ,0.0);
        this.colour = colour;
        
	this.draw = function(gc) {

		//gc.drawEasyCube(this.position.x, this.position.y, this.position.z, 0.5, colour );
                gc.drawEasyParalelogram( this.position.x, this.position.y, this.position.z, 0.5, 1, 0.5, colour );
	}

	this.update = function(delta) {
		
		this.position.addTo( this.speed );		

		if ( this.position.x > 8.0 ) {
			this.position.x = 8.0;
			this.speed.mulScalarTo( -1 );			
		}
			
		if ( this.position.y > 8.0 ) {
			this.position.y = 8.0;
			this.speed.mulScalarTo( -1 );			
		}
			
		if ( this.position.x < -8.0 ) {
			this.position.x = -8.0;
			this.speed.mulScalarTo( -1 );	
		}
			
		if ( this.position.y < -8.0 ) {
			this.position.y = -8.0;
			this.speed.mulScalarTo( -1 );	
		}
		
		if ( this.position.z < -10.5 ) {
			this.position.z = -10.5;
			this.speed.mulScalarTo( -1 );	
		}
			
		if ( this.position.z > 10.0 ) {
			this.position.z = 10.0;
			this.speed.mulScalarTo( -1 );	
		}
				
	}
}