import NewBudget from "./NewBudget"

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
    return (
        <header>
            <h1>Planificardor de Gastos</h1>

            {isValidBudget ? (
                <p>Control Presupuesto</p>
            ) : (
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )}

        </header>
    )
}

export default Header
