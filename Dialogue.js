class Dialogue{
  constructor(speakerType, text){
    this.speakerType = speakerType;
    this.text = text;
    this.showFullText = false;
    this.hasBeenFFWd = false;
  }

  displayText(initFrame){ //will have more checks for which type of speaker, also will incorporate an occasional random delete for the classmate (like they're typing their text instead of actually speaking it)
    textSize(30);
    textFont(ForcedSquare);
    textAlign(CENTER);
    rectMode(CENTER);
    this.displayTextBox();
    push()
    textAlign(LEFT);
    text(this.speakerType, innerWidth/5, innerHeight-innerHeight/3);
    pop();
    if(this.showFullText){ //shows full text
      text(this.text, innerWidth/2, innerHeight-innerHeight/4, innerWidth*5/7)
    } else{ //f full text is not shown, continues to scroll 
      text(this.text.substring(0, frameCount-initFrame), innerWidth/2, innerHeight-innerHeight/4, innerWidth*5/7)
    }
    if(!this.showFullText)
    this.checkFullTextDisplayed(initFrame);
  }

  fastFwdText(){
    this.showFullText = true;
    this.hasBeenFFWd = true;
  }

  checkFullTextDisplayed(initFrame){
    if(frameCount-initFrame<=this.text.length && !this.hasBeenFFWd){
      this.showFullText = false;
    }else{
      this.showFullText = true;
    }
  }


  getShowFullText(){
    return this.showFullText;
  }

  displayTextBox(){
    push()
    noStroke();
    fill(240,240,240,180)
    rect(innerWidth/2, innerHeight-innerHeight/4, innerWidth*5/7, innerHeight/4)
    pop()
  }

}