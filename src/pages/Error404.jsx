import Header from '../components/Header'
import Footer from '../components/Footer';
import '../css/main.css';

export default function Error404() {
    return (
        <>
            <Header />
            <div className='@container min-h-screen translate-y-1/4'>
                <div className='flex-grow flex flex-col text-center font-medium'>
                    <span className='error'>404</span>
                    <div className='bg-text'>
                        <svg className='h-10 w-10 animate-bounce inline-flex' fill="orange" viewBox="0 -8 528 528" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>warn</title>
                            <path d="M264 56Q318 56 364 83 410 110 437 156 464 202 464 256 464 310 437 356 410 402 364 429 318 456 264 456 210 456 164 429 118 402 91 356 64 310 64 256 64 202 91 156 118 110 164 83 210 56 264 56ZM232 144L232 272 296 272 296 144 232 144ZM232 304L232 368 296 368 296 304 232 304Z"></path></g>
                        </svg>
                        <p className='@md:text-3xl text-red-500'>Oops,</p>
                        <p className='italic font-semibold font-mono @md:text-3xl'>Page Not Found.</p>
                    </div>

                </div>
                <div className='text-center mt-6'>
                    <p className='@md:text-2xl'>This page doesn't exist or was removed!</p>
                    <p className='@md:text-2xl'>We suggest you back to home</p>
                    <a href='DavidIvanPortafolio/home'><button className='rounded-md h-9 min-w-40 mt-6 text-black text-sm bg-white hover:bg-gray-200'>Back to Home</button></a>
                </div>
            </div>
            <Footer />
        </>
    );
}