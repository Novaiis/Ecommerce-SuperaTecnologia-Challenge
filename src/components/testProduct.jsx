import React from 'react'
import Product from './Product';


export default function Produtos(props) {
    const { products, onAdd } = props;



   
    console.log(products);

    return <main className="block col-2">
        <h2>Jogos</h2><hr />
        <div>
            Ordenar por: <> </>
            <select>
                <option value="Select" selected>Selecione </option>
                <option value="OrdemAlfabetica">Ordem alfabética </option>
                <option value="Preco">Preço </option>
                <option value="Popularidade">Popularidade </option>
            </select>
            <hr />
            <div className="row2">
                <>if (OrdemAlfabetica) {
                            products.sort(function (a, b){
                                return (a.score > b.score) ? 1 : ((b.score > a.score)? -1 : 0);
                            })
                }</>
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </div>
    </main>;
}

