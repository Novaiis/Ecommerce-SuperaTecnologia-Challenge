import React, { useState } from 'react'
import Product from './Product';

export default function Produtos(props) {
    const { products, onAdd } = props;

    const [selectState, setSelectState] = useState("");

    if (selectState === "select") {
        products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))
    }else if (selectState === "ordemAlfabetica") {
        products.sort(function (a, b){
            return (a.name > b.name) ? 1 : ((b.name > a.name)? -1 : 0);
        });
    }else if (selectState === "preco") {
        products.sort(function (a, b){
            return (a.price > b.price) ? 1 : ((b.price > a.price)? -1 : 0);
        })
    }else if(selectState === "popularidade"){
        products.sort(function (a, b){
            return (a.score > b.score) ? 1 : ((b.score > a.score)? -1 : 0);
        })
    }

    return <main className="block col-2">
        <h2>Jogos</h2><hr />
        <div>
            Ordenar por: <> </>

            <select onChange={(e)=>{
                const selectedState = e.target.value;
                setSelectState(selectedState);
            }}>
                <option value="select" selected>Selecione </option>
                <option value="ordemAlfabetica">Ordem alfabética </option>
                <option value="preco">Preço </option>
                <option value="popularidade">Popularidade </option>
            </select>
            <hr />
            <div className="row2">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </div>
    </main>;
}

