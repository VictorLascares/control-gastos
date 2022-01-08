import CloseBtn from '../img/cerrar.svg'

const Modal = ({setModal, animateModal, setAnimateModal}) => {

    const hideModal = () => {
        setAnimateModal(false)
        
        setTimeout(() => {
            setModal(false)
        }, 500)
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
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number" 
                        placeholder='Añade la cantidad del gasto'
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select 
                        id="categoria"
                    >
                        <option selected disabled value="">-- Seleccione --</option>
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
