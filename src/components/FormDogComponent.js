import React, { useState } from 'react';
import { Row, Button, ButtonGroup, Form, FormGroup, Label, Input, FormText, Col, CustomInput, TabPane, Nav, NavItem, NavLink, TabContent } from 'reactstrap'
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Header from './HeaderComponent';
import Consumer from "./configContext";
import Footer from './FooterComponent';
import Autosuggest from 'react-autosuggest';
import dogBreeds from 'dog-breeds';

const DogFields = (props) => {
    const [activeTab, setActiveTab] = useState('2');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem id="barkr-tab">
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Home
                    </NavLink>
                </NavItem>
                <NavItem id="barkr-tab">
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Speak
                    </NavLink>
                </NavItem>
                <NavItem id="barkr-tab">
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Care
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <HomeForm  />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <SpeakForm context={props.context} />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row className="bg-white border-0">
                        <Col sm="12">
                            <CareForm />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

function HomeForm(props) {

    const dogsList = dogBreeds.all;

    return (
        <div>
            <Form>
                <FormGroup className="bg-white border-0" row>
                    <Label for="name" sm={3}>Name</Label>
                    <Col sm={9}>
                        <Input type="text" name="name" id="name" />
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Label for="bio" sm={3}>Bio</Label>
                    <Col sm={9}>
                        <Input type="textarea" name="bio" id="bio" />
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Label for="sex" sm={3}>Sex</Label>
                    <Col sm={9}>
                        <Input type="select" name="sex" id="sex">
                            <option>M</option>
                            <option>F</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Label for="selectBreeds" sm={3}>Select All Breeds</Label>
                    <Col sm={9}>
                        <Input type="select" name="selectBreeds" id="selectBreeds" multiple>
                            {dogsList.map(breed => <option>{breed.name}</option>)}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" row>
                    <Label for="birthYear" sm={3}>Year Born</Label>
                    <Col sm={9}>
                        <Input type="text" name="birthYear" id="birthYear" />
                    </Col>
                </FormGroup>
                <FormGroup className="bg-white border-0" className="d-flex flex-row flex-wrap">
                    <Label className="col-3" for="">Upload Thumbnail Picture</Label>
                    <Input className="col-9" type="file" name="thumbnailPic" id="thumbnailPic" />
                    <FormText className="col-12" color="black">
                        Suggested size 200x200 pixels.  
                    </FormText>
                </FormGroup>
                <FormGroup className="bg-white border-0" className="d-flex flex-row flex-wrap">
                    <Label className="col-3" for="">Upload Profile Picture</Label>
                    <Input className="col-9" type="file" name="profilePic" id="profilePic" />
                    <FormText className="col-12" color="black">
                        Suggested size 800x800 pixels.  
                    </FormText>
                </FormGroup>
            </Form>
        </div>
    )
}

const CommandsList = (props) => {

    return(
        props.context.chosenDog.commands.map(command => {
            return(
                <div key={command.id} className="w-100">
                    <Button className="bg-white w-100" onClick={() => props.setActiveCommand(command.id)}>
                        <h2 className="my-auto ml-2 text-primary">{command.name}</h2>
                    </Button>
                </div>
            )
        })
    )
}

function SpeakForm(props) {
    const [activeCommand, setActiveCommand] = useState('0');

    return (
        <Row className="bg-white border-0 py-3">
            <div className="col-4">
                <h4>Add New Command</h4>
                <div className="w-100">
                    <Button className="bg-white w-100" >
                        <h2 className="my-auto ml-2 text-primary">Add New Command</h2>
                    </Button>
                </div>
                <h4>Known Commands</h4>
                <CommandsList context={props.context} setActiveCommand={setActiveCommand} />
            </div>
            <div className="col-8">
                <Form>
                    <FormGroup className="bg-white border-0" row>
                        <Label for="name" sm={3}>Command</Label>
                        <Col sm={9}>
                            <Input type="text" name="name" id="name" />
                        </Col>
                    </FormGroup>
                    <FormGroup className="bg-white border-0" row>
                        <Label for="name" sm={3}>Description</Label>
                        <Col sm={9}>
                            <Input type="text" name="description" id="description" />
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" className="bg-white border-0" row>
                        <legend className="col-form-label">Choose Image</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="photoSource" />{' '}
                                Upload a picture or GIF
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="photoSource" />{' '}
                                Use Stock Photo
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="photoSource" />{' '}
                                Leave blank for now
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup className="bg-white border-0" className="d-flex flex-row flex-wrap">
                        <Label className="col-3" for="">Upload Picture/GIF</Label>
                        <Input className="col-9" type="file" name="thumbnailPic" id="thumbnailPic" />
                        <FormText className="col-12" color="black">
                            Suggested size 400x400 pixels  
                        </FormText>
                    </FormGroup>
                    <br /><br />
                    <Button className="bg-success">Add/Update Command</Button>{' '}
                    <Button className="bg-danger">Delete Command</Button>

                </Form>
            </div>
            
            <Form>
                <FormGroup row>
                    <Label for="exampleFile" sm={3}>File</Label>
                    <Col sm={9}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </Col>
                </FormGroup>
                <FormGroup tag="fieldset" row>
                    <legend className="col-form-label col-sm-2">Radio Buttons</legend>
                    <Col sm={9}>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio2" />{' '}
                Option one is this and that—be sure to include why it's great
              </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio2" />{' '}
                Option two can be something else and selecting it will deselect option one
              </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio2" disabled />{' '}
                Option three is disabled
              </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="checkbox2" sm={3}>Checkbox</Label>
                    <Col sm={{ size: 10 }}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox2" />{' '}
                Check me out
              </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Plain Text (Static)</Label>
                    <Input plaintext value="Some plain text/ static value" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="with a placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUrl">Url</Label>
                    <Input
                        type="url"
                        name="url"
                        id="exampleUrl"
                        placeholder="url placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleNumber">Number</Label>
                    <Input
                        type="number"
                        name="number"
                        id="exampleNumber"
                        placeholder="number placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDatetime">Datetime</Label>
                    <Input
                        type="datetime"
                        name="datetime"
                        id="exampleDatetime"
                        placeholder="datetime placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">Date</Label>
                    <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleTime">Time</Label>
                    <Input
                        type="time"
                        name="time"
                        id="exampleTime"
                        placeholder="time placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleColor">Color</Label>
                    <Input
                        type="color"
                        name="color"
                        id="exampleColor"
                        placeholder="color placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSearch">Search</Label>
                    <Input
                        type="search"
                        name="search"
                        id="exampleSearch"
                        placeholder="search placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelectMulti">Select Multiple</Label>
                    <Input
                        type="select"
                        name="selectMulti"
                        id="exampleSelectMulti"
                        multiple
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
        </FormText>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" /> Option one is this and that—be sure to
          include why it's great
        </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Check me out
        </Label>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCheckbox">Checkboxes</Label>
                    <div>
                        <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
                        <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
                        <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
                        <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Can't click this label to check!" htmlFor="exampleCustomCheckbox4_X" disabled />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCheckbox">Radios</Label>
                    <div>
                        <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" />
                        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one" />
                        <CustomInput type="radio" id="exampleCustomRadio3" label="But not this disabled one" disabled />
                        <CustomInput type="radio" id="exampleCustomRadio4" label="Can't click this label to select!" htmlFor="exampleCustomRadio4_X" disabled />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCheckbox">Switches</Label>
                    <div>
                        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
                        <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Or this one" />
                        <CustomInput type="switch" id="exampleCustomSwitch3" label="But not this disabled one" disabled />
                        <CustomInput type="switch" id="exampleCustomSwitch4" label="Can't click this label to turn on!" htmlFor="exampleCustomSwitch4_X" disabled />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCheckbox">Inline</Label>
                    <div>
                        <CustomInput type="checkbox" id="exampleCustomInline" label="An inline custom input" inline />
                        <CustomInput type="checkbox" id="exampleCustomInline2" label="and another one" inline />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomSelect">Custom Select</Label>
                    <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </CustomInput>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomMutlipleSelect">Custom Multiple Select</Label>
                    <CustomInput type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </CustomInput>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomSelectDisabled">Custom Select Disabled</Label>
                    <CustomInput type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled>
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </CustomInput>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomMutlipleSelectDisabled">Custom Multiple Select Disabled</Label>
                    <CustomInput type="select" id="exampleCustomMutlipleSelectDisabled" name="customSelect" multiple disabled>
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </CustomInput>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomRange">Custom Range</Label>
                    <CustomInput type="range" id="exampleCustomRange" name="customRange" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomFileBrowser">File Browser</Label>
                    <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomFileBrowser">File Browser with Custom Label</Label>
                    <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomFileBrowser">File Browser Disabled</Label>
                    <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" disabled />
                </FormGroup>
            </Form>
            <ButtonGroup>
                <Button>Basic Info</Button>
                <Button>Speak</Button>
                <Button>Care</Button>
            </ButtonGroup>
        </Row>
    )
}

function CareForm(props) {

    return (
        <>
            <Form>
                <FormGroup row>
                    <Label for="exampleFile" sm={3}>File</Label>
                    <Col sm={9}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </Col>
                </FormGroup>
            </Form>
        </>
    )
}

function FormDogComponent(props) {

    return (
        <Consumer>
            {context => {
                return (
                    <>
                        <Header pageName="My Dog" />
                        <div className="container">
                            <div className="row h75vh overflow-auto">
                                <div className="col-12 m-auto">
                                    <DogFields context={context} />
                                    <br /><br />
                                    <Button className="bg-success">Submit Changes</Button>
                                    <br /><br />
                                    <Button className="bg-danger">Switch to Legacy Profile (RIP)</Button>
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

export default FormDogComponent;