import { useState, useEffect } from 'react'
import Message from './Message'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({setModal, animateModal, setAnimateModal, saveExpense, editExpense}) => {
    const [spending, setSpending] = useState({
        name: '',
        amount: '',
        category: ''
    })
    useEffect(() => {
        if (Object.keys(editExpense).length > 0) {
            setSpending({
                name: editExpense.name,
                amount: editExpense.amount,
                category: editExpense.category,
                id: editExpense.id,
                date: editExpense.date
            })
        }
    }, [])
    const [message, setMessage] = useState('')

    const hideModal = () => {
        setAnimateModal(false)
        
        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    const handleChange = e => {
        const {name, value}  = e.target
        if(name == 'amount'){
            setSpending(prevSpending => ({
                ...prevSpending,
                [name]: Number(value)
            }))
            return
        }
        setSpending(prevSpending => ({
            ...prevSpending,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        // Validación del formulario
        if(Object.values(spending).includes('')){
            setMessage('Todos los Campos son obligatorios')

            setTimeout(() => {
                setMessage('')
            },3000)
            return
        }

        saveExpense(spending)
        hideModal()
    }

    

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CloseBtn} 
                    alt=" Cerrar Modal"
                    onClick={hideModal} 
                />
            </div>
            <form
                onSubmit={handleSubmit}
                className={`formulario ${animateModal ? "animar": 'cerrar'}`}
            >
                <legend>{editExpense.name ?'Editar Gasto': 'Nuevo Gasto'}</legend>
                {message && <Message type="error">{message}</Message>}

                <div className="campo">
                    <label htmlFor="nombre">Nombre de Gasto</label>
                    <input
                        id='nombre'
                        type="text" 
                        placeholder='Añade el Nombre del Gasto'
                        value={spending.name}
                        onChange={handleChange}
                        name='name'
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number" 
                        placeholder='Añade la cantidad del gasto'
                        value={spending.amount}
                        onChange={handleChange}
                        name='amount'
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select 
                        id="categoria"
                        value={spending.category}
                        onChange={handleChange}
                        name='category'
                    >
                        <option value="" disabled>-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input 
                    type="submit"
                    value={editExpense.name ?'Guardar Cambios': 'Añadir Gasto'}
                />
            </form>
        </div>
    )
}

export default Modal
