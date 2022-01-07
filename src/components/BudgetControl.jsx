
const BudgetControl = ({budget}) => {
    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>Grafica</div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> ${budget}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl
