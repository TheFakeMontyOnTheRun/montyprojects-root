// Whole-script strict mode syntax
"use strict";

//MastersOfVector3D
var scene;
var ball;
var mouse = {x: 0, y: 0};
var width;
var height;

function main(canvas, ctx, gameInfo, newWidth, newHeight ) {

        width = newWidth;
        height = newHeight;

        document.addEventListener('mousemove', function(e){ 
            mouse.x = e.clientX || e.pageX; 
            mouse.y = e.clientY || e.pageY 
        }, false);

	scene = new Scene( canvas, ctx, width, height );
	reset();
	 
	self.setInterval(function() {
		clock();
	}, 50);

	self.setInterval(function() {
		scene.draw( ctx );
	}, 50);
}

function reset() {
	scene.getCamera().position.set( 0, -5, 30 );
        
        for ( var i = 0; i < 15; ++i ) {
            
            ball = new Ball( '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6) );
            ball.position = new Vec3( ( -1 + 2 * Math.random() ) * 20, ( -1 + 2 * Math.random() ) * 20, ( -1 + 2 * Math.random() ) * 20 );
            ball.speed.set( 0.0, 0.0, -0.035 * Math.random() );
            scene.addObjectToScene(  ball );            
        }
        
	
}


function clock() {
    scene.camera.position.x = ( -0.5 + mouse.x / width  ) * 0.5;
    scene.camera.position.y = ( -0.5 + mouse.y / height ) * 0.5;
    scene.update( 100 );        
}
