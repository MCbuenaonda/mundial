import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Juego from './components/Juego';
import BuscarJuego from './components/BuscarJuego';
import { useFetchJuegos } from './hooks/useFetchJuegos';

const MundialApp = ({title, subtitle}) => {
    const [juego, setJuego] = useState('');
    const {data, loading} = useFetchJuegos(juego);
    const [mundial, setMundial] = useState()
    // const handle = () => {
    //     setMundial('Inglaterra 1900');
    // }

    // const handleAdd = () => {
    //     // setJuegos([...juegos, 'juego ' + (juegos.length + 1)]);
    //     // setjuegos(['juego ' + (juegos.length + 1), ...juegos]);
    //     // setjuegos(jgs => [...jgs, 'juego ' + (jgs.length + 1)]);
    // }
    // const [juegos, setJuegos] = useState([]);

    return (
        <>
            <h1>{ title } { mundial }</h1>
            <p>{ subtitle }</p>


            <BuscarJuego setJuego={ setJuego } />

            <div class="container text-center">
                <p>juegos de : {juego}</p>
            </div>


            <div class="text-center">
                <h2>
                    { loading ? 'cargando' : '' }
                </h2>
            </div>

            <div class="row" >
                {
                    data.map( juego => (
                        <Juego key={juego.id} juego={juego}/>
                    ))
                }                
            </div>            
        </>
    );
}

/**
 * parametros requeridos
 */
MundialApp.propTypes = {
    title: PropTypes.string.isRequired
}

/**
 * varlores por defecto
 */
MundialApp.defaultProps = {
    title: 'Mundial de Futbol',
    subtitle: 'Bienvenido'
}

export default MundialApp;