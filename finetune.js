
const classifier = knnClassifier.create();

let net;


const addExample = async (imgid, classId) => {
  console.log("\nadding...")
  
  const img = document.getElementById(imgid);
  const activation = net.infer(img, true);
  classifier.addExample(activation, classId);

  console.log("             DONE")
};



const birdornot = async(imgid) => {
  console.log("\npredicting...")

  const img = document.getElementById(imgid);  
  const activation = net.infer(img, 'conv_preds');
  const result = await classifier.predictClass(activation);

  const classes = ['Bird', 'Not Bird'];
  console.log("label", result.label)
  console.log("prediction: ", classes[result.label])
  console.log("probability: ", result.confidences[result.label])
}





const catordog = async(imgid) => {
  console.log("\npredicting...")

  const img = document.getElementById(imgid);  
  const activation = net.infer(img, 'conv_preds');
  const result = await classifier.predictClass(activation);

  const classes = ['Cat', 'Dog'];
  console.log("label", result.label)
  console.log("prediction: ", classes[result.label])
  console.log("probability: ", result.confidences[result.label])
}



async function app() {
  console.log('Loading mobilenet..');
  // Load the model.
  net = await mobilenet.load();
  console.log('Successfully loaded model');
}

app();
