let x = 700;
let y = 250;
let radio = 120;

let audio;
let A;

function preload() {
  audio = loadSound('assets/audio/test.mp3');
  //audio.onended(END)
}

function setup() {
  createCanvas(windowWidth, windowHeight - 100);
  ellipseMode(RADIUS);
  background(204);

  audio.play();
  A = new p5.Amplitude();
  A.setInput(audio);
}

function draw() {

  ellipse(x, y, A.getLevel(), radio);
}







