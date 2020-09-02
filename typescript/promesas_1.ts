(() =>{
    console.log('Inicio');

    const prom = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('se termino el tiemout');
            //reject('se termino con err el tiemout');
        },1000)
    });

    prom
    .then(mensaje => console.warn(mensaje))
    .catch(err=>{console.trace(err)})

    console.log('Fin');
})()



