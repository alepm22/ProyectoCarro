import revision from "./RevisionFormato";
import controlador from "./Controlador";

const cadena = document.querySelector("#Cadena");
const form = document.querySelector("#Controlador-form");
const posicion_inicial = document.querySelector("#posicion_inicial");
const comandos = document.querySelector("#Comandos");
const posicion_final = document.querySelector("#Posicion_final");
const mensajes = document.querySelector("#mensajes");

const mostrarMensaje = (mensaje) => {
  mensajes.innerHTML = `<p>${mensaje}</p>`;
};

const actualizarPosicionInicialYComandos = () => {
  const cadenaValor = cadena.value || "";
  const resultadoRevision = revision(cadenaValor);
  
  if (resultadoRevision) {
    posicion_inicial.innerHTML = `<p>Posición inicial: ${resultadoRevision.posicion_inicial}</p>`;
    comandos.innerHTML = `<p>Comandos: ${resultadoRevision.comandos_movimientos}</p>`;
    mostrarMensaje("");
  } else {
    posicion_inicial.innerHTML = "<p> Posición Inicial:</p>";
    comandos.innerHTML = "<p> Comandos:</p>";
    mostrarMensaje("Error en el formato");
  }
};

form.addEventListener("input", () => { // Evento Mientras el input esta en cambio
  actualizarPosicionInicialYComandos();
});

form.addEventListener("submit", (event) => { // Evento cuando se apreta el boton ejecutar
  event.preventDefault();
  posicion_final.innerHTML = `<p>Posición Final: ${controlador(cadena.value)}</p>`;
});
