// Algoritmo con un condicional
function verificarEdad() {
    var edad = prompt("Ingresa tu edad:");
  
    if (edad >= 18) {
      alert("Eres mayor de edad. Puedes acceder al contenido.");
    } else {
      alert("Eres menor de edad. No puedes acceder al contenido.");
    }
  }
  
  // Algoritmo utilizando un ciclo
  function imprimirNumeros() {
    var resultado = "";
    for (var i = 1; i <= 5; i++) {
      resultado += i + " ";
    }
    alert("Números: " + resultado);
  }
  
  // Simulador interactivo
  function lanzarDado() {
    var resultado = Math.floor(Math.random() * 6) + 1;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
  