let $slideshow = $("#slideshow");
let $items = $("#slideshow li").hide();
let counter = 1;
let totalItems = $items.length;

let $counterContainer = $("<div> of  " +totalItems+" </div>").appendTo("body");
let $counter = $("<b>"+counter+"</b>").prependTo($counterContainer);

let $nextButton = $("<button id='nextButton'>Next</button>").click(buttonHandler);
let $prevButton = $("<button id='prevButton'>Prev</button>").click(buttonHandler);
let $startStopButton = $("<button id='startStopButton'>Stop</button>").click(buttonHandler);
let buttonPressed = false, $currentSlide, delayTimeout;

$nextButton.insertAfter($("#slideshow"));
$startStopButton.insertAfter($("#slideshow"));
$prevButton.insertAfter($("#slideshow"));

const delayInMs = 2000;

// start the slide show
setCurrentSlide();
displaySlide();

//to display the slide
function displaySlide(){
  $counter.text(counter);
  $currentSlide.fadeIn("slow");
  //handling the delay before it fades out
  delayTimeout = setTimeout(() => {$currentSlide.fadeOut("slow"); dispSlideHandler()}, delayInMs);
}

//set the counter
function setCounter(){
  if($currentSlide){
    if(!buttonPressed){
      counter += 1;
    }
    else{
      buttonPressed = false;
    }
    if(counter>totalItems){
      counter = 1;
    }
    else if(counter<=0){
      counter = totalItems;
    }
  }
}

//set the current slide element
function setCurrentSlide(){
  setCounter();
  $currentSlide = $($items[counter - 1]);
}

//handle how the slide is displayed
function dispSlideHandler(){
  clearTimeout(delayTimeout);
  $currentSlide.hide();
  setCurrentSlide();
  displaySlide();
}

//handles the next, prev and stop button
function buttonHandler(){
  let button = this;
  buttonPressed = true;
  if(!(button === $startStopButton.get(0))){
    if(button === $nextButton.get(0)){
      counter += 1;
    }
    else if(button === $prevButton.get(0)){
      counter -= 1;
    }
    $startStopButton.text("Stop");
    dispSlideHandler(); 
  }
  else{
    if($startStopButton.text() === "Stop"){
      clearTimeout(delayTimeout);
      $startStopButton.text("Start");
    }
    else{
      $startStopButton.text("Stop");
      dispSlideHandler();
    }
  }
}
