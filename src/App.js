import Header from './components/Header';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';
import data from './data'
import { useState } from 'react';


function App() {
  const { products } = data;
  const [itensCarrinho, setItensCarrinho] = useState([])
  const onAdd = (product) => {
    const exist = itensCarrinho.find(x => x.id === product.id);
    if (exist) {
      setItensCarrinho(itensCarrinho.map(x => x.id === product.id ? { ...exist, qtd: exist.qtd + 1 } : x));
    }else{
      setItensCarrinho([...itensCarrinho, {...product, qtd: 1}]);
    }
  }
  const onRemove = (product) => {
    const exist = itensCarrinho.find((x) => x.id === product.id);
    if(exist.qtd === 1){
      setItensCarrinho(itensCarrinho.filter((x) => x.id !== product.id))
    }else{
      setItensCarrinho(itensCarrinho.map(x => x.id === product.id ? { ...exist, qtd: exist.qtd - 1 } : x));
    }
  }
  return (
    <div className="App">
      <Header countItensCarrinho={itensCarrinho.length}></Header>
      <div className="row">
        <Produtos onAdd={onAdd} products={products}></Produtos>
        <Carrinho onAdd={onAdd} onRemove={onRemove} itensCarrinho={itensCarrinho}></Carrinho>
      </div>
    </div>
  );
}

export default App;
