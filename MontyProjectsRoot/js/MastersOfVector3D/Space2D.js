function Space2D( x0, y0, x1, y1 ) {
	this.origin = new Vec3( x0, y0, 0 );
	this.size = new Vec3( x1 - x0, y1 - y0, 0 );	
}
