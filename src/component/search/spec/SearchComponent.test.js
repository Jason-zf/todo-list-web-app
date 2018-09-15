import React from 'react'
import {shallow} from 'enzyme'
import SearchComponent from '../component/SearchComponent';
import '../../../enzymeTestConfig';
import {FormControl} from "react-bootstrap";

describe('Search box', () => {
    let component;
    beforeAll(() => {
        component = shallow(<SearchComponent/>);
    });
    it('should render span with correct className', () => {
        expect(component.find('.glyphicon.glyphicon-search').length).toBe(1);
    });

    it('should render FormControl with text correctly', () => {
        expect(component.find(FormControl).props()).toEqual(expect.objectContaining({
            "bsClass": "form-control",
            "componentClass": "input",
            "placeholder": "Search...",
        }));
    });

});