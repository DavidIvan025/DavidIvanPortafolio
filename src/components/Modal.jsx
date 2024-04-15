import { useState } from 'react';
import '../css/modal.css';

export default function Modal({ modalMessage }) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <>
            <div className="fixed top-0 right-0 min-h-[10rem] min-w-[10rem] max-w-[19rem] z-10 bg-white rounded-lg drop-shadow-md">
                <div className="grid grid-cols-1 grid-rows-[4rem,1fr,auto] grid-flow-col">
                    <div className="modal-header">
                        <p>Message</p>
                        <a onClick={toggleModal}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className='modal-body'>
                        {modalMessage}
                    </div>
                    <div className="modal-footer">
                        <button onClick={toggleModal}>Confirm</button>
                    </div>
                </div>

            </div>
        </>
    );
}