export const Container = ({children, myValue}) => {

  return (
    <div>
      <h3>Este é o título do container</h3>
      {children}
      <p>Tome: {myValue}</p>
    </div>
  )
}