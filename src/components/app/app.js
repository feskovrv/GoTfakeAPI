import React, { useState } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


const App = () => {
    const [showRandomChar, toggleRandomChar] = useState(true);

    const toggleRandom = () => {
        toggleRandomChar(!showRandomChar)
    }
    const randomCharRender = () => {
        return (
            <Row>
                <Col lg={{size: 5, offset: 0}}>
                    <RandomChar/>
                </Col>
            </Row>
        )
    }
    const content = showRandomChar ? randomCharRender() : null;
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                {content}
                <Row>
                    <button onClick={toggleRandom}>Toggle Random</button>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;