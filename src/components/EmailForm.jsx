import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Modal from '../components/Modal';

export default function EmailForm() {
    
    const modalTextSuccess = (<p>
        Your message was sent successfully to me. In moments I'll contact you.
    </p>);
    const modalTextError = (<p>
        There was an error... try again later.
    </p>);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_hv1ht3j', 'template_jwco8im', form.current, {
                publicKey: 'fctIbkgXkpuPxJcW7',
            })
            .then(
                () => {
                    <Modal modalSuccess={modalTextSuccess} />
                    console.log('Message Sent!');
                    e.target.reset();
                },
                (error) => {
                    <Modal modalError={modalTextError} />
                    console.log('Error...', error.text);
                },
            );
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className='rounded-md bg-zinc-900 row-start-5 row-end-5 col-span-2 md:col-span-2 md:row-start-1 md:row-end-5'>
                <div className='text-sm grid md:grid-cols-1 md:grid-rows-[repeat(4,3rem),9rem] lg:grid-cols-2 lg:grid-rows-[repeat(2,3rem),15rem] gap-y-8 lg:gap-6 p-6'>
                    <input id='name' name='user_name' type='text' placeholder='Name'></input>
                    <input id='phone' name='user_phone' type='text' placeholder='Phone Number'></input>
                    <input id='email' name='user_email' type='text' placeholder='E-mail'></input>
                    <input id='subject' name='user_subject' type='text' placeholder='Subject'></input>
                    <textarea id='message' className='lg:col-span-2 lg:row-span-3' name='message' type='text' placeholder='Message'></textarea>
                    <button id='btn-send' className='btn-msg text-sm rounded-md bg-zinc-800 hover:bg-zinc-700 text-red-500 lg:translate-x-2/4 flex place-items-center justify-center min-h-9 gap-2' type='submit'>Send Message <i className='btn fa fa-send'></i> </button>
                </div>
            </form>
        </>
    );
}