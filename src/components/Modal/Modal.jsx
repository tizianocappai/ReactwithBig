import './Modal.css';
import close from '../../assets/icons/icons8-eliminare.svg';
import { useContext } from 'react';
import Context from '../Context/context';

const Modal = (props) => {

    const {articleBody, onClose} = props;
    const {theme} = useContext(Context);

    return (
        <>
        <div className='modal__container'>
            <div className={`modal__content modal--${theme}`}>
                <div className='modal__top-section'>
                    <img
                        onClick={onClose}
                        className='modal__close-icon'
                        src={close}
                        alt=''
                    />
                </div>
                <div className='modal__body-section'>
                    <span className='modal__description'>{articleBody}</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Modal;