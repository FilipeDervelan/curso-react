import './App.css'
import { Cars } from './components/Cars';

function App() {
  const cars = [
    {
      id: 1,
      name: "Gol",
      brand: "VW",
      km: 10000
    },
    {
      id: 2,
      name: "Fiesta",
      brand: "Ford",
      km: 100000
    },
    {
      id: 3,
      name: "Civic",
      brand: "Honda",
      km: 50000
    }
  ]
  
  return (
    <div className="App">
      <h1>Showroom</h1>
      <Cars />
    </div>
  );
}

export default App;
