import React from 'react'

export default function Carrinho (props){
    const{itensCarrinho , onAdd , onRemove}=props;
    const itensPrice = itensCarrinho.reduce((a, c) =>a + c.price * c.qtd, 0)
    const fretePrice = itensPrice > 250 ? 0 : 10;
    const totalPrice = itensPrice + fretePrice;
    return <aside className="block col-1">
        <h2>Itens no Carrinho</h2>
        <div>{itensCarrinho.length === 0 && <div>O carrinho está vazio</div>}</div>
        {itensCarrinho.map((item)=>(
            <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                <button onClick={() => onAdd(item)} className="add">+</button>
                <button onClick={() => onRemove(item)} className="remove">-</button>
                </div>
                <div className="col-2 text-right"> 
                    {item.qtd} x R${item.price.toFixed(2)}
                </div>
            </div>
        ))}
        {itensCarrinho.length !== 0 &&(
            <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Preço dos Jogos</div>
                    <div className="col-1 text-right">R${itensPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Frete</div>
                    <div className="col-1 text-right">R${fretePrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2"><strong>Total</strong></div>
                    <div className="col-1 text-right"><strong>R${totalPrice.toFixed(2)}</strong></div>
                </div>
                <hr/>
                <div className="row">
                    <button onClick={refreshPage} >
                        Finalizar compra
                    </button>
                </div>
            </>
        )}
    </aside>;
    
    function refreshPage(){
        if(alert('Compra finalizada com sucesso!')){}
            else window.location.reload();  
    }
}