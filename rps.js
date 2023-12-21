function getComputerChoice() {
    const list = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * 3);
    return list[index];
}

function playRPS(player_choice, computer_choice) {
    if (computer_choice == player_choice) {
        return "draw";
    } 
    else if ((player_choice == "Rock" && computer_choice == "Scissors") ||
             (player_choice == "Paper" && computer_choice == "Rock") ||
             (player_choice == "Scissors" && computer_choice == "Paper")) {
        return "yes";
    } 
    else if ((computer_choice == "Rock" && player_choice == "Scissors") ||
             (computer_choice == "Paper" && player_choice == "Rock") ||
             (computer_choice == "Scissors" && player_choice == "Paper")) {
        return "no";
    } else {
        return "error";
    }
}

let displayChoice = function() {

    if (refresh) {
        const div_remove = document.querySelector(".choice");
        document.body.removeChild(div_remove);
    } 
    // create a selection panel 
    refresh = true;
    btn_play.textContent = 'Restart';
    const div_choice = document.createElement('div');
    const div_result = document.createElement('div');
    const btn_r = document.createElement('button');
    const btn_p = document.createElement('button');
    const btn_s = document.createElement('button');
    btn_r.classList.add("rps");
    btn_p.classList.add("rps");
    btn_s.classList.add("rps");
    div_choice.classList.add("choice");
    btn_r.textContent = "Rock";
    btn_p.textContent = "Paper";
    btn_s.textContent = "Scissors";
    document.body.appendChild(div_choice);
    div_choice.appendChild(btn_r);
    div_choice.appendChild(btn_p);
    div_choice.appendChild(btn_s);
    div_choice.appendChild(div_result);
    
    // create the feedback panel
    const p_result = document.createElement('p');
    const p_score = document.createElement('p');
    const p_feedback  = document.createElement('p');
    p_result.classList.add('result');   
    p_score.classList.add('score');   
    p_feedback.classList.add('result');   
    div_choice.appendChild(p_result);
    div_choice.appendChild(p_score);
    div_choice.appendChild(p_feedback);

    // Set up the rounds to play and win count
    const rounds = +prompt("How many points to win?");
    let computer_win = 0;
    let player_win = 0;

    // Play a round and give feedback
    btn_choice = document.querySelectorAll(".rps");
    btn_choice.forEach( (b) => {
        b.addEventListener('click', function buttonPress() {
            let player_choice = b.textContent;
            let computer_choice = getComputerChoice();
            let result = playRPS(player_choice, computer_choice);
            p_result.textContent = `${player_choice} VS ${computer_choice}`;
            switch (result) {
                case "draw":
                    p_feedback.textContent = `Draw!`;
                    break;
                case "yes":
                    p_feedback.textContent = `You Win!`;
                    player_win++;
                    break;
                case "no":
                    p_feedback.textContent = `You Lose!`;
                    computer_win++;
                    break;
                default:
                    p_feedback.textContent = `Sorry, an error occured during the game`;
                    break;
            }
            p_score.textContent = `Player: ${player_win} | Computer: ${computer_win}`; 
            if (player_win == rounds) {
                p_feedback.textContent = `Congratulation, you won the game!`;
            } else if (computer_win == rounds) {
                p_feedback.textContent = `Sorry, you lost the game :(`;
            };
        });
    });
}

let refresh = false;
const btn_play = document.querySelector("#play");
btn_play.addEventListener('click', displayChoice);
