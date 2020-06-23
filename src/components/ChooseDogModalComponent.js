import React, { useContext } from 'react';
import { Spinner, Modal, ModalHeader, ModalBody, ModalFooter, Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import Consumer from './configContext';

// import { DOGS } from '../shared/dogs'

export function DogChooserModal(props) {
    const context = useContext(Consumer);
    const modal = props.modal;
    const toggleModal = props.toggleModal;
    const toggleNavbar = props.toggleNavbar;
    const chooseDog = props.chooseDog;
    const navCollapsed = props.navCollapsed;

    
    const dogList = context.dogs.length>0 && context.dogs.map(dog => {
        return (
            <div key={dog.id} className="w-100">
                <Button className="bg-white w-100" >
                    <Link className="d-flex flex-row" onClick={() => { chooseDog(dog.id); toggleModal(); if (navCollapsed===false) toggleNavbar() }} to="/meet/:dogId">
                        <img className="border-1 border-primary rounded-circle" src={dog.pic.filter(pic => pic.type === "thumbnail")[0].img} alt={dog.name + " thumbnail"} />
                        <h1 className="my-auto ml-2">{dog.name}</h1>
                    </Link>
                </Button>
            </div>
        )
    })

    return (
        <Modal isOpen={modal} toggle={toggleModal} >
            <ModalHeader toggle={toggleModal}>Choose a Dog</ModalHeader>
            <ModalBody className="p-1 p-md-3">
                <ButtonGroup vertical>
                    {dogList || <Spinner color="primary" />}
                </ButtonGroup>
            </ModalBody>
            <ModalFooter>
                <p>Add Your Dog Coming July 2020</p>
            </ModalFooter>
        </Modal>
    )

}

export default DogChooserModal;