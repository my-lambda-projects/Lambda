var GUESSES = 2;
var playerWon = false;

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
function doesGuessHitAnyShips(ships, guess) {
  if (playerWon || GUESSES <= 0) {
    console.log(`Game Over: You ${playerWon ? "Won" : "Lost"}!`);
    return;
  }
  GUESSES--;
  for (let i = 0; i < ships.length; i++) {
    var ship = ships[i];

    var hitOrMiss = ship.guessPosition(guess.x, guess.y);
    // Test the value of "hitOrMiss"
    if (hitOrMiss === "HIT!") {
      playerWon = true;
      console.log(`Direct Hit on Ship ${ship.id}!`);
      return true;
    }
  }

  // No ships were hit (or else this code couldn't be reached)
  return false;
}

/** CREATE THE SHIPS **/
const ship1 = battleShipFactory("A", 5);
const ship2 = battleShipFactory("F", 9);
const ship3 = battleShipFactory("C", 6);

/** STORE ALL SHIPS IN ONE ARRAY **/
const ships = [ship1, ship2, ship3];
