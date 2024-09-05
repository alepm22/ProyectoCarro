function controlador(comandos){
 
   const formatoRegex = /^(\d+),(\d+)\/(\d+),(\d+)([NSEO])$/;
  
   const coincidencia = comandos.match(formatoRegex);
   if (coincidencia) {
         const posX = coincidencia[3];
         const posY = coincidencia[4];
         const direccion = coincidencia[5];
         const cadenaDevolucion = `${posX},${posY}${direccion}`;
         return cadenaDevolucion;
   }

   return false;
}


export default controlador;