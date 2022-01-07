import { useState } from 'react'
import Header from './Header'

function App() {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  return (
    <Header
      budget={budget}
      setBudget={setBudget}
      isValidBudget={isValidBudget}
      setIsValidBudget={setIsValidBudget}
    />
  )
}

export default App
