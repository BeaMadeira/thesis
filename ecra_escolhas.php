<!DOCTYPE html>
<html>
<head>

<link rel="preconnect"  href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>


.title {
  position: absolute;
  text-align: center;
/*   margin-top: 0.3rem; */
  margin-left: 33%;
  margin-top:4rem;
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
  background-color: #faf0e6;
  margin: 0;
}
  

  
.button-group {
  position: absolute;
  display: flex;
  flex-direction: linear;
  margin-top: 15rem; 
  margin-left:5%;
}


.button-group img {
  cursor: pointer;
  border: none;
/*   margin-bottom: 1rem;
 */}

.button-group img.selected {
  border: 8px solid #A9A9A9; /* Faded gray color */
}

.button-container{
    margin-bottom: 1rem;

}

#pagEcra2{
  width: 20rem;
  height: 5rem;
  margin-top:47%;
  margin-left:43%;
  background-color: #557A46;
  color: #fffcfc;
  border: none;
  border-radius: 4px;
  font-size: 30px;
  text-align: center;
}

#pagEcra2:hover {
  background-color: #4C4B16;
}
  
</style>

</head>
<body>

    <div class="title" id="titulo">
        <h1>Escolha o estilo de Mosaico</h1>

    </div>

 
    <div class="button-group" id="grupoButoes">
     <!--  <div class="button-container"> -->

        <img src="images\butao1_retangulos.jpg" width="610px" height="560px" alt="Button 1" data-num="1" id="button1" class="selected side-button">
       <!--  <p>Pedras retangulares</p>
      </div>
      <div class="button-container"> -->

        <img src="images\butao2_quadrados.jpg" width="610px" height="560px" class="side-button" data-num="2" alt="Button 2"  id="button2">
       <!--  <p>Pedras quadradas</p>
      </div>
      <div class="button-container"> -->

        <img src="images\butao3_quadrados_maiorespacamento.jpg" width="610px" class="side-button" data-num="3" height="560px" alt="Button 3" id="button3">
  </div>
  
  <button type="button" id="pagEcra2" onclick="redirectToScreen()"> Criar Mosaico </button>

  
</body>

<script>

    <?php 
      $language = "let language = '" . $_GET['lang'] . "';";
      echo $language;
    ?>
    let translationArray = {
      'en': {
        'titulo': '<h1>Choose the mosaic style</h1>',
        'pagEcra2': 'Create Mosaic'
      },
      'pt': {
        'titulo': '<h1>Escolha o estilo de Mosaico</h1>',
        'pagEcra2': 'Criar Mosaico'
      },
    };
    if(!translationArray.hasOwnProperty(language))
      language='pt';
    for (const key of Object.keys(translationArray[language]) ){
      var item = document.getElementById(key);
      item.innerHTML = translationArray[language][key];
    }
  
    var selectedButton = null;
    var prevnumber=0;
    let selected;
    initMosaicTypePicker()

  
    function initMosaicTypePicker(){
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
/* 
      $_SERVER['QUERY_STRING']="selection=".selected;
      
       $url = "ecra2.php?".$_SERVER['QUERY_STRING'];
        header("Location: $url"); */
      
    }

  function redirectToScreen(){
/*     $_SERVER['QUERY_STRING']="selection=".selected;
    $url = "ecra2.php?".$_SERVER['QUERY_STRING'];
    header("Location: $url"); */

    //window.location.href = "ecra2.php?selection=".selected;
    window.location.href = "ecra2.php?lang="+language+"&sel="+selected;
    
  }
  
  
</script>
  
</html> 





