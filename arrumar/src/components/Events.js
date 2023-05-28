export const Events = () => {

  const handleMyEvent = (e) => {
    console.log(e)

    console.log("Ativou o evento")
  }

  const renderSomething = (x) => {
    if (x) {
      return <h1>Rendering this!</h1>
    } else {
      return <h1>Rendering another text!</h1>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Click Here!</button>
      </div>

      <div>
        <button onClick={() => console.log("Clicou!")}>Click Here too!</button>
      </div>

      <div>
        <button onClick={() => {
          if (true) {
            console.log("Não faça isso!")
          }
        }}
        >
          Click here, please
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}