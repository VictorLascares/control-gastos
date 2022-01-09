import { useState } from 'react'
import Header from './Header'
import IconNewSpending from '../img/nuevo-gasto.svg'
import Modal from './Modal'

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
    console.log(spending);
  }


  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <div className="nuevo-gasto">
          <img 
            src={IconNewSpending} 
            alt="Icono de Nuevo gasto"
            onClick={handleNewBudget} 
          />
        </div>
      )}

      {modal && <Modal 
        setModal={setModal} 
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        saveExpense={saveExpense}
      />}
    </>
  )
}

export default App
