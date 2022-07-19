/*Add your JavaScript here*/
var livScore = 0;
var maddieScore = 0;

var questionCount = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");


q1a1.addEventListener("click", liv);
q1a2.addEventListener("click", maddie);

q2a1.addEventListener("click", liv);
q2a2.addEventListener("click", maddie);

q3a1.addEventListener("click", liv);
q3a2.addEventListener("click", maddie);


function liv(){
  livScore += 1;
  questionCount +=1;
  console.log("Liv Score = " + livScore + "Question Count = " + 
  questionCount);

  disableBtnQ1();  //my trials
  disableBtnQ2(); //my trials
  
  if(questionCount == 3){
    console.log("Yaay! You finished the quiz!");
    disableBtnQ3(); //my trials
    
    updateResult();
    
  }
  
}

function maddie(){
  maddieScore += 1;
  questionCount += 1;
  console.log("Maddie Score = " + maddieScore + "Question Count = " +
  questionCount);

  disableBtnQ1();  //my trials
  disableBtnQ2(); //my trials

  if(questionCount == 3){
    console.log("Yaay! You finished the quiz!");
    disableBtnQ3(); //my trials   
   
    updateResult();
   
  }
  
}

function updateResult(){
  if(livScore >= 2){
    result.innerHTML = "You are Liv!  You are considerate, energetic, and have great potential in the performing arts!";
    console.log("You are Liv!  You are considerate, energetic, and have great potential in the performing arts!");
  }
  else if(maddieScore >= 2){
    result.innerHTML = "You are Maddie!  You are outspoken, competitive, and a potentially great athlete!";
    console.log("You are Maddie!  You are outspoken, competitive, and a potentially great athlete!");
  }
}


//my trials functions start
function disableBtnQ1() {
    if(questionCount > 0){
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
    }
}

function disableBtnQ2() {
    if(questionCount > 1){
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
    }
}

function disableBtnQ3() {
    if(questionCount == 3){
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
    }
}

//my trials functions end


  restart.addEventListener("click", again);

function again(){
  livScore = 0;
  maddieScore = 0;
  questionCount = 0;
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("result").innerHTML = "Your result is...";
  
}