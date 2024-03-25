
import React, { useState } from 'react';
import "./navbar.css";
import logo from './elite_store_logo_oficial.svg';
import CartWidget from './cartwidget.jsx';

export function Navbar() {
    const [itemCount, setItemCount] = useState(0); // Estado para o número de itens no carrinho

    
    const incrementItemCount = () => {
        setItemCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <div className="menu-desktop">
                <div className="menu-left">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href='https://www.google.com.br/' onClick={() => setActive(this)}>Lançamentos</a></li>
                        <li><a href='https://www.google.com.br/' className="active" onClick={() => setActive(this)}>Roupas</a></li>
                        <li><a href='https://www.google.com.br/' onClick={() => setActive(this)}>Acessórios</a></li>
                        <li><a href='https://www.google.com.br/' onClick={() => setActive(this)}>Sale</a></li>
                    </ul>
                </nav>
                    
                <div className="menu-rigth">
                    <CartWidget itemCount={itemCount} incrementItemCount={incrementItemCount}/>  
                    <nav >
                        <div className="menu-item">
                            <button className="button" onClick={() => alert("Olá, deseja acessar?")}>Entrar</button>
                            <button className="button" onClick={() => alert("Olá, você deseja se cadastrar?")}>Cadastre-se</button>
                        </div> 
                    </nav>
                </div>
            </div>   
        </div>
    );
}





//código que define o comportamento do menu sublinhado
function setActive(event, element) {
    // Impede o comportamento padrão do clique para evitar recarregar a página
    event.preventDefault();

    // Remove a classe ativa de todos os elementos de menu
    var navItems = document.querySelectorAll('.nav ul li a');
    navItems.forEach(function (item) {
        item.classList.remove('active');
    });

    // Adiciona a classe ativa apenas ao elemento clicado
    element.classList.add('active');
}

var navLinks = document.querySelectorAll('.nav ul li a');
navLinks.forEach(function (link) {
    link.addEventListener('mouseenter', function () {
        navLinks.forEach(function (item) {
            item.classList.remove('active');
        });
        link.classList.add('active');
    });
});


