import React from "react";
import {Modal, Button, Form, FormGroup, ControlLabel, FormControl, Col} from "react-bootstrap";
import './login_style.css';
import {Redirect} from "react-router-dom";

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onClickRegisterBtn() {
        this.props.onRegister(this.username.value, this.password.value);
    }

    onClickOkBtn() {
        debugger
        this.props.onLogin(this.username.value, this.password.value);
    }

    render() {
        return (
            <div className="static-modal">
                {
                    !this.props.logged &&
                    <Modal.Dialog>
                        <Modal.Header className='header'>
                            <Modal.Title>Welcome to to-do list!</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalName">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Username:
                                    </Col>
                                    <Col sm={8}>
                                        <FormControl type="name" placeholder="user name" inputRef={ref => {
                                            this.username = ref;
                                        }}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Password:
                                    </Col>
                                    <Col sm={8}>
                                        <FormControl type="password" placeholder="password" inputRef={ref => {
                                            this.password = ref;
                                        }}/>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={() => {
                                this.onClickRegisterBtn()
                            }}>Register</Button>
                            <Button onClick={() => {
                                this.onClickOkBtn()
                            }}>Login</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                }
                {
                    this.props.logged && <Redirect to='/home'/>
                }
            </div>
        )
    }
}

export default LoginComponent;