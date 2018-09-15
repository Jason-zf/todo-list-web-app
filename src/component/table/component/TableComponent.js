import React from "react";
import {Button, Table} from "react-bootstrap";
import '../css/table.css'
import SortBtn from "./SortBtn";
import AddTableRowButton from "./AddTableRowButton";
import {Link} from "react-router-dom";

class TableComponent extends React.Component {

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
                        <td>
                            <div className='detailContainer'>
                                <Link to='/detail'>detail</Link>
                            </div>
                            <Button bsClass='deleteBtn'
                                    onClick={() => {
                                        this.onClickBtn()
                                    }}>delete</Button></td>
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