import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/itemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  const [itemCount, setItemCount] = useState(0); // Estado para o número de itens no carrinho

  // Função para incrementar o contador de itens no carrinho
  const incrementItemCount = () => {
    setItemCount(prevCount => prevCount + 1);
  };

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar itemCount={itemCount} incrementItemCount={incrementItemCount} />
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="Catálogo de produtos" />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;