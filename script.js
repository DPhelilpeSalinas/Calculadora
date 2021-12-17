/*
https://www.w3schools.com/jsref/event_key_which.asp

<input id="resp"type="text" size="50" onkeypress="myFunction(event)"> 

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_which2 //identificar tecla
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_which //identificar tecla 2
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup //passar teclas para maiusculo*/

	/* anulado-------------------------------------------------------------------------------------------
	//teclas---------------------------------------------------------------------------------------------
		function teclado(event) {
			//Entradas----------------------------------------------------------------------------------	
				var cx1 = event.which;//1 tecla 1
				var cx2 = event.which;//2 tecla 2
				var cx3 = event.which;//3 tecla 3
				var cx4 = event.which;//4 tecla 4
				var cx5 = event.which;//5 tecla 5
				var cx6 = event.which;//6 tecla 6
				var cx7 = event.which;//7 tecla 7
				var cx8 = event.which;//8 tecla 8
				var cx9 = event.which;//9 tecla 9
				var cx0 = event.which;//10 tecla 0
				//var xdel = event.which;//11 tecla delete / limpar //passada para outra função.
				var cxraiz = event.which;//12 tecla raiz
				var cxporc = event.which;//13 tecla %
				var cxdiv = event.which;//14 tecla /
				var cxvez = event.which;//15 tecla *
				var cxmenos = event.which;//16 tecla -
				var cxmais = event.which;//17 tecla +
				var cxigual = event.which;//18 tecla =
				var cxvir = event.which;//19 tecla ,
				//---------------------------------------------------------------------------
			//Captura teclas----------------------------------------------------------------
				//Teclas numeros------------------------------------------------------------	
					if (cx1 == 49 ) {//1 tecla 1
						//alert ("Yodu pressed tswshe Escape keydd!");
						//cx1 = "1"
						var cx1 = document.getElementById("resultado").value
						var cx1r= cx1 + "1"
						document.getElementById("resultado").value = cx1r
						document.getElementById("resultado").style.fontWeight = ""
					}
					if (cx2 == 50) {//2 tecla 2
						//alert ("Yodu pressed tswshe Escape keydd!"+x2);
						//x2 = 2
						var cx2 = document.getElementById("resultado").value
						var cx2r= cx2 + "2"
						document.getElementById("resultado").value = cx2r
						document.getElementById("resultado").style.fontWeight = ""
					}
					if (cx3 == 51) {//3 tecla 3
						//alert ("Yodu pressed tswshe Escape keydd!"+x3);
						//x3 = 3
						var cx3 = document.getElementById("resultado").value
						var cx3r= cx3 + "3"
						document.getElementById("resultado").value = cx3r
						document.getElementById("resultado").style.fontWeight = ""
					}
					if (cx4 == 52) {//4 tecla 4
						//alert ("Yodu pressed tswshe Escape keydd!"+x4);
						//x4 = 4
						var cx4 = document.getElementById("resultado").value
						var cx4r= cx4 + "4"
						document.getElementById("resultado").value = cx4r
						document.getElementById("resultado").style.fontWeight = ""
					}
					if (cx5 == 53) {//5 tecla 5
						//alert ("Yodu pressed tswshe Escape keydd!"+x5);
						//x5 = 5
						var cx5 = document.getElementById("resultado").value
						var cx5r= cx5 + "5"
						document.getElementById("resultado").value = cx5r
						document.getElementById("resultado").style.fontWeight = ""
					}
					if (cx6 == 54) {//6 tecla 6
						//alert ("Yodu pressed tswshe Escape keydd!"+x6);
						//x6 = 6
						var cx6 = document.getElementById("resultado").value
						var cx6r= cx6 + "6"
						document.getElementById("resultado").value = cx6r
						document.getElementById("resultado").style.fontWeight = ""
					}
					if (cx7 == 55) {//7 tecla 7
						//alert ("Yodu pressed tswshe Escape keydd!"+x7);
						//x7 = 7
						var cx7 = document.getElementById("resultado").value
						var cx7r= cx7 + "7"
						document.getElementById("resultado").value = cx7r
						document.getElementById("resultado").style.fontWeight = ""
					}
					if (cx8 == 56) {//8 tecla 8
						//alert ("Yodu pressed tswshe Escape keydd!"+x8);
						//x8 = 8
						var cx8 = document.getElementById("resultado").value
						var cx8r= cx8 + "8"
						document.getElementById("resultado").value = cx8r
						document.getElementById("resultado").style.fontWeight = ""
					}
					if (cx9 == 57) {//9 tecla 9
						//alert ("Yodu pressed tswshe Escape keydd!"+x9);
						//x9 = 9
						var cx9 = document.getElementById("resultado").value
						var cx9r= cx9 + "9"
						document.getElementById("resultado").value = cx9r
						document.getElementById("resultado").style.fontWeight = ""
					}
					if (cx0 == 48) {//10 tecla 0
						//alert ("Yodu pressed tswshe Escape key!"+x0);
						//x0 = 0
						var cx0 = document.getElementById("resultado").value
						var cx0r = cx0 + "0"
						document.getElementById("resultado").value = cx0r
						document.getElementById("resultado").style.fontWeight = ""
					}
				//Teclas funcoes---------------------------------------------------------------------------------	
					//if (xdel == 49) {//11 tecla delete / limpar 	necessita outra função//passada para outra função.
					//	alert ("Yodu pressed tswshe Escape keydd!"+x1);
					//}
					//if (cxraiz== 46) {//12 tecla raiz será usada a tecla de ponto"." //será apenas no mouse
									//pois a mais proxima seria o acento circunflexo.
									// mas fica fora da area de digitação para o projeto
					//	alert ("Yodu pressed tswshe Escape keydd!"+x2);
					//	cxrais == "/"///////////
					//}
					if (cxporc == 37 || !Id("resultado")) {//13 tecla %
						//alert ("Yodu pressed tswshe Escape keydd!"+x3);
						//cxporc = "%"
						var cxporc = document.getElementById("resultado").value
						var cxporcr= cxporc + " % "
						document.getElementById("resultado").value = cxporcr
						document.getElementById("resultado").style.fontWeight = ""
					}
					if (cxdiv == 47) {//14 tecla dividir
						//alert ("Yodu pressed tswshe Escape keydd!"+x4);
						//xdiv = "/"
						var cxdiv = document.getElementById("resultado").value
						var cxdivr= cxdiv + " / "
						document.getElementById("resultado").value = cxdivr
						document.getElementById("resultado").style.fontWeight = ""
					}
					if (cxvez == 42) {//15 tecla vezes
						//alert ("Yodu pressed tswshe Escape keydd!"+x5);
						//xvez= "*"
						var cxvez = document.getElementById("resultado").value
						var cxvezr= cxvez + " * "
						document.getElementById("resultado").value = cxvezr
						document.getElementById("resultado").style.fontWeight = ""
					}
					if (cxmenos == 45) {//16 tecla menos
						//alert ("Yodu pressed tswshe Escape keydd!"+x6);
						//xmenos = "-"
						var cxmenos = document.getElementById("resultado").value
						var cxmenosr= cxmenos + " - "
						document.getElementById("resultado").value = cxmenosr
						document.getElementById("resultado").style.fontWeight = ""
					}
					if (cxmais == 43) {//17 tecla mais
						//alert ("Yodu pressed tswshe Escape keydd!"+x7);
						//xmais = "+"
						var cxmais = document.getElementById("resultado").value
						var cxmaisr= cxmais + " + "
						document.getElementById("resultado").value = cxmaisr
						document.getElementById("resultado").style.fontWeight = ""
					}
					//anulado passado para resposta
					//if (xigual == 13) {//18 tecla resultado ou igual
						//alert ("Yodu pressed tswshe Escape keydd!"+x8);
						//xigual
					//}
					if (cxvir == 44) {//19 tecla ","" virgula
						//alert ("Yodu pressed tswshe Escape keydd!"+x9);
						//xvir= "."
						var cxvir = document.getElementById("resultado").value
						var cxvirr= cxvir + "."
						document.getElementById("resultado").value = cxvirr
						document.getElementById("resultado").style.fontWeight = ""
					}
					//-----------------------------------------------------------------------------------------	
			}
		*/
//Botoes de click----------------------------------------------------------------------------------------------
	// 1 linha de botoes---------------------------------------------------------------------------------------
		function limpar(){
			var tl = document.getElementById("resultado").value
			document.getElementById("resultado").value = ""
			document.getElementById("resultado").style.fontWeight = ""
			}
		function raiz(){
			var traiz = document.getElementById("resultado").value
			var traizr = Math.sqrt(traiz,2); 
			document.getElementById("resultado").value = traizr
			setTimeout(myTimerp2, 1)
  				function myTimerp2(){//erro quando não é número
					var traizrr = document.getElementById("resultado").value
					if(isNaN(traizrr)){						
						document.getElementById("resultado").value = ""
						document.getElementById("resultado").placeholder = " 0,00 "
						}
					}
			}
		function porcentagem(){
			var tp = document.getElementById("resultado").value
			var tpr= tp + " % "
			document.getElementById("resultado").value = tpr
			document.getElementById("resultado").style.fontWeight = ""
			}
		function divisao(){
			var td = document.getElementById("resultado").value
			var tdr= td + " / "
			document.getElementById("resultado").value = tdr
			document.getElementById("resultado").style.fontWeight = ""
			}
		//-----------------------------------------------------------------------------------------------
	//2 linha de botoes----------------------------------------------------------------------------------
		function um(){
			var tum = document.getElementById("resultado").value
			var tumr= tum + "1"
			document.getElementById("resultado").value = tumr
			document.getElementById("resultado").style.fontWeight = ""
			}
		function dois(){
			var tdois= document.getElementById("resultado").value
			var tdoisr= tdois + "2"
			document.getElementById("resultado").value = tdoisr
			document.getElementById("resultado").style.fontWeight = ""
			}
		function tres(){
			var ttres= document.getElementById("resultado").value
			var ttresr= ttres + "3"
			document.getElementById("resultado").value = ttresr
			document.getElementById("resultado").style.fontWeight = ""
			}
		function vezes(){
			var tvezes= document.getElementById("resultado").value
			var tvezesr= tvezes + " * "
			document.getElementById("resultado").value = tvezesr
			document.getElementById("resultado").style.fontWeight = ""
			}
		//-----------------------------------------------------------------------------------------------
	//3 linha de botoes----------------------------------------------------------------------------------
		function quatro(){
			var tquatro = document.getElementById("resultado").value
			var tquatror = tquatro + "4"
			document.getElementById("resultado").value = tquatror
			document.getElementById("resultado").style.fontWeight = ""
			}
		function cinco(){
			var tcinco= document.getElementById("resultado").value
			var tcincor= tcinco + "5"
			document.getElementById("resultado").value = tcincor
			document.getElementById("resultado").style.fontWeight = ""
			}
		function seis(){
			var tseis= document.getElementById("resultado").value
			var tseisr= tseis + "6"
			document.getElementById("resultado").value = tseisr
			document.getElementById("resultado").style.fontWeight = ""
			}
		function menos(){
			var tmenos= document.getElementById("resultado").value
			var tmenosr= tmenos + " - "
			document.getElementById("resultado").value = tmenosr
			document.getElementById("resultado").style.fontWeight = ""
			}
		//-----------------------------------------------------------------------------------------------
	//4 linha de botoes----------------------------------------------------------------------------------
		function sete(){
			var tsete= document.getElementById("resultado").value
			var tseter= tsete + "7"
			document.getElementById("resultado").value = tseter
			document.getElementById("resultado").style.fontWeight = ""
			}
		function oito(){
			var toito= document.getElementById("resultado").value
			var toitor= toito + "8"
			document.getElementById("resultado").value = toitor
			document.getElementById("resultado").style.fontWeight = ""
			}
		function nove(){
			var tnove= document.getElementById("resultado").value
			var tnover= tnove + "9"
			document.getElementById("resultado").value = tnover
			document.getElementById("resultado").style.fontWeight = ""
			}
		function mais(){
			var tmais= document.getElementById("resultado").value
			var tmaisr= tmais + " + "
			document.getElementById("resultado").value = tmaisr
			document.getElementById("resultado").style.fontWeight = ""
			}
		//-----------------------------------------------------------------------------------------------
	//5 linha de botoes----------------------------------------------------------------------------------
		function zero(){
			var tzero= document.getElementById("resultado").value
			var tzeror= tzero + "0"
			document.getElementById("resultado").value = tzeror
			document.getElementById("resultado").style.fontWeight = ""
			}
		function virgula(){
			var tvirgula= document.getElementById("resultado").value
			var tvirgular= tvirgula + ","
			document.getElementById("resultado").value = tvirgular
			document.getElementById("resultado").style.fontWeight = ""
			}
		//-----------------------------------------------------------------------------------------------
	//Resultados---------------------------------------------------------------------------------------------------
		function total(){//igual teclado
			var tr = document.getElementById("resultado").value
			var tra = tr.replace(/,/g, ".");
			var trb = eval(tra)//.replace(".",",")
			document.getElementById("resultado").value = trb//.replace(/./g, ",");
			document.getElementById("resultado").style.fontWeight = "bold"
			setTimeout(myTimerp3, 9)
			setTimeout(myTimerp4, 9)
  				function myTimerp3(){//erro quando não é número
					var trb = document.getElementById("resultado").value
					if(isNaN(trb)){						
						document.getElementById("resultado").value = ""
						document.getElementById("resultado").placeholder = " 0,00 "
						}
					}
			function myTimerp4(){
					var trb = document.getElementById("resultado").value
					document.getElementById("resultado").value = trb.replace(".",",")
					
				}
			}
		function clickmouse(event) {
			var cres = event.which || event.keyCode
			var cdel = event.which || event.keyCode
			var letras = event.which || event.keyCode
		
			if (cres == 13) {//19 tecla "="" igual
				//alert ("voce" + cres)
				//document.getElementById("resultado").value =  "resultadoa" + x1
				var cres = document.getElementById("resultado").value
				var cresra = cres.replace(/,/g, ".");
				var cresrb = eval(cresra)//.replace(".",",")
				document.getElementById("resultado").value = cresrb//.replace(/./g, ",");
				document.getElementById("resultado").style.fontWeight = "bold"
				setTimeout(myTimerp5, 1)
				setTimeout(myTimerp6, 1)
				function myTimerp5(){//erro quando não é número
					var cresrbz1 = document.getElementById("resultado").value
					if(isNaN(cresrbz1)){						
						document.getElementById("resultado").value = ""
						document.getElementById("resultado").placeholder = " 0,00 "
						}
					}
  				function myTimerp6(){
						var cresrbz = document.getElementById("resultado").value
						document.getElementById("resultado").value = cresrbz.replace(".",",")
						}
				}
			if (cdel == 8 || cdel == 46 ) {//19 tecla delete ou backspace
				document.getElementById("resultado").value = ""
				document.getElementById("resultado").style.fontWeight = ""
				}
			
			if (letras == 17 ||	letras == 108 || letras == 112 || letras == 65 || 
				letras == 66 || letras == 67 || letras ==  68 || letras == 69 || 
				letras == 70 || letras == 71 || letras ==  72 || letras == 73 || 
				letras == 74 || letras == 75 || letras ==  76 || letras == 77 || 
				letras == 78 || letras == 79 || letras ==  80 || letras == 81 || 
				letras == 82 || letras == 83 || letras ==  84 || letras == 85 || 
				letras == 86 || letras == 87 || letras ==  88 || letras == 89 || 
				letras == 90) {//19 tecla delete ou backspace
				
				alert("Não é um número! Favor digitar Apenas Números!")
				document.getElementById("resultado").value = " "
				setTimeout(myTimerp1, 9)
				}
  			function myTimerp1(){
  				document.getElementById("resultado").value = ""
				document.getElementById("resultado").placeholder = " 0,00 "
				}
			}
			
		//-----------------------------------------------------------------------------------------------------
			//teste para gerar teclas com valores recebidos

			//var x1 = x1a
			//var resultadoa = x1 // + xmais + x2
			/*var xb = 1;
			var xc = "+";
			var xd = 2;
			var xe = xb + xc + xd;
			
			document.getElementById("resultado").value =  "resultadoa" + xe*/
			//alert ("Yodu pressed tswshe Escape keydd!"+resultadoa)
		

/*

https://www.w3schools.com/js/js_cookies.asp  //cokies utilização
https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username  //cokies apresentação
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}*/

	//https://www.luiztools.com.br/post/como-usar-nodejs-mysql/