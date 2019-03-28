import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const MenuPrincipal = () => (
    <nav className="menuPrincipal">
        <div className="limite">
            <div className="menuPrincipal-conteudo">
                <a href="#" className="menuCategorias">
                    <i className="fas fa-bars item"></i>
                    <span className="item">Categorias</span>
                    <i className="fas fa-chevron-down item"></i>
                </a>

                <ul className="listaMenuPrincipal">
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </div>            
        </div>
    </nav>
);

export default MenuPrincipal;