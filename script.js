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
			}*/
			//Botção 1--------------------------------------------------------------------------------------
				function keyPressed(evt){
					evt = evt || window.event 
					var key = evt.keyCode || evt.which
					return String.fromCharCode(key)
					}
					document.onkeypress = function(evt) {
					var str = keyPressed(evt)
					if(str == '1')
					window.alert("Apertou o 'f', chamando uma função...")
					}
				function um(){
					document.getElementById("um")
					window.alert("Apertou o 'f', chamando uma função...")
					}
			//lampada exemplo-----------------------------------------------------------------------------
					function apaga(){
						document.getElementById("myImage").src = "pic_bulboff.gif"
						}
					function acende(){
						document.getElementById("myImage").src = "pic_bulbon.gif"
						}