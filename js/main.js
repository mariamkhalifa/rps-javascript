(() => {
	// this is the same as print() in python
	console.log("loaded!");

	//same as an array in python
	var choices = ["Rock", "Paper", "Scissors"];
	var computer;
	var player = document.querySelector("#weapon");
	var trigger = document.querySelector("#play");
	var staus = document.querySelector(".winlose");

	function play_game() {
		console.log("called game function");
		// generate a random number an use that to pick a weapon
		computer = choices[Math.floor(Math.random() * choices.length)];
		console.log(computer);

		var player_choice = player.value;
		console.log(player_choice);

		if (computer.toLowerCase() == player_choice.toLowerCase()){
			//tie
			console.log("tie");
			status.textContent = "Tie! You live to shoot another day";
		} 

		else if(player_choice.toLowerCase() == "rock"){
			if (computer.toLowerCase() == "scissors") {
				console.log("win");
				status.textContent = `You won! ${player_choice} beats ${computer}!`;
			}
			else {
				console.log("lose");
				status.textContent = `You Lost! ${player_choice} beats ${computer}!`;
			}
		}

		else if(player_choice.toLowerCase() == "paper"){
			if (computer.toLowerCase() == "rock") {
				console.log("win");
				status.textContent = `You won! ${player_choice} beats ${computer}!`;
			}
			else {
				console.log("lose");
				status.textContent = `You Lost! ${player_choice} beats ${computer}!`;
			}
		}

		else if(player_choice.toLowerCase() == "scissors"){
			if (computer.toLowerCase() == "paper") {
				console.log("win");
				status.textContent = `You won! ${player_choice} beats ${computer}!`;
			}
			else {
				console.log("lose");
				status.textContent = `You Lost! ${player_choice} beats ${computer}!`;
			}
		}

		else {
			alert("Input a valid selection");
		}

	}

	trigger.addEventListener("click", play_game)

})();
