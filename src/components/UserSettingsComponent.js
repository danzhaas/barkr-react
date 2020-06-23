import React, { useState } from 'react';
import {
    Card, CardBody, CardTitle, CardText, Row, Button, Form, FormGroup, Label, Input, Col, CustomInput, NavItem, NavLink, TabPane, Nav, TabContent
} from 'reactstrap';
import classnames from 'classnames';
import Header from './HeaderComponent';
import Consumer from "./configContext";
import Footer from './FooterComponent';

const ContactsTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const formatPhoneDialer = (phone) => `tel:${phone}`;

    return (
        <div>
            <Nav tabs>
                <NavItem id="barkr-tab">
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Owner
                    </NavLink>
                </NavItem>
                <NavItem id="barkr-tab">
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Primary Vet
                    </NavLink>
                </NavItem>
                <NavItem id="barkr-tab">
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Emergency Vet
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <FormGroup>
                                <Label for="exampleCheckbox">Your Contact Card</Label>
                                <div className="d-flex ">
                                    <div className="col col-md-6 d-flex flex-column justify-content-around">
                                        <CustomInput type="switch" id="contactOwnerNameSwitch" name="contactOwnerNameSwitch" label="Display your name?" />
                                        <CustomInput type="switch" id="contactOwnerAddressSwitch" name="contactOwnerAddressSwitch" label="Display your address?" />
                                        <CustomInput type="switch" id="contactOwnerPhoneSwitch" name="contactOwnerPhoneSwitch" label="Display your phone number?" />
                                    </div>
                                    <div className="col col-md-6">
                                    <Card>
                                            <CardBody>
                                                <CardTitle>
                                                    <h3>Owner Name</h3>
                                                </CardTitle>
                                                <CardText>
                                                    Owner Address
                                                </CardText>
                                                <CardText>
                                                    <a href={formatPhoneDialer(8888888888)} >
                                                        888-888-8888
                                                    </a>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <FormGroup className="bg-white border-0" row>
                                <Label for="contactVetName" sm={2}>Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="contactVetName" id="contactVetName" placeholder="Vet Clinic Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="bg-white border-0" row>
                                <Label for="contactVetAddress" sm={2}>Address</Label>
                                <Col sm={10}>
                                    <Input type="text" name="contactVetAddress" id="contactVetAddress" placeholder="123 Fake St" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="bg-white border-0" row>
                                <Label for="contactVetPhone" sm={2}>Phone</Label>
                                <Col sm={10}>
                                    <Input type="text" name="contactVetPhone" id="contactVetPhone" placeholder="8888888888" />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <FormGroup className="bg-white border-0" row>
                                <Label for="contactEVetName" sm={2}>Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="contactEVetName" id="contactEVetName" placeholder="Emergency Vet Clinic Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="bg-white border-0" row>
                                <Label for="contactVetAddress" sm={2}>Address</Label>
                                <Col sm={10}>
                                    <Input type="text" name="contactEVetAddress" id="contactEVetAddress" placeholder="123 Fake St" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="bg-white border-0" row>
                                <Label for="contactVetPhone" sm={2}>Phone</Label>
                                <Col sm={10}>
                                    <Input type="text" name="contactEVetPhone" id="contactEVetPhone" placeholder="8888888888" />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

function UserForm(props) {
    return (
        <>
            <Form>
                <FormGroup row>
                    <Label for="name" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="name" id="name" placeholder="First Last" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password1" sm={2}>Change Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password1" id="password1" placeholder=""/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password2" sm={2}>Confirm New Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password2" id="password2" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="email" placeholder="your@email.com" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="ZIP" sm={2}>ZIP Code (Optional)</Label>
                    <Col sm={10}>
                        <Input type="text" name="ZIP" id="ZIP" placeholder="90210" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="phone" sm={2}>Phone (Optional)</Label>
                    <Col sm={10}>
                        <Input type="text" name="phone" id="phone" placeholder="8888888888" />
                    </Col>
                </FormGroup>
                <ContactsTabs />
            </Form>
            <br /><br />
            <Button className="bg-success">Submit Changes</Button>
            <br /><br />
            <Button className="bg-danger">Delete My Account</Button>
        </>
    )
}

function UserSettingsComponent(props) {

    return (
        <Consumer>
            {context => {
                return (
                    <>
                        <Header pageName="Settings for" dogName="Username" />
                        <div className="container">
                            <div className="row h75vh overflow-auto">
                                <div className="col-12 m-auto">
                                    <UserForm />
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

export default UserSettingsComponent;