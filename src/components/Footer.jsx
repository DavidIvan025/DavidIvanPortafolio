export default function Footer() {
    return (
        <>
            <footer className='grid grid-flow-row justify-items-center gap-y-6 p-16'>
                <div>
                    <img className='object-cover' draggable='false' width='135rem' height='126rem' src='img/footer-logo.png' />
                </div>
                <div>
                    <a className='icon inline-flex justify-center items-center' target='_blank' href='https://www.linkedin.com/in/david-ivan-san/'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                    <a className='icon inline-flex justify-center items-center' target='_blank' href='https://github.com/DavidIvan025'>
                        <i className='fa fa-github'></i>
                    </a>
                </div>
                <div>
                    <p className='text-sm text-zinc-300'>2024 All Rights Reserved | By davidivansan@hotmail.com</p>
                </div>

            </footer>
        </>
    );
}