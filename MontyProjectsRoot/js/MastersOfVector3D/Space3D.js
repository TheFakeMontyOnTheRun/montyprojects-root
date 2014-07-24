function Space3D( x0, y0, z0, x1, y1, z1 ) {
	this.origin = new Vec3( x0, y0, z0 );
	this.size = new Vec3( x1 - x0, y1 - y0, z1 - z0 );	
}
