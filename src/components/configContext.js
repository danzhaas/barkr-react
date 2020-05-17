import React, { Component, createContext } from "react";
import { DOGS } from '../shared/dogs';

const { Provider, Consumer } = createContext();

class ConfigProvider extends Component {
    state = {
        dogId: 0,
    };

    chooseDog(id) {
        this.setState({ dogId: id });
    };

    dogs=DOGS;

    render() {
        
        this.chooseDog = this.chooseDog.bind(this);

        return (
            <Provider
                value={{
                    dogs:this.dogs,
                    dogId: this.state.dogId,
                    chooseDog: this.chooseDog,
                    chosenDog: this.dogs[this.state.dogId]
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

//ADD CURLY BRACES AROUND CONSUMER IN ALL IMPORTS
export { Consumer, ConfigProvider }