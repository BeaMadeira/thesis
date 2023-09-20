const data = require('./pallete.json');

console.log(data);
const video = document.getElementById('video')

const polygon = require('polygon-tools').polygon;
const Quadtree = require("quadtree-lib")

 
//initiate button start
const click_button = document.getElementById('start');

//initiate canvas
let canvas = document.getElementById('resultado');

let context = canvas.getContext('2d');

//initiate landmarks canvas
const canvaslandmarks = document.getElementById('landmarks');
const contextlandmarks = canvaslandmarks.getContext('2d');





//canvassrm
const canvassrm = document.getElementById("canvassrm");
canvassrm.width = video.width;
canvassrm.height = video.height;
const ctxsrm = canvassrm.getContext('2d');

//canvasdtm
const canvasdtm = document.getElementById("canvasdtm");
canvasdtm.width = video.width;
canvasdtm.height = video.height;
const ctxdtm = canvasdtm.getContext('2d');


//canvasgrad
const canvasgrad = document.getElementById("canvasgrad");
canvasgrad.width = video.width;
canvasgrad.height = video.height;
const ctxgrad = canvasgrad.getContext('2d');

//canvasllm
const canvasllm = document.getElementById("canvasllm");
canvasllm.width = video.width;
canvasllm.height = video.height;
const ctxllm = canvasllm.getContext('2d');

//canvastiles
const canvastiles = document.getElementById("canvastiles");
canvastiles.width = video.width;
canvastiles.height = video.height;
const ctxtiles = canvastiles.getContext('2d');

//canvasmask
const canvasmask = document.getElementById("canvasmask");
canvasmask.width = video.width;
canvasmask.height = video.height;
const ctxmask = canvasmask.getContext('2d');

//foreground
const canvasfg = document.getElementById("foreground");
canvasfg.width = video.width;
canvasfg.height = video.height;
const ctxfg = canvasfg.getContext('2d');


 
const canvas2 = document.getElementById("canvas2");
canvas2.width = 720;
canvas2.height = 540;
const ctx = canvas2.getContext('2d');
//--------------------------------parametros--------------------------------

let tSize ; //3 5 7 10
let mSize ; //3 5 7 10
let snakeSize ; //0 2 3 5 8
let espacamento ;// 10 4 3 2 1 0
let palete;

let cordx;
let cordy;
let cordMap;
let coordsX;
//llm retas variables
let rcordx;
let rcordy;
let rcordMap = [];
let rindex = 0;
let index = 0;
let dtM;
let dtMr;
let gM;
let LLM;
let LLMr;
let w = canvas2.width;
let h = canvas2.height;
let imageData;

let jawOutline;
let nose;
let mouth;
let leftEye;
let rightEye;
let leftEyeBbrow;
let rightEyeBrow;

let nose_copy;
let rightEye_copy;
let leftEyeBbrow_copy;
let rightEyeBrow_copy;
let jawOutline_copy;

let t6;
let t0=performance.now();
let t7;
let t8;

let polygons = [];
var quadtree = new Quadtree({
	width: canvas2.width,
	height: canvas2.height
})


const model_path = "https://mosaicphpv4.beamadeira.repl.co/models";
/* const model_path = currentURL + "\\..\\models";
 */Promise.all([
	faceapi.nets.tinyFaceDetector.loadFromUri(model_path),
	faceapi.nets.faceLandmark68Net.loadFromUri(model_path),
	faceapi.nets.faceRecognitionNet.loadFromUri(model_path),
	faceapi.nets.faceExpressionNet.loadFromUri(model_path)
]).then(startVideo)

function startVideo() {
	navigator.getUserMedia(
		{ video: {} },
		stream => video.srcObject = stream,
		err => console.error(err)
	)
}
let vezes = 1;
let resizedDetections = null;


initStart();
async function initStart(){
	const click_button = document.getElementById('tirarFotoButton');
	click_button.addEventListener('click', async () => {
		handleVideo();
	});

}

async function handleVideo() {
	try {
		const canvas = faceapi.createCanvasFromMedia(video);
    const videoGrid = document.getElementById("videoGrid");

    canvas.classList.add("canvas");
		videoGrid.appendChild(canvas);
    
		const displaySize = { width: video.width, height: video.height }
		faceapi.matchDimensions(canvas, displaySize)

		setInterval(async () => {
			try {
				const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()
				resizedDetections = faceapi.resizeResults(detections, displaySize)
				if (vezes >= 0) {
					//console.log(resizedDetections[0].landmarks._positions);
					vezes--;
				}
				canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
				//faceapi.draw.drawDetections(canvas, resizedDetections)
				faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
				//faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
			} catch (error) {
				//console.log("no face detected");
			}
		}, 200)
	} catch (error) {
		console.error("Error processing video:", error);
	  }
}

function cropCanvas(inputCanvas, outputCanvas, faceBox, landmarks, marginWidth = 0.05, marginHeight = 0.05) {
	// Get input and output contexts
	const outputCtx = outputCanvas.getContext('2d');

	// Get input dimensions
	const inputWidth = inputCanvas.width;
	const inputHeight = inputCanvas.height;

	// Calculate output dimensions (half of input)
	const x = 50;
	const outputWidth = x*9;
	const outputHeight = x*7;
	
	// Calculate the position of the face within the whole image
	let facePosition = {
		left: faceBox.topLeft.x,
		right: faceBox.topRight.x,
		top: faceBox.topLeft.y,
		bottom: faceBox.bottomLeft.y,
	};

	// Calculate how much to cut on each side while keeping the face in the frame
	let cutAmount = {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	};
	//First we get the square around the face from the face detections (ABCD). 
	//Then a margin is added to the sides of the square (marginx and marginy) retulting in a bigger square (A'B'C'D')
	//This square is then mapped in a new image with the same size as the original image adding black bars to the sides if needed.
	// Calculate the margin around the face box
	const marginX = faceBox.width * marginWidth;
	const marginY = faceBox.height * marginHeight;

	//colocar caixa maior para nao cortar a cara
	facePosition.left -= marginX;
	facePosition.right += marginX;
	facePosition.top -= marginY;
	facePosition.bottom += marginY;

	//console.log(faceBox);
	// // Draw the cropped image on the output canvas
	outputCtx.fillStyle = "black";
	outputCtx.fillRect(0, 0, outputCanvas.width, outputCanvas.height);
	let heightfinal=facePosition.bottom - facePosition.top;
	let widthfinal=facePosition.right - facePosition.left;
  
  let cdW=outputCanvas.width;
  let cdH=outputCanvas.height;
  console.log(cdW);
  console.log(cdH);
  let cdR = cdW/cdH;
  
  let rectX=facePosition.left;
  let rectY=facePosition.top;
  let rectW=facePosition.right - facePosition.left;
  let rectH=facePosition.bottom - facePosition.top;
  
  let rectR = rectW/rectH;
  let marginBarraV;
  let marginBarraH;
  
  if (rectR > cdR) {
    // barras horiz
    fS = cdW/rectW;
    
    marginBarraH = (cdH-(rectH*fS))/2;
    
    outputCtx.drawImage(inputCanvas, rectX, rectY, rectW, rectH, 0, marginBarraH, cdW, (rectH*fS) );
    
    
  } else  {
     // barras vert.
     
    fS = cdH/rectH;
    
    marginBarraV = (cdW-(rectW*fS))/2;
    
    outputCtx.drawImage(inputCanvas, rectX, rectY, rectW, rectH, marginBarraV, 0, (rectW*fS), (cdH ));
  }
  
  //x,y corresponds in the new canvas to marginBarraV, 0
  //translate polygons coordinates
  let newLandmarks = translateLandmarks(landmarks, facePosition.left, facePosition.top, fS, marginBarraV, marginBarraH,rectX,rectY,rectW,rectH,cdW,cdH);
  
  
  return newLandmarks;
  
}

function translateLandmarks(landmarks, left, top, fS, marginBarraV, marginBarraH,rectX,rectY,rectW,rectH,cdW,cdH) {
	let newLandmarks = [];
	
	// Convert jawOutline coordinates to new canvas coordinates
for (let i = 0; i < jawOutline.length; i++) {
  jawOutline[i]._x = marginBarraV + (jawOutline[i]._x - rectX) * (rectW * fS) / rectW;
  jawOutline[i]._y = (jawOutline[i]._y - rectY) * cdH / rectH;
}

// Convert leftEye coordinates to new canvas coordinates
for (let i = 0; i < leftEye.length; i++) {
  leftEye[i]._x = marginBarraV + (leftEye[i]._x - rectX) * (rectW * fS) / rectW;
  leftEye[i]._y = (leftEye[i]._y - rectY) * cdH / rectH;
}

// Convert rightEye coordinates to new canvas coordinates
for (let i = 0; i < rightEye.length; i++) {
  rightEye[i]._x = marginBarraV + (rightEye[i]._x - rectX) * (rectW * fS) / rectW;
  rightEye[i]._y = (rightEye[i]._y - rectY) * cdH / rectH;
}

// Convert nose coordinates to new canvas coordinates
for (let i = 0; i < nose.length; i++) {
  nose[i]._x = marginBarraV + (nose[i]._x - rectX) * (rectW * fS) / rectW;
  nose[i]._y = (nose[i]._y - rectY) * cdH / rectH;
}

// Convert mouth coordinates to new canvas coordinates
for (let i = 0; i < mouth.length; i++) {
  mouth[i]._x = marginBarraV + (mouth[i]._x - rectX) * (rectW * fS) / rectW;
  mouth[i]._y = (mouth[i]._y - rectY) * cdH / rectH;
}

// Convert leftEyeBbrow coordinates to new canvas coordinates
for (let i = 0; i < leftEyeBbrow.length; i++) {
  leftEyeBbrow[i]._x = marginBarraV + (leftEyeBbrow[i]._x - rectX) * (rectW * fS) / rectW;
  leftEyeBbrow[i]._y = (leftEyeBbrow[i]._y - rectY) * cdH / rectH;
}

// Convert rightEyeBrow coordinates to new canvas coordinates
for (let i = 0; i < rightEyeBrow.length; i++) {
  rightEyeBrow[i]._x = marginBarraV + (rightEyeBrow[i]._x - rectX) * (rectW * fS) / rectW;
  rightEyeBrow[i]._y = (rightEyeBrow[i]._y - rectY) * cdH / rectH;
}


	
	return newLandmarks;
}

function setCanvasToSize(width, height, ...canvas) {
	canvas.map((ele) => {
		//console.log(ele)
		ele.width = width;
		ele.height = height;
		//console.log(ele)
	})
}
let difSizes ;
let image_data;
let image_data_fg;
const progressBar = document.getElementsByClassName('progress-bar')[0];

function updateProgressBar(x) {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
  progressBar.style.setProperty('--width', width + x); // You can adjust the increment as needed
}
//algorithm starts-------------------------------------------------
let handleAlgorithm = function (selected) {

	//await videoPlayPromise;

  tSize=3;
  	mSize=5;
  	snakeSize=3;
  	espacamento=1;
    difSizes=false;
  console.log(selected);
  if(selected==1){
  	tSize=3;
  	mSize=5;
  	snakeSize=3;
  	espacamento=1;
    difSizes=false;
    console.log("entrou")
  }else if(selected==2){
    tSize=5;
  	mSize=5;
  	snakeSize=3;
  	espacamento=1;
      difSizes = true;

    console.log("entrou2")
  }else if(selected==3){
    tSize=5;
  	mSize=5;
  	snakeSize=3;
  	espacamento=2;
      difSizes = true;

    console.log("entrou3")
  }


	//console.log(mSize,espacamento,snakeSize, tSize);
	//transform detections into guidelines

	context.drawImage(video, 0, 0, canvas2.width, canvas2.height);
  try{
  	jawOutline = resizedDetections[0].landmarks.getJawOutline()
  	nose = resizedDetections[0].landmarks.getNose()
  	mouth = resizedDetections[0].landmarks.getMouth()
  	leftEye = resizedDetections[0].landmarks.getLeftEye()
  	rightEye = resizedDetections[0].landmarks.getRightEye()
  	leftEyeBbrow = resizedDetections[0].landmarks.getLeftEyeBrow()
  	rightEyeBrow = resizedDetections[0].landmarks.getRightEyeBrow()
  }catch{
    //refresh php page
    location = location.href;
  }

	cropCanvas(canvas, canvas2, resizedDetections[0].detection.box, resizedDetections[0].landmarks._positions, 0.3, 0.5);
  
  const animation = document.getElementById('anim');
  animation.style.display = "";
  const bar = document.getElementById('bar');
  bar.removeAttribute("hidden");
  const progressBar = document.getElementsByClassName('progress-bar')[0]

  
  let computedStyle = getComputedStyle(progressBar)
  let width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + .1)

  
  setTimeout(function(){
  
    //hide video
                
            
    
  //get elementbyid e draw image na canvas showcrop e ver se aparece
  
    
  	canvas = canvas2;
  	context = ctx;
  
    
    //add progress bar
    //atualizar progress bar ao longo do algoritmo
  
  	imageData = context.getImageData(0, 0, canvas2.width, canvas2.height);
  
  	image_data_url = canvas2.toDataURL('image/jpeg');
  
  
  	//let landmarkPositions = resizedDetections[0].landmarks._positions;
  
  	// or get the positions of individual contours,
  	// only available for 68 point face ladnamrks (FaceLandmarks68)
  
  	let jawOutline2 = [];
  
  	//convert jawoutline coordinates ._x ._y to x y
  	for (let i = 0; i < jawOutline.length; i++) {
  		jawOutline2.push([jawOutline[i]._x, jawOutline[i]._y]);
  	}
  
  
  	//-------------------snakesize------------------------------------------------------
  	//scale jawOutline using polygonScale function
  	//(2*tSize)-(2*0.85))/(2*tSize) 
  	//2--->4
  	//3--->
  
  	//(2 * tSize + (2 * (snakeSize)))) / (2 * tSize)
  	jawOutline2 = geometric.polygonScale(jawOutline2, (1+((2*tSize*(2*(snakeSize-1))))/100));
  
  
  	//convert jawoutline coordinates x y to ._x ._y
  	for (let i = 0; i < jawOutline.length; i++) {
  		jawOutline[i]._x = jawOutline2[i][0];
  		jawOutline[i]._y = jawOutline2[i][1];
  	}
  
  	/* canvaslandmarks.width = canvas2.width;
  	canvaslandmarks.height = canvas2.height;
  	canvasfg.width = canvas2.width;
  	canvasfg.height = canvas2.height; */
  
  	//draw consts in canvas
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(jawOutline[0]._x, jawOutline[0]._y);
  	ctxfg.moveTo(jawOutline[0]._x, jawOutline[0]._y);
  	for (let i = 1; i < jawOutline.length; i++) {
  		contextlandmarks.lineTo(jawOutline[i]._x, jawOutline[i]._y);
  		ctxfg.lineTo(jawOutline[i]._x, jawOutline[i]._y);
  
  	}
  	//draw arc that connects the last point to the first
  	let aux = mediumPoint(jawOutline[16]._x, jawOutline[16]._y, jawOutline[0]._x, jawOutline[0]._y)
  	contextlandmarks.arc(aux[0], aux[1],
  		euclideanDistance(jawOutline[16]._x, jawOutline[16]._y, jawOutline[0]._x, jawOutline[0]._y) / 2,
  		0, 3, true);
  	ctxfg.arc(aux[0], aux[1],
  		euclideanDistance(jawOutline[16]._x, jawOutline[16]._y, jawOutline[0]._x, jawOutline[0]._y) / 2,
  		0, 3, true);
  
  
  
  
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "red";
  	ctxfg.fill();
  
  	let newnose = [];
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(nose[0]._x, nose[0]._y);
  	ctxfg.moveTo(nose[0]._x, nose[0]._y);
  	newnose.push([nose[0]._x, nose[0]._y]);
  	for (let i = 4; i < nose.length; i++) {
  		contextlandmarks.lineTo(nose[i]._x, nose[i]._y);
  		ctxfg.lineTo(nose[i]._x, nose[i]._y);
  		newnose.push([nose[i]._x, nose[i]._y]);
  	}
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "blue";
  	ctxfg.fill();
  
  
  	let newmouth = [];
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(mouth[0]._x, mouth[0]._y);
  	ctxfg.moveTo(mouth[0]._x, mouth[0]._y);
  	newmouth.push([mouth[0]._x, mouth[0]._y]);
  	for (let i = 1; i < 13; i++) {
  		contextlandmarks.lineTo(mouth[i]._x, mouth[i]._y);
  		ctxfg.lineTo(mouth[i]._x, mouth[i]._y);
  		newmouth.push([mouth[i]._x, mouth[i]._y]);
  	}
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "blue";
  	ctxfg.fill();
  
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(leftEye[0]._x, leftEye[0]._y);
  	ctxfg.moveTo(leftEye[0]._x, leftEye[0]._y);
  	for (let i = 1; i < leftEye.length; i++) {
  		contextlandmarks.lineTo(leftEye[i]._x, leftEye[i]._y);
  		ctxfg.lineTo(leftEye[i]._x, leftEye[i]._y);
  	}
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "blue";
  	ctxfg.fill();
  
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(rightEye[0]._x, rightEye[0]._y);
  	ctxfg.moveTo(rightEye[0]._x, rightEye[0]._y);
  	for (let i = 1; i < rightEye.length; i++) {
  		contextlandmarks.lineTo(rightEye[i]._x, rightEye[i]._y);
  		ctxfg.lineTo(rightEye[i]._x, rightEye[i]._y);
  	}
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "blue";
  	ctxfg.fill();
  
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(leftEyeBbrow[0]._x, leftEyeBbrow[0]._y);
  	ctxfg.moveTo(leftEyeBbrow[0]._x, leftEyeBbrow[0]._y);
  	for (let i = 1; i < leftEyeBbrow.length; i++) {
  		contextlandmarks.lineTo(leftEyeBbrow[i]._x, leftEyeBbrow[i]._y);
  		ctxfg.lineTo(leftEyeBbrow[i]._x, leftEyeBbrow[i]._y);
  	}
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "blue";
  	ctxfg.fill();
  
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(rightEyeBrow[0]._x, rightEyeBrow[0]._y);
  	ctxfg.moveTo(rightEyeBrow[0]._x, rightEyeBrow[0]._y);
  	for (let i = 1; i < rightEyeBrow.length; i++) {
  		contextlandmarks.lineTo(rightEyeBrow[i]._x, rightEyeBrow[i]._y);
  		ctxfg.lineTo(rightEyeBrow[i]._x, rightEyeBrow[i]._y);
  	}
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "blue";
  	ctxfg.fill();
  
  	//get image data
   image_data = contextlandmarks.getImageData(0, 0, canvas2.width, canvas2.height);
  	 image_data_fg = ctxfg.getImageData(0, 0, canvas2.width, canvas2.height);
  	
  	leftEye_copy = transformCoordinates(leftEye);
  	rightEye_copy = transformCoordinates(rightEye);
  	leftEyeBbrow_copy = transformCoordinates(leftEyeBbrow);
  	rightEyeBrow_copy = transformCoordinates(rightEyeBrow);
  	jawOutline_copy = transformCoordinates(jawOutline);
  
  	console.log(newnose);
  	let centroid = geometric.polygonCentroid(newnose);
  	console.log(centroid);
  	let bounds = geometric.polygonBounds(newnose);
  	console.log(bounds);
  	let bound_a = bounds[0];
  	let bound_b = bounds[1];
  	//guidelines na quadtree e nos polygons
  	polygons.push(newnose);
  	cores.push([null, null, null, null]);
  
  	quadtree.push({
  		x: centroid[0],      //Mandatory
  		y: centroid[1],      //Mandatory
  		width: Math.abs(bound_b[0] - bound_a[0]),   //Optional, defaults to 1
  		height: Math.abs(bound_a[1] - bound_b[1]),  //Optional, defaults to 1
  		points: newnose,
  		index: polygons.length - 1
  	}, true)
  
  
  
  	centroid = geometric.polygonCentroid(newmouth);
  	polygons.push(newmouth);
  	cores.push([null, null, null, null]);
  	bounds = geometric.polygonBounds(newmouth);
  	bound_a = bounds[0];
  	bound_b = bounds[1];
  	quadtree.push({
  		x: centroid[0],      //Mandatory
  		y: centroid[1],      //Mandatory
  		width: Math.abs(bound_b[0] - bound_a[0]),   //Optional, defaults to 1
  		height: Math.abs(bound_a[1] - bound_b[1]),  //Optional, defaults to 1
  		points: newmouth,
  		index: polygons.length - 1
  	}, true)
  
  	centroid = geometric.polygonCentroid(leftEye_copy);
  	polygons.push(leftEye_copy);
  	cores.push([null, null, null, null]);
  	bounds = geometric.polygonBounds(leftEye_copy);
  	bound_a = bounds[0];
  	bound_b = bounds[1];
  	quadtree.push({
  		x: centroid[0],      //Mandatory
  		y: centroid[1],      //Mandatory
  		width: Math.abs(bound_b[0] - bound_a[0]),   //Optional, defaults to 1
  		height: Math.abs(bound_a[1] - bound_b[1]),  //Optional, defaults to 1
  		points: leftEye_copy,
  		index: polygons.length - 1
  	}, true)
  
  
  
  	centroid = geometric.polygonCentroid(rightEye_copy);
  	polygons.push(rightEye_copy);
  	cores.push([null, null, null, null]);
  	bounds = geometric.polygonBounds(rightEye_copy);
  	bound_a = bounds[0];
  	bound_b = bounds[1];
  	quadtree.push({
  		x: centroid[0],      //Mandatory
  		y: centroid[1],      //Mandatory
  		width: Math.abs(bound_b[0] - bound_a[0]),   //Optional, defaults to 1
  		height: Math.abs(bound_a[1] - bound_b[1]),  //Optional, defaults to 1
  		points: rightEye_copy,
  		index: polygons.length - 1
  	}, true)
  
  
  	centroid = geometric.polygonCentroid(leftEyeBbrow_copy);
  	polygons.push(leftEyeBbrow_copy);
  	cores.push([null, null, null, null]);
  	bounds = geometric.polygonBounds(leftEyeBbrow_copy);
  	bound_a = bounds[0];
  	bound_b = bounds[1];
  	quadtree.push({
  		x: centroid[0],      //Mandatory
  		y: centroid[1],      //Mandatory
  		width: Math.abs(bound_b[0] - bound_a[0]),   //Optional, defaults to 1
  		height: Math.abs(bound_a[1] - bound_b[1]),  //Optional, defaults to 1
  		points: leftEyeBbrow_copy,
  		index: polygons.length - 1
  	}, true)
  
  
  	centroid = geometric.polygonCentroid(rightEyeBrow_copy);
  	polygons.push(rightEyeBrow_copy);
  	cores.push([null, null, null, null]);
  	bounds = geometric.polygonBounds(rightEyeBrow_copy);
  	bound_a = bounds[0];
  	bound_b = bounds[1];
  	quadtree.push({
  		x: centroid[0],      //Mandatory
  		y: centroid[1],      //Mandatory
  		width: Math.abs(bound_b[0] - bound_a[0]),   //Optional, defaults to 1
  		height: Math.abs(bound_a[1] - bound_b[1]),  //Optional, defaults to 1
  		points: rightEyeBrow_copy,
  		index: polygons.length - 1
  	}, true)
  
  	//polygons.push(jawOutline_copy);
  
  	//function to work on guidelines, that is, cordmap[i][j] = 1 if image_data[i][j] is red, else 0
  	//Start measuring time
  },0);
    
      updateProgressBar(10)
      
      setTimeout(function(){

  		initializeGuidelines(image_data.data, canvas2.width, canvas2.height);
  		//End measuring time of initializeGuidelines
  		let t1 = performance.now();
  		//console.log("Call to initializeGuidelines took " + (t1 - t0) + " milliseconds.")
  		drawCordMap(canvas2.width, canvas2.height);
  		//End measuring time of drawGuideLines
  		let t2 = performance.now();
  		//console.log("Call to drawGuideLines took " + (t2 - t1) + " milliseconds.")
        
  		calculatedtM(coordsX, w, h)
  		calculatedtMr(rcordx, w, h)
  		//End measuring time of calculatedtM
  		let t3 = performance.now();
  		//console.log("Call to calculatedtM took " + (t3 - t2) + " milliseconds.")
        updateProgressBar(20)

         },0);
    
      
      
      setTimeout(function(){
  		calculategM(dtM, w, h)
  		//End measuring time of calculategM
  		let t4 = performance.now();
  		//console.log("Call to calculategM took " + (t4 - t3) + " milliseconds.")
  		calculateLLM(dtM, tSize, w, h, image_data_fg)
  		//End measuring time of calculateLLM
  		let t5 = performance.now();
  		//console.log("Call to calculateLLM took " + (t5 - t4) + " milliseconds.")
  		drawLLM(LLMr, w, h)
  		//End measuring time of drawLLM
  		t6 = performance.now();
  		//console.log("Call to drawLLM took " + (t6 - t5) + " milliseconds.")
  		drawTiles3(gM, w, h, tSize,image_data_fg);
  		//End measuring time of drawTiles3
  		
  /* 		console.log("end");
  		console.log("guidelines,crop,facedetection", (t1 - t0)+(t2 - t1));
  		console.log("matrices",(t3 - t2) +(t4 - t3)+(t5 - t4)+(t6 - t5));
  		console.log("generate tiles",(t7 - t6));
  		console.log("cut tiles",(t8 - t7));
  		console.log("color tiles",(t10 - t8));
  		console.log("total",(t10 - t0));
  		console.log("poly",polygons.length); */
  	//drawTriangles(gM,w,h);
  },0);
};

//function to calculate euclidean distance between two points
function euclideanDistance(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

//function to calculate the medium point between two points
function mediumPoint(x1, y1, x2, y2) {

	return [(x1 + x2) / 2, (y1 + y2) / 2];
}

function initializeGuidelines(image_data, w, h) {

	cordx = [];
	cordy = [];
	cordMap = [];
	index = 0;

	//llm retas variables
	rcordx = [];
	rcordy = [];
	rcordMap = [];
	rindex = 0;

	//iterate through image data and find red pixels



	for (let i = 0; i < h; i++) {
		cordMap[i] = new Array(w)
		rcordMap[i] = new Array(w)

		for (let j = 0; j < w; j++) {
			//check if is not guideline pixel
			//if imagedata[i][j] is red, then image_data[i][j] = 255
			if (i == 0 || j == 0 || i == h - 1 || j == w - 1) {
				rcordMap[i][j] = 1;
				rcordx[rindex] = i;
				rcordy[rindex] = j;

				rindex++;
				cordMap[i][j] = 0;
				/*  cordx[index] = i;
				 cordy[index] = j;
				 index++; */
			} else if (image_data[(((i * w) + j) * 4)] == 255 && image_data[(((i * w) + j) * 4) + 1] == 0 && image_data[(((i * w) + j) * 4) + 2] == 0) {
				cordMap[i][j] = 1;
				cordx[index] = i;
				cordy[index] = j;
				index++;
			} else {
				cordMap[i][j] = 0;
				rcordMap[i][j] = 0;

			}
		}
	}
	//console.log(rcordx, rcordy);
}

//function to draw cordmap
function drawCordMap(w, h) {
	let guidelineImageData = new Uint8ClampedArray(w * h * 4)

	for (let i = 0; i < rcordx.length; i++) {
		let guidex = rcordx[i];
		let guidey = rcordy[i];
		guidelineImageData[((guidex * w) + guidey) * 4] = 0;
		guidelineImageData[(((guidex * w) + guidey) * 4) + 1] = 0;
		guidelineImageData[(((guidex * w) + guidey) * 4) + 2] = 0;
		guidelineImageData[(((guidex * w) + guidey) * 4) + 3] = 255;
	}
	//console.log(guidelineImageData)
	const newImageData = new ImageData(guidelineImageData, w, h);
	ctxsrm.putImageData(newImageData, 0, 0);
}

//--------------------calculate dtM--------------------

function calculatedtM(coordsX, w, h) {
	//calculate the minimum distance between the pixels in the image and the guidelines
	dtM = new Array(h);
	for (let i = 0; i < h; i++) {
   
		dtM[i] = new Array(w)
		for (let j = 0; j < w; j++) {
      

			dtM[i][j] = Math.floor(getMinDistance(i, j, coordsX, h, w))
		}
     
    
      
     
	}
	//console.log(dtM)
	for (let i = 0; i < h; i = i + 10) {
		for (let j = 0; j < w; j = j + 10) {
			if (dtM[i][j] != 0) {
				ctxdtm.font = "6px serif";
				ctxdtm.fillText(Math.round(dtM[i][j]), j, i);
			}
		}
	}
	//console.log("dtm", dtM)




}

function calculatedtMr(rcordx, w, h) {
	dtMr = new Array(h);
	for (let i = 0; i < h; i++) {
		dtMr[i] = new Array(w)
		for (let j = 0; j < w; j++) {
			dtMr[i][j] = Math.floor(mindistretas(i, j, coordsX, h, w))
		}
	}

	//console.log("dtmr", dtMr)
}

function mindistretas(x, y, coordsX, h, w) {

	//euclidian dinstance between  pixel 0,0 and pixel h-1,w-1
	let minDistance = Math.pow((h), 2) + Math.pow((w), 2)

	//iterate over cordsX and cordsY and check the distance between the pixel and that guideline
	for (let i = 0; i < rcordx.length; i++) {
		//calculate the distance between the pixel and the guideline
		let distance = Math.pow((x - rcordx[i]), 2) + Math.pow((y - rcordy[i]), 2)
		//minDistance = (distance < minDistance ) * distance + (distance >= minDistance) * minDistance;
		if (distance < minDistance) {
			minDistance = distance
		}
	}
	return Math.sqrt(minDistance)
}

function getMinDistance(x, y, coordsX, h, w) {

	//euclidian dinstance between  pixel 0,0 and pixel h-1,w-1
	let minDistance = Math.pow((h), 2) + Math.pow((w), 2)

	//iterate over cordsX and cordsY and check the distance between the pixel and that guideline
	for (let i = 0; i < cordx.length; i++) {
		//calculate the distance between the pixel and the guideline
		let distance = Math.pow((x - cordx[i]), 2) + Math.pow((y - cordy[i]), 2)
		//minDistance = (distance < minDistance ) * distance + (distance >= minDistance) * minDistance;
		if (distance < minDistance) {
			minDistance = distance
		}
	}
	return Math.sqrt(minDistance)
}

//--------------------calculate gM--------------------
let gMr;
function calculategM(dtM, w, h) {
	//declare gM
	gM = new Array(h);
	for (let i = 0; i < h; i++) {
		gM[i] = new Array(w)
		for (let j = 0; j < w; j++) {
			//check if the indices are within the bounds of dtM before accessing them
			if (i > 0 && i < h - 1 && j > 0 && j < w - 1) {
				//get calc dtM[i][j+1]-dtM[i][j-1]
				let calc = (dtM[i][j + 1] - dtM[i][j - 1])
				//get calc dtM[i+1][j]-dtM[i-1][j]
				let calc2 = (dtM[i + 1][j] - dtM[i - 1][j])
				//get the arctan of the division
				gM[i][j] = Math.atan(calc2 / calc)
				//gM[i][j] = (Math.atan2(calc, calc2) % (2 * Math.PI))

			} else {  //set to nan if indices are out of bounds 
				gM[i][j] = NaN;
			}
		}
	}
	//console.log(gM)
	//drawgM(gM, w, h)
	drawTriangles(gM, w, h);

	gMr = new Array(h);
	for (let i = 0; i < h; i++) {
		gMr[i] = new Array(w)
		for (let j = 0; j < w; j++) {
			//check if the indices are within the bounds of dtM before accessing them
			if (i > 0 && i < h - 1 && j > 0 && j < w - 1) {
				//get calc dtM[i][j+1]-dtM[i][j-1]
				let calc = (dtMr[i][j + 1] - dtMr[i][j - 1])
				//get calc dtMr[i+1][j]-dtMr[i-1][j]
				let calc2 = (dtMr[i + 1][j] - dtMr[i - 1][j])
				//get the arctan of the division
				gMr[i][j] = Math.atan(calc2 / calc)
				//gMr[i][j] = (Math.atan2(calc, calc2) % (2 * Math.PI))

			} else {  //set to nan if indices are out of bounds 
				gMr[i][j] = NaN;
			}
		}
	}

}

function drawTriangles(gM, w, h) {
	//draw the triangles usind drawShape and gM matrix
	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			//check if is not guideline pixel
			if (gM[i][j] != undefined && gM[i][j] != null && !isNaN(gM[i][j])) {
				//draw the shape
				ctxgrad.save();
				ctxgrad.translate(j, i);
				//ctxgrad.rotate(90+45);
				ctxgrad.rotate(gM[i][j]);
				//ctxgrad.font = "6px Arial";
				//ctxgrad.strokeText((Math.round((gM[i][j] + Number.EPSILON) * 1000) / 1000) + "", 0, 0);
				drawShape(5);
				ctxgrad.restore();
			}
			j = j + tSize + 1;
		}
		i = i + tSize + 1;
	}
}

function drawShape(radius) {
	ctxgrad.beginPath();
	ctxgrad.save();
	ctxgrad.translate(1, radius);
	ctxgrad.moveTo(0, 0);
	ctxgrad.lineTo(0, 0 - radius);
	ctxgrad.rotate(Math.PI / 6);
	ctxgrad.lineTo(0, 0 - radius);
	ctxgrad.rotate(Math.PI / 6);
	ctxgrad.restore();
	ctxgrad.fill();
	ctxgrad.closePath();
	ctxgrad.stroke();


}

//--------------------calculate LLM--------------------

function calculateLLM(dtM, tSize, w, h, image_data_fg) {
	//declare LLM cara
	LLM = new Array(h);
	let aux_size = tSize;
	for (let i = 0; i < h; i++) {
		LLM[i] = new Array(w)
		for (let j = 0; j < w; j++) {

			//if [i][j] inside mouth nose or eyes (if its blue) then use math.floor(tSize/2)
      if(difSizes==true){
  			if (image_data_fg.data[(i * w + j) * 4 + 2] == 255) {
  				aux_size = Math.floor(tSize * 0.60);
  			} else {
  				aux_size = tSize;
  			}  
      }else{
        aux_size = tSize;
      }
			//if module of dtm(i,j) , 2*tSize is 0 then LLM(i,j) = 1
			if (dtM[i][j] % (2 * aux_size) == 0) {
				LLM[i][j] = 1
			} else //if module of dtm(i,j), 2*aux_size is equal to aux_size then LLM(i,j) = 2
				if (dtM[i][j] % (2 * aux_size) == aux_size) {
					LLM[i][j] = 2
				} else { //LLM(i,j) = 0
					LLM[i][j] = 0;
				}
		}
	}


	//llm linhas retas 
	//calc dtm p linhas retas
	//calc llm p linhas retas
	LLMr = new Array(h);

	for (let i = 0; i < h; i++) {
		LLMr[i] = new Array(w)
		for (let j = 0; j < w; j++) {
			//if module of dtm(i,j) , 2*tSize is 0 then LLMr(i,j) = 1
			if (dtMr[i][j] % (2 * tSize) == 0) {
				LLMr[i][j] = 1
			} else //if module of dtmr(i,j), 2*tSize is equal to tSize then LLMr(i,j) = 2
				if (dtMr[i][j] % (2 * tSize) == tSize) {
					LLMr[i][j] = 2
				} else { //LLMr(i,j) = 0
					LLMr[i][j] = 0;
				}
		}
	}
	//scale poligon cara  

	//juntar llms
	//if llm retas point is inside poligons da cara substituir por llm cara
	//if imagedata is red, llmr[i][j] =llm[i][j]
	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			r = image_data_fg.data[(i * w + j) * 4]; // red value
			g = image_data_fg.data[(i * w + j) * 4 + 1]; // green value
			b = image_data_fg.data[(i * w + j) * 4 + 2]; // blue value (set to 0)
			a = image_data_fg.data[(i * w + j) * 4 + 3]; // alpha value (set to 255)

			if (r == 255 || b == 255) {
				LLMr[i][j] = LLM[i][j]
				gMr[i][j] = gM[i][j]
			}
		}
	}

	//switch llmr and llm
	LLM = LLMr;
	gM = gMr;


}

function drawLLM(LLM, w, h) {
	//draw the LLM on the canvas knowing that the value 1 is black and the value 2 is green 
	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			if (LLM[i][j] == 1) {
				ctxllm.fillStyle = 'black'
				ctxllm.fillRect(j, i, 1, 1)
				/* ctxmask.fillStyle = 'black'
				ctxmask.fillRect(j, i, 1, 1) */
				//ctxtiles.fillStyle = 'red'
				//ctxtiles.fillRect(j, i, 1, 1)
			} else if (LLM[i][j] == 2) {
				ctxllm.fillStyle = 'green'
				ctxllm.fillRect(j, i, 1, 1)
				//ctxtiles.fillStyle = 'green'
				//ctxtiles.fillRect(j, i, 1, 1)
			} else {
				ctxllm.fillStyle = 'white'
				ctxllm.fillRect(j, i, 1, 1)
			}
		}
	}
}

let coordinates = [];

let cores = [];
function drawSquare(gM, tSize, i, j, h, w, image_data_fg) {

	ctxtiles.save();
	ctxtiles.beginPath();
	// move the rotation point to the center of the rect
	ctxtiles.translate(j, i);
	ctxtiles.rotate(gM[i][j]);

 if(difSizes==true){
  	  if (image_data_fg.data[(i * w + j) * 4 + 2] == 255) {
		aux_size = Math.floor(tSize * 0.60);
	} else {
		aux_size = tSize;
	}
	tSize = aux_size;
	mSize = aux_size;    
 }

	ctxtiles.translate(tSize, mSize);
	// draw the rect on the transformed context
	// Note: after transforming [0,0] is visually [x,y]
	//       so the rect needs to be offset accordingly when drawn
	//    ctxtiles.fillStyle = "black";
	r = imageData.data[(i * w + j) * 4]; // red value
	g = imageData.data[(i * w + j) * 4 + 1]; // green value
	b = imageData.data[(i * w + j) * 4 + 2]; // blue value (set to 0)
	a = imageData.data[(i * w + j) * 4 + 3]; // alpha value (set to 255)
	ctxtiles.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
	//console.log(ctxtiles.fillStyle)
	ctxtiles.fillRect(-tSize * 2, -mSize * 2, tSize * 2, mSize * 2);
	// restore the context to its untranslated/unrotated state
	ctxtiles.restore();

	//calculate 4 vertices of square centered in i,j and with side 2*tSize
	let angle = gM[i][j];
	if (isNaN(angle))
		angle = 0;
	let Cx = j, Cy = i;
	let dot1 = [Cx - tSize, Cy - mSize];
	let dot2 = [Cx - tSize, Cy + mSize];
	let dot3 = [Cx + tSize, Cy + mSize];
	let dot4 = [Cx + tSize, Cy - mSize];
	let rotatedPoints = [
		[
			Math.cos(angle) * (dot1[0] - Cx) - Math.sin(angle) * (dot1[1] - Cy) + Cx,
			Math.sin(angle) * (dot1[0] - Cx) + Math.cos(angle) * (dot1[1] - Cy) + Cy
		], [
			Math.cos(angle) * (dot2[0] - Cx) - Math.sin(angle) * (dot2[1] - Cy) + Cx,
			Math.sin(angle) * (dot2[0] - Cx) + Math.cos(angle) * (dot2[1] - Cy) + Cy
		], [
			Math.cos(angle) * (dot3[0] - Cx) - Math.sin(angle) * (dot3[1] - Cy) + Cx,
			Math.sin(angle) * (dot3[0] - Cx) + Math.cos(angle) * (dot3[1] - Cy) + Cy
		], [
			Math.cos(angle) * (dot4[0] - Cx) - Math.sin(angle) * (dot4[1] - Cy) + Cx,
			Math.sin(angle) * (dot4[0] - Cx) + Math.cos(angle) * (dot4[1] - Cy) + Cy
		]
	]


	//instead of drawing the square, save it in a matrix as a list of points(polygon) 
	/* let Px = Math.cos(angle) * (j - Cx) - Math.sin(angle) * (i - Cy) + Cx;
	let Py = Math.sin(angle) * (j - Cx) + Math.cos(angle) * (i - Cy) + Cy; */
	//console.log("points", [dot1, dot2, dot3, dot4], "rotatedPoints", rotatedPoints, i, j, angle)

	// add rotated points to polygons array
	polygons.push(rotatedPoints);
	cores.push([r, g, b, a]);

	quadtree.push({
		x: Cx,      //Mandatory
		y: Cy,      //Mandatory
		width: tSize * 3,   //Optional, defaults to 1
		height: mSize * 3,  //Optional, defaults to 1
		points: rotatedPoints,
		index: polygons.length - 1
	}, true) //Optional, defaults to false

	/* if (asjdnask > 0) {
		checkoverlaps(i, j, tSize, h,  ;
	}
	asjdnask--; */



}


function checksquare(i, j, Cx, Cy, Rx, Ry) {
	let pertence = false;

	//check if the point ij is inside the drawn square
	let Vy, Vx;

	/* Px=j;
	Py=i; */

	/*  console.log("gm",Cx,Cy);
	 console.log("gmlength",gM.length,"gM[0]length",gM[0].length);
	 console.log("CXCY GM",gM[Cy][Cx]); */
	let angle = gM[Cy][Cx] * (Math.PI / 180);
	//apply angle rotation to point ij
	let Px = Math.cos(angle) * (j - Cx) - Math.sin(angle) * (i - Cy) + Cx;
	let Py = Math.sin(angle) * (j - Cx) + Math.cos(angle) * (i - Cy) + Cy;
	//distance between the center of the square and the point Px,Py
	let dist = Math.sqrt(Math.pow(Cx - Px, 2) + Math.pow(Cy - Py, 2));

	if (dist <= Rx[0] && dist <= Ry[1]) {
		//console.log(i,j,Vx[0] <= Rx[0] && Vy[1] <= Ry[1],Vx,Vy,Rx,Ry,Cx,Cy)
		LLM[i][j] = 3;
		//console.log("llmcheck", i, j);

		if (i - 1 >= 0) {
			//check pixel on the top
			if (LLM[i - 1][j] == 2) {
				checksquare(i - 1, j, Cx, Cy, Rx, Ry);
			}
		}
		if (i - 1 >= 0 && j + 1 < LLM[0].length) {
			//check pixel on the top right
			if (LLM[i - 1][j + 1] == 2) {
				checksquare(i - 1, j + 1, Cx, Cy, Rx, Ry);
			}
		}
		//check pixel on the right
		if (j + 1 < LLM[0].length) {
			if (LLM[i][j + 1] == 2) {
				checksquare(i, j + 1, Cx, Cy, Rx, Ry);
			}
		}
		if (i + 1 < LLM.length && j + 1 < LLM[0].length) {
			//check pixel on the bottom right
			if (LLM[i + 1][j + 1] == 2) {
				checksquare(i + 1, j + 1, Cx, Cy, Rx, Ry);
			}
		}
		if (i + 1 < LLM.length) {
			//check pixel on the bottom
			if (LLM[i + 1][j] == 2) {
				checksquare(i + 1, j, Cx, Cy, Rx, Ry);
			}
		}
		if (i + 1 < LLM.length && j - 1 >= 0) {
			//check pixel on the bottom left
			if (LLM[i + 1][j - 1] == 2) {
				checksquare(i + 1, j - 1, Cx, Cy, Rx, Ry);
			}
		}

		if (j - 1 >= 0) {
			//check pixel on the left
			if (LLM[i][j - 1] == 2) {
				checksquare(i, j - 1, Cx, Cy, Rx, Ry);
			}
		}
		if (i - 1 >= 0 && j - 1 >= 0) {
			//check pixel on the top left
			if (LLM[i - 1][j - 1] == 2) {
				checksquare(i - 1, j - 1, Cx, Cy, Rx, Ry);
			}
		}


	} else {
		return;
	}

}

const swapElements = function (array, index1, index2) {
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
	return array;
};


let polyEqualsPoly = function (poly_a, poly_b) {
	//make sure poly_a and poly_b are not the same points and are both defined
	if (poly_a == undefined || poly_b == undefined) { return undefined }
	else if (poly_a.length != poly_b.length) { return false; }
	else if (poly_a.length == poly_b.length) {
		let equal = true;
		for (let i = 0; i < poly_a.length; i++) {
			if (poly_a[i][0] != poly_b[i][0] || poly_a[i][1] != poly_b[i][1]) {
				equal = false;
				break;
			}
		}
		return equal;
	}
	else { return false; }
}
//make sure poly_a and poly_b are not the same points
let intersectionPolygon = function (polygon_a, polygon_b) { return polygon.intersection(polygon_a, polygon_b) };


let point_prints = 20;
let intersection_prints = 20;
let lines_prints = 20;
let intersectionLine = function (polygon_a, polygon_b, inter_poly) {

	//if it's not defined, it means that the polygons don't intersect so we can return an empty array
	if (inter_poly == undefined) { return []; }
	let linePoints = [];
	let EPSILON = 0.00001;

	//check if interpoly is bigger than 2 points
	if (inter_poly.length <= 2) return [];

	for (let point of inter_poly) {
		//check if point is on both polygons at the same time	
		let intersects = geometric.pointOnPolygon(point, polygon_a, EPSILON) && geometric.pointOnPolygon(point, polygon_b, EPSILON);
		if (intersects) {
			linePoints.push(point);
		}
	}
	if (lines_prints > 0) {
		// console.log("linePoints", linePoints);
		lines_prints--;
	}
	if (linePoints.length == 0 || linePoints.length > 2 || linePoints == undefined) return [];

	return linePoints;
}
let cutSquareByLine = function (intline, polygon_a, polygon_b, inter_poly, new_poly, EPSILON) {

	for (let i = 0; i < polygon_a.length; i++) {
		let vertice_a = polygon_a[i];
		let vertice_b = polygon_a[(i + 1) % polygon_a.length];

		let line = [vertice_a, vertice_b];
		//verify if if intline[0] is in line [a,b] using geometric.pointOnLine
		let onLine1 = geometric.pointOnLine(intline[0], line, EPSILON);
		let onLine2 = geometric.pointOnLine(intline[1], line, EPSILON);

		if ((onLine1 && !onLine2 && !geometric.pointInPolygon(vertice_a, polygon_b, EPSILON))) {
			//add vertice_a and intline points to new_poly_a
			new_poly.push(vertice_a);
			new_poly.push(intline[0]);
			new_poly.push(intline[1]);
		} else if (!onLine1 && onLine2 && !geometric.pointInPolygon(vertice_a, polygon_b, EPSILON)) {
			//add vertice_a and intline points to new_poly
			new_poly.push(vertice_a);
			new_poly.push(intline[1]);
			new_poly.push(intline[0]);
		} else if (!geometric.pointInPolygon(vertice_a, polygon_b, EPSILON)) {
			new_poly.push(vertice_a);
		}

	}
	return new_poly;
}


let cutSquaresByLine = function (intline, polygon_a, polygon_b, inter_poly) {
	let EPSILON = 0.1;

	//console.log("polygon a e b",polygon_a, polygon_b)

	let new_poly_a = cutSquareByLine(intline, polygon_a, polygon_b, inter_poly, [], EPSILON);
	let new_poly_b = cutSquareByLine(intline, polygon_b, polygon_a, inter_poly, [], EPSILON);

	if (new_poly_a.length <= 2) {
		new_poly_a = polygon_a;
	}
	if (new_poly_b.length <= 2) {
		new_poly_b = polygon_b;
	}

	//return new_poly_a and new_poly_b in polygons array
	return [new_poly_a, new_poly_b];

}



function cuttilesstepone(poly_a, poly_b) {
	//iterate over landmarks
	//if polygon intercects landmark, get points of intersection
	//console.log("polygon a e b",poly_a, poly_b)
	//make sure poly_a and poly_b are not the same points and are both defined
	let areEqual = polyEqualsPoly(poly_a, poly_b);
	if (areEqual == undefined || areEqual == true) { return; }
	let inter_poly;
	try {
		//console.log(poly_a, poly_b);
		inter_poly = intersectionPolygon(poly_a, poly_b)[0];
	} catch (error) {
		console.log("erro")
		return;
	}

	let intersection_line = intersectionLine(poly_a, poly_b, inter_poly);
	if (intersection_line.length < 2) return;
	// console.log("intersection_line", intersection_line);
	let cut_squares = cutSquaresByLine(intersection_line, poly_a, poly_b, inter_poly);
	if (cut_squares.length == 0 || cut_squares.length > 2) return;
	//console.log("cut_squares", cut_squares);
	//save cut_squares in polygons array

	return [cut_squares[0], cut_squares[1]];

}



//function to transform coordinates from .x and .y to [x,y] for one polygon
function transformCoordinates(polygon) {
	let new_polygon = [];
	for (var i = 0; i < polygon.length; i++) {
		new_polygon.push([polygon[i].x, polygon[i].y]);
	}
	return new_polygon;
}

let auxtemp;
let auxtemp2;

function cutSquares(h, w) {
let x=20;
	quadtree.each(function (element) {
		quadtree.onCollision({
			x: element.x,
			y: element.y,
			width: element.width, //Optional
			height: element.height, //Optional
			points: element.points, //Optional
			index: element.index
		}, function (item) {

      setTimeout(function(){
      updateProgressBar(x)

        
			let poly_a = polygons[element.index];
			let poly_b = polygons[item.index];

			//trim tiles against guidelines
			//transform coordinates of landmarks
			//make sure poly_a and poly_b are not the same points and are both defined
			let areEqual = polyEqualsPoly(poly_a, poly_b);
			if (areEqual == undefined || areEqual == true) { return; }
			let inter_poly;
			try {
				inter_poly = intersectionPolygon(poly_a, poly_b)[0];
			} catch (error) {
				console.log("erro")

				return;
			}

			let intersection_line = intersectionLine(poly_a, poly_b, inter_poly);
			if (intersection_line.length < 2) return;
			// console.log("intersection_line", intersection_line);
			let cut_squares = cutSquaresByLine(intersection_line, poly_a, poly_b, inter_poly);
			if (cut_squares.length == 0 || cut_squares.length > 2) return;
			//console.log("cut_squares", cut_squares);
			//save cut_squares in polygons array
			let ordered_element = geometric.polygonWind(cut_squares[0]);
			let ordered_item = geometric.polygonWind(cut_squares[1]);
			polygons[element.index] = ordered_element;
			polygons[item.index] = ordered_item;

      x=x+2;
    },0);
        
		}, function (element1, element2) {
			//check if element1 and element2 collide by checking their points
			return polygon.intersection(element1.points, element2.points);
		});
		// As with all iterative methods, modifying the quadtree or its contents is discouraged. //
	 
  })

	//scale polygons
	quadtree.each(function (element) {
		polygons[element.index] = geometric.polygonScale(polygons[element.index], ((2 * tSize) - (2 * espacamento)) / (2 * tSize));

	});
}


const ref_X = 95.047;
const ref_Y = 100.000;
const ref_Z = 108.883;

function XYZtoLAB([x, y, z]) {
	const [var_X, var_Y, var_Z] = [x / ref_X, y / ref_Y, z / ref_Z]
		.map(a => a > 0.008856
			? Math.pow(a, 1 / 3)
			: (7.787 * a) + (16 / 116))

	CIE_L = (116 * var_Y) - 16
	CIE_a = 500 * (var_X - var_Y)
	CIE_b = 200 * (var_Y - var_Z)

	return [CIE_L, CIE_a, CIE_b]
}

function RGBtoXYZ([R, G, B]) {
	const [var_R, var_G, var_B] = [R, G, B]
		.map(x => x / 255)
		.map(x => x > 0.04045
			? Math.pow(((x + 0.055) / 1.055), 2.4)
			: x / 12.92)
		.map(x => x * 100)

	// Observer. = 2°, Illuminant = D65
	X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805
	Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722
	Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505
	return [X, Y, Z]
}

function getColourPalete(r, g, b) {
	//ler file das cores json

	let mind = 9999;
	let color = [];

	let aux_matrix_image = [[r], [g], [b]];
	//rbg to xyz
	//xyz to lab
	//imagem
	let xyz = RGBtoXYZ(aux_matrix_image);
	let lab_image = XYZtoLAB(xyz);

	for (let i = 0; i < data.palette.length; i++) {
		let pr = (data.palette[i])["rgb"][0];
		let pg = (data.palette[i])["rgb"][1];
		let pb = (data.palette[i])["rgb"][2];

		let aux_matrix_pallete = [[pr], [pg], [pb]];

		//palete
		let xyz2 = RGBtoXYZ(aux_matrix_pallete);
		let lab_palete = XYZtoLAB(xyz2);

		let d = Math.sqrt(
			Math.pow(lab_palete[0] - lab_image[0], 2) +
			Math.pow(lab_palete[1] - lab_image[1], 2) +
			Math.pow(lab_palete[2] - lab_image[2], 2)
		);

		let d2 = Math.sqrt(
			Math.pow(lab_image[0] - lab_palete[0], 2) +
			Math.pow(lab_image[1] - lab_palete[1], 2) +
			Math.pow(lab_image[2] - lab_palete[2], 2)
		);

		let dnormal = Math.sqrt(
			Math.pow(pr - r, 2) +
			Math.pow(pg - g, 2) +
			Math.pow(pb - b, 2)
		);

		if (d2 < mind) {
			mind = d2;
			color = [pr, pg, pb];
			//console.log("entrou");
		}
	}
	return color;
}

function downloadAsPng(imageData, fileName) {
	const downloadLink = document.createElement('a');
	downloadLink.href = imageData;
	downloadLink.download = fileName;
  
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
  }
  
  let t10;
//function to draw polygons in the canvas using the points saved in the 
function drawPolygons(tSize, h, w) {

	ctxmask.fillStyle = "gray";
	ctxmask.fillRect(0, 0, canvasmask.width, canvasmask.height);

	for (let i = 0; i < polygons.length; i++) {



		if (cores[i][0] != null) {

			// ctxmask.translate(0.5, 0.5);
			ctxmask.beginPath();

			ctxmask.moveTo(polygons[i][0][0] /* + 0.5 */, polygons[i][0][1] /* + 0.5 */);
			for (let k = 1; k < polygons[i].length; k++) {
				ctxmask.lineTo(polygons[i][k][0] /* + 0.5 */, polygons[i][k][1] /* + 0.5 */);
			}
			ctxmask.closePath();
			// ctxmask.translate(-0.5, -0.5);
			r = cores[i][0]; // red value
			g = cores[i][1]; // green value
			b = cores[i][2]; // blue value (set to 0)
			a = cores[i][3]; // alpha value (set to 255)
			let color_palete = getColourPalete(r, g, b);
			//console.log("color_palete",color_palete);
			ctxmask.fillStyle = "rgb(" + color_palete[0] + "," + color_palete[1] + "," + color_palete[2] + ")";
			//ctxmask.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
			ctxmask.fill();
		}
	}
	//console.log("download")
	 t10 = performance.now();
	//console.log("drawpolygons ", t10 - t8);
	//console.log("total ", t10 - t0,t10);
	const imageData = canvasmask.toDataURL('image/png');
	
/* 	console.log("imagedataaa",imageData);
 */	let filename = "70_1_4"+tSize+"_"+mSize+"_"+espacamento+"_"+snakeSize+"_"+t10+".jpg";
	// Download the image as a PNG file
	//downloadAsPng(imageData, filename);

}

let time = 60;
const timerWrapper = document.getElementById("timerWrapper");
const timer = document.getElementById("timer");
  
function drawTiles3(gM, w, h, tSize, image_data_fg) {
	let Rx = [tSize * 2 + 1, 0];
	let Ry = [0, mSize * 2 + 1];

	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			//se pixel atual for 2 e a mask for 0 entao desenhar o tile
			if (LLM[i][j] == 2) {
				//if(vezes>0){
				drawSquare(gM, tSize, i, j, h, w, image_data_fg);
				//vezes--;
				//}
				//recursive function over the 8 neighbor pixels of i,j and check if they are 2
				let Cx = j;
				let Cy = i;
				//ctxtiles.fillStyle = 'blue'
				//ctxtiles.fillRect(Cx, Cy, 1, 1)
        if(difSizes==true){
       if (image_data_fg.data[(i * w + j) * 4 + 2] == 255) {
					Rx = [(tSize * 0.60 * 2 + 1), 0];
					Ry = [0, (mSize * 0.60 * 2 + 1)];
				} else {
					Rx = [tSize * 2 + 1, 0];
					Ry = [0, mSize * 2 + 1];
				}}
        else{
          Rx = [tSize * 2 + 1, 0];
					Ry = [0, mSize * 2 + 1];
        }
				checksquare(i, j, Cx, Cy, Rx, Ry);//checks points of llm that r inside the square

				//if they are 2, check if they are inside the square
				//if they are inside the square, mark them as 3
				//the recursive function will stop when it reaches a pixel that is not 2

				//checkoverlaps(i,j, Cx, Cy, Rx, Ry);
				//start in ij =0,0 and check if it overlaps with top right left bottom
				//if those r 0 call recursively, if those r different then 0 check if they overlap, if they do cut and call recursively
				//if they dont overlap end recursive

			}
		}
	}
  
      updateProgressBar(50)
      setTimeout(function(){
      
      
      	t7 = performance.now();
      	cutSquares(h, w);
      	
      	 console.log("Call to generate tiles " + (t7 - t6) + " milliseconds.") 
          updateProgressBar(70)
      
      },0);
      setTimeout(function(){
      	t8 = performance.now();
      
      /* 	console.log("Call to cutSquares took " + (t8 - t7) + " milliseconds.") */
      
      	drawPolygons(tSize, h, w);
        //updateProgressBar(90) 
      },0);

      
      setTimeout(function(){
        const form = document.getElementById("pictureForm");
        console.log(form);
        fillForm();
        submitForm(form);
        
        timerWrapper.style.display = "block";
        //timer.innerText = `Page reloads in ${time}s...`;
        
        setInterval(() => {
          time -= 1;
          //console.log(time);
          if(time<=0)
            location.reload()
          //timer.innerText =`Page reloads in ${time}s...`;
        }, 1000);
          
      },0);
  
}

function fillForm(){

	const imageData = canvasmask.toDataURL('image/png');
	
/* 	console.log("imagedataaa",imageData);
 */  
  let filename = "70_1_4"+tSize+"_"+mSize+"_"+espacamento+"_"+snakeSize+"_"+t10+".jpg";
	// Download the image as a PNG file
	//downloadAsPng(imageData, filename);
  let fileInput = document.getElementById("ficheiro");
  let fileName = document.getElementById("nome");
  fileInput.value = imageData;
  fileName.value = filename;

}

function submitForm(form){
  const formData = new FormData(form);
  const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);
/*   if(!form.checkValidity())
    form.reportValidity(); */
  // form.submit();\
  fetch('process-form.php',{
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
    },
    body: formDataJsonString,// body data type must match "Content-Type" header
    }).then((result) => {
      return result.json();
    }).then((data)=> {
      console.log(data);

    
  //tirar barra e animacao e foto e titulo colocar mosaico
  let progressbar = document.getElementById("bar");
  progressbar.setAttribute("hidden", "hidden");

  
  let animacao = document.getElementById("anim");
  animacao.style.display="none";

  canvas2.style.display="none";


  canvasmask.removeAttribute("hidden", "hidden");

    

      let qrCode = document.getElementById("QRCode")
      qrCode.src = data['message']
      qrCode.style.display = "block";

    });
}

module.exports = { handleAlgorithm: handleAlgorithm };


