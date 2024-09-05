function revision(comandos){
    // Define una expresión regular para el formato el + verifica que por lo menos exista un comando
    const formatoRegex = /^(\d+),(\d+)\/(\d+),(\d+)([NSEO])\/([IDAV]+)$/;
    // Intenta hacer coincidir la cadena de entrada con la expresión
    const coincidencia = comandos.match(formatoRegex);
    if (coincidencia) {
        const posX = coincidencia[1];
        const posY = coincidencia[2];
        const posXI = coincidencia[3];
        const posYI = coincidencia[4];
        if(posXI<=posX &&  posYI<=posY){
        const direccion = coincidencia[5];
        const cadenaDevolucion = `${posXI},${posYI}${direccion}`;
        return cadenaDevolucion;
        }
}

// La cadena de entrada no tiene el formato correcto
  return false;
}


export default revision;