import { useState } from 'react';
import './MyForm.css';

export const MyForm = ({user}) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleName = (e) => {
    setName(e.target.value)
  }

  // const handleEmail = (e) => {
  //   setEmail(e.target.value)
  // }

  const [bio, setBio] = useState("")

  const [role, setRole] = useState("")

  // console.log(name)
  // console.log(email)

  // envio de form 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando form");
    console.log(name);
    console.log(email);
    console.log(bio);
    console.log(role);

    // cleaning form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  }

  return (
    <div>
      {/* criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Insert your name" 
            onChange={handleName} 
            value={name}
          />
        </div>
        {/* label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input 
            type="email" 
            name="email" 
            placeholder="Insert your e-mail" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        {/* textarea */}
        <label>
          <span>Bio:</span>
          <textarea 
            name="bio" 
            placeholder="User Description" 
            onChange={(e) => setBio(e.target.value)} 
            value={bio} 
          >
          </textarea>
        </label>

        {/* select */}
        <label>
          <span>Função</span>
          <select 
          name="role"
          onChange={(e) => setRole(e.target.value)}
          value={role}
          >
            <option value="User">Usuário</option>
            <option value="Admin">Admin</option>
            <option value="Moderator">Moderador</option>
            <option value="Programmer">Programador</option>
          </select>
        </label>
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}