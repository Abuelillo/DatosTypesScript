(function(){

    //1 -> obligatorios, 2-> opcionales, 3-> por defecto
    function activar(quien   : string, //obligatorio
                     momento?: string, //opcional
                     objeto  : string ='batiseñal') { //por defecto
                    
       
        if (momento) {
            console.log(`${quien} activo la ${objeto} en la ${momento}`);
        } else {
            console.log(`${quien} activo la ${objeto}`);
        }
        
    }

     activar('Gordon','tarde','bat-nave');

})()



