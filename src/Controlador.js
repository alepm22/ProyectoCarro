function controlador(comandos){

   const formatoRegex = /^(\d+),(\d+)([NSEO])$/;

   const coincidencia = comandos.match(formatoRegex);
   if (coincidencia) {
         return comandos;
   }

   return false;
}


export default controlador;