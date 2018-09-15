import React from "react";
import {Button} from "react-bootstrap";

class AddTableRowButton extends React.Component {
    render() {
        return (
            <div>
                <Button bsClass='addTableRowBtn'><span className='glyphicon glyphicon-plus'></span></Button>
            </div>
        )
    }
}

export default AddTableRowButton;