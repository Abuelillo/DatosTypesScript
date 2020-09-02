(() =>{
    
    const retirarDinero = (montoRetirar:number):Promise<number> =>{
        let dineroActual = 1000;

        return new Promise((result,reject)=>{
            if (montoRetirar > dineroActual) {
                reject(`No hay suficiente fondo`);
            } else {
                dineroActual-=montoRetirar;
                result(dineroActual)
            }
        });
    }

    retirarDinero(200)
    .then(res=>console.log(`Me queda ${res}`))
    .catch(console.warn);
    //console.log('Fin');
})()



