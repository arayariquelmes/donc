import axios from "axios";

const getAll = async()=>{
    const url = process.env.URL_CHARACTERS;
    //console.log(`llamar a funcion de rick y morty ${url}`);
    try{
        let resultado = await axios.get(url);

        return resultado.data.results;
    }catch(err){
        throw new Error(`se fue a la b cabros`);
    }
    /*let promesa = new Promise((cuandoFuncione, reject)=>{
        resultado.then(res=>{
            cuandoFuncione(res.data.results);
        }).catch(err=>{
            reject(`se fue a la b cabros`);
        });
    });

    return promesa;
    */

}

function get(id){
    console.log("esto recibe un id");
}
let CANTIDAD_PERSONAJES =20;
CANTIDAD_PERSONAJES = get;

export {getAll,get, CANTIDAD_PERSONAJES};