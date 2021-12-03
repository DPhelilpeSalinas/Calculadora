/*
https://www.w3schools.com/jsref/event_key_which.asp

<input id="resp"type="text" size="50" onkeypress="myFunction(event)"> 

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_which2 //identificar tecla
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_which //identificar tecla 2
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup //passar teclas para maiusculo
<script>*/
function myFunction(event) {
	var x1 = event.which;//1 tecla 1
	var x2 = event.which;//2 tecla 2
	var x3 = event.which;//3 tecla 3
	var x4 = event.which;//4 tecla 4
	var x5 = event.which;//5 tecla 5
	var x6 = event.which;//6 tecla 6
	var x7 = event.which;//7 tecla 7
	var x8 = event.which;//8 tecla 8
	var x9 = event.which;//9 tecla 9
	var x0 = event.which;//10 tecla 0
	var xdel = event.which;//11 tecla delete / limpar
	var xraiz = event.which;//12 tecla raiz
	var xporc = event.which;//13 tecla %
	var xdiv = event.which;//14 tecla /
	var xvez = event.which;//15 tecla *
	var xmenos = event.which;//16 tecla -
	var xmais = event.which;//17 tecla +
	var xigual = event.which;//18 tecla =
	var xvir = event.which;//19 tecla ,

	if (x1 == 49) {//1 tecla 1
		alert ("Yodu pressed tswshe Escape keydd!"+x1);
	}
	if (x2 == 50) {//2 tecla 2
		alert ("Yodu pressed tswshe Escape keydd!"+x2);
	}
	if (x3 == 51) {//3 tecla 3
		alert ("Yodu pressed tswshe Escape keydd!"+x3);
	}
	if (x4 == 52) {//4 tecla 4
		alert ("Yodu pressed tswshe Escape keydd!"+x4);
	}
	if (x5 == 53) {//5 tecla 5
		alert ("Yodu pressed tswshe Escape keydd!"+x5);
	}
	if (x6 == 54) {//6 tecla 6
		alert ("Yodu pressed tswshe Escape keydd!"+x6);
	}
	if (x7 == 55) {//7 tecla 7
		alert ("Yodu pressed tswshe Escape keydd!"+x7);
	}
	if (x8 == 56) {//8 tecla 8
		alert ("Yodu pressed tswshe Escape keydd!"+x8);
	}
	if (x9 == 57) {//9 tecla 9
		alert ("Yodu pressed tswshe Escape keydd!"+x9);
	}
	if (x0 == 48) {//10 tecla 0
		alert ("Yodu pressed tswshe Escape keydd!"+x0);
	}
	if (xdel == 49) {//11 tecla delete / limpar
		alert ("Yodu pressed tswshe Escape keydd!"+x1);
	}
	if (xraiz== 46) {//12 tecla raiz será usada a tecla de ponto"." 
					//pois a mais proxima seria o acento circunflexo.
					// mas fica fora da area de digitação para o projeto
		alert ("Yodu pressed tswshe Escape keydd!"+x2);
	}
	if (xporc == 37) {//13 tecla %
		alert ("Yodu pressed tswshe Escape keydd!"+x3);
	}
	if (xdiv == 47) {//14 tecla dividir
		alert ("Yodu pressed tswshe Escape keydd!"+x4);
	}
	if (xvez == 42) {//15 tecla vezes
		alert ("Yodu pressed tswshe Escape keydd!"+x5);
	}
	if (xmenos == 45) {//16 tecla menos
		alert ("Yodu pressed tswshe Escape keydd!"+x6);
	}
	if (xmais == 43) {//17 tecla mais
		alert ("Yodu pressed tswshe Escape keydd!"+x7);
	}
	if (xigual == 13) {//18 tecla resultado ou igual
		alert ("Yodu pressed tswshe Escape keydd!"+x8);
	}
	if (xvir == 44) {//19 tecla ","" virgula
		alert ("Yodu pressed tswshe Escape keydd!"+x9);
	}
  

 /* 
function uniCharCode(event) { 
  var char = event.which || event.keyCode; 
  if (x == 49) {
    alert ("Yodu pressed tswshe Escape keydd!");
  }*/
  /*var x1 = event.which || event.keyCode;
  if (x1 == 50) {
  x1=2
  alert ("Yodu pressed sdawthe Escape key!");
  }
  var x3 = event.which || event.keyCode;
  if (x3 == 43) {
    //x3= '+'
  alert ("Yodu pressed the Escape keydd!");
  }
  var x4 = event.which || event.keyCode;
  if (x4 == 13) {
  alert ("Yodu pressed the Escape keydd!");
  */
}/*
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