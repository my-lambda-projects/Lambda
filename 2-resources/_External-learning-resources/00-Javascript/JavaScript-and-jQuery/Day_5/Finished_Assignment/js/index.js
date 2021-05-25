const state = {
  GUESSES: null,
  playerWon: null,
  ships: [],
};

// IMPORTANT HTML ELEMS
const $shotsFiredDisplay = $("#shots-fired");
const $shotsRemainingDisplay = $("#shots-remaining");
const $form = $("form[name=coord-form]");
const $startBtn = $("#start");
// SECTIONS
const $gameSection = $("#game");
const $instructions = $("#instructions");
const $playerLost = $("#you-lose");
const $playerWins = $("#you-win");

// INIT
$startBtn.on("click", startRestartGame);
$form.on("submit", fireMissles);

function isGameOver() {
  return state.GUESSES < 1 || state.playerWon;
}

function displayScore() {
  $playerLost.addClass("d-none");
  $playerWins.addClass("d-none");
  $instructions.addClass("d-none");
  $gameSection.removeClass("d-none");
  // Show shots
  $shotsRemainingDisplay.html(state.GUESSES);
  $shotsFiredDisplay.html(3 - state.GUESSES);

  if (state.playerWon) {
    $playerWins.removeClass("d-none");
  } else if (state.GUESSES === 0) {
    $playerLost.removeClass("d-none");
  }
}

function fireMissles(evt) {
  evt.preventDefault();
  if (isGameOver()) {
    displayScore();
    return;
  }
  const $x = $form.find("select[name=coordX]");
  const $y = $form.find("select[name=coordY]");
  const guess = {
    x: $x.find(":selected").val(),
    y: +$y.find(":selected").val(),
  };
  const wasItAHit = doesGuessHitAnyShips(guess);
  state.GUESSES--;
  if (wasItAHit) {
    state.playerWon = true;
  }
  if (isGameOver()) {
    $form.find("button[type=submit]").attr("disabled", true);
  }
  displayScore();
}

function startRestartGame() {
  const coords = ["A", "B", "C", "D", "E", "F", "G", "H"];
  state.GUESSES = 3;
  state.playerWon = false;
  state.ships = [];

  let shipCount = 3;
  /** CREATE THE SHIPS **/
  while (shipCount--) {
    const rX = Math.floor(Math.random() * coords.length);
    const rY = Math.floor(Math.random() * coords.length);
    const ship = battleShipFactory(coords[rX], rY + 1);
    state.ships.push(ship);
  }

  displayScore();

  $form.find("button[type=submit]").attr("disabled", false);
}

function battleShipFactory(coordinateX, coordinateY) {
  this.count = this.count || 0;

  return {
    id: ++this.count,
    x: coordinateX, // 'A', 'B', 'C', 'D'
    y: coordinateY,

    guessPosition(x, y) {
      // If x and y hit the ship
      if (x === this.x && y === this.y) {
        return "HIT!";
      }
      return "MISS";
    },
  };
}

// return true or false depending if "guess" hits any "ships"
function doesGuessHitAnyShips(guess) {
  const ships = state.ships;

  for (let i = 0; i < ships.length; i++) {
    var ship = ships[i];

    var hitOrMiss = ship.guessPosition(guess.x, guess.y);
    // Test the value of "hitOrMiss"
    if (hitOrMiss === "HIT!") {
      return true;
    }
  }

  // No ships were hit (or else this code couldn't be reached)
  return false;
}
