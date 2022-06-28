import { useState, useEffect } from 'react'
import Header from './Header'
import Filters from './Filters'
import ExpenseList from './ExpenseList'
import Modal from './Modal'
import { generateId } from '../helpers'
import IconNewSpending from '../img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')):[]
  )
  const [editExpense, setEditExpense] = useState({})
  const [filter, setFilter] = useState('')
  const [filteredExpenses, setFilteredExpenses] = useState([]);


  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimateModal(true)
      },500)
    }
  }, [editExpense])


  useEffect(() => {
    localStorage.setItem('budget', budget)
  },[budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  },[expenses])

  useEffect(() => {
    if(filter) {
      const newFilteredExpenses = expenses.filter( expense => expense.category === filter )
      setFilteredExpenses(newFilteredExpenses)
    }
  },[filter])

  useEffect(() => {
    const budgetLocalStorage = Number(localStorage.getItem('budget')) ?? 0

    if (budgetLocalStorage > 0) {
      setIsValidBudget(true)
    }
  }, [])

  const handleNewBudget = () => {
    setModal(true)
    setEditExpense({})
    setTimeout(() => {
      setAnimateModal(true)
    },500)
  }
  const saveExpense = spending => {
    if(spending.id){
      // Actualizar
      const updatedExpenses = expenses.map( expenseState => expenseState.id === spending.id ? spending : expenseState)
      setExpenses(updatedExpenses)
      setEditExpense({})
    } else {
      // Nuevo Gasto
      spending['id'] = generateId()
      spending['date'] = Date.now()
      setExpenses([...expenses, spending])
    }

    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const deleteExpense = spending => {
    const updatedExpenses = expenses.filter(expense => expense.id !== spending.id)
    setExpenses(updatedExpenses)
  }


  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <Filters 
              filter={filter}
              setFilter={setFilter}
            />
            <ExpenseList 
              expenses={expenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
              filteredExpenses={filteredExpenses}
              filter={filter}
            />
          </main>
          <div className="nuevo-gasto">
            <img 
              src={IconNewSpending} 
              alt="Icono de Nuevo gasto"
              onClick={handleNewBudget} 
            />
          </div>
        </>
      )}

      {modal && <Modal 
        setModal={setModal} 
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        saveExpense={saveExpense}
        editExpense={editExpense}
        setEditExpense={setEditExpense}
      />}
    </div>
  )
}

export default App
