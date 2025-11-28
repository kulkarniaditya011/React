import { useState } from 'react'
import PasswordToggle from './password';
import InputText from './InputHandling';


function App() {
  const [count, setCount]= useState(0)

  function handleClick(){
      alert("Button clicked");
  }

  return (
    <>
   <div>
    <h1>Count: {count}</h1>
    <button onClick={()=> setCount(count+1)}>Increase</button>

    <button onClick={handleClick}>Click</button>
    <button onClick={()=> alert("Button clicked")}>In-line function button</button>
   </div>
    <div>
      <PasswordToggle/>
    </div>

    <div>
      <InputText/>
    </div>

    </>

  )
}

export default App
