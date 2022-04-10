import ReactModal from "react-modal";

const CustomDialog = (props) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          maxHeight: '95%',
          maxWidth: '50%',
          minWidth: props.minWidth,
          transform: 'translate(-50%, -50%)',
        },

        overlay: {
            backgroundColor: 'rgba(51, 51, 51, 0.66)',
            zIndex: 999999
        }
      };

    return (
        <>
        <ReactModal
            style={customStyles}
            isOpen={props.isVisible}
            ariaHideApp={false}
            onRequestClose={props.onClose}>
                {props.view}
        </ReactModal>
        </>
    )
}

export {CustomDialog}