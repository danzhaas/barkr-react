import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import Header from './HeaderComponent';
import { Consumer } from "./configContext";
import Footer from './FooterComponent';

function CommandCards(props) {
    
    const chosenDog=props.chosenDog;

    const commandMap = chosenDog.commands.map(command => {
        return(
            <div key={command.id} className="col-6 p-1 p-md-3">
                <Card className="p-1 p-md-3">
                    <CardImg src={command.image} alt={chosenDog.name + " " + command.name} />
                    <CardBody className="p-0 p-md-3" > 
                        <CardTitle className="mb-0 mb-md-2" ><strong>"{command.name}"</strong></CardTitle>
                        <CardText>{command.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    })

    return (
        <>
            {commandMap}
        </>
    )
};    

const Talk = (props) => {

    return (
        <Consumer>
            {context => {
                return(
                    <>
                        <Header pageName="Talk to" dogName={context.chosenDog.name} />
                        <div className="container">                    
                            <div className="row h75vh overflow-auto">
                                <div className="col-12 d-flex flex-wrap justify-content-around">
                                    <CommandCards chosenDog={context.chosenDog} />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>
                )
            }}
        </Consumer>
    )
}

export default Talk;