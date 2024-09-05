import revision from "./RevisionFormato";

function controlador(cadenaValor) {
      const resultadoRevision = revision(cadenaValor);
      const posicionInicialX = resultadoRevision.posicion_inicial[0];
      const posicionInicialY = resultadoRevision.posicion_inicial[2];
      const posicionInicialCardinal = resultadoRevision.posicion_inicial[3];
      const direccionCardinal = resultadoRevision.comandos_movimientos;
      const respuesta = MovimientosDerecha(posicionInicialCardinal, direccionCardinal);
            return `${posicionInicialX},${posicionInicialY}${respuesta}`;
}

function MovimientosDerecha(posicionInicialCardinal, direccionCardinal) {
      let nuevaDireccionCardinal = posicionInicialCardinal;

      if (direccionCardinal === "D") {
      switch (posicionInicialCardinal) {
            case "N":
                  nuevaDireccionCardinal = "E";
            break;
      default:
            break;
      }
      }
return nuevaDireccionCardinal;
}

export default controlador;