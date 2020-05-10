import React from 'react';

import Container from '../Components/Container';
import Switch from '../Components/Switch';

import './styles.sass';

export default class Toggle extends React.Component {

    constructor(){
        super()
        this.state = {
            sun: true
        }
    }

    onChildChange = (result) => {
        this.setState((state) => {
            return {
                sun: !state.sun
            }
        })

        console.log(this.state.sun)
    }

    render() {
        return (
            <Container>
                <div className={"lights " + `${this.state.sun ? "light-on" : "light-off"}` } ></div>
                <Switch callbackParent={() => this.onChildChange()}/>
            </Container>
        )
    }

}