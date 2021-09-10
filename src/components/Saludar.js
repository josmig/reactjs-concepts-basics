import React from 'react';

export default function Saludar( props ){

    console.log(props);
    console.log(props.userInfo);

    return(
        <div>
            {/* <h2>Hola, {props.name} tiene {props.edad} años</h2> */}
            <h2>Hola , {props.userInfo.nombre} tiene {props.userInfo.edad}, y su color favorito es {props.userInfo.color}</h2>
        </div>
    );
}