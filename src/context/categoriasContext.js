import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const categoriaContext = createContext();

const CategoriasProvider = props => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const getCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await axios.get(url)
            setCategorias(categorias.data.drinks);
        }
        getCategorias();
    }, [])

    return(
        <categoriaContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </categoriaContext.Provider>
    );
}

export default CategoriasProvider;