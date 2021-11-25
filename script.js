/*
https://www.w3schools.com/jsref/event_key_which.asp

<input id="resp"type="text" size="50" onkeypress="myFunction(event)"> 

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_which2
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_which
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup
<script>
function myFunction(event) {
  var x = event.which || event.keyCode;
  if (x == 49) {
    x=1
  }
  var x1 = event.which || event.keyCode;
  if (x1 == 50) {
  x1=2
  //  alert ("Yodu pressed the Escape key!");
  }
  var x3 = event.which || event.keyCode;
  if (x3 == 43) {
    //x3= '+'
  alert ("Yodu pressed the Escape keydd!");
  }
  var x4 = event.which || event.keyCode;
  if (x4 == 13) {
  alert(" x5")
    var x5= x+x1+x3 
  
}
</script>
<!DOCTYPE html>
<html>
<body>

<p>Press any key on the keyboard in the input field to get the Unicode character code and the Unicode key code of the pressed key.</p>

<p><strong>Note:</strong> The which and keyCode property does not work on the onkeypress event for non-printable, function keys (like CAPS LOCK, CTRL, ESC, F12, etc.).</p>

<input type="text" size="50" onkeypress="uniCharCode(event)" onkeydown="uniKeyCode(event)"> 

<p>onkeypress - <span id="demo"></span></p>
<p>onkeydown - <span id="demo2"></span></p>

<script>
function uniCharCode(event) { 
  var char = event.which || event.keyCode; 
  document.getElementById("demo").innerHTML = "The Unicode CHARACTER code is: " + char;
}

function uniKeyCode(event) {
  var key = event.which || event.keyCode; 
  document.getElementById("demo2").innerHTML = "The Unicode KEY code is: " + key;
}
</script>

</body>
</html>

/*function cs() {
				const hour = document.getElementById("a").value //onde sera avaliado
				let greeting= document.getElementById("b"); //onde sera a resposta

				if (hour < 2) {
				  greeting = 1
				} else {
				  greeting  = "asdf"
				}
				var a0 = document.getElementById("a1").value
				var ar=a0
				var br=greeting;
				var cr = a0 + greeting
				document.getElementById("b").value = cr
			}

			----------------------------------------------------------------------------
			function verificaTecla(evt){

        *//*
            ASCII Código   - 48 a 57 = Teclas 0 a 9
            ASCII Código   - 13 = Tecla Enter  
            ASCII Código   - 08 = Tecla Backspace 
            keyCode Código - 37 = Seta Esquerda
            keyCode Código - 39 = Seta Direita
            keyCode Código - 46 = Tecla Delete
        */
/*

        var tecla;

        if(evt.which)
        {
           tecla = evt.which
             //alert("which" + " - " + tecla);
        }
        else if(evt.keyCode) // Netscape/Firefox/Opera
        {
           tecla = evt.keyCode;
          //alert("keyCode" + " - " + tecla);
        }------------------------------------------------------------------------------------------*/
        /*teclado cod
			1		1
        */
			//Botção 1--------------------------------------------------------------------------------------
				
					document.onkeyPresse = function a(){
					window.alert("Você Apertou no telcado a tecla '1', chamando uma função...")
				}
					
				/*

				function um(){
					document.getElementById("um")
					window.alert("Você clicou com o mause sobre o botão '1', chamando uma função...")
					}*/
			//Botção 2--------------------------------------------------------------------------------------
				/*function keyPressed(b){
					var keyb = b.which
					return String.fromCharCode(keyb)
					}
					document.onkeypress = function(b) {
					var strb = keyPressed(b)
					if(strb == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("dois")
					window.alert("Apertou o '2', chamando uma função...")
					}*/
			//Botção 3--------------------------------------------------------------------------------------
				/*function keyPressed(evtb){
					var keyb = evtb.whichb
					return String.fromCharCode(keyb)
					}
					document.onkeypress = function(evtb) {
					var strb = keyPressed(evtb)
					if(strb == '2')
					window.alert("Apertou o '3', chamando uma função...")
					}
				function tres(){
					document.getElementById("tres")
					window.alert("Apertou o '3', chamando uma função...")
					}
			//Botção 4--------------------------------------------------------------------------------------
			/*	function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção 5--------------------------------------------------------------------------------------
				function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção 6--------------------------------------------------------------------------------------
				function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção 7--------------------------------------------------------------------------------------
				function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção 8--------------------------------------------------------------------------------------
				function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção 9--------------------------------------------------------------------------------------
			function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção 0--------------------------------------------------------------------------------------
				function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção limpar---------------------------------------------------------------------------------
				function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção raiz-----------------------------------------------------------------------------------
			function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção porcentagem----------------------------------------------------------------------------
				function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção divisão--------------------------------------------------------------------------------
			function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção vezes----------------------------------------------------------------------------------
				function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção menos----------------------------------------------------------------------------------
				function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção mais-----------------------------------------------------------------------------------
				function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção resultado------------------------------------------------------------------------------
				function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
			//Botção virgula--------------------------------------------------------------------------------
			function keyPresseda(evta){
					var keya = evta.whicha
					return String.fromCharCode(keya)
					}
					document.onkeypress = function(evta) {
					var stra = keyPressed(evta)
					if(stra == '2')
					window.alert("Apertou o '2', chamando uma função...")
					}
				function dois(){
					document.getElementById("um")
					window.alert("Apertou o '2', chamando uma função...")
					}
																
			//lampada exemplo-----------------------------------------------------------------------------
					function apaga(){
						document.getElementById("myImage").src = "pic_bulboff.gif"
						}
					function acende(){
						document.getElementById("myImage").src = "pic_bulbon.gif"
						}*/