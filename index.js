var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userclickedPattern = [];
var level = 0;
var started = false;


 
 $(document).keypress(function(){
    if(!started){
    $("#level-title").text("level : " +level);

    nextsequence();
    started=true;
    }
 });


 $(".btn").click(function(){
    var userchosencolor = $(this).attr("id");
    userclickedPattern.push(userchosencolor);
    animatePress(userchosencolor);
    playAudio(userchosencolor);

    checkAnswer(userclickedPattern.length-1);
     });


     function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userclickedPattern[currentLevel]){
    if(gamePattern.length === userclickedPattern.length){
setTimeout(function(){
    nextsequence();
},1000);
    }
}
    else{
        playAudio("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    startover();
    }
}

     

 function nextsequence(){
    userclickedPattern = [];
    level++;
    $("#level-title").text("level : " +level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

playAudio(randomChosenColor);
 }

 function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
 function playAudio(name){
    var audio = new Audio("sounds" + name + ".mp3" );
    audio.play();

 }


 function startover(){
    level = 0;
    gamePattern = [];
    started=false;
 }
 
  
