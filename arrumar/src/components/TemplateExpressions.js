export const TemplateExpressions = () => {
  const name = "Filipe"

  const data = {
    age: 31,
    job: "programmer",
  }

  return (
    <div>
      <h1>Olá {name}, blz??</h1>
      <h3>Você trabalha como {data.job}</h3>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  )
}