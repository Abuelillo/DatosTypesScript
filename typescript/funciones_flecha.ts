(function(){

    const miFuncion = function (a:string) {
        return a.toUpperCase();
    }
   
    const miFuncionF =(a:string) => a.toUpperCase();
    
    //console.log(miFuncion('Pepe'));
    //console.log(miFuncionF('Pepe'));
    
    const sumanN = function (a:number,b:number) {
        return a + b;
    }
    
    const miSumarN = (a:number,b:number) => a+b;
   
    //console.log(sumanN(2,2));
    //console.log(miSumarN(5,5));

    const hulk = {
        nombre:'Hulk',
        smash(){
            //con error
        //    setTimeout(function () {
        //        console.log(`${this.nombre} smash!!!`);
        //    },1000);
            //sin error
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            },1000);
            
        }
    }


    hulk.smash();
})()



