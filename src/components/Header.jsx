export default function Header() {
    return (
        <>
            <header className='flex flex-row justify-evenly items-center p-4 sticky'>
                <div className='w-36 h-26'>
                    <img className='object-cover inline flex-none' src='/img/footer-logo.png' />
                </div>
                <div>
                    <ul className='flex flex-row space-x-4 text-sm'>
                        <li className='nav-txt cursor-pointer'><a rel='noopener' href='#home'>Home</a></li>
                        <li className='nav-txt cursor-pointer'><a rel='noopener' href='#services'>Services</a></li>
                        <li className='nav-txt cursor-pointer'><a rel='noopener' href='#portafolio'>Portafolio</a></li>
                        <li className='nav-txt cursor-pointer'><a rel='noopener' href='#contact'>Contact</a></li>
                    </ul>
                </div>

                <a href='files/David_Santiago_CV.pdf' download='David_Santiago_CV.pdf'>
                    <button className='hidden md:block bg-red-600 hover:bg-red-500 rounded-full font-semibold min-h-12 min-w-36 text-sm'>DOWNLOAD CV</button>
                </a>

            </header>
        </>
    );
}