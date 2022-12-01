class Background{
  constructor(bgImg, char1){
    this.bgImg = bgImg;
    this.char1 = char1;
  }

  displayBackground(){
    push();
    imageMode(CORNER);
    if(this.bgImg === "Background_Classroom.png"){
      image(Background_Classroom, 0, 0, innerWidth, innerHeight)
    }

    if(this.char1 ==="Kit_Annoyed.png"){
      image(Kit_Annoyed, 0,0, innerWidth, innerHeight);
    }
    pop()

    
  }
}