import React, { Component } from 'react';

import Header from '../components/Header_footer/Header/Header';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="page_container">
                    {this.props.children}
                </div>
                FOOTER
            </div>
        );
    }
}

export default Layout; 
