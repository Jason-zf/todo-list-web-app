import React from "react";
import {Button, Table} from "react-bootstrap";
import '../css/table.css'
import SortBtn from "./SortBtn";
import AddTableRowButton from "./AddTableRowButton";

class TableComponent extends React.Component {
    constructor() {
        super();
    }

    renderHeader() {
        return (
            <thead>
            <tr>
                <th><SortBtn>Action</SortBtn></th>
                <th><SortBtn>Tags</SortBtn></th>
                <th><SortBtn>Due Date</SortBtn></th>
                <th><SortBtn>Status</SortBtn></th>
                <th><SortBtn>Actions</SortBtn></th>
            </tr>
            </thead>
        )
    }

    onClickBtn() {
        console.log("fun");
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                {this.renderHeader()}
                <tbody>
                {this.props.children && this.props.children.map(item => (
                    <tr>
                        {Object.values(item).map(value => (<td>{value}</td>))}
                        <td><a className='detailSpan'>detail</a><a bsclass='deleteBtn' onClick={() => {
                            this.onClickBtn()
                        }}>delete</a></td>
                    </tr>
                ))}
                <tr>
                    <td colSpan='5'><AddTableRowButton/></td>
                </tr>
                </tbody>
            </Table>
        )
    }
}


export default TableComponent;