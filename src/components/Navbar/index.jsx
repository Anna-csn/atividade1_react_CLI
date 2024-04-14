import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import "./navbar.css";
import logo from './Bookshelf.svg';
import CartWidget from './cartwidget.jsx';

export function Navbar() {
    const [itemCount, setItemCount] = useState(0); // Estado para o número de itens no carrinho
    const location = useLocation(); // Hook useLocation para obter o pathname atual

    
    const incrementItemCount = () => {
        setItemCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <div className="menu-desktop">
                <div className="menu-left">
                    <Link to="/" className="logo-link">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </div>
                <nav className="nav">
                    <ul>
                    <li><Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                        <li><Link to="/category/fantasia" className={`navbar-link ${location.pathname.startsWith('/category/fantasia') ? 'active' : ''}`}>Fantásia</Link></li>
                        <li><Link to="/category/misterio" className={`navbar-link ${location.pathname.startsWith('/category/misterio') ? 'active' : ''}`}>Mistério</Link></li>
                        <li><Link to="/category/sale" className={`navbar-link ${location.pathname.startsWith('/category/sale') ? 'active' : ''}`}>Sale</Link></li>
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
//function setActive(event, element) {
    // Impede o comportamento padrão do clique para evitar recarregar a página
    //event.preventDefault();

    // Remove a classe ativa de todos os elementos de menu
    //var navItems = document.querySelectorAll('.nav ul li a');
    //navItems.forEach(function (item) {
    //    item.classList.remove('active');
    //});

    // Adiciona a classe ativa apenas ao elemento clicado
    //element.classList.add('active');
//}

//var navLinks = document.querySelectorAll('.nav ul li a');
//navLinks.forEach(function (link) {
 //   link.addEventListener('mouseenter', function () {
  //      navLinks.forEach(function (item) {
   //         item.classList.remove('active');
   //     });
   //     link.classList.add('active');
    //});
//});


