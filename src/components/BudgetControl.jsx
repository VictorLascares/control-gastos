import { useEffect, useState } from "react"
import { formatQuantity } from "../helpers"

const BudgetControl = ({expenses, budget}) => {
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)    
    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.amount + total, 0)
        const totalAvailable = budget -totalSpent
        console.log(totalSpent);
        setSpent(totalSpent)
        setAvailable(totalAvailable)
    }, [expenses])
    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>Grafica</div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span>{formatQuantity(budget)}
                </p>
                <p>
                    <span>Disponible: </span>{formatQuantity(available)}
                </p>
                <p>
                    <span>Gastado: </span>{formatQuantity(spent)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl
