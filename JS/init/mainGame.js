function MainGame()
{
	const gameCanvas = new GameCanvas();
	const gameSound = new GameSound();
	const score = new Score();
	let player;
	let enemies = [];
	let sideTiles = [];
	let gameFreezed = false;
	let animationId;
	let counter=0;
	
	gameSound.play("bgSound");
	
	this.init = function() {
		player = new Player();
		
		for(let i=0;i<3; i++)
		{
			let y=(i-2)*200;
			enemies.push(new Enemy(y));
		}
		
		for(let i=0; i<25; i++)
		{
			sideTiles.push(new SideTile(0, i*50, 40, 30));
			sideTiles.push(new SideTile(0, i*50+30, 30, 30));
		}
		for(let i=0; i<25; i++)
		{
			let x = gameCanvas.getWidth()-40;
			sideTiles.push(new SideTile(x, i*50, 40, 30));
			sideTiles.push(new SideTile(x+10, i*50+30, 30, 30));
		}
		
		this.addEvents();
		this.gameLoop();
		
	}
	
	this.addEvents = function() {
		document.querySelector("canvas").addEventListener("mousedown", md=(e)=>{
			e.preventDefault();
			for(let i=0; i<enemies.length; i++)
			{
				if(enemies[i].velX > 0)
					enemies[i].velX -= 3;
				else
					enemies[i].velX += 3;
			}
			
			gameSound.play("freeze");
			document.querySelector("canvas").classList.add("freezed");
			gameFreezed = true;
			
		});
		
		document.querySelector("canvas").addEventListener("mouseup", mu=(e)=>{
			e.preventDefault();
			for(let i=0; i<enemies.length; i++)
			{
				if(enemies[i].velX > 0)
					enemies[i].velX += 3;
				else
					enemies[i].velX -= 3;
			}
			
			document.querySelector("canvas").classList.remove("freezed");
			gameFreezed = false;
		});
		
		document.querySelector("canvas").addEventListener("touchstart", md)
		document.querySelector("canvas").addEventListener("touchend", mu)
		
		
	}
	
	
	
	this.gameLoop = function() {
		animationId = window.requestAnimationFrame(this.gameLoop.bind(this));
		gameCanvas.clearCanvas();
		
		// updating player
		if(counter < 40)
			player.radius += 0.1;
		else
			player.radius -= 0.1;
		counter = (counter+1) % 80;
		player.draw();
		
		
		// updating enemies
		for(let i=0; i<enemies.length; i++)
		{
			let enemy = enemies[i];
			enemy.update();
			enemy.draw();
		}
		
		// updating sideTiles
		for(let i=0; i<sideTiles.length; i++)
		{
			sideTiles[i].update();
			sideTiles[i].draw();
		}
		
		if(!gameFreezed)
			score.score++;
		score.displayScore();
		
		// checking collision
		this.checkPlayerEnemyCollision();
		
	}
	
	
	this.checkPlayerEnemyCollision = function() {
		for(let i=0; i<enemies.length; i++)
		{
			let enemy = enemies[i];
			if(this.dist(player.x, player.y, enemy.x, enemy.y) < player.radius ||
				this.dist(player.x, player.y, enemy.x, enemy.y+enemy.height) < player.radius ||
				this.dist(player.x, player.y, enemy.x+enemy.width, enemy.y) < player.radius ||
				this.dist(player.x, player.y, enemy.x+enemy.width, enemy.y+enemy.height) < player.radius)
			{
				this.pauseGame();
				window.setTimeout(this.gameOver.bind(this), 2000);
			}
		}
	}
	
	this.dist = function(x1,y1,x2,y2) {
		return Math.sqrt((x2-x1)**2 + (y2-y1)**2);
	}
	
	this.pauseGame = function() {
		window.cancelAnimationFrame(animationId);
	}
	
	this.gameOver = function() {
		gameSound.stop("bgSound");
		gameSound.play("gameOver");
		this.clearInstances();
		document.querySelector("#game-wrapper").classList.add("hide");
		
		let resultBox = document.querySelector("#result-box");
		resultBox.classList.remove("hide");
		resultBox.querySelector("#score").innerHTML = `Your score is ${score.score}`;
		resultBox.animate(
			[{transform: "scale(0.5)"}, {transform: "scale(1)"}],
			{duration: 400, iterations:1}
		);
	}
	
	this.clearInstances = function() {
		player = null;
		enemies = [];
		sideTiles = [];
		document.querySelector("canvas").removeEventListener("mousedown", md);
		document.querySelector("canvas").removeEventListener("mouseup", mu);
	}
	
}