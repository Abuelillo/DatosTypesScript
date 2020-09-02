(function(){
    function saludar( nombre:string ) {
        console.table( 'Hola ' + nombre ); // Hola Logan
    }
    
    
    const wolverine = {
        nombre: 'Logan'
    };
    
    saludar( wolverine.nombre );

    let mensaje : string = 'hola';
    let numero : number = 123;
    let booleando: boolean = true;
    let hoy: Date = new Date();

    let cualquiercosa;
    cualquiercosa = mensaje;
    cualquiercosa= numero;
    cualquiercosa= booleando;
    cualquiercosa=hoy;

    let spiderman = {
        nombre:'Peter',
        edad:30
    }

    spiderman ={
        nombre:'Junior',
        edad:10
    }


})()



