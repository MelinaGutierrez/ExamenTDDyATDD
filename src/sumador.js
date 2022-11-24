class Publicacion{
  guardarPublicacion(texto)
    {
        let respuesta="";
       if(texto =="")
       {
         respuesta= "No se puede ingresar un post sin texto"
       }
       return respuesta;   
    }
    contarCantOcurre(texto){
      if(texto=="")
    {
      return 0;
    }
    let numeros=texto.split(new RegExp(''));
    let total=0;
    for(let ind = 0;ind < numeros.length; ind++){
      total+=this.sumarSiEsNumero(numeros[ind]);
    }
    return total;
    }
    sumarSiSeRepite(palabra){
      let suma=0;
      if(!isNaN(palabra)){
        if(palabra==texto.numeros){
          suma= parseInt(palabra);
        }
      }
      return suma;
    } 
  
}

export default Publicacion;
