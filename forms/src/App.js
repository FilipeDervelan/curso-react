import './App.css';
import { MyForm } from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Form</h1>
      <MyForm user={
        {
          name: "Filipe", 
          email: "batatinha007@gmail.com", 
          bio: "Programador", 
          role: "User"
        }}
      />
    </div>
  );
}

export default App;
