//business logic
var pigDice= {
  player1Score : 0,
  player2Score : 0,
  playerTurn: 1,
  totalScore:0,
  rollDice:function() {
    return math.ceil (math.random()* 6);
  }
};

var rollingDice = function () {
  var roll = pigDice.rollDice();
  if (roll ===1){
    return pigDice.totalScore = 0;
    alert("sorry,rolled 1,other player's turn");
  }else  {
    pigDice.totalScore+=roll;
  }
};

var winner =function(){
  if (pigDice.playerturn===1){
    if (pigDice.player1Score + pigDice.totalScore >= 100){
      alert("Player 1 is the winner");
    }else if {
      (pigDice.player2Score + pigDice.totalScore >=100){
        alert("player 2 is the winner");
      }
    }
  };

//UI
$(document).ready (function (){

  // $("#start").click (function(event){
    // event.preventDefault ();
    // $(".row ").show()
  });


});
