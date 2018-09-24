import React from "react";
import {Redirect} from "react-router-dom";
import {Modal, Button, FormGroup, ControlLabel, FormControl, Form, Col} from "react-bootstrap";
import DatePickerComponent from "../../datePicker/";
import SelectorComponent from "../../selector/";

class DetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            currentId: parseInt(this.props.match.params.id, 10)
        };
        this.props = props;
    }

    onClickCancel() {
        this.setState({
            redirect: true
        });
    }

    onClickOk() {
        this.setState({
            redirect: true
        });
        if (this.input.value) {
            this.props.item.name = this.input.value;
        }
        this.props.onAddNewFormItem(this.props.item, this.state.currentId, this.props.authorization);
    }


    render() {
        debugger
        let name = 'action...';
        let title = 'Details of Action';
        if (this.state.currentId !== -1) {
            this.props.onChangeItem(this.state.currentId);
            title += '-' + this.props.item.name;
            name = this.props.item.name;
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
                                    <FormControl type="email" placeholder={name} inputRef={ref => {
                                        this.input = ref;
                                    }}/>
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
                                    Tags:
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
                    this.state.redirect && <Redirect to='/home'/>
                }
            </div>
        )
    }
}

export default DetailComponent;
