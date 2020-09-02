(() =>{
    
    interface Xmen{
        nombre:string;
        edad:number;
        poder?:string;
    }

    const enviarMision = (xmen:Xmen) =>{
        console.log(`Enviando a ${xmen.nombre}`);
    }
    const regresarAlCuartel = (xmen:Xmen) =>{
        console.log(`Enviando a ${xmen.nombre}`);
    }

    const wolverine: Xmen = {
        nombre:'Logan',
        edad:505
    }
 
    enviarMision(wolverine);
    regresarAlCuartel(wolverine);
    //console.log('Fin');
})()



