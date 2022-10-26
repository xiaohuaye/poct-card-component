import { useState } from 'react'
import './App.css'
import Logic from './components/logic';

function App() {
  const [activeComponent, setActiveComponent] = useState('logic')

  const components = [{
    label: '逻辑符',
    value: 'logic'
  }]

  function display(name: string) {
    setActiveComponent(name)
  }

  const buttonList = components.map(c=>{
    return (
      <button onClick={() => display(c.value)} key={c.value}>
          {c.label}
      </button>
    )
  })

  return (
    <div className="App">
      {buttonList}
      <Logic activeComponent={activeComponent} />
    </div>
  )
}

export default App
