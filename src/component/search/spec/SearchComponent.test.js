import React from 'react'
import {shallow} from 'enzyme'
import SearchComponent from '../component/SearchComponent';
import '../../../enzymeTestConfig';

describe('Search box', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<SearchComponent/>);
    });
    it('should render search box', () => {
    })
});