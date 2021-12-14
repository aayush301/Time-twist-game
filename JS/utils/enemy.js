class Enemy
{
	constructor(y)
	{
		this.gameCanvas = new GameCanvas();
		this.x = Math.floor(Math.random()*(this.gameCanvas.getWidth()-30));
		this.y = y;
		this.velX = (Math.random()<0.5) ? -5 : 5;
		this.velY = 1;
		this.width = 30;
		this.height = 30;
		this.color = "#1f8a6a";
	}
	
	update()
	{
		this.x = this.x + this.velX;
		this.y = this.y + this.velY;
		
		if(this.x + this.width >= this.gameCanvas.getWidth() || this.x < 0)
		{
			this.velX = -this.velX;
		}
		
		if(this.y >= this.gameCanvas.getHeight())
		{
			this.y -= 600;
		}
		
	}
	
	draw()
	{
		this.gameCanvas.drawFillRect(this.x, this.y, this.x+this.width, this.y+this.height, this.color);
	}
	
}