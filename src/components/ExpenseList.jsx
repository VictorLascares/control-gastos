import Expense from "./Expense"

const ExpenseList = ({expenses, setEditExpense}) => {
    return (
        <div className='listado-gastos contenedor'>
            <h2>{expenses.length ? 'Gastos' : 'No hay gastos aún'}</h2>

            {expenses.map( expense => (
                <Expense 
                    key={expense.id} 
                    expense={expense}
                    setEditExpense={setEditExpense}
                />
            ))}
        </div>
    )
}

export default ExpenseList
