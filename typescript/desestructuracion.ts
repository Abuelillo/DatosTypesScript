(() =>{
    const avenger = {
        nombre:'Steve',
        clave:'Capitan America',
        poder:'Droga'
    }

    //porpiedades de un objeto
    const extraer = ({nombre,poder}:any)=>{
        //const {nombre,clave,poder}= avenger;

        //console.log(nombre);
        //console.log(poder);
    }
    
    extraer(avenger);

    const avengers:string[] = ['Thor','Aironman','Spiderman'];
    //console.log(avengers[0]);
    //console.log(avengers[1]);

    //para arreglo
    const [paja, ,leon] = avengers;
    //console.log(paja);
    //console.log(leon);

    const extraerArr = ([paja,ojalata, ]:string[])=>{
        //const {nombre,clave,poder}= avenger;

        console.log(paja);
        console.log(ojalata);
    }
    extraerArr(avengers);
})()



