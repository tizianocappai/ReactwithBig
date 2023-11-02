import './Modal.css';
import close from '../../assets/icons/icons8-eliminare.svg';

const Modal = (props) => {

    const {articleBody, onClose} = props;

    return (
        <>
        <div className='modal-container'>
            <div className='modal-content'>
                <div className='modal-top-section'>
                    <img
                        onClick={onClose}
                        className='modal__close-icon'
                        src={close}
                        alt=''
                    />
                </div>
                <div className='modal-body-section'>
                    <span className='modal-description'>{articleBody}</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Modal;