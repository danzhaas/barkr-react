import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Consumer from "./configContext";
import LandingComponent from './LandingComponent';
import DogHomeComponent from './DogHomeComponent';
import TalkComponent from './TalkComponent';
import AdventureComponent from './AdventureComponent';
import CareComponent from './CareComponent';
import FormUserComponent from './FormUserComponent';
import FormDogComponent from './FormDogComponent';
import UserSettingsComponent from './UserSettingsComponent';


function Main () {
    
    return(            
        <Consumer>
            {context => {
                return(
                    <Switch>
                        <Route exact path='/meet/:dogId/talk' render={() => <TalkComponent />} />
                        <Route exact path='/meet/:dogId/adventure' render={() => <AdventureComponent />} />
                        <Route exact path='/meet/:dogId/care' render={() => <CareComponent />} />
                        <Route exact path='/meet/:dogId' render={() => <DogHomeComponent/>} />                
                        <Route exact path='/user/:userId/settings' render={() => <UserSettingsComponent />} />                
                        <Route exact path='/user/:userId/:dogId' render={() => <FormDogComponent />} />
                        <Route exact path='/user/:userId' render={() => <FormUserComponent />} />
                        <Route path='/' render={() => <LandingComponent />} />
                        <Redirect to='/' />
                    </Switch>
                )
            }}
        </Consumer>
    )
}

export default Main;