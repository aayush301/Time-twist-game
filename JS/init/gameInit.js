function GameInit()
{
	this.init = function() {
		document.querySelectorAll(".start-game").forEach(ele => ele.addEventListener("click", this.start));
		document.querySelectorAll(".home").forEach(ele => ele.addEventListener("click", location.reload.bind(location)));
	}
	
	this.start = function() {
		document.querySelector("#instructions-box").classList.add("hide");
		document.querySelector("#result-box").classList.add("hide");
		document.querySelector("#game-wrapper").classList.remove("hide");
		
		const canvas = document.querySelector("canvas");
		canvas.width = Math.min(window.innerWidth, 400);
		canvas.height = window.innerHeight - 65;
		
		const mainGame = new MainGame();
		mainGame.init();
		
	}
}