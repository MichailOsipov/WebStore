import * as React from 'react';
import {connect} from 'react-redux';
import {getModals} from 'domains/modals';
import {MODALS} from 'constants/modals';
import {ModalView} from './modal-view';


export const Modals = connect(
    state => ({
        modals: getModals(state)
    })
)(({
    modals
}) => (
    <div>
        {modals.map(({name, params}) => {
            const {Component, size, position} = MODALS[name];
            return (
                <ModalView key={name} size={size} position={position}>
                    <Component params={params} />
                </ModalView>
            );
        })}
    </div>
));
