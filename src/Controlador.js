import revision from "./RevisionFormato";
let matrizY=0;
let matrizX=0;

function controlador(cadenaValor) {
      const resultadoRevision = revision(cadenaValor);
      matrizY = parseInt(cadenaValor[2], 10);
      matrizX = parseInt(cadenaValor[0], 10);
      const respuesta = controlarMovimientos(resultadoRevision.posicion_inicial, resultadoRevision.comandos_movimientos, matrizX, matrizY);
      return `${respuesta}`;
}

function controlarMovimientos(Posicion, Comandos, matrizX, matrizY) {
      let PosicionFinalX = Posicion[0];
      let PosicionFinalY = Posicion[2];
      let CardinalidadFinal = Posicion[3];

      if (Comandos === "") {
            return `${PosicionFinalX},${PosicionFinalY}${CardinalidadFinal}`;
      } else {
            if (Comandos[0] == "D") {
                  CardinalidadFinal = GirarDerecha(CardinalidadFinal);
                  const posicion_actual = `${PosicionFinalX},${PosicionFinalY}${CardinalidadFinal}`;
                  return controlarMovimientos(posicion_actual, Comandos.slice(1), matrizX, matrizY);
            } else if (Comandos[0] == "I") {
                  CardinalidadFinal = GirarIzquierda(CardinalidadFinal);
                  const posicion_actual = `${PosicionFinalX},${PosicionFinalY}${CardinalidadFinal}`;
                  return controlarMovimientos(posicion_actual, Comandos.slice(1), matrizX, matrizY);
            } else if (Comandos[0] == "A") {
                  const posicion_actual = Avanzar(PosicionFinalX, PosicionFinalY, CardinalidadFinal, matrizX, matrizY);
                  return controlarMovimientos(posicion_actual, Comandos.slice(1), matrizX, matrizY);
            }
      }
}

function GirarDerecha(posicionInicialCardinal) {
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

function GirarIzquierda(posicionInicialCardinal) {
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

function Avanzar(posicionCambioX,posicionCambioY,cardinalidad) {
      let nuevaPosicionY = parseInt(posicionCambioY, 10);
      let nuevaPosicionX = parseInt(posicionCambioX, 10);
            switch (cardinalidad) {
                  case "N":
                        nuevaPosicionY = nuevaPosicionY+1;
                        if(nuevaPosicionY<=matrizY){
                              break;
                        }else{
                              nuevaPosicionY = nuevaPosicionY-1;
                        }
                  break;
                  case "S":
                        nuevaPosicionY = nuevaPosicionY-1;
                        if(nuevaPosicionY>=0){
                              break;
                        }else{
                              nuevaPosicionY = nuevaPosicionY+1;
                        }
                  break;
                  case "E":
                        nuevaPosicionX = nuevaPosicionX+1;
                        if(nuevaPosicionX<=matrizX){
                              break;
                        }else{
                              nuevaPosicionX = nuevaPosicionX-1;
                        }
                  break;
                  case "O":
                        nuevaPosicionX = nuevaPosicionX-1;
                        if(nuevaPosicionX>=0){
                              break;
                        }else{
                              nuevaPosicionX = nuevaPosicionX+1;
                        }
                  break;
            default:
                  break;
            }
return `${nuevaPosicionX},${nuevaPosicionY}${cardinalidad}`;
}

export default controlador;
