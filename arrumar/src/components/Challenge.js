export const Challenge = () => {

  let n1 = 18
  let n2 = 5

  return (
    <div>
      <p>{n1} + {n2}</p>
      <button onClick={() => console.log(n1 + n2)}>Calcular!</button>
    </div>
  )
}