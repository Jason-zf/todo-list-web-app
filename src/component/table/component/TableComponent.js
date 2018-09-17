import React from "react";
import {Button, Table} from "react-bootstrap";
import '../css/table.css'
import SortBtn from "./Container";
import {Link, Redirect} from "react-router-dom";

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
                <th><SortBtn title='action'>Action</SortBtn></th>
                <th><SortBtn title='tags'>Tags</SortBtn></th>
                <th><SortBtn title='dueDate'>Due Date</SortBtn></th>
                <th><SortBtn title='status'>Status</SortBtn></th>
                <th><SortBtn title='actions'>Actions</SortBtn></th>
            </tr>
            </thead>
        )
    }

    onClickBtn(id) {
        this.props.onDeleteFormItem(id);
        console.log("fun");
    }

    render() {
        const showItems = this.props.searchResult.isShowSearchResult === false ? this.props.formItems : this.props.searchResult.searchedFormItems;
        return (
            <Table striped bordered condensed hover>
                {this.renderHeader()}
                <tbody>
                {
                    showItems.length > 0 && showItems.map((item, index) => (
                        <tr>
                            <td>{item.action}</td>
                            <td>{item.tags.join(', ')}</td>
                            <td>{item.dueDate.format('YYYY/MM/DD')}</td>
                            <td>{item.status}</td>
                            <td>
                                <div className='detailContainer'>
                                    <Link to={`/detail/${index}`}>detail</Link>
                                </div>
                                <Button bsClass='deleteBtn'
                                        onClick={() => {
                                            this.onClickBtn(index)
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
        this.props.item.id = this.props.formItems.length;
        this.setState({
            redirect: true
        })

    }
}


export default TableComponent;