<!DOCTYPE html>
<html>
<head>
    <title>PHP File Uploads</title>
    <meta charset="UTF-8"> 
    <style>
    body {
      margin: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    canvas {
      position: absolute;
    }

    #start {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    .input-container-wrapper {
      position: fixed;
      top: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .input-container {
      margin-right: 10px; /* Adjust the margin value as per your requirements */
    }

    .input-container p {
      margin-right: 5px; /* Adjust the margin value as per your requirements */
    }

    .input-container input {
      width: 50px; /* Adjust the width value as per your requirements */
    }


    #resultado {
      position: absolute;
      top: 700px;
      left: 30px ;
      z-index: 1;
    }

    #timerWrapper {
      position: absolute;
      top: 700px;
      left: 800px ;
      z-index: 1;
    }
      

    #canvasmask {
      position: absolute;
      top: 700px;
      left: 30px ;
      z-index: 1;
      background-color: gray;
    }

    #qrcode-output {
      position: absolute;
      top: 700px;
      left: 800px ;
      z-index: 1;
    }


    #landmarks {
      position: absolute;
      top: 1400px;
      left: 30px ;
      z-index: 1;
    }

    #canvasdtm {
      position: absolute;
      top: 2100px;
      left: 30px ;
      z-index: 1;
    }

    #canvas2 {
      position: absolute;
      top: 2800px;
      left: 30px ;
      z-index: 1;
    }

    #canvasgrad {
      position: absolute;
      top: 3500px;
      left: 30px ;
      z-index: 1;
    }

    #canvassrm {
      position: absolute;
      top: 4200px;
      left: 30px ;
      z-index: 1;
    }

    #canvasllm {
      position: absolute;
      top: 4900px;
      left: 30px ;
      z-index: 1;
    }
    

    #canvastiles {
      position: absolute;
      top: 5600px;
      left: 30px ;
      z-index: 1;
      background-color: gray;

    }




    #foreground {
      position: absolute;
      top: 6160px;
      left: 30px ;
      z-index: 1;
      background-color: gray;
    }

    #imagem {
      position: absolute;
      top: 7700px;
      left: 30px ;
      z-index: 1;
    }

    #canvasShapes {
      position: absolute;
      top: 8200px;
      left: 30px ;
      z-index: 1;
    }



  </style>
</head>
<body>

 <video id="video" width="720" height="560" autoplay muted></video>
    <div class="input-container-wrapper">
      <div class="input-container">
        <p id="myText">tsize</p>
        <input type="number" id="myNumber" value="5">
      </div>
      <div class="input-container">
        <p id="myText2">msize</p>
        <input type="number" id="myNumber2" value="5">
      </div>
      <div class="input-container">
        <p id="myText3">snakesize</p>
        <input type="number" id="myNumber3" value="3">
      </div>
      <div class="input-container">
        <p id="myText4">espacamento</p>
        <input type="number" id="myNumber4" value="1">
      </div>
    </div>

  <button id="start">Tirar Fotografia</button>

  <div id="qrcode-output"></div>
  <canvas id="qrcode" ></canvas>


  
  <canvas id="resultado" width="720" height="560" hidden></canvas>
  <canvas id="landmarks" width="720" height="560" hidden></canvas>
  <canvas id="canvassrm" hidden></canvas>
  <canvas id="canvas2" hidden></canvas>
  <canvas id="canvasgrad" hidden></canvas>
  <canvas id="canvasdtm" hidden></canvas>
  <canvas id="canvasllm" hidden></canvas> 
  <canvas id="canvastiles" hidden></canvas>
  <canvas id="canvasmask" ></canvas>
  <canvas id="imagem"hidden></canvas>
  <canvas id="canvasShapes" width="720" height="560" hidden></canvas>
  <canvas id="foreground" hidden></canvas>
  
  <div id="timerWrapper" style="display: none">
      <img id="QRCode" src="" style="display: none">
    <p id="timer">
    </p>
    <button onclick="location.reload()" >Ok!</button>
  </div>
  
  <form method="POST" action="process-form.php" enctype="multipart/form-data" style="display: none" id="pictureForm">
  <input type="text" value="" name="ficheiro" id="ficheiro" required hidden>
  <input type="text"  value="" name="nome" id="nome" required hidden>
  <button hidden >submit</button>
</form>
<br>

  
  
<button id="test" hidden style="display: none">
  
</button>

  <script src="js/face-api.js"></script>
  <script src="modules/geometric/geometric.js"></script>
  <script src="modules/geometric/geometric.min.js"></script>
  <script src="pallete.json"></script>
  <script src="bundle.js"></script>
</body>
<!--     
//document.addEventListener("DOMContentLoaded", () => {
  // draw on the canvas
  //const canvas = document.getElementById("canvasmask");
  //const ctx = canvas.getContext( "2d" );
  //ctx.fillStyle = "red";
  //ctx.fillRect( 20, 20, 260, 110 );
/*     // convert to Blob (async)
  console.log(filename);
  canvasmask.toBlob( (blob) => {
    const file = new File( [ blob ], filename+".png" );
    const dT = new DataTransfer();
    dT.items.add( file );
    document.getElementById( "ficheiro" ).files = dT.files;
  } );
  
    // to prove the image is there
  document.getElementById( "test" ).onclick = (evt) => {
    const file = document.getElementById( "ficheiro" ).files[ 0 ];
    document.body.appendChild( new Image() )
      .src = URL.createObjectURL( file );
  };
}); */ -->

</html>