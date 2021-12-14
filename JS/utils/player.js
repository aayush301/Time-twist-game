class Player
{
	constructor()
	{
		this.gameCanvas = new GameCanvas();
		this.x = this.gameCanvas.getWidth()/2;
		this.y = this.gameCanvas.getHeight()/2;
		this.radius = 15;
		this.color = "red"
	}
	
	draw()
	{
		this.gameCanvas.drawFillCircle(this.x, this.y, this.radius, this.color);
	}
	
}