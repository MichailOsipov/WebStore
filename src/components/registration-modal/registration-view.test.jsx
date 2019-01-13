import * as React from 'react';
import {shallow} from 'enzyme';
import {RegistrationView} from './registration-view';

describe('RegistrationView', () => {
    test('rendering', () => {
        const wrapper = shallow(
            <RegistrationView
                onRegister={jest.fn()}
                onGoMainPage={jest.fn()}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
