//business logic
var pigDice= {
  playerTurn: 1,
  currentScore:0,
  rollDice:function() {
    return math.ceil(math.random()* 6);
  }
};

var rollingDice = function () {
  var roll = pigDice.rollDice();
  if (roll ===1){
    return pigDice.currentScore = 0 +"next player";
  }else  {
    pigDice.currentScore+=roll;
  }
};



//UI
$(document).ready (function (){
  $("button#player1Roll").click(function(e){

    e.preventDefault ();

    var player1Roll = pigDice.rollDice ();
    $("#rollDice1").text(player1Roll);
    rollingDice();
    $("#scoreOne").text(pigDice.currentScore)
  });

  $("button#player2Roll"). click(function(e){

    e.preventDefault ();

    var player2Roll = pigDice.rollDice ();
    $("#rollDice2").text(player1Roll);
    rollingDice();
    $("#scoreTwo").text(pigDice.currentScore)
  });
});
