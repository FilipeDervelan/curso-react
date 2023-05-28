import { useState } from "react"

export const ConditionalRender = () => {
  const [x] = useState(true)

  const [name, setName] = useState('Filipe')

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Se x for false, não</p>}

      <h1>If ternário</h1>
      {name === 'Filipe' ? 
        <p>O nome é Filipe</p>
      :
        <p>Não sei o nome</p>
      }
      <button onClick={() => setName('Lucas')}>Clicka aqki!</button>
      <button onClick={() => setName('Filipe')}>Ou aqui</button>
    </div>
  )
}