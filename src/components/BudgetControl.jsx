import { useEffect, useState } from "react"
import { formatQuantity } from "../helpers"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ({expenses, budget}) => {

    const [percent, setPercent] = useState(0);
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)    
    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.amount + total, 0)
        const totalAvailable = budget - totalSpent

        // Calcular el porcentaje gastado
        const newPercent = (((budget - totalAvailable)/ budget)*100).toFixed(2)
        setAvailable(totalAvailable)
        setSpent(totalSpent)
        
        setTimeout(() => {
            setPercent(newPercent)
        }, 1500)
    }, [expenses])
    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>   
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: '#3B82f6',
                        trailColor: '#F5F5F5',
                        textColor: '#3B82f6'
                    })}
                    value={percent}
                    text={`${percent}% Gastado`}
                />
            </div>
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

// 300 = 100%

export default BudgetControl
