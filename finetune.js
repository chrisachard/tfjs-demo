
const classifier = knnClassifier.create();

let net;


const addExample = async (imgid, classId) => {
  console.log("adding...")
  const img = document.getElementById(imgid);
  const activation = net.infer(img, true);
  classifier.addExample(activation, classId);
  console.log("DONE")
};

const catordog = async(imgid) => {
  console.log("predicting...")
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
