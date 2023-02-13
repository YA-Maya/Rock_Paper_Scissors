const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

//Play Match
const playMatch = () => {
  
  const options = document.querySelectorAll(".options button");
  console.log(options) //delet when you are done.
  const playerHand = document.querySelector(".player-hand1");
  const computerHand = document.querySelector(".computer-hand");
  const hands = document.querySelectorAll(".hands img");

  hands.forEach(hand => {
    hand.addEventListener("animationend", function() {
      this.style.animation = "";
    });
  });
//Computer Options
    const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./images/${this.textContent}.png`;
            computerHand.src = `./images/${computerChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
    const updateScore = () => {
      const playerScore = document.querySelector("#player-score p");
      const computerScore = document.querySelector("#computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };// if the score are not change check HTML or change const into let

    const compareHands = (playerChoice, computerChoice) => {
      console.log(playerChoice) //the player choice
      console.log(computerChoice) //the computer choice
      //Update Text
      let winner = document.querySelectorAll('.winner')[0];
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = 'It is a tie';
        return;
      
      }
      //Check for Rock
      if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
          winner.textContent = 'Player Wins';
          pScore = pScore+1;
          updateScore();
          return;
        } else {
          winner.textContent = 'Computer Wins';
          cScore=cScore+1;
          updateScore();
          return;
        }
      }
      //Check for Paper
      if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
          winner.textContent = 'Computer Wins';
          cScore=cScore+1;
          updateScore();
          return;
        } else {
          winner.textContent = 'Player Wins';
          pScore=pScore+1;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
          winner.textContent = 'Computer Wins';
          cScore=cScore+1;
          updateScore();
          return;
        } else {
          winner.textContent = 'Player Wins';
          pScore=pScore+1;
          updateScore();
          return;
        }
      }
    };
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();