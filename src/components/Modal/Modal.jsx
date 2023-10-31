import './Modal.css';
import close from '../../assets/icons/icons8-eliminare.svg';

const Modal = (props) => {

    const {articleBody, onClose} = props;

    return (
        <>
        <div className='modal-pos'>
            <div className='modal-top-section'>
                <img
                    onClick={onClose}
                    className='modal-close-icon'
                    src={close}
                    alt=''
                />
            </div>
            <div className='modal-container'>
                <span className='modal-description'>{articleBody}</span>
            </div>
        </div>
        </>
    );
}

export default Modal;