import NewBudget from "./NewBudget"
import BudgetControl from "./BudgetControl"

const Header = ({ expenses, setExpenses , budget, setBudget, isValidBudget, setIsValidBudget }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidBudget ? (
                <BudgetControl
                    expenses={expenses}
                    setExpenses={setExpenses}
                    setBudget={setBudget}
                    budget={budget}
                    setIsValidBudget={setIsValidBudget}
                />
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
