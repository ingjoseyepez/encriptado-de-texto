
/* ------ funcion de inscriptar texto ----- */

function encriptar() {
  let mensaje = document.getElementById("texto").value.toLowerCase();
  let encriptado = "";

  for(let i = 0; i < mensaje.length; i++){
      if(mensaje[i] == "a"){
        encriptado = encriptado + "ai"
      }
      else if(mensaje[i] == "e"){
        encriptado = encriptado + "enter"
      }
      else if(mensaje[i] == "i"){
        encriptado = encriptado + "imes"
      }
      else if(mensaje[i] == "o"){
        encriptado = encriptado + "ober"
      }
      else if(mensaje[i] == "u"){
        encriptado = encriptado + "ufat"
      }
      else{
        encriptado = encriptado + mensaje[i]
      }
  }
  document.getElementById("resultado").value = encriptado;
}

/* ------ funcion de desencriptar texto ----- */

function desencriptar() {
  let mensaje = document.getElementById("texto").value.toLowerCase();
  let desencriptado = "";

  for(let i = 0; i < mensaje.length; i++){
      if(mensaje[i] == "a"){
         desencriptado =desencriptado + "a"
          i = i+1;
      }
      else if(mensaje[i] == "e"){
         desencriptado =desencriptado + "e"
          i = i+4;
      }
      else if(mensaje[i] == "i"){
         desencriptado =desencriptado + "i"
          i = i+3;
      }
      else if(mensaje[i] == "o"){
         desencriptado =desencriptado + "o"
          i = i+3;
      }
      
      else if(mensaje[i] == "u"){
         desencriptado =desencriptado + "u"
          i = i+3;
      }
      else{
         desencriptado =desencriptado + mensaje[i];
      }
      document.getElementById("resultado").value =desencriptado;
  }
}

/* ------funcion de copiar texto----- */

function copiarTexto() {
  var resultado = document.getElementById("resultado").value;

  if (resultado) {
    navigator.clipboard.writeText(resultado)
      .then(() => {
        alert("Texto copiado al portapapeles.");
      })
      .catch(err => {
        console.error('Error al copiar el texto: ', err);
        alert("Hubo un error al copiar el texto.");
      });
  } else {
    alert("No hay texto para copiar.");
  }
}

/* ------ efecto maquina de escribir ----- */

function escribirEnPantalla(texto){
  let arr=texto.split("");
  i=0;
 let intervalo= setInterval(function(){
    if(i==arr.length-1){ 
      document.getElementById("titulo").innerHTML+=arr[i];
      clearInterval(intervalo);} 
    else {
    if(arr[i]==" "){
     document.getElementById("titulo").innerHTML+=arr[i];
     document.getElementById("titulo").innerHTML+=arr[i+1];
      i+=2;
    }else{
    document.getElementById("titulo").innerHTML+=arr[i];
    i++;
      }
    }
  },500); 
}

escribirEnPantalla("ENCRIPTADOR DE TEXTO");

