import React, { useState, useEffect } from 'react';
import { getJuegos } from '../helpers/getJuegos'

export const useFetchJuegos = (juego) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect( () => {
        getJuegos(juego).then( juegos => setState({
            data: juegos,
            loading: false
        }) )
    }, [juego])

    return state;
}
