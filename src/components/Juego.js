import React from 'react'

const Juego = ({juego}) => {
    const handleAdd = (e) =>  console.log(e);
    
    return (
        <div class="col-md-3 p-3">
            <div class="card">
                <div class="card-header">
                    {juego.confederacion['nombre']}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{juego.fase['nombre']} <small>{juego.jornada['nombre']}</small></h5>
                    <h5 class="card-title"> <small>{juego.ciudad['estadio']} {juego.ciudad['nombre']}, {juego.paisL['siglas']} </small></h5>
                    <h5 class="card-title"> <small>{juego.fecha} </small></h5>
                    <p class="card-text">{juego.paisL['nombre']} - {juego.paisV['nombre']}</p>
                    <a href="#" onClick={ (e) => handleAdd(e) } class="btn btn-primary">Jugar</a>
                </div>
            </div>
        </div>
    )
}

export default Juego; 