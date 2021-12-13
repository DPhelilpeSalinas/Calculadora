/*
https://www.w3schools.com/jsref/event_key_which.asp

<input id="resp"type="text" size="50" onkeypress="myFunction(event)"> 

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_which2 //identificar tecla
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_which //identificar tecla 2
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup //passar teclas para maiusculo*/


/*
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
		//var xdel = event.which;//11 tecla delete / limpar //passada para outra função.
		var xraiz = event.which;//12 tecla raiz
		var xporc = event.which;//13 tecla %
		var xdiv = event.which;//14 tecla /
		var xvez = event.which;//15 tecla *
		var xmenos = event.which;//16 tecla -
		var xmais = event.which;//17 tecla +
		var xigual = event.which;//18 tecla =
		var xvir = event.which;//19 tecla ,

		if (x1a == 49) {//1 tecla 1
			alert ("Yodu pressed tswshe Escape keydd!"+x1);
			x1a = "1"
		}
		if (x2 == 50) {//2 tecla 2
			//alert ("Yodu pressed tswshe Escape keydd!"+x2);
			x2 = 2
		}
		if (x3 == 51) {//3 tecla 3
			//alert ("Yodu pressed tswshe Escape keydd!"+x3);
			x3 = 3
		}
		if (x4 == 52) {//4 tecla 4
			//alert ("Yodu pressed tswshe Escape keydd!"+x4);
			x4 = 4
		}
		if (x5 == 53) {//5 tecla 5
			//alert ("Yodu pressed tswshe Escape keydd!"+x5);
			x5 = 5
		}
		if (x6 == 54) {//6 tecla 6
			//alert ("Yodu pressed tswshe Escape keydd!"+x6);
			x6 = 6
		}
		if (x7 == 55) {//7 tecla 7
			//alert ("Yodu pressed tswshe Escape keydd!"+x7);
			x7 = 7
		}
		if (x8 == 56) {//8 tecla 8
			//alert ("Yodu pressed tswshe Escape keydd!"+x8);
			x8 = 8
		}
		if (x9 == 57) {//9 tecla 9
			//alert ("Yodu pressed tswshe Escape keydd!"+x9);
			x9 = 9
		}
		if (x0 == 48) {//10 tecla 0
			//alert ("Yodu pressed tswshe Escape keydd!"+x0);
			x0 = 0
		}
			//if (xdel == 49) {//11 tecla delete / limpar 	necessita outra função//passada para outra função.
			//	alert ("Yodu pressed tswshe Escape keydd!"+x1);
			//}
		if (xraiz== 46) {//12 tecla raiz será usada a tecla de ponto"." 
						//pois a mais proxima seria o acento circunflexo.
						// mas fica fora da area de digitação para o projeto
			//alert ("Yodu pressed tswshe Escape keydd!"+x2);
			xrais == "/"///////////
		}
		if (xporc == 37) {//13 tecla %
			//alert ("Yodu pressed tswshe Escape keydd!"+x3);
			xporc = "%"
		}
		if (xdiv == 47) {//14 tecla dividir
			//alert ("Yodu pressed tswshe Escape keydd!"+x4);
			xdiv = "/"
		}
		if (xvez == 42) {//15 tecla vezes
			//alert ("Yodu pressed tswshe Escape keydd!"+x5);
			xvez= "*"
		}
		if (xmenos == 45) {//16 tecla menos
			//alert ("Yodu pressed tswshe Escape keydd!"+x6);
			xmenos = "-"
		}
		if (xmais == 43) {//17 tecla mais
			//alert ("Yodu pressed tswshe Escape keydd!"+x7);
			xmais = "+"
		}
		if (xigual == 13) {//18 tecla resultado ou igual
			//alert ("Yodu pressed tswshe Escape keydd!"+x8);
			//xigual
		}
		if (xvir == 44) {//19 tecla ","" virgula
			//alert ("Yodu pressed tswshe Escape keydd!"+x9);
			x= "."
		}
	}
		function uniKeyCode(event) {
			var key = event.which || event.keyCode
			if (key== 13) {//19 tecla ","" virgula
				alert ("Yodu pressed tswshe Escape keydd!"+key)
			//document.getElementById("resultado").value =  "resultadoa" + x1
			}
		}*/

function myFunction(event) {
	var xigual = event.which;//18 tecla =
	if (xigual == 13) {//18 tecla resultado ou igual
		var tr = document.getElementById("resultado").value
			var tra = tr.replace(/,/g, ".");
			var trb = eval(tra)//.replace(".",",")
			document.getElementById("resultado").value = trb//.replace(/./g, ",");
			document.getElementById("resultado").style.fontWeight = "bold"
		//xigual
		}
	}
	//----------------------------------------------------------------------------------
		function limpar(){
			var tl = document.getElementById("resultado").value
			document.getElementById("resultado").value = ""
			document.getElementById("resultado").style.fontWeight = ""
			}
		function raiz(){
			var traiz = document.getElementById("resultado").value
			var traizr = traiz + " ** " 
			document.getElementById("resultado").value = traizr
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
	//----------------------------------------------------------------------------------
	//----------------------------------------------------------------------------------
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
	//----------------------------------------------------------------------------------
	//----------------------------------------------------------------------------------
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
	//----------------------------------------------------------------------------------
	//----------------------------------------------------------------------------------
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
	//----------------------------------------------------------------------------------
	//----------------------------------------------------------------------------------
		function zero(){
			var tzero= document.getElementById("resultado").value
			var tzeror= tzero + "0"
			document.getElementById("resultado").value = tzeror
			document.getElementById("resultado").style.fontWeight = ""
			}
		function virgula(){
			var tvirgula= document.getElementById("resultado").value
			var tvirgular= tvirgula + "."
			document.getElementById("resultado").value = tvirgular
			document.getElementById("resultado").style.fontWeight = ""
			}
	//----------------------------------------------------------------------------------
		function total(){
			//teste para pegar sequencia digitada
			var tr = document.getElementById("resultado").value
			var tra = tr.replace(/,/g, ".");
			var trb = eval(tra)//.replace(".",",")
			document.getElementById("resultado").value = trb//.replace(/./g, ",");
			document.getElementById("resultado").style.fontWeight = "bold"
			}
			
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