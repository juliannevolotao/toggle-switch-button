import React from 'react';

import './styles.sass';

class Container extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="containerConfig">
                
                {this.props.children}
                
            </div>
        )
    }

}

export default Container;