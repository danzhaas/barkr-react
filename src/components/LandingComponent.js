import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { DogChooserModal } from './ChooseDogModalComponent';
import Consumer from "./configContext";


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state= {
            modal: false,
            popover: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.togglePopover = this.togglePopover.bind(this);
    };

    toggleModal() { 
        this.setState({modal: !this.state.modal}) 
    };
    togglePopover() { 
        this.setState({popover: !this.state.popover}) 
    };

    render() {
        const modal=this.state.modal;

        return(
            <Consumer>
                {context => {
                    return(
                        <div className="container h100vh border-0 position-relative p-0">
                            <div id="landing-center" className="row h-100">
                                <div className="col-12 mh-100 p-md-0">
                                    <div className="h-100 w-100 d-flex flex-column position-relative overflow-hidden">
                                        <img id="landing-backsplash" src="assets/img/suede-on-bed-1000x800-faded.jpg" alt="beautiful dog Suede"></img>
                                        <div id="landing-overlay" className="position-absolute">
                                            <Button className="btn-warning text-dark landing-button h-45" 
                                            onClick={this.toggleModal} 
                                            >
                                                <h2>Find a Dog</h2>
                                            </Button>
                                            <DogChooserModal modal={modal} toggleModal={this.toggleModal} chooseDog={context.chooseDog} dogs={context.dogs}/>
                                            <Button className="w-100 bg-transparent p-0 border-0" onClick={this.toggleModal}>
                                                <div id="landing-logo" className="d-flex align-items-center justify-content-center align-self-start text-danger ">
                                                    <i id="paw" className="fa fa-paw"></i>
                                                    <h1>Barkr</h1>
                                                </div>
                                            </Button>
                                            <Button className="btn-warning text-dark landing-button h-45" id="Popover" >
                                                <h2>Add Your Dog</h2>
                                            </Button>
                                            <Popover placement="top" isOpen={this.state.popover} target="Popover" toggle={this.togglePopover}>
                                                <PopoverHeader>Coming soon</PopoverHeader>
                                                <PopoverBody>In development - check back in July 2020</PopoverBody>
                                            </Popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Landing;