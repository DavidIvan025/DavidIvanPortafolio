import { useState } from 'react';
import '../css/modal.css';

export default function Modal({ modalSuccess, modalError }) {
    const [error,setActive] = useState(false);
    const content = () => {
        setActive(!error);
    };

    return (
        <>
            <div className="fixed top-0 right-0 min-h-[10rem] min-w-[10rem] max-w-[19rem] z-10 bg-white rounded-lg drop-shadow-md">
                <div className="grid grid-cols-1 grid-rows-[4rem,1fr,auto] grid-flow-col">
                    <div className="modal-header">
                        <p>Message</p>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div className={`${!error ? modalSuccess :  error ? modalError : ""}  ${'modal-body'}`} >
                        {content}
                    </div>
                    <div className="modal-footer">
                        <button>Confirm</button>

                    </div>
                </div>

            </div>
        </>
    );
}