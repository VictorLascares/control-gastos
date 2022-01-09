import { useState } from 'react'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({setModal, animateModal, setAnimateModal}) => {
    const [spending, setSpending] = useState({
        name: '',
        amount: '',
        category: ''
    })

    const hideModal = () => {
        setAnimateModal(false)
        
        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    const handleChange = e => {
        const {name, value}  = e.target
        if(name == 'amount'){
            console.log(spending.amount);
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

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CloseBtn} 
                    alt=" Cerrar Modal"
                    onClick={hideModal} 
                />
            </div>
            <form className={`formulario ${animateModal ? "animar": 'cerrar'}`}>
                <legend>Nuevo Gasto</legend>
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
                    value="Añadir Gasto"
                />
            </form>
        </div>
    )
}

export default Modal
