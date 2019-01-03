import {connect} from 'react-redux';
import {flowRight} from 'lodash';
import {showModal, closeModal} from 'domains/modals';
import {onChange} from 'utils/on-change';
import {screenTypeToModalNames} from './screen-type-to-modal-names';

const handleScreenOrEntityIdChange = (props, prevProps) => {
    const {screenType: prevScreenType} = prevProps || {};
    const {
        screenType: currScreenType,
        entityId,
        showModal, // eslint-disable-line no-shadow
        closeModal, // eslint-disable-line no-shadow
        goTo
    } = props;
    if (prevScreenType) {
        closeModal({name: screenTypeToModalNames[prevScreenType]});
    }

    if (currScreenType) {
        showModal({
            name: screenTypeToModalNames[currScreenType],
            params: {
                entityId,
                goTo
            }
        });
    }
};

export const ModalOpener = flowRight([
    connect(
        null,
        dispatch => ({
            showModal: ({name, params}) => dispatch(showModal({name, params})),
            closeModal: ({name}) => dispatch(closeModal({name}))
        })
    ),
    onChange(
        ['screenType'],
        handleScreenOrEntityIdChange
    )
])(() => null); // probably needed unmount handling
