import {useState} from 'react'
import Message from './Message'

const NewBudget = ({ budget, setBudget }) => {
    const [message,setMessage] = useState('')

    const handleBudget = e => {
        e.preventDefault()
        if(!Number(budget) || Number(budget) < 0){
            setMessage('No es un presupuesto valido');
        } else {
            console.log('Es un presupuesto valido');
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form 
                className='formulario'
                onSubmit={handleBudget}
            >
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input 
                        type="text"
                        className='nuevo-presupuesto'
                        placeholder='Añade tu Presupuesto'
                        value={budget}
                        onChange={e => setBudget(e.target.value) }                    
                    />
                </div>
                <input type="submit" value="Añadir" />
                {message && <Message type="error">{message}</Message>}
            </form>
        </div>
    )
}

export default NewBudget
