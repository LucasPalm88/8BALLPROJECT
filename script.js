$(document).ready(function(){
 
    var magic8Ball = {};
    magic8Ball.listofanswers = ["Most defintely.", "No.", "Wouldn't say so.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "Yes.", "Looks good.", "Maybe"];
   
    magic8Ball.getAnswer = function(question)
    {
      var randomNumber = Math.random();
      var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
      var answer = this.listofanswers[randomAnswer];
     
      $("#8ball").effect( "shake" );
      $("#answer").text( answer );
      $("#answer").fadeIn(3000);
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
 
      console.log(question);
      console.log(answer);
    };
    $("#answer").hide();
 
    var onClick = function()
    {
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
      var question = prompt("What would you like to ask?");
      magic8Ball.getAnswer(question);
    };
   
    $("#questionButton").click( onClick );
  });
