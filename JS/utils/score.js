class Score
{
	constructor()
	{
		this.gameCanvas = new GameCanvas();
		this.score = 0;
	}
	
	displayScore()
	{
		this.gameCanvas.writeText(this.score, this.gameCanvas.getWidth()/2, 50);
	}
	
}