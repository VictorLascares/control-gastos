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
            </form>
        </div>
    )
}

export default Modal
