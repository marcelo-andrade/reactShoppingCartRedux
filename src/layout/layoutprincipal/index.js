import React, { Component } from 'react';

import Header from '../header';
import MenuPrincipal from '../menuprincipal';

export default class LayoutPrincipal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <MenuPrincipal />
                <div className="siteContent">
                    {this.props.children}
                </div>
            </div>
        );
    }
}