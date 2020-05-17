import React from 'react';
import { Modal, ModalHeader, ModalBody, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { DOGS } from '../shared/dogs'

export function DogChooserModal(props) {
    
    const dogs=DOGS;
    const modal=props.modal;
    const toggleModal = props.toggleModal;
    const chooseDog=props.chooseDog;

    const dogList=dogs.map(dog => {
        return(
            <div key={dog.id}>
                <Link className="d-flex flex-row" onClick={() => {chooseDog(dog.id); toggleModal()}} to="/dog-home">
                    <img className="border-1 border-primary rounded-circle" src={dog.pic.filter(pic => pic.type==="thumbnail")[0].img} alt={dog.name + " thumbnail"} />
                    <h1 className="my-auto ml-2">{dog.name}</h1>
                </Link>
            </div>
        )
    })
    
    return (
        <Modal isOpen={modal} toggle={toggleModal} >
            <ModalHeader toggle={toggleModal}>Choose a Dog</ModalHeader>
            <ModalBody>
                <ButtonGroup vertical>
                    {dogList}
                </ButtonGroup>
            </ModalBody>
        </Modal> 
    )
}

export default DogChooserModal;