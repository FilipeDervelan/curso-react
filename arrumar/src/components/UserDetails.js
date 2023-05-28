export const UserDetails = ({name, age, job}) => {

  return (
    <div>
      <h2>{name}</h2>
      <p>{job} - {age}</p>
      {age >= 18 ?
        <p>{name} você já pode tirar a habilitação!</p>  
      :
        <p>{name} você não pode tirar a habilitação!</p>
      }
    </div>
  )
}