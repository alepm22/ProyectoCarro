import revision from "./RevisionFormato"
const cadena = document.querySelector("#Cadena");
const form = document.querySelector("#Controlador-form");
const posicion_inicial = document.querySelector("#posicion_inicial");
const comandos = document.querySelector("#Comandos");
const mensajes = document.querySelector("#mensajes");
form.addEventListener("input", (event) => {
  event.preventDefault();
  const cadenaValor = cadena.value || ""; // Si cadena.value es undefined usa una vacia
  const resultadoRevision = revision(cadenaValor);
  if (resultadoRevision) {// Si la cadena es válida, muestra la posición inicial y los comandos
    posicion_inicial.innerHTML = `<p>Posición inicial: ${resultadoRevision.posicion_inicial}</p>`;
    comandos.innerHTML = `<p>Comandos: ${resultadoRevision.comandos_movimientos}</p>`;
    mensajes.innerHTML = "<p> Mensajes:  </p>";
  } else {// Si la cadena no es válida
    posicion_inicial.innerHTML = "<p> Posición Inicial:</p>";
    comandos.innerHTML ="<p> Comandos:</p>";
    mensajes.innerHTML = "<p> Mensajes: Error en el formato  </p>";
  }
});