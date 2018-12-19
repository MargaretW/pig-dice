//business logic
var pigDice = {
  playerTurn: 1,
  currentScore1: 0,
  currentScore2: 0,
  currentScore: 0,
  totalScore1: 0,
  totalScore2: 0,
  rollDice: function() {
    return Math.floor(Math.random() * 6) + 1;
  }
};

var rollingDice = function() {
  var roll = pigDice.rollDice();
  if (roll === 1) {
    alert("rolled 1 next player's turn");
    pigDice.currentScore = 0
  } else {
    pigDice.currentScore += roll;
  }
};




//UI
$(document).ready(function() {
  $("button#player1Roll").click(function(e) {

    e.preventDefault();

    var player1Roll = pigDice.rollDice();
    $("#rollDice1").text(player1Roll);
    pigDice.currentScore1 = pigDice.rollDice();
    pigDice.totalScore1 += pigDice.currentScore1;
    rollingDice();
    $("#scoreOne").text(pigDice.currentScore);
    $("#Tscore1").text(pigDice.totalScore1);
    if (pigDice.totalScore1 >= 100) {
      alert("Winner!!!!!")
    }
  });

  $("button#player2Roll").click(function(e) {

    e.preventDefault();

    var player2Roll = pigDice.rollDice();
    $("#rollDice2").text(player2Roll);
    pigDice.currentScore2 = pigDice.rollDice();
    pigDice.totalScore2 += pigDice.currentScore2;
    rollingDice();
    $("#scoreTwo").text(pigDice.currentScore);
    $("#tscore2").text(pigDice.totalScore2);
    if (pigDice.totalScore2 >= 100) {
      alert("Winner!!!!!")
    }
  });
});
