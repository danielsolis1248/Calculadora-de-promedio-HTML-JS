function calcularPromedio() {
  let notas = document.querySelectorAll(".nota");
  let suma = 0;
  let cantidad = 0;

  notas.forEach(nota => {
    if (nota.value) {
      suma += parseFloat(nota.value);
      cantidad++;
    }
  });

  let promedio = cantidad > 0 ? (suma / cantidad).toFixed(2) : 0;

  // Mostrar resultado en la ventana modal
  document.getElementById("resultado").textContent = "Tu promedio es: " + promedio;
  document.getElementById("modal").style.display = "block";
}

function limpiarCampos() {
  let inputs = document.querySelectorAll("#tablaCalificaciones input");
  inputs.forEach(input => {
    input.value = "";
  }) 
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
