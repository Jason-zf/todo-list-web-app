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
        this.name = 'action...';
        this.title = 'Details of Action';
    }

    onClickCancel() {
        this.setState({
            redirect: true
        });
    }

    onClickOk() {
        debugger
        this.setState({
            redirect: true
        });
        if (this.input.value) {
            this.props.item.name = this.input.value;
        }
        this.props.onAddNewFormItem(this.props.item, this.state.currentId, this.props.authorization);
    }

    componentWillMount() {
        this.props.onChangeItem(this.state.currentId);

        if (this.state.currentId !== -1) {
            this.name = this.props.formItems.filter(item => item.id === this.state.currentId)[0].name;
            this.title += '-' + this.name;
        }
    }

    render() {

        return (
            <div className='detailPage'>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>{this.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalAction">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Action:
                                </Col>
                                <Col sm={8}>
                                    <FormControl type="email" placeholder={this.name} inputRef={ref => {
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
