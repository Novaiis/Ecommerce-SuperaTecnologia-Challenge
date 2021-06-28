import React from 'react'

export default function Product(props) {
    const {product , onAdd} = props;
    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <br/>
            <strong><div>R${product.price}</div></strong>
            <hr/>
            <strong><div>Score: {product.score}</div></strong>
            <hr/>
            <div>
                <button onClick={() => onAdd(product)}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}
