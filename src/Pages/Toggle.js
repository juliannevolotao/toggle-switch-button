import React, { useState } from 'react';

import Container from '../Components/Container';
import Switch from '../Components/Switch';

import './styles.sass';

export default function Toggle () {
    const [sun, setSun] = useState(true);

    const onChildChange = (result) => {
        setSun(!sun)
    }

    return (
        <Container>
            <div className={`lights ${ + sun ? "light-on" : "light-off"} `  } ></div>
            <Switch callBackParent={() => onChildChange() } />
        </Container>

    )

}