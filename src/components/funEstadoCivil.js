const funEstadoCivil =(ec)=>{
  
        switch (ec) {
      
          case 0:
            return "Soltero"
            
          case 1:
            return "Casado"
          
          case 2:
            return "Divorciado"
            
          case 3:
            return "Viudo"

          case 4:
            return "Unión libre"
                          
        
          default:
            return "Soltero"
        }
      

}
export default  funEstadoCivil;