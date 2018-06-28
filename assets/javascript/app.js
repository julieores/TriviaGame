console.log("linked")
var timeout;
var timer = 0;
var timeLeft = 30;
var elem = document.getElementById('timer');

var correct = 0;
var wrong = 0;



var answerKey = ["Greenland", "Pacific", "Amazon"];

// set countdown to 30 seconds
// var timerId = setInterval(countdown, 30000);


function timeTracker(time){
   timeout = setTimeout(function () {
    if (time > 0) {
      time--;

      $("#timer").text(time + " seconds remaining");
      timeTracker(time);
    }
    else {
      gradeTrivia()
    }
  }, 1000)
}

function gradeTrivia(){
clearTimeout(timeout)
$("#timer").empty()
  for(var i = 0; i < answerKey.length; i++){
     $.each($("input[name=" + i + "]:checked"), function(){
    console.log($(this).val());

    if($(this).val() === answerKey[i]){
      correct++
      // correct = correct + 1;
    }
    else{
      wrong++
    }
  })
  }

  alert("You got " + correct + " correct, and you missed " + wrong);
 
}


// function countdown() {
//   if (timeLeft == 0) {
//     clearTimeout(timerId);
//     doSomething();
//   } else {
//     // elem.innerHTML = timeLeft + ' seconds remaining';
//     $("#timer").text(timeLeft + " seconds remaining");
//     timeLeft--;
//   }
// }


$(document).on("click", "#submit-button", function () {
  // alert("clicked!");

  gradeTrivia();
})

timeTracker(30);



//create empty array with global scope and for every time X, increment correct or wrong, push into
// empty array, and then at game (outside for loop), check length of this new array to
// other array, whatever diff is, catination and alert






//Unfinished and trial code

//var missing = [""]
//var missed = newArray();
//var unanswered = missed.push ("correct", "wrong")
  //document.writeln(unanswered);

  //document.writeln(missed);




//testing code for unanswered questions
//length: 0
//addElem: function addElem(elem){
//[].push.call(this.elem);
//obj.addElem({});
//obj.addElem({});
//console.log(obj.length);




