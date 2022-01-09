import { formatDate, formatQuantity } from "../helpers"

const Expense = ({expense}) => {
    const {name, amount, category, id, date} = expense
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <div className="descripcion-gasto">
                    <p className="categoria">{category}</p>
                    <p className="nombre-gasto">{name}</p>
                    <p className="fecha-gasto">
                        Agregado el: {''}
                        <span>{formatDate(date)}</span>
                    </p>
                </div>
            </div>
            <p className="cantidad-gasto">{formatQuantity(amount)}</p>
        </div>
    )
}

export default Expense
