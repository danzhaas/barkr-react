import React, { Component, createContext } from "react";
import { DOGS } from '../shared/dogs';
import { baseUrl } from '../../src/config';


const { Provider, Consumer } = createContext();

class ConfigProvider extends Component {
    state = {
        chosenDog: {},
        dogId: 0,
        dogs: [],
        error: null
    };
    chooseDog(id) {
        this.setState({ dogId: id });
    };

    fetchAllDogs = () => {
        return fetch(baseUrl + 'dogs')
        .then(response => {
            if (response.ok) {
                return response;
            }else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(dogs => this.setState({dogs:dogs, chosenDog:dogs[this.state.dogId]}))
    .catch(error => this.setState({error: error.message}));
};

// change name 'chooseDog' to 'getChosenDog'    
// POST = post, GET = fetch, PUT= update, 





    render() {
        
        this.chooseDog = this.chooseDog.bind(this);

        return (
            <Provider
                value={{
                    error: this.state.error,
                    dogs:this.state.dogs,
                    dogId: this.state.dogId,
                    chooseDog: this.chooseDog,
                    // chosenDog: this.dogs[this.state.dogId],
                    chosendog:this.state.chosenDog,
                    fetchAllDogs: this.fetchAllDogs
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

//ADD CURLY BRACES AROUND CONSUMER IN ALL IMPORTS
// export { Consumer, ConfigProvider }
export { ConfigProvider };
export default Consumer;