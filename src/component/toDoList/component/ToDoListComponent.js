import React from "react";
import SearchComponent from "../../search";
import View from "../../table";

class ToDoListComponent extends React.Component {
    render() {
        return (
            <div>
                <div className='searchContainer'>
                    <SearchComponent/>
                </div>
                <div className='tableContainer'>
                    <View/>
                </div>
            </div>
        )
    }
}

export default ToDoListComponent;