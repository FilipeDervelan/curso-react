import { useEffect } from 'react';
import './App.css';

import { useState } from 'react';

import { useFetch } from './hooks/useFetch';


const url = 'http://localhost:3000/products'

function App() {
  const { data: items, httpConfig, loading, error } = useFetch(url);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  

  // resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)

  //     const data = await res.json()

  //     setProducts(data)
  //   }
    
  //   fetchData()
  // }, []);

  // adição de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(product) /// // // 
    // })

    // // carregamento dinâmico
    // const addedProduct = res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);


    //refatorando POST
    httpConfig(product, 'POST')

    setName("");
    setPrice("");
  }

  const handleDelete = (id) => {
    httpConfig(id, 'DELETE')
  }


  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Loading items...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items && Array.isArray(items) && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
            <button onClick={() => handleDelete(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
              type="text" 
              value={name} 
              name="name" 
              onChange={(e) => setName(e.target.value)} 
            />
          </label>

          <label>
            Preço:
            <input 
              type="text" 
              value={price} 
              name="name" 
              onChange={(e) => setPrice(e.target.value)} 
            />
          </label>
          {loading ?
           <input type="submit" value="Aguarde" />
            : 
            <input type="submit" value="Criar" /> 
          }
        </form>
      </div>
    </div>
  );
}

export default App;
