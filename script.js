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
				function keyPressed(qualquertecla){
					var apertar =  qualquertecla.which
					return String.fromCharCode(apertar)
					}
					document.onkeydown = function(qualquertecla) {
					var str = keyPressed(qualquertecla)
				
					if(str === 'Backspace')
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