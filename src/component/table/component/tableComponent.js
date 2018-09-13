import React from "react";
import {Button, Table} from "react-bootstrap";
import '../css/table.css'
import SortBtn from "./sortBtn";

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

    render() {
        return (
            <Table striped bordered condensed hover>
                {this.renderHeader()}
                <tbody>
                {this.props.children && this.props.children.map(item => (
                    <tr>
                        {Object.values(item).map(value => (<td>{value}</td>))}
                        <td><span className='detailSpan'>detail</span><Button bsClass='deleteBtn'>delete</Button></td>
                    </tr>
                ))}
                </tbody>
            </Table>
        )
    }
}


export default TableComponent;