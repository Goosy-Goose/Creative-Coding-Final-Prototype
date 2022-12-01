var glitch
var VisNovel;
var Background_Classroom;
var Kit_Annoyed;
var ForcedSquare;
var ScenesCSV;
var CurrentSceneNumber, CurrentChapterNumber;
var Frame;


function preload(){
  Background_Classroom = loadImage('./resources/images/backgrounds/Background_Classroom.png')
  Kit_Annoyed = loadImage('./resources/images/characters/Kit_Annoyed.png')
  ScenesCSV = loadTable("./resources/Scenes.csv", "csv", "header");
  ForcedSquare = loadFont("./resources/fonts/FORCED SQUARE.ttf");
}

function setup(){
  new Canvas('17:11');
  glitch = new Glitch();
  VisNovel = new Scenes(ScenesCSV);
  CurrentSceneNumber = 0;
  CurrentChapterNumber = 0;
  Frame = 0;
  imageMode(CENTER);
  rectMode(CENTER);
  frameRate(20);
}

function draw(){
  background(220);
  VisNovel.playScene(CurrentSceneNumber, Frame)
}


function mousePressed(){
  if(VisNovel.checkCanGoNextScene()){
    goNextScene();
  }else{
    VisNovel.fastForwardText()
  }
  
}



function goNextScene(){
  Frame = frameCount;
    if(CurrentSceneNumber>= ScenesCSV.length-1){
      CurrentSceneNumber= 0
    } else{ //THIS IF ELSE LOOP IS TEMPORARY AS I PLAN ON ONLY HAVING THE PLAYER LOOP THROUGH THE STORY ONCE BEFORE GOING ON TO THE FIGHTING GAME
      CurrentSceneNumber++ //will incorporate text skipping (if pressed while text is still scrolling, will display full text)
    }
}





//this is for backgrounds and glitchy flashbacks which I will be incorporating in the future
function makeImgGlitch(imgToGlitch){ //still not getting the glitched image to work
  glitch.loadImage(imgToGlitch, function(im){glitch.loadImage(im)});
  glitch.resetBytes();
  glitch.loadType('png');
  glitch.replaceBytes(100,100);
  glitch.randomBytes(1);
  glitch.buildImage();
  image(SomethingCreepy, innerWidth/2, innerHeight/2, innerWidth, innerHeight)
  image(glitch.image, innerWidth/2, innerHeight/2, innerWidth, innerHeight);
  textSize(36);
  text("ive been trying to get the glitch to work for two hours now and im done", 10, innerHeight/2)
  text("i was obviously unsucessful", 10, innerHeight/2+40);
}
