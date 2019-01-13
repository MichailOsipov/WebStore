import * as React from 'react';
import {Drawer, Dialog} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    modal: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 4
    },
    large: {
        width: theme.spacing.unit * 100
    },
    small: {
        width: theme.spacing.unit * 50
    }
});

const CenterDialog = ({onClose, children}) => (
    <Dialog open onClose={onClose}>
        {children}
    </Dialog>
);

const RightDrawer = ({onClose, children}) => (
    <Drawer anchor="right" open onClose={onClose}>
        {children}
    </Drawer>
);

const getModalClassName = classes => ({size}) =>
    `${classes.modal} ${classes[size]}`;

export const ModalView = withStyles(styles)(({
    children,
    size = 'small',
    type = 'drawer',
    onClose,
    classes
}) => {
    const WindowComponent = type === 'drawer' ? RightDrawer : CenterDialog;
    return (
        <WindowComponent onClose={onClose}>
            <div className={getModalClassName(classes)({size})}>
                {children}
            </div>
        </WindowComponent>
    );
});
