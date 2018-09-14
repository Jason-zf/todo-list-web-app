import React from "react";
import {Button} from "react-bootstrap";

class AddTableRowButton extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Button bsClass='addTableRowBtn'>+</Button>
            </div>
        )
    }
}

export default AddTableRowButton;