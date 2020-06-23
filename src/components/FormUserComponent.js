import React from 'react';
import { Button, ButtonGroup } from 'reactstrap'
import Header from './HeaderComponent';
import Consumer from "./configContext";
import Footer from './FooterComponent';
import { Link } from 'react-router-dom';
import { DOGS } from '../shared/dogs-new-prototype';

// const dogList = dogs.map(dog => {
//     return (
//         <div key={dog.id} className="w-100">
//             <Button className="bg-white w-100" >
//                 <Link className="d-flex flex-row" onClick={() => context.chooseDog(dog.id)} to="/user/:userId/:dogId">
//                     <img className="border-1 border-primary rounded-circle" src={dog.pic.filter(pic => pic.type === "thumbnail")[0].img} alt={dog.name + " thumbnail"} />
//                     <h1 className="my-auto ml-2">{dog.name}</h1>
//                 </Link>
//             </Button>
//         </div>
//     )
// })

function FormUserComponent(props) {

    return (
        <Consumer>
            {context => {
                return (
                    <>
                        <Header pageName="Welcome Back" dogName="Username" />
                        <div className="container">
                            <div className="row">
                                <div className="col-12 m-auto">
                                    <h1>Update My Dogs</h1>
                                    <ButtonGroup vertical>
                                        {/* {dogList} */}
                                        <div /*key={dog.id}*/ className="w-100">
                                            <Button className="bg-white w-100" >
                                                <Link className="d-flex flex-row" onClick={() => context.chosenDog.id} to="/user/:userId/:dogId">
                                                    <img className="border-1 border-primary rounded-circle" src={context.chosenDog.pic.filter(pic => pic.type === "thumbnail")[0].img} alt={context.chosenDog.name + " thumbnail"} />
                                                    <h1 className="my-auto ml-2">{context.chosenDog.name}</h1>
                                                </Link>
                                            </Button>
                                        </div>
                                        <div className="w-100">
                                            <Button className="bg-white w-100" >
                                                <Link className="d-flex flex-row" onClick={() => context.chosenDog.id} to="/user/:userId/:dogId">                                                    
                                                    <h1 className="my-auto ml-2">Add A Dog</h1>
                                                </Link>
                                            </Button>
                                        </div>
                                    </ButtonGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 m-auto">
                                    <h1>Visit Followed Dogs</h1>
                                    <ButtonGroup vertical>
                                        {/* {dogList} */}
                                        <div /*key={dog.id}*/ className="w-100">
                                            <Button className="bg-white w-100" >
                                                <Link className="d-flex flex-row" onClick={() => context.chosenDog.id} to="/user/:userId/:dogId">
                                                    <img className="border-1 border-primary rounded-circle" src={context.dogs[1].pic.filter(pic => pic.type === "thumbnail")[0].img} alt={context.dogs[1].name + " thumbnail"} />
                                                    <h1 className="my-auto ml-2">{context.dogs[1].name}</h1>
                                                </Link>
                                            </Button>
                                        </div>
                                        <div className="w-100">
                                            <Button className="bg-white w-100" >
                                                <Link className="d-flex flex-row" onClick={() => context.chosenDog.id} to="/user/:userId/:dogId">                                                    
                                                    <img className="border-1 border-primary rounded-circle" src={context.dogs[2].pic.filter(pic => pic.type === "thumbnail")[0].img} alt={context.dogs[2].name + " thumbnail"} />
                                                    <h1 className="my-auto ml-2">{context.dogs[2].name}</h1>
                                                </Link>
                                            </Button>
                                        </div>
                                    </ButtonGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 m-auto">
                                    <ButtonGroup vertical>
                                        <div className="w-100">
                                            <Button className="bg-white w-100" >
                                                <Link className="d-flex flex-row" to="/user/:userId/settings">                                                    
                                                    <h1 className="my-auto ml-2">My Settings</h1>
                                                </Link>
                                            </Button>
                                        </div>
                                    </ButtonGroup>
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

export default FormUserComponent;