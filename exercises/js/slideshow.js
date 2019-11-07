const delayInMs = 2000;
class Slideshow{
  constructor(id) {
    this.$currentSlide;
    this.delayTimeout;
    this.$counter;
    this.$nextButton;
    this.$prevButton;
    this.$startStopButton;
    this.$slideshow = $("#"+id);
    this.$items = this.$slideshow.children("li");
    this.counter = 1;
    this.totalItems = this.$items.length;
    this.buttonPressed = false;
    
  }
  setupSlideshow(){
    this.$items.hide();
    
    let $counterContainer = $("<div> of  " + this.totalItems+" </div>").insertAfter(this.$slideshow);
    this.$counter = $("<b>"+this.counter+"</b>").prependTo($counterContainer);
    
    this.$nextButton = $("<button id='nextButton'>Next</button>").click(this.buttonHandler.bind(this));
    this.$prevButton = $("<button id='prevButton'>Prev</button>").click(this.buttonHandler.bind(this));
    this.$startStopButton = $("<button id='startStopButton'>Stop</button>").click(this.buttonHandler.bind(this));
    
    this.$nextButton.insertAfter(this.$slideshow);
    this.$startStopButton.insertAfter(this.$slideshow);
    this.$prevButton.insertAfter(this.$slideshow);
  }
  start(){
    this.setupSlideshow();
    this.setCurrentSlide();
    this.displaySlide();
  }
  displaySlide(){
    this.$counter.text(this.counter);
    this.$currentSlide.fadeIn("slow");
    //handling the delay before it fades out
    this.delayTimeout = setTimeout(() => {this.$currentSlide.fadeOut("slow"); this.dispSlideHandler()}, delayInMs);
  }
  setCounter(){
    if(this.$currentSlide){
      if(!this.buttonPressed){
        this.counter += 1;
      }
      else{
        this.buttonPressed = false;
      }
      if(this.counter>this.totalItems){
        this.counter = 1;
      }
      else if(this.counter<=0){
        this.counter = this.totalItems;
      }
    }
  }
  setCurrentSlide(){
    this.setCounter();
    this.$currentSlide = $(this.$items[this.counter - 1]);
  }
  
  //handle how the slide is displayed
  dispSlideHandler(){
    clearTimeout(this.delayTimeout);
    this.$currentSlide.hide();
    this.setCurrentSlide();
    this.displaySlide();
  }
  buttonHandler(e){
    let button = e.currentTarget;
    this.buttonPressed = true;
    if(!(button === this.$startStopButton.get(0))){
      if(button === this.$nextButton.get(0)){
        this.counter += 1;
      }
      else if(button === this.$prevButton.get(0)){
        this.counter -= 1;
      }
      this.$startStopButton.text("Stop");
      this.dispSlideHandler(); 
    }
    else{
      if(this.$startStopButton.text() === "Stop"){
        clearTimeout(this.delayTimeout);
        this.$startStopButton.text("Start");
      }
      else{
        this.$startStopButton.text("Stop");
        this.dispSlideHandler();
      }
    }
  }
}

let slideshow = new Slideshow("slideshow");
slideshow.start();