import * as React from 'react';
import {shallow} from 'enzyme';
import {LoginView} from './login-view';

describe('LoginView', () => {
    test('rendering', () => {
        const wrapper = shallow(
            <LoginView
                onLogin={jest.fn()}
                onGoMainPage={jest.fn()}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
