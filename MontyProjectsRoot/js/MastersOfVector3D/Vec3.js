

function mulScalar( factor ) {
	
	var vec = new Vec3();
	
	vec.x = this.x * factor;
	vec.y = this.y * factor;
	vec.z = this.z * factor;
	
	return vec;
}

function mulScalarTo( factor ) {
	
	this.x = this.x * factor;
	this.y = this.y * factor;
	this.z = this.z * factor;
}

function addScalar( factor ) {
	
	var vec = new Vec3();
	
	vec.x = this.x + factor;
	vec.y = this.y + factor;
	vec.z = this.z + factor;
	
	return vec;
}


function add( other ) {
	
	var vec = new Vec3();
	
	vec.x = this.x + other.x;
	vec.y = this.y + other.y;
	vec.z = this.z + other.z;
	
	return vec;
}

function addScalarTo( factor ) {

	this.x = this.x + factor;
	this.y = this.y + factor;
	this.z = this.z + factor;
}


function addTo( other ) {
	
	this.x = this.x + other.x;
	this.y = this.y + other.y;
	this.z = this.z + other.z;
}


function toString() {
	return " Vec3( " + this.x + ", " + this.y + ", " + this.z + " ) ";
}

function vecAlert() {
	alert( this.toString() );
}

function copyFrom( vec ) {
	this.x = vec.x;
	this.y = vec.y;
	this.z = vec.z;
}

function setVec3( x, y, z ) {
	this.x = x;
	this.y = y;
	this.z = z;	
}

function Vec3( x, y, z ) {

	this.set = setVec3;	
	this.mulScalar = mulScalar;
	this.addScalar = addScalar;
	this.add = add;
	this.mulScalarTo = mulScalarTo;
	this.addScalarTo = addScalarTo;
	this.addTo = addTo;
	this.vecAlert = vecAlert;
	this.toString = toString;
	this.copyFrom = copyFrom;
	
	this.x = x;
	this.y = y;
	this.z = z;	
}
