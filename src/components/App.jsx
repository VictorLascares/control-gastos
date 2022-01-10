import { useState } from 'react'
import Header from './Header'
import ExpenseList from './ExpenseList'
import Modal from './Modal'
import { generateId } from '../helpers'
import IconNewSpending from '../img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenses, setExpenses] = useState([])

  const handleNewBudget = () => {
    setModal(true)

    setTimeout(() => {
      setAnimateModal(true)
    },500)
  }
  const saveExpense = spending => {
    spending['id'] = generateId()
    spending['date'] = Date.now()
    setExpenses([...expenses, spending])
  }


  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpenseList 
              expenses={expenses}
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
      />}
    </div>
  )
}

export default App
