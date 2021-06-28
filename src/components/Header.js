import React from 'react'
import {GiShoppingCart} from 'react-icons/gi';
import {CgGames} from 'react-icons/cg'


export default function Header (props){
    const {countItensCarrinho} = props;
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Loja de Games Supera <CgGames/></h1>
            
                </a>
                <font color="#00005"><h2 color>Frete gratuito a partir de R$250 em compras</h2></font>
            </div>
            <div>
                <h4>
                    
                    <GiShoppingCart fontSize="30"/> { ' '}
                    {countItensCarrinho?(
                        <button className="badge">{countItensCarrinho}</button>
                    ) : (
                        ''
                    )
                }
                    
                    </h4>
            </div>
        </header>
    );
}