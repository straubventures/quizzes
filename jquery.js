$(function() {

var $rgstrform = ('#register');
var $user = {
  name: $('#username'),
  password: $('#password'),
  email: $('#email')
};
  

$('#register').on('submit', function(e) {
  e.preventDefault()
  var newText= $('input:text').val();
  $('span.uninput').replaceWith(newText);
});


var questionnaire = [

  {
    "question" : "Identify the following scale: CDEGA",
    "valid"    : 1, // indicates the correct array number, use 0, 1...
    "buttons"  : ["C major", "Pentatonic"],
    "answers"  : [ "Close, but no cigar", "You got it! Smartypants."]  
  },
  {
    "question" : "What is the following scale: GABCDEFG",
    "valid"    : 0,
    "buttons"  : ["C Major", "Octatonic", "Whole Tone"],
    "answers"  : [ "Great", "Wrong", "Wrong... Sorry"]  
  },
  {
    "question" : "What instrument has white and black keys, three pedals, and typically requires a bench",
    "valid"    : 0, 
    "buttons"  : ["Piano", "Anything else"],
    "answers"  : ["Yup!", "Ohh, c'mon..."]
  }

];

var $qa       = $('#QA'),
    $question = $("h2", $qa),
    $buttons  = $("#buttons", $qa),
    $points   = $("p>span",$qa),
    questionnaireLength = questionnaire.length, // How many Q?
    qc        = 0,                              // Current Question counter
    points    = 0;                              // Current points

function QandA(){

  var quest = questionnaire[qc],
      question = quest.question,
      validIdx = quest.valid,
      btns     = quest.buttons,
      answer   = quest.answers;

  $question.text( question );

  if(qc >= questionnaire.Length){
    return alert("game over");
  }

  // generate buttons with text:
  $buttons.empty();
  for(var i=0; i<btns.length; i++){
    $buttons.append("<button>"+ btns[i] +"</button>");
  }

  // Retrieve generated buttons
  var $btn = $("button", $buttons);

  // Assign click
  $btn.one('click', function(){  
    var idx = $btn.index(this); // get button index
    alert("(valid idx is: "+ validIdx +" Clicked button idx: "+ idx +")");
    alert("Game says: "+ answer[idx] );
    points += (idx === parseInt(validIdx, 10) ? 5 : -5);
    $points.text( points );
    // Next question
    qc++; QandA();  // increment question counter and set new game
  });

}
QandA(); // Start game

});


