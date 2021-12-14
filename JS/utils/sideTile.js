class SideTile
{
	constructor(x, y, width, height)
	{
		this.gameCanvas = new GameCanvas();
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = "#1f8a6a";
		this.velY = 1;
	}
	
	update()
	{
		this.y += this.velY;
		
		if(this.y > this.gameCanvas.getHeight())
		{
			this.y -= 30*25;
		}
	}
	
	draw()
	{
		this.gameCanvas.drawFillRect(this.x, this.y, this.x+this.width, this.y+this.height);
	}
}