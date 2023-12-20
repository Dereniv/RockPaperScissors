function getComputerChoice() {
    const list = ["ROCK", "PAPER", "SCISSORS"];
    let index = Math.floor(Math.random() * 3);
    return list[index];
}

function playRPS(playerSelection, computerSelection) {
    let computer_choice = computerSelection;
    let player_choice = playerSelection;
    let p_win;
    if (computer_choice == player_choice) {
        return [`Computer: ${computer_choice}, Player: ${player_choice},
                 Draw! We replay the round:`, (p_win = "draw")];
    } 
    else if ((player_choice == "ROCK" && computer_choice == "SCISSORS") ||
             (player_choice == "PAPER" && computer_choice == "ROCK") ||
             (player_choice == "SCISSORS" && computer_choice == "PAPER")) {
        return [`Computer: ${computer_choice}, Player: ${player_choice},
                 you win!`, (p_win = "yes")];
    } 
    else if ((computer_choice == "ROCK" && player_choice == "SCISSORS") ||
             (computer_choice == "PAPER" && player_choice == "ROCK") ||
             (computer_choice == "SCISSORS" && player_choice == "PAPER")) {
        return [`Computer: ${computer_choice}, Player: ${player_choice},
                you lose!`, (p_win = "no")];
    } else {
        return ["An error occured, try again", (p_win = "error")];
    }
}

function game() {
    let rounds = +prompt("How many points to win?");
    let c_points = 0,
    p_points = 0;
    while ((c_points || p_points) < rounds) {
        let playerSelection = prompt("Do you take ROCK, PAPER or SCISSORS?");
        playerSelection = playerSelection.toUpperCase();
        let computerSelection = getComputerChoice();
        [str_result, result] = playRPS(playerSelection, computerSelection);
        console.log(str_result);
        switch (result) {
            case "draw":
                break;
            case "yes":
                p_points++;
                break;
            case "no":
                c_points++;
                break;
            default:
                console.log("error");
                i = round;
                p_points = c_points;
                break;
        }
        console.log(`p_points: ${p_points}, c_points: ${c_points}`);
    }
    if (p_points > c_points) {
        console.log("Congratulation, you won the game!");
    } else if (c_points > p_points) {
        console.log("Sorry, you lost the game...");
    } else {
        console.log("Sorry, an error occured during the game");
    }
}  
