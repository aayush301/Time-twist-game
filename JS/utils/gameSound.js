class GameSound
{
	constructor()
	{
		this.bgSound = new Audio("sounds/bg-sound.wav");
		this.freeze = new Audio("sounds/freeze.mp3");
		this.gameOver = new Audio("sounds/game-over.wav");
		this.bgSound.loop = true;
		this.freeze.volume = 0.3;
	}
	
	play(type)
	{
		if(type == "bgSound")
		{
			this.bgSound.pause();
			this.bgSound.currentTime = 0;
			this.bgSound.play();
		}
		else if(type == "freeze")
		{
			this.freeze.pause();
			this.freeze.currentTime = 0;
			this.freeze.play();
		}
		else if(type == "gameOver")
		{
			this.gameOver.pause();
			this.gameOver.currentTime = 0;
			this.gameOver.play();
		}
	}
	
	stop(type)
	{
		if(type == "bgSound")
		{
			this.bgSound.pause();
		}
	}
}
