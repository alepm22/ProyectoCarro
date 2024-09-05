import revision from "./RevisionFormato";

function controlador(comandos){
      const respuesta= revision(comandos)
      return respuesta;
}


export default controlador;