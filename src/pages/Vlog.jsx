import Header from '../components/Header'
import '../css/vlog.css';

export default function Vlog() {
    return (
        <>
            <Header />
            <div className="App">
                <div className="container flex flex-col">
                    <div>
                        <picture>
                            <source media="(min-width: 768px)" srcset="mainbanner.jpg" />
                            <img className='banner' src='visual_23m.jpg' alt='banner' />
                        </picture>
                    </div>
                    <div>
                        <img className='teaser invisible md:visible bg-transparent ' src="release_023.png" alt='disc' />
                        <img className='teaser' src="youtube.jpg" alt='name' />
                    </div>
                </div>

                <footer>
                    <div className='flex justify-evenly flex-wrap md:justify-center'>
                        <img className='adds' src='banner.png' alt='ad_1'></img>
                        <img className='adds' src='banner.png' alt='ad_2'></img>
                        <img className='adds' src='banner.png' alt='ad_3'></img>
                    </div>
                    <div className='grid grid-cols-5'></div>

                    <div className='sm-container'>
                        <a className='icon inline-flex justify-center items-center' href='#'>
                            <i className='fa fa-twitter'></i>
                        </a>
                        <a className='icon inline-flex justify-center items-center' href='#'>
                            <i className='fa fa-facebook'></i>
                        </a>
                        <a className='icon inline-flex justify-center items-center' href='#'>
                            <i className='fa fa-snapchat-ghost'></i>
                        </a>
                    </div>
                    <p className='flex justify-center text-[.75rem] tracking-tight'>
                        © PONY CANYON
                    </p>
                </footer>
            </div>
        </>
    );
}