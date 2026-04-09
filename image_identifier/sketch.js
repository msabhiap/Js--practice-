let classifier;
let video;
let label = "Waiting...";

function setup() {
  createCanvas(640, 480);
  // 1. Initialize the webcam
  video = createCapture(VIDEO);
  video.hide();

  // 2. Load the MobileNet model
  classifier = ml5.imageClassifier('MobileNet', video, modelReady);
}

function modelReady() {
  console.log('Model is ready!');
  classifyVideo();
}

function classifyVideo() {
  // 3. Start classifying the webcam feed
  classifier.classify(gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // 4. Update the label and classify again
  label = results[0].label;
  document.getElementById('result').innerText = `I think this is: ${label}`;
  classifyVideo(); 
}

function draw() {
  image(video, 0, 0); // Draw the webcam feed to the screen
}
function modelReady() {
  console.log('Model is ready!'); // If you don't see this, the model didn't download.
  classifyVideo();
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  
  // LOG THE RESULTS TO SEE THE RAW DATA
  console.log(results); 

  if (results && results[0]) {
    label = results[0].label;
    document.getElementById('result').innerText = `I think this is: ${label}`;
  }
  
  classifyVideo(); 
}