import React from "react";
import SearchComponent from "../../search";
import TableComponent from "../../table";

class ToDoListComponent extends React.Component {
    render() {
        return (
            <div>
                <div className='searchContainer'>
                    <SearchComponent/>
                </div>
                <div className='tableContainer'>
                    <TableComponent/>
                </div>
            </div>
        )
    }
}

export default ToDoListComponent;