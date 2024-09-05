import revision from "./RevisionFormato";

function controlador(cadenaValor) {
      const resultadoRevision = revision(cadenaValor);
      const respuesta = ControladorMovimientos(resultadoRevision.posicion_inicial, resultadoRevision.comandos_movimientos);
            return `${respuesta}`;
}

function ControladorMovimientos(Posicion, Comandos) {
      let PosicionFinalX = Posicion[0];
      let PosicionFinalY = Posicion[2];
      let CardinalidadFinal = Posicion[3];
      if(Comandos === "")
      {
            return `${PosicionFinalX},${PosicionFinalY}${CardinalidadFinal}`;
      }else{
            if(Comandos[0] == "D"){
                  CardinalidadFinal=MovimientosDerecha(CardinalidadFinal);
                  const posicion_actual= `${PosicionFinalX},${PosicionFinalY}${CardinalidadFinal}`
                  return ControladorMovimientos(posicion_actual, Comandos.slice(1))
            }else if(Comandos[0]== "I"){
                  CardinalidadFinal=MovimientosIzquierda(CardinalidadFinal);
                  const posicion_actual= `${PosicionFinalX},${PosicionFinalY}${CardinalidadFinal}`
                  return ControladorMovimientos(posicion_actual, Comandos.slice(1))
            }
      }
}

function MovimientosDerecha(posicionInicialCardinal) {
      let nuevaDireccionCardinal = posicionInicialCardinal;
            switch (posicionInicialCardinal) {
                  case "N":
                        nuevaDireccionCardinal = "E";
                        break;
                  case "E":
                        nuevaDireccionCardinal = "S";
                        break;
                  case "S":
                        nuevaDireccionCardinal = "O";
                  break;
                  case "O":
                        nuevaDireccionCardinal = "N";
                  break;
            default:
            break;
      }
return nuevaDireccionCardinal;
}

function MovimientosIzquierda(posicionInicialCardinal) {
      let nuevaDireccionCardinal = posicionInicialCardinal;
            switch (posicionInicialCardinal) {
                  case "N":
                        nuevaDireccionCardinal = "O";
                  break;
                  case "E":
                        nuevaDireccionCardinal = "N";
                        break;
                  case "S":
                        nuevaDireccionCardinal = "E";
                  break;
                  case "O":
                        nuevaDireccionCardinal = "S";
                  break;
            default:
                  break;
            }
return nuevaDireccionCardinal;
}

export default controlador;