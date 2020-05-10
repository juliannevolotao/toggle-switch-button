import React from 'react';

import './styles.sass';

class Switch extends React.Component {

    constructor(props) {
        super(props)
        this.state = { isDay: true }
    }

    handleClick = (e) => {
        e.preventDefault();

        this.setState((state) => {
            return {
                isDay: !state.isDay
            }
        })

        this.props.callbackParent()
        
    }
    

    render() {
        return (
            <div className="switch-container displayFlex">
                <div className={"switch-body displayFlex " + `${this.state.isDay ? "bg-day" : "bg-night"}` }>
                    <button className={"switch " + `${this.state.isDay ? "switch-light" : "switch-dark"}` } 
                        onClick={this.handleClick}>

                    </button>
                </div>

            </div>
        )
    }
}

export default Switch;