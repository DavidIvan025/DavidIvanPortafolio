import Header from '../components/Header'

export default function Footer() {
    return (
        <>
            <footer className=''>
                <div className='footer-top wrapper grid sm:grid-cols-[28rem,auto,auto] sm:place-items-center gap-5'>
                    <div>
                        <p className='text-2xl'>Contact me:</p>
                        <p className='text-3xl'>Start by <p className='text-orange-300 underline inline-flex'>Saying Hi!</p> </p>
                        <p className='opacity-70'>Cd. Juarez, Chihuahua, Mexico</p>
                        <p className='text-lg sm:text-2xl mt-5'>davidivansan@gmail.com</p>
                    </div>
                    <div className='font-semibold sm:ml-auto'>
                        <p className='text-2xl mb-8'>Links</p>
                        <ul className='font-serif '>
                            <li>
                                Home
                            </li>
                            <li>
                                My own components
                            </li>
                            <li>
                                My vlog
                            </li>
                        </ul>
                    </div>
                    <div className='font-semibold'>
                        <p className='text-2xl mb-8'>Products</p>
                        <ul className='font-serif '>
                            <li>
                                Works
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                News
                            </li>
                            <li>
                                Contacts
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='footer-bottom grid grid-cols-1 sm:grid-flow-[auto,auto,auto] sm:grid-flow-col sm:place-items-center sm:grid-cols-3'>
                    <img className='mb-8 sm:mb-0' src='#' alt='Logo'></img>
                    <p className='font-serif '>2024 Made with React by @davidivansan. All Rights Reserved</p>
                    <div>
                    <a className='footer-icons inline-flex justify-center items-center' href='#'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    <a className='footer-icons inline-flex justify-center items-center' href='#'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                    <a className='footer-icons inline-flex justify-center items-center' href='#'>
                        <i className='fa fa-pinterest'></i>
                    </a>
                    </div>

                </div>
            </footer>
        </>
    );
}