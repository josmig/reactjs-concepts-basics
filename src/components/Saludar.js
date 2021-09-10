import React from 'react';

export default function Saludar( props ){

    /* console.log(props); */
    /* console.log(props.userInfo); */

    const {userInfo,saludar} = props;
    const{nombre} = userInfo;
    /* console.log(userInfo); */
    return(
        <div>
            {/* <h2>Hola, {props.name} tiene {props.edad} años</h2> */}
            {/* <h2>Hola , {props.userInfo.nombre} tiene {props.userInfo.edad}, y su color favorito es {props.userInfo.color}</h2> */}
            {/* <button onClick={()=>props.saludar(props.userInfo.nombre)}>Enviar Saludo</button> */}
            <button onClick={()=> saludar(nombre)}>Saludar</button>
        </div>
    );
}