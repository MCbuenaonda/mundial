import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BuscarJuego = ({setJuego}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setJuego(inputValue);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit} class="container">
            <div class="mb-3">
                <label for="word" class="form-label">Buscar partidos</label>
                <input type="text" class="form-control" id="word" value={inputValue} onChange={ handleInputValue } />
            </div>
        </form>

    )
}

BuscarJuego.propTypes = {
    setJuego: PropTypes.func.isRequired
}

export default BuscarJuego;