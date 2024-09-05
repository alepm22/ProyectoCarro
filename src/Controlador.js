function controlador(comandos){

const formatoRegex = /^(\d+),(\d+)([NSEO])$/;

const coincidencia = comandos.match(formatoRegex);
if (coincidencia) {
      return true;
}

console.log("Formato incorrecto");
return false;
}


export default controlador;