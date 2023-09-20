<!DOCTYPE html>
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
  
html {

font-family: 'Poppins', sans-serif;

}


body {
  background-color: #faf0e6;
  margin: 0;
}
  
#qrcode-output {
      position: absolute;
      margin-top: 20%;
      margin-left: 80% ;
      z-index: 1;
    }
  
</style>

</head>
<body>

<!-- video do script mesmo, em vez de butao ter temporizador e foto tira
      no video ter esquadramento-->
      
 <div id="videoGrid" class="grid" style="margin-top: 50px" hidden>
  <video class="same-layer video" id="video" width="720" height="560" autoplay muted></video>
  <canvas class="same-layer canvas" id="canvas"  hidden></canvas>
</div>
 
  <div id="hiddenCanvas" hidden>
      <canvas id="canvas2"></canvas>
           
      <canvas id="resultado" width="720" height="560"></canvas>
      <canvas id="landmarks" width="720" height="560"  ></canvas>
      <canvas id="canvassrm"  ></canvas>
      <canvas id="canvasgrad" ></canvas>
      <canvas id="canvasdtm" ></canvas>
      <canvas id="canvasllm" ></canvas> 
      <canvas id="canvastiles" ></canvas>
      <canvas id="canvasmask" ></canvas>
      <canvas id="imagem" ></canvas>
      <canvas id="canvasShapes" width="720" height="560" ></canvas>
      <canvas id="foreground" ></canvas>
    
  </div>
  <div id="shownCanvas">
    
  </div>

  <div id=showqrcode hidden>
    <div id="qrcode-output"></div>
    <canvas id="qrcode" ></canvas>
  </div>
  
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

  <script src="js/face-api.js"></script>
  <script src="modules/geometric/geometric.js"></script>
  <script src="modules/geometric/geometric.min.js"></script>
  <script src="pallete.json"></script>
  <script src="bundle.js"></script>
</body>
  <?php
// Get the 'selected' value from the query string
$selected = isset($_GET['selected']) ? $_GET['selected'] : '';
//save foto in server and retrieve in this page?

?>
<script>
  var selected = "<?php echo $selected; ?>";
  myBundle.handleAlgorithm(selected);
</script>


</html> 





