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

   $("button#start").click (function(event){
    event.preventDefault ();
     $("#pigDice ").append('<div class="col-md-6"> ' +
                              '<h2>First Player</h2>' +
                              '<button type="button" id="player1Roll">ROLL</button>' +
                              '<div class="rollDice">' +
                                '<p id="rollDice1"></p>' +
                              '</div>' +
                              '<div class="score">' +
                                '<p id= scoreOne></p>' +
                              '</div>' +
                            '</div' +
                            '<div class="col-md-6">' +
                              '<h2>Second Player</h2>' +
                              '<button type="button" id="player2Roll">ROLL</button>' +
                              '<div class="rollDice">'+
                                '<p id="rollDice2"></p>'+
                              '</div>'+
                              '<div class="score">' +
                                '<p id= scoreTwo></p>' +
                            '</div>'+
                              '<button type="button" id="newGame"><a href="index.html">NewGame</a></button>');
});

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
