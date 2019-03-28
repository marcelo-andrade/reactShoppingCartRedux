import React, { Component } from 'react';

import LayoutPrincipal from '../../layout/layoutprincipal';
import Banner from './banner';
import Produtos from './produtos';

import './styles.css';

export default class Main extends Component {
    render() {
        return (
            <LayoutPrincipal>
                <Banner />

                <div className="offsetTopM-40">
                    <div className="limite">
                        <Produtos />
                    </div>
                </div>
            </LayoutPrincipal>
        );
    }
}