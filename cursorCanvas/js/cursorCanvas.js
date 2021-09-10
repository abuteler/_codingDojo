var Cursor = function(){
	this.position = {
		x: 45,
		y: 45
	}
	this.size = 9;
	this.color = 'rgb(0, 255, 0)';
	this.acceleration = 5;
	this.tail = false;
}
Cursor.prototype.moveLeft = function(){
	this.position.x -= 1 + this.acceleration;
}
Cursor.prototype.moveRight = function(){
	this.position.x += 1 + this.acceleration;
}
Cursor.prototype.moveUp = function(){
	this.position.y -= 1 + this.acceleration;
}
Cursor.prototype.moveDown = function(){
	this.position.y += 1 + this.acceleration;
}


var Canvas = function(){
	this.width = 500;
	this.height = 400;
	this.color = 'rgb(45,0,45)';
}
Canvas.prototype.init = function(){
	var canvas = $('canvas')[0];
	canvas.width = this.width;
	canvas.height = this.height;
	if(!canvas.getContext) {
        console.error('No canvas support!');
    } else {
        ctx = canvas.getContext('2d');
        //render the canvas
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
Canvas.prototype.draw = function(x, y, size, color, clear){
	var canvas = $('canvas')[0];
	if(!canvas.getContext) {
        console.error('No canvas support!');
    } else {
        ctx = canvas.getContext('2d');
        console.log(clear);
        if(clear){
	        //clear the canvas
	        ctx.fillStyle = this.color;
	        ctx.fillRect(0, 0, canvas.width, canvas.height);
	    }
        //render cursor
        ctx.fillStyle = color;
        ctx.fillRect(x, y, size, size);
    }
}


var cursorCanvas = {
	cursor: new Cursor(),
	canvas: new Canvas(),
	init: function(){
		this.canvas.init();
		this.bindControls();
		this.drawCursor();
	},
	bindControls: function() {
        var that = this,
            gameKeyPressed = null;
        $(document).keydown(function(eventObj) {
            gameKeyPressed = true;
            switch(eventObj.which) {
            	case 32: //space bar
                    eventObj.preventDefault();
                    if(that.cursor.tail){
                    	that.cursor.tail = false;
                    } else {
                    	that.cursor.tail = true;
                    }
                    break;
                case 37: //left arrow
                    eventObj.preventDefault();
                    that.cursor.moveLeft();
                    break;
                case 38: //up arrow
                    eventObj.preventDefault();
                    that.cursor.moveUp();
                    break;
                case 39: //right arrow
                    eventObj.preventDefault();
                    that.cursor.moveRight();
                    break;
                case 40: //down arrow
                    eventObj.preventDefault();
                    that.cursor.moveDown();
                    break;
                default:
                    gameKeyPressed = false;
                    break;
            };
            if(gameKeyPressed) {
                that.drawCursor();
            }
        });
    },
    drawCursor: function(){
    	var clear = true;
    	if(this.cursor.tail){
    		clear = false;
    	}
    	this.canvas.draw(this.cursor.position.x,
						this.cursor.position.y,
						this.cursor.size,
						this.cursor.color,
						clear);
	}
}

$(document).ready(function(){
	cursorCanvas.init();
});
