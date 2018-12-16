//business logic
var pigDice= {
  playerTurn: 1,
  currentScore:0,
  rollDice:function() {
    return math.ceil (math.random()* 6);
  }
};

var rollingDice = function () {
  var roll = pigDice.rollDice();
  if (roll ===1){
    return pigDice.currentScore = 0;
    alert("sorry,rolled 1,other player's turn");
  }else  {
    pigDice.currentScore+=roll;
  }
};

var winner =function(){
  if (pigDice.playerturn===1){
    if ( pigDice.currentScore >= 30){
      alert("Player 1 is the winner");
    }else if {
      (pigDice.currentScore >=30){
        alert("player 2 is the winner");
      }
    }
  };

//UI
$(document).ready (function (){

  // $("button#start").click (function(event){
    // event.preventDefault ();
    // $(".row ").show()
  //});




});
