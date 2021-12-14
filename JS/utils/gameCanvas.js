function GameCanvas()
{
	const canvas = document.querySelector("canvas");
	const pen = canvas.getContext("2d");
	
	this.getWidth = function() {
		return canvas.width;
	}
	
	this.getHeight = function() {
		return canvas.height;
	}
	
	this.setWidth = function(w) {
		canvas.width = w;
	}
	
	this.setHeight = function(h) {
		canvas.height = h;
	}
	
	this.getCanvas = function() {
		return canvas;
	}
	
	this.clearCanvas = function() {
		pen.clearRect(0,0, canvas.width, canvas.height)
	}
	
	this.drawFillCircle = function(x,y,r,color) {
		pen.beginPath();
		pen.fillStyle = color;
		pen.arc(x, y, r, 0, 2*Math.PI);
		pen.fill();
	}
	
	this.drawFillRect = function(x1,y1,x2,y2,color) {
		const width = x2-x1;
		const height = y2-y1;
		pen.beginPath();
		pen.fillStyle = color;
		pen.fillRect(x1,y1,width,height);
	}
	
	this.writeText = function(text, x, y) {
		pen.beginPath();
		pen.font = "30px Patrick Hand";
		pen.fillStyle = "red";
		pen.textAlign = "center"
		pen.fillText(text,x,y);
	}
}