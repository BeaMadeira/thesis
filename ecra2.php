<!DOCTYPE html>
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>

/*center title*/

  
.title {
  position: absolute;
  text-align: center;
/*   margin-top: 0.3rem; */
  margin-left: 37rem;
}

.title h1 {
  font-size: 50px;
  color: #333;
  margin: 0;
}

.title h1:first-child {
  font-weight: bold;
}


html {

font-family: 'Poppins', sans-serif;

}


body {
  background-color: #ffff;
  margin: 0;
}
  

/*center video*/

  
.video, .canvas, #canvas2, #anim, #canvasmask, #canvas2 {
  position: absolute !important;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%) scaleX(-1);
  -webkit-transform: translate(-50%, -50%) scaleX(-1);
  transform: translate(-50%, -50%) scaleX(-1);
}


  
/* {
  position: absolute !important;
  top:40%;
  left: 45%;
  transform: translate(-50%, -40%);
} */
#pagInicial {
  position: absolute;
  width: 10rem;
  margin: 0 auto;
  background-color: #ff4500;
  margin-left: 80%;
  margin-top: 41%;
  border: none;
  border-radius: 4px;
  font-size: 30px;
  text-align: center;
  color: #ffffff; /* Change text color to white */
}


#pagInicial:hover{
  background-color:#cc3700 ;
}


  
  
.button {
  position: absolute;
  width: 10rem;
  height: 14rem;
  margin: 0 auto;
  margin-top: 14%;
  margin-left: 80%;
  padding: 10px;
  background-color: #557A46;
  color: #fffcfc;
  border: none;
  border-radius: 4px;
  font-size: 30px;
  text-align: center;
  
}

.button:hover {
  background-color: #4C4B16;
}

.button-group {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 16rem; 
  margin-left: 5rem;
}


.button-group img {
  cursor: pointer;
  border: none;
  margin-bottom: 1rem;
}

.button-group img.selected {
  border: 8px solid #A9A9A9; /* Faded gray color */
}

.button-container{
    margin-bottom: 1rem;

}
  
.grid {
  display: grid;
}
  
.grid > .same-layer{
  grid-column: 1;
  grid-row: 1;
}

.rectangle-border {
  position: absolute;
  width: 300px; /* Width of the video */
  height: 300px; /* Height of the video */
  margin: 0 auto; /* Center the video */
  border: 3px solid red; /* Border color and width */
  border-radius: 200%;
  transform: scale(-0.7, 1);
  top: 30%;
  left: 43%;
/*   transform: translate(-50%, -50%);
 */}

/* animacao */

 main {
  width: 200vw;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
 /*  background: #090707; */
}

.dank-ass-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dank-ass-loader .row {
  display: flex;
}

.arrow {
  width: 0;
  height: 0;
  margin: 0 -16px;
  border-left: 32px solid transparent;
  border-right: 32px solid transparent;
  border-bottom: 57.6px solid rgb(69, 158, 112);
  -webkit-animation: blink 3s infinite;
          animation: blink 3s infinite;
  filter: drop-shadow(0 0 48px rgb(83, 118, 83));
}
.arrow.down {
  transform: rotate(180deg);
}
.arrow.outer-1 {
  -webkit-animation-delay: -0.1666666667s;
          animation-delay: -0.1666666667s;
}
.arrow.outer-2 {
  -webkit-animation-delay: -0.3333333333s;
          animation-delay: -0.3333333333s;
}
.arrow.outer-3 {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
}
.arrow.outer-4 {
  -webkit-animation-delay: -0.6666666667s;
          animation-delay: -0.6666666667s;
}
.arrow.outer-5 {
  -webkit-animation-delay: -0.8333333333s;
          animation-delay: -0.8333333333s;
}
.arrow.outer-6 {
  -webkit-animation-delay: -1s;
          animation-delay: -1s;
}
.arrow.outer-7 {
  -webkit-animation-delay: -1.1666666667s;
          animation-delay: -1.1666666667s;
}
.arrow.outer-8 {
  -webkit-animation-delay: -1.3333333333s;
          animation-delay: -1.3333333333s;
}
.arrow.outer-9 {
  -webkit-animation-delay: -1.5s;
          animation-delay: -1.5s;
}
.arrow.outer-10 {
  -webkit-animation-delay: -1.6666666667s;
          animation-delay: -1.6666666667s;
}
.arrow.outer-11 {
  -webkit-animation-delay: -1.8333333333s;
          animation-delay: -1.8333333333s;
}
.arrow.outer-12 {
  -webkit-animation-delay: -2s;
          animation-delay: -2s;
}
.arrow.outer-13 {
  -webkit-animation-delay: -2.1666666667s;
          animation-delay: -2.1666666667s;
}
.arrow.outer-14 {
  -webkit-animation-delay: -2.3333333333s;
          animation-delay: -2.3333333333s;
}
.arrow.outer-15 {
  -webkit-animation-delay: -2.5s;
          animation-delay: -2.5s;
}
.arrow.outer-16 {
  -webkit-animation-delay: -2.6666666667s;
          animation-delay: -2.6666666667s;
}
.arrow.outer-17 {
  -webkit-animation-delay: -2.8333333333s;
          animation-delay: -2.8333333333s;
}
.arrow.outer-18 {
  -webkit-animation-delay: -3s;
          animation-delay: -3s;
}
.arrow.inner-1 {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
}
.arrow.inner-2 {
  -webkit-animation-delay: -1s;
          animation-delay: -1s;
}
.arrow.inner-3 {
  -webkit-animation-delay: -1.5s;
          animation-delay: -1.5s;
}
.arrow.inner-4 {
  -webkit-animation-delay: -2s;
          animation-delay: -2s;
}
.arrow.inner-5 {
  -webkit-animation-delay: -2.5s;
          animation-delay: -2.5s;
}
.arrow.inner-6 {
  -webkit-animation-delay: -3s;
          animation-delay: -3s;
}

@-webkit-keyframes blink {
  0% {
    opacity: 0.1;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
}

@keyframes blink {
  0% {
    opacity: 0.1;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
}

*, *::before, *::after {
	box-sizing: border-box;
  
}

body {
	padding: 0;
	margin: 0;
}

.progress-container {
  position: absolute;
  bottom: 50px; /* Adjust the distance from the bottom as needed */
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left:20px;
}

.progress-bar {
  position: absolute;
  bottom:20px;
  width: 500px;
  height: 3em;
  background-color: #111;
  border-radius: 1.5em;
  color: white;
  
}

.progress-bar::before {
  content: attr(data-label);
  display: flex;
  align-items: center;
  position: absolute;
  left: .30em;
  top: .50em;
  bottom: .5em;
  width: calc(var(--width, 0) * 1%);
  min-width: 2rem;
  max-width: calc(100% - 1em);
  background-color: #557A46;
  border-radius: 1em;
  padding: 1em;
}

#timer,#QRCode{
  width: 200px;
  height: 200px;
  margin-left: 80%;
  margin-top:17rem;
}
  
#reloadbutton{
  position: absolute;
  margin-left: 80%;
  margin-top: 21.5rem;

  text-align: center;
  width: 10rem;
  height: 5rem;
  margin: 0 auto;
  padding: 10px;
  background-color: #557A46;
  color: #fffcfc;
  border: none;
  border-radius: 4px;
  font-size: 30px;
  line-height: 5rem;
}

#reloadbutton:hover {
  background-color: #181816;
}

#bar{
  margin-top:38%; margin-left:37%
}
  

</style>

</head>
<body>

 <!--    <div class="title" id="titulo">
        <h1>Escolha o estilo de Mosaico</h1>

    </div>
 -->

  
 <div id="videoGrid" class="grid" <!-- style="margin-top: 50px" -->
  <video class="same-layer video" id="video" width="720" height="540" autoplay muted></video>
  <div id=enquadramento class="rectangle-border" style="margin-top: 4.5rem" ></div>
  <canvas class="same-layer canvas" id="canvas" hidden></canvas>
</div>

<!--   <video class="same-layer video" id="video2" width="720" height="560" autoplay muted></video> -->
  
    <button type="button" id="tirarFotoButton" class="button">Tirar Foto</button>
  <button type="button" id="pagInicial" onclick="redirectToIndex()">Voltar</button>

<!--   <div class="button-group" id="grupoButoes">

        <img src="images\butao1_retangulos.jpg" width="230px" height="180px" alt="Button 1" data-num="1" id="button1" class="selected side-button"> -->
       <!--  <p>Pedras retangulares</p>
      </div>
      <div class="button-container"> -->

        <!-- <img src="images\butao2_quadrados.jpg" width="230px" height="180px" class="side-button" data-num="2" alt="Button 2"  id="button2"> -->
       <!--  <p>Pedras quadradas</p>
      </div>
      <div class="button-container"> -->

        <!-- <img src="images\butao3_quadrados_maiorespacamento.jpg" width="230px" class="side-button" data-num="3" height="180px" alt="Button 3" id="button3">
  </div> -->
        <!-- <p>Pedras quadradas com</p>
        <p>maior espaçamento</p>
  </div> -->
<canvas id="canvas2" width="720" height="540"></canvas>
  <canvas id="canvasmask" width="720" height="540"></canvas>

  <div id="hiddenCanvas">
    <!-- Set the hidden attribute for all canvas elements -->
    <canvas id="showCrop" width="720" height="540" hidden></canvas>
    <canvas id="resultado" width="720" height="540" hidden></canvas>
    <canvas id="landmarks" width="720" height="540" hidden></canvas>
    <canvas id="canvassrm" hidden></canvas>
    <canvas id="canvasgrad" hidden></canvas>
    <canvas id="canvasdtm" hidden></canvas>
    <canvas id="canvasllm" hidden></canvas>
    <canvas id="canvastiles" hidden></canvas>
    <canvas id="imagem" hidden></canvas>
    <canvas id="canvasShapes" width="720" height="540" hidden></canvas>
    <canvas id="foreground" hidden></canvas>
  </div>
  
  <div id="shownCanvas"> 
  </div>

  <div id=showqrcode hidden>
    <div id="qrcode-output"></div>
    <canvas id="qrcode" ></canvas>
  </div>
  
    <div id="timerWrapper" style="display: none">
      <img id="QRCode" src="" style="display: none" >
      <p id="mensagem_qrcode" style="font-size: 20px; margin-left: 75%;">Guarde o Mosaico no seu Dispositivo!</p>
    <p id="timer" hidden>
    </p>
<button onclick="redirectToIndex()" id="reloadbutton" style="margin-left: 80%;margin-top:10.5%; text-align: center;">Reiniciar</button>
  </div>

  <div id="anim" class="dank-ass-loader" style="display:none">
        
     <div class="row">
        <div class="arrow up outer outer-18"></div>
        <div class="arrow down outer outer-16"></div>
        <div class="arrow up outer outer-14"></div>
     </div>
     <div class="row">
        <div class="arrow up outer outer-18"></div>
        <div class="arrow down outer outer-17"></div>
        <div class="arrow up outer outer-16"></div>
        <div class="arrow down outer outer-15"></div>
        <div class="arrow up outer outer-14"></div>
     </div>
     <div class="row">
    <div class="arrow up inner inner-6"></div>
        <div class="arrow down outer outer-2"></div>
        <div class="arrow up inner inner-6"></div>
        <div class="arrow down inner inner-5"></div>
        <div class="arrow up inner inner-4"></div>
        <div class="arrow down outer outer-13"></div>
      <div class="arrow up inner inner-6"></div>
     </div>
     <div class="row">
      <div class="arrow down inner inner-1"></div>
        <div class="arrow up outer outer-4"></div>
        <div class="arrow down inner inner-1"></div>
        <div class="arrow up inner inner-2"></div>
        <div class="arrow down inner inner-3"></div>
        <div class="arrow up outer outer-11"></div>
        <div class="arrow down inner inner-1"></div>
        
     </div>
     <div class="row">
        <div class="arrow down outer outer-5"></div>
        <div class="arrow up outer outer-6"></div>
        <div class="arrow down outer outer-7"></div>
        <div class="arrow up outer outer-8"></div>
        <div class="arrow down outer outer-9"></div>
     </div>
      <div class="row">
        <div class="arrow down outer outer-18"></div>

        <div class="arrow up outer outer-16"></div>
      
        <div class="arrow down outer outer-14"></div>
     </div>
  </div>

  <div class="progress-bar" style="--width: 10;" data-label="Loading..." id="bar" hidden></div>

  
  
  <form method="POST" action="process-form.php" enctype="multipart/form-data" style="display: none" id="pictureForm">
  <input type="text" value="" name="ficheiro" id="ficheiro" required hidden>
  <input type="text"  value="" name="nome" id="nome" required hidden>
  <button hidden >submit</button>
</form>
<br>


</body>

  <script>
    <?php 
      if(array_key_exists('lang',$_GET)){
        $language = "let language = '" . $_GET['lang'] . "';";
        $selection = "let selection = '" . $_GET['sel'] . "';";
      }else {
        $language = "let language = 'pt';";
      }
      echo $language;
      echo $selection;
    ?>
    let translationArray = {
      'en': {
        'tirarFotoButton': 'Take Photo',
        'pagInicial': 'Back',
        'mensagem_qrcode': 'Save the Mosaic on your device!',
        'reloadbutton': 'Restart'
      },
      'pt': {
        'tirarFotoButton': 'Tirar Foto',
        'pagInicial': 'Voltar',
        'mensagem_qrcode': 'Guarde o Mosaico no seu Dispositivo!',
        'reloadbutton': 'Reiniciar'
      },
    };
    if(!translationArray.hasOwnProperty(language))
      language='pt';
    for (const key of Object.keys(translationArray[language]) ){
      var item = document.getElementById(key);
      if(item != null)
        item.innerHTML = translationArray[language][key];
    }
  
  </script>
  
  <script src="js/face-api.js"></script>
  <script src="modules/geometric/geometric.js"></script>
  <script src="modules/geometric/geometric.min.js"></script>
  <script src="bundle.js"></script>




  
  <script>
    
    var selectedButton = null;
    var prevnumber=0;
    let selected=selection;

    console.log("selected",selected);
    
    let canvasEl = document.getElementById('canvas');
    canvasEl.width = 720;
    canvasEl.height = 540;
    let context = canvasEl.getContext('2d');
    let videoEl = document.getElementById('video');

    context.translate(720, 0);
    context.scale(-1, 1);
    /* function updateCanvas() {
      context.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height);
      
      window.requestAnimationFrame(updateCanvas);
    } */
function redirectToIndex() {
  window.location.href = "index.php";
}
    
    initTakeFoto()
   // initMosaicTypePicker()
    
    function initTakeFoto(){
      let buttonTakeFoto = document.getElementById("tirarFotoButton");
      let intervalID = null;
      buttonTakeFoto.addEventListener("click", function(event){
        buttonTakeFoto.disabled = true;
        let x = 5;
        event.target.innerHTML = x;
        intervalID = setInterval(function(){
          x-=1;
          if(x<0){
             let butaoFotos = document.getElementById('tirarFotoButton');
            butaoFotos.setAttribute("hidden", "hidden");

/*             butaoFotos.style.display = "none";
 */            
            /* const buttonGroup = document.getElementById('grupoButoes');
            buttonGroup.style.display = 'none'; */

              
        /*     let titulo= document.getElementById("titulo");
            titulo.style.display="none"; */

              let pagInicial = document.getElementById("pagInicial");
            pagInicial.style.display="none";
            
            let videoel= document.getElementById('video')
            videoel.setAttribute("hidden", "hidden");
            
            let enquadramento= document.getElementById('enquadramento')
            enquadramento.setAttribute("hidden", "hidden");

            let canvasele= document.getElementById('canvas')
            canvasele.setAttribute("hidden", "hidden");

          
            
            clearInterval(intervalID);
            event.target.disabled = false;
            //hide buttons         
         // window.location.href = "ecra3.php?selected=" + selected;
            //trigger scriptjs algorithm
            setTimeout(function(){myBundle.handleAlgorithm(selected);}, 0);

            
          }    
          else event.target.innerHTML = x;
            
        },1000)
      });
    }
    
    

    
/*     function initMosaicTypePicker(){
      let buttons = document.getElementsByClassName("side-button");
      for(const element of buttons) {
        element.addEventListener('click', handleSelectedMosaicType);
      }
    }
    
    function handleSelectedMosaicType(event){
      let buttons = document.getElementsByClassName("side-button");
      for(const element of buttons) {
        element.classList.remove("selected")
      }
      //find elements with class selected
      event.target.classList.add("selected");
    
      let buttonNumber = event.target.dataset.num;
      selected = buttonNumber;
      
    } */

</script>
 


</html> 





