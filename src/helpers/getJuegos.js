export const getJuegos = async(juego) => {
    const url = `http://127.0.0.1:8000/api/juegos/${juego}`;
    const resp = await fetch(url);
    const data = await resp.json(); 
    
    return data;
}