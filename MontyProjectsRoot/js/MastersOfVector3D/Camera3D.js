function Camera3D() {

	this.position = new Vec3( 0.0 ,0.0 ,0.0);
	this.heading = new Vec3( 0.0 ,0.0 ,0.0 );
	this.speed = new Vec3( 0.0 ,0.0 ,0.0);

	this.update = function(delta) {
		
		this.position.addTo( this.speed );
		this.speed.mulScalarTo( 0.9 );
		
		

		if ( this.position.x > 10.0 ) {
			this.position.x = 10.0;
			this.speed.set( 0,0,0);			
		}
			
		if ( this.position.y > 10.0 ) {
			this.position.y = 10.0;
			this.speed.set( 0,0,0);			
		}
			
		if ( this.position.x < -10.0 ) {
			this.position.x = -10.0;
			this.speed.set( 0,0,0);			
		}
			
		if ( this.position.y < -10.0 ) {
			this.position.y = -10.0;
			this.speed.set( 0,0,0);			
		}
				
	}
}
