import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConfigProvider } from "./configContext";
import LandingComponent from './LandingComponent';
import DogHomeComponent from './DogHomeComponent';
import TalkComponent from './TalkComponent';
import AdventureComponent from './AdventureComponent';
import CareComponent from './CareComponent';


function Main () {
    
    return (
        <ConfigProvider >
            <Switch>
                <Route path='/landing' render={() => <LandingComponent />} />
                <Route exact path='/dog-home' render={() => <DogHomeComponent/>} />
                <Route exact path='/talk' render={() => <TalkComponent />} />
                <Route exact path='/adventure' render={() => <AdventureComponent />} />
                <Route exact path='/care' render={() => <CareComponent />} />
                <Redirect to='/landing' />
            </Switch>
        </ConfigProvider>
    )
}

export default Main;