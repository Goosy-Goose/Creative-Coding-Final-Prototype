class Background{
  constructor(bgImg, char1){
    this.bgImg = bgImg;
    this.char1 = char1;
  }

  displayBackground(){
    push();
    imageMode(CORNER);
    if(this.bgImg === "Classroom"){
      image(Background_Classroom, 0, 0, CanvWidth, CanvHeight)
    }

    if(this.char1 ==="Kit Annoyed"){
      image(Kit_Annoyed, 0,0, CanvWidth, CanvHeight);
    }

    pop()

    
  }
}