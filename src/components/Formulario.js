import React, { useContext } from 'react';
import { categoriaContext } from '../context/categoriasContext';

const Formulario = () => {
    const { categorias } = useContext( categoriaContext );
    console.log(categorias);
    return (
        <form action="" className="col-12">
            <fieldset className="text-center">
                <legend>Busca tus bebidas por categoría o ingrediente</legend>
            </fieldset>
            <div className="d-flex justify-content-center col-md-12">
                <div className="row col-md-12">
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="ingrediente"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4">
                        <select name="categoria" className="form-control">
                            <option value="">-- Selecciona la categoría</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input type="submit" className="btn btn-primary" value="Buscar" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Formulario
