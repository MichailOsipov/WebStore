import * as React from 'react';
import Modal from '@material-ui/core/Modal';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    modal: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        position: 'absolute'
    },
    large: {
        width: theme.spacing.unit * 100
    },
    small: {
        width: theme.spacing.unit * 50
    },
    center: {
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    right: {
        right: 0
    }
});

const getModalClassName = classes => ({size, position}) =>
    `${classes.modal} ${classes[size]} ${classes[position]}`;

export const ModalView = withStyles(styles)(({
    children,
    size = 'small',
    position = 'center',
    classes
}) => (
    <Modal open>
        <div className={getModalClassName(classes)({size, position})}>
            {children}
        </div>
    </Modal>
));
