import React from "react";
import {Button, Table} from "react-bootstrap";
import '../css/table.css'
import SortBtn from "./Container";
import {Link, Redirect} from "react-router-dom";
import moment from "moment";

class TableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            redirect: false
        }
    }

    renderHeader() {
        return (
            <thead>
            <tr>
                <th><SortBtn title='name'>Action</SortBtn></th>
                <th><SortBtn title='tags'>Tags</SortBtn></th>
                <th><SortBtn title='dueDate'>Due Date</SortBtn></th>
                <th><SortBtn title='status'>Status</SortBtn></th>
                <th><SortBtn title='actions'>Actions</SortBtn></th>
            </tr>
            </thead>
        )
    }

    onClickDeleteBtn(id, authorization) {
        debugger
        this.props.onDeleteFormItem(id, authorization);
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                {this.renderHeader()}
                <tbody>
                {
                    this.props.formItems.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.tags.join(', ')}</td>
                            <td>{moment(item.dueDate).format('YYYY/MM/DD')}</td>
                            <td>{item.status}</td>
                            <td>
                                <div className='detailContainer'>
                                    <Link to={`/detail/${item.id}`}>detail</Link>
                                </div>
                                <Button bsClass='deleteBtn'
                                        onClick={() => {
                                            this.onClickDeleteBtn(item.id, this.props.authorization)
                                        }}>delete
                                </Button>
                            </td>
                        </tr>
                    ))
                }
                <tr>
                    <td colSpan='5'>
                        <Button bsClass='addTableRowBtn' onClick={() => {
                            this.onClickAddBtn()
                        }}><span className='glyphicon glyphicon-plus'></span></Button>
                        {
                            this.state.redirect && <Redirect to='/detail/-1'/>
                        }
                    </td>
                </tr>
                </tbody>
            </Table>
        )
    }

    onClickAddBtn() {
        debugger
        this.props.onChangeTableItem(-1);
        this.setState({
            redirect: true
        })

    }
}


export default TableComponent;