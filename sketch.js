

let audio;
let labelSize;
let sliderSize;

let labelRepeat;
let sliderRepeat;

function preload() {
  audio = loadSound('assets/audio/test.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight - 100);
	setupAudio();
  
  //audio.play();
  
  fill(150);
  noStroke();

  labelSize = createElement('label', 'Tamaño');
  sliderSize = createSlider(10,200, 47);

  labelRepeat = createElement('label', 'Repetición');
  sliderRepeat = createSlider(1,20, 1);
}

function draw() {
	updateAudio();
	background(255);

  // for(let i = 0; i < 1; i++) {

  // }

   
	for(let i = 0; i < sliderRepeat.value(); i++) {
    

		let freq = fft[i];
		let x = map(i, 0, fft.length, 0, width);
		let w = width / fft.length;
		//rect(x, height, w, -freq);    
    ellipse(sliderSize.value() * i, height/2, sliderSize.value() + freq, sliderSize.value() + freq)
	}


}

/* AUDIO INIT */
let mic, fftRaw, fft = [],
	waveform = [],
	amp = 0.0,
	ampStereo = {
		l: 0.0,
		r: 0.0
	},
	numBins = 512,
	bands = 12;

function setupAudio() {
	userStartAudio();
	mic = new p5.AudioIn();
	mic.start();
	fftRaw = new p5.FFT(0.75, numBins);
	fftRaw.setInput(mic);
}

function updateAudio() {
	fftRaw.analyze();
	amp = mic.getLevel() * 1000; // average mixed amplitude
	ampStereo.l = mic.amplitude.getLevel(0) * 500; // average left amplitude
	ampStereo.r = mic.amplitude.getLevel(1) * 500; // average right amplitude
	waveform = fftRaw.waveform(); // array (-1, 1)
	fft = fftRaw.logAverages(fftRaw.getOctaveBands(bands)); // array (0, 255)

}









