class Publicacion{
  guardarPublicacion(texto)
    {
        let respuesta="";
       if(texto =="")
       {
         respuesta= "No se puede ingresar un post sin texto"
       }
      //  else
      //  {
      //     if(codigoAAdivinar.length>=4 && codigoAAdivinar.length<=6)
      //     {
      //          this._codigoSecreto=codigoAAdivinar;
      //          respuesta= this._codigoSecreto;
      //     } 
      //     else 
      //     {
      //       respuesta= "El codigo a adivinar debe ser mayor a 4 y menor a 6 digitos";
      //     }
      //  }

       return respuesta;
        
    }
}

export default Publicacion;
