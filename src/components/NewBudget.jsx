import React from 'react'

const NewBudget = () => {
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' action="">
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input 
                        type="text"
                        className='nuevo-presupuesto'
                        placeholder='Añade tu Presupuesto'                    
                    />
                </div>
                <input type="submit" value="Añadir" />
            </form>
        </div>
    )
}

export default NewBudget
