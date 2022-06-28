import { useEffect, useState } from "react"
import { formatQuantity } from "../helpers"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ({expenses, setExpenses, budget, setBudget , setIsValidBudget}) => {

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

    const handleResetApp = () => {
        const result = confirm('¿Deseas reiniciar presupuesto y gastos?');

        if (result) {
            setExpenses([]);
            setBudget(0);
            setIsValidBudget(false);
        }
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>   
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: percent > 100 ? '#DC2626': '#3B82f6',
                        trailColor: '#F5F5F5',
                        textColor: percent > 100 ? '#DC2626': '#3B82f6'
                    })}
                    value={percent}
                    text={`${percent}% Gastado`}
                />
            </div>
            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    type="button"
                    onClick={handleResetApp}
                >
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto: </span>{formatQuantity(budget)}
                </p>
                <p className={`${available < 0 ? 'negativo': ''}`}>
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
