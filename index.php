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
  
.button {
  text-align: center;
  
  display: block;
  width: 10rem;
  height: 5rem;
  margin: 0 auto;
  margin-top: 2%;
  padding: 10px;
  background-color: #557A46;
  color: #fffcfc;
  border: none;
  border-radius: 4px;
  font-size: 30px;
  line-height: 5rem;
  text-decoration: none;
  
}

.button:hover {
  background-color: #181816;
}


.title {
  text-align: center;
  margin-top: 100px;
}

.title h1 {
  font-size: 50px;
  color: #333;
  margin-top: 100px;
  padding-bottom: 1rem;
}

.title h1:first-child {
  font-weight: bold;
}


body {
  background-color: #faf0e6;
  margin: 0;
}

  body {
  align-items: center;
  background: #E3E3E3;
  display: block;
  height: 100vh;
  justify-content: center;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-720px * 7));
  }
}
.slider {

  height: 500px;
  margin: auto;
  margin-top:60px;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-bottom:1rem;
}
.slider::before, .slider::after {

  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(720px * 14);
}
.slider .slide {
  height: 560px;
  width: 720px;
}

/* toggle language */
  
  .switch {
  position: relative;
  display: inline-block;
  margin: 0 5px;
  margin-left: 93%;
  margin-top: 1%;
}

.switch > span {
  position: absolute;
  top: 14px;
  pointer-events: none;
  font-family: 'Helvetica', Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, .06);
  width: 50%;
  text-align: center;
}

input.check-toggle-round-flat:checked ~ .off {
  color: #557A46;
}

input.check-toggle-round-flat:checked ~ .on {
  color: #fff;
}

.switch > span.on {
  left: 0;
  padding-left: 2px;
  color: #557A46;
}

.switch > span.off {
  right: 0;
  padding-right: 4px;
  color: #fff;
}

.check-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}
.check-toggle + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input.check-toggle-round-flat + label {
  padding: 2px;
  width: 97px;
  height: 35px;
  background-color: #557A46;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:before, input.check-toggle-round-flat + label:after {
  display: block;
  position: absolute;
  content: "";
}

input.check-toggle-round-flat + label:before {
  top: 2px;
  left: 2px;
  bottom: 2px;
  right: 2px;
  background-color: #557A46;
  -webkit-
  
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:after {
  top: 4px;
  left: 4px;
  bottom: 4px;
  width: 48px;
  background-color: #fff;
  -webkit-border-radius: 52px;
  -moz-border-radius: 52px;
  -ms-border-radius: 52px;
  -o-border-radius: 52px;
  border-radius: 52px;
  -webkit-transition: margin 0.2s;
  -moz-transition: margin 0.2s;
  -o-transition: margin 0.2s;
  transition: margin 0.2s;
}

input.check-toggle-round-flat:checked + label {
}

input.check-toggle-round-flat:checked + label:after {
  margin-left: 44px;
}

  
</style>

</head>
<body>
	<div class="switch">
    <input id="language-toggle"  class="check-toggle check-toggle-round-flat" type="checkbox">
    <label for="language-toggle"></label>
    <span language='pt' class="on">PT</span>
    <span language='en' class="off">EN</span>
  </div>

  
<div class="title">
    <h1 id="title">A sua cara num Mosaico</h1>
</div>



  
<div class="slider">
	<div class="slide-track">
		<div class="slide">
      <img src="images\10_0_1\10_0_1_3_3_1_8_58390.69999998808.jpg" height="560" width="720" alt="" />
    </div>
    <div class="slide">
     <img src="images\20_1_2\20_1_2_3_5_1_3.jpg" height="560" width="720" alt="" />
    </div>
    <div class="slide">
      <img src="images\40_1_0\40_1_0_3_5_1_3_67233.jpg" height="560" width="720" alt="" />
    </div>
    <div class="slide">
      <img src="images\70_1_4\70_1_4_5_5_1_3_24970.69999998808.jpg"  height="560" width="720" alt="" />
    </div>
    <div class="slide">
      <img src="images\10_0_1\10_0_1_5_5_1_3.jpg" height="560" width="720" alt="" />
    </div>
    <div class="slide">
      <img src="images\20_1_2\20_1_2_5_5_4_3_28293.5.jpg"  height="560" width="720" alt="" />
    </div>
    <div class="slide">
      <img src="images\40_1_0\40_1_0_5_5_1_3_24034.5.jpg" height="560" width="720" alt="" />
    </div>
    <div class="slide">
     <img src="images\70_0_0_5_5_1_3_21811.59999999404.jpg" height="560" width="720" alt="" />
    </div>
    <div class="slide">
      <img src="images\20_1_2\20_1_2_10_10_1_3_48490.5.jpg"  height="560" width="720" alt="" />
    </div>      
    </div>
	</div>
</div>

<!--   <button class="button">Começar</button>
 -->  <a type="button" id="startButton" class="button" href="ecra_escolhas.php?lang=pt">Começar</a>

</body>
  

<script>
  
  var translationArray = {
    'en': {
      'title': 'Your face on a mosaic',
      'startButton': 'Start'
    },
    'pt': {
      'title': 'A sua cara num Mosaico',
      'startButton': 'Começar'
    },
  };
  
  document.querySelector('#language-toggle').addEventListener('input', (event) => {
    var language = event.currentTarget.checked ? 'en' : 'pt';
    var startButton = document.getElementById("startButton");
    startButton.href="ecra_escolhas.php?lang="+language;
    for (const key of Object.keys(translationArray[language]) ){
      var item = document.getElementById(key);
      item.innerHTML = translationArray[language][key];
    }
  });
</script>
  
</html> 





