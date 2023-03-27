import bootstrap from './bootstrap.js';
import {getAll, CANTIDAD_PERSONAJES} from './services/characters-service.js';

const main = async()=>{
    console.log("Aqui partio la custion");

    try{
        const promesa = getAll();
        const res = await promesa;
        /*promesa.then((res)=>{

  
         }) */
    
        console.log(`La promesa se resolvio papu`);
        let personajes = res;
        console.log("cantidad de personajes " + personajes.length);
        console.log("Esto se esta ejecutando despues de la promesa pero va a salir antes");
    }catch(e){
        console.log(`error papu ${e}`);
    }
}

const funcionHija =  async()=>{
    console.log(`Aqui parte la aplicacion`);
    //main().then((r)=>{
    //    console.log(`aqui finaliza la app`);
    //});
    await main();
    console.log(`aqui finaliza la app`);
}

bootstrap();
funcionHija();

//let res = getAll();
//console.log(res);
//console.log(process.env);
//CANTIDAD_PERSONAJES(1);c
