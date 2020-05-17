import React, { useState } from 'react';
import Header from './HeaderComponent';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Consumer } from "./configContext";
import Footer from './FooterComponent';
import { Helmet } from 'react-helmet';

function AdventureSearch () {

    return (
        <div id="searchDiv" className="overflow-scroll mh-100">
            <Helmet>
                <script async src="https://cse.google.com/cse.js?cx=011008517122385517076:oeslk2omfyr"></script>   
            </Helmet>
            <div className="gcse-search" ></div>
        </div>
    )
}

function AdventureMap() {
    return (
        <div id="mapDiv" className="embed-responsive embed-responsive-1by1">
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1J75h137lZpMDdLeovFbWOkHCl_YZDRlg" title="Google Custom Search Engine"></iframe>
        </div>
    )
}


function Adventure() {

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const googleCseSearch = (ZIP) => {
        if (document.getElementById("gsc-i-id1")) {
            document.getElementById("gsc-i-id1").value=("dog events "+ ZIP);
            document.querySelector(".gsc-search-button-v2").click();
        }
        // if (google.search.cse.element.getElement('gsc-i-id1')) {
        //     google.search.cse.element.getElement('gsc-i-id1').execute("dog events "+ ZIP)
        // }
    };

    return (
        <Consumer>
            {context => {
                return(
                    <>
                        <Header pageName="Adventure with" dogName={context.chosenDog.name} />
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mh-100 p-0" id="adventure-main">
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                id="barkr-tab"
                                                className={{ active: activeTab === '1', "p-1":true }}
                                                onClick={() => { toggle('1'); }}
                                            >
                                                <h5 className="my-0 my-md-2">Dog Parks</h5>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                id="barkr-tab"
                                                className={{ active: activeTab === '2', "p-1":true }}
                                                onClick={() => { toggle('2'); googleCseSearch(context.chosenDog.ZIP) }}
                                            >
                                                <h5 className="my-0 my-md-2">Nearby Events</h5>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <AdventureMap />
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <AdventureSearch />
                                        </TabPane>
                                    </TabContent>
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

export default Adventure;