//


//hooks
import { useState } from 'react';

//components
// import { FirstComponent } from './components/FirstComponent';
// import { TemplateExpressions } from './components/TemplateExpressions';
// import { Events } from './components/Events';
// import { Challenge } from './components/Challenge';
import { ManageData } from './components/ManageData';
import { ListRender } from './components/ListRender';
import { ConditionalRender } from './components/ConditionalRender';
import { ShowUserName } from './components/ShowUserName';
import { CarDetails } from './components/CarDetails';
import { Fragment } from './components/Fragment';
import { Container } from './components/Container';
import { ExecuteFunction } from './components/ExecuteFunction';
import { Message } from './components/Message';
import { ChangeMessageState } from './components/ChangeMessageState';
import { UserDetails } from './components/UserDetails';

//css
import './App.css';

//images
import Flowers from './assets/flowers.avif'

function App() {
  // const name = "Ana"
  const [userName] = useState("Pedro")

  const cars = [
    {
      id: 1,
      brand: 'Ferrari',
      color: 'Red',
      newCar: true,
      km: 0
    },
    {
      id: 2,
      brand: 'Audi',
      color: 'Blue',
      newCar: false,
      km: 50000
    },
    {
      id: 3,
      brand: 'Porsche',
      color: 'Black',
      newCar: false,
      km: 20000
    }
  ]


  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const users = [
    {
      id: 1,
      name: "Filipe",
      age: 18,
      job: "Programmer"
    },
    {
      id: 2,
      name: "Ana",
      age: 15,
      job: "None"
    },
    {
      id: 3,
      name: "Luke",
      age: 17,
      job: "None"
    },
    {
      id: 4,
      name: "John",
      age: 30,
      job: "Policial"
    }
  ]

  const [numero, setNumero] = useState(0)

  return (
    <div className="App">
      {/* {/* <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge /> */}

      <div>
       {/* imagem em public não precisa indicar todo o caminho, apenas "/" */}
        <img src="/city.avif" alt="Foto de uma cidade ao por do sol" />
      </div>

      <div>
        {/* Imagem em assets */}
        <img src={Flowers} alt="" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* PROPS */}
      {/* <ShowUserName name="Filipe" /> */}
      {/* <ShowUserName name={name} /> */}
      <ShowUserName name={userName} />
      {/* DESTRUCTURING */}
      <CarDetails brand="VW" km={100000} color="Preto" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={50000} color="Branco" newCar={false}  />
      <CarDetails brand="Fiat" km={90000} color="Verde" newCar={false} />
      <CarDetails brand="Audi" km={0} color="Azul" newCar={true} />
      {/* loop em array de objetos */}
      <p>Loop em array de objetos</p>
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
        />
      ))}
      {/* Fragment */}
      <Fragment propFragment="Qualquer coisa" />
      {/* Children */}
      <Container myValue="Aqui é qualquer coisa">
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="Aqui é qualquer outra coisa">
        <p>Este é outro conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio */}
      {users.map((user) =>
        <UserDetails 
          key={user.id} 
          name={user.name} 
          job={user.job} 
          age={user.age} 
        />
      )}
      {/* css inline dinâmico */}
      <h2 style={numero < 10 ? ({color: "blue"}) : ({color: "red"})}>CSS Dinâmico</h2>
      {/* <button onClick={setNumero(1)}>+</button>
      <button onClick={setNumero(11)}>-</button> */}
    </div>
  );
}

export default App;
