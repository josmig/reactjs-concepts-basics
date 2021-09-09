import React from 'react'; //importancion para utilizar react


//component (ojo una clase solo tiene un export por defecto)
export default function Inicio(){

    const miFuncion = () => {
        console.log('Hola mundo');
    }
    return(
        <div className="hijo">
            <h2>By: Miguel Pantigoso</h2>            
            
        </div>
    )
}

//otro component (los otros componentes solo se les pone la palabra export)
//Es recomendable tener componentes por separado , pero tambien depende del a situacion.
export function Persona(){
    return(
        <div>
            <p>Pepe Lucho</p>
        </div>
    )
}
/* export default Inicio; */