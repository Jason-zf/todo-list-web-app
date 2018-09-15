import React from "react";
import {Redirect} from "react-router-dom";
import {Modal, Button, FormGroup, ControlLabel, FormControl, Form, Col} from "react-bootstrap";
import DatePickerComponent from "../../datePicker/component/DatePickerComponent";
import SelectorComponent from "../../selector/component/SelectorComponent";

class DetailComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    onClickCancel() {
        this.setState({
            redirect: true
        })
    }

    onClickOk() {
        this.setState({
            redirect: true
        })
    }


    render() {
        let item = {
            action: 'action...',
            tags: [],
            dueDate: '',
            status: ''
        };
        let title = 'Details of Action';
        if (this.props.action !== undefined) {
            item = this.props;
            title += '-' + this.props.action;
        }
        return (
            <div className='detailPage'>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalAction">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Action:
                                </Col>
                                <Col sm={8}>
                                    <FormControl type="email" placeholder={item.action}/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalDueDate">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Due Date:
                                </Col>
                                <Col sm={8}>
                                    <DatePickerComponent/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalDueDate">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Status:
                                </Col>
                                <Col sm={8}>
                                    <SelectorComponent isStatus={true}/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalDueDate">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Status:
                                </Col>
                                <Col sm={8}>
                                    <SelectorComponent/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => {
                            this.onClickCancel()
                        }}>Cancel</Button>
                        <Button onClick={() => {
                            this.onClickOk()
                        }}>Ok</Button>
                    </Modal.Footer>
                </Modal.Dialog>
                {
                    this.state.redirect && <Redirect to='/'/>
                }
            </div>
        )
    }
}

export default DetailComponent;
