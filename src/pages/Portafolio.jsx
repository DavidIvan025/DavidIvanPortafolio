
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <section className='main-container'>
                <div className='flex flex-col justify-center items-center h-screen border-b-lime-400 '>
                    <div className='text-center tracking-wide'>
                        <p className='text-2xl' >I'm David Ivan</p>
                        <p className='text-xl leading-7 mt-2 mb-5'>Web Designer and Full-Stack Developer</p>
                        <button className='bg-transparent border-amber-300 border-4 rounded-md text-amber-300 p-2'> Contact Me</button>
                    </div>
                    <div>
                        <img className='hidden md:block' src='img/ayana_sample.jpg'></img>
                    </div>
                    <div className='hidden md:block'>
                        <a className='icon inline-flex justify-center items-center'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                    </div>

                </div>
                <div className='wrapper'>
                    <p className='text-2xl p-5'>About</p>
                    <div className='grid grid-cols-[auto,1fr] grid-rows-2 p-4'>
                        <div className='h-1 w-12 rounded-lg bg-red-200 justify-self-center mt-3 mr-2'></div>
                        <p className='text-left leading-relaxed mr-auto' >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero voluptates ex expedita, explicabo debitis eum sit, <a className='text-amber-300'> aliquid itaque iure illo dolor rerum. </a>
                            Porro pariatur facilis doloribus nesciunt ducimus ab atque!</p>
                    </div>
                </div>
                <div className='wrapper'>
                    <p className='text-center text-2xl'>My Skills</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4'>
                        <div className='card'>
                            <img className='' src='img/tailwind.png'></img>
                            <p>Tailwind CSS</p>
                        </div>
                        <div className='card'>
                            <img className='' src='img/js.png'></img>
                            <p>JavaScript</p>
                        </div>
                        <div className='card'>
                            <img className='' src='img/html.png'></img>
                            <p>HTML</p>
                        </div>
                        <div className='card'>
                            <img className='' src='img/css.png'></img>
                            <p>CSS</p>
                        </div>
                        <div className='card'>
                            <img className='' src='img/linux.png'></img>
                            <p>Linux</p>
                        </div>
                        <div className='card'>
                            <img className='' src='img/git.png'></img>
                            <p>Git Souce Control</p>
                        </div>
                    </div>

                </div>
                <div className='wrapper'>
                    <p className='text-center text-2xl'> Portfolio</p>
                    <div className='grid grid-cols-2'>
                        <figure className='grid'>
                            <img className='col-start-1 col-end-2 row-start-1 row-end-2' src='img/ayana_sample.jpg' alt='componets'></img>
                            <figcaption className='col-start-1 col-end-2 row-start-1 row-end-2 selfend'>
                                <div className='folios'>
                                    <p>My Components</p>
                                    <p className='line-clamp-2'>These are my own component styles which are usable in your own page</p>
                                    <button>See more</button>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <button className='rounded-lg'>View More</button>
                </div>
                <div className='wrapper'>
                    <p className='text-2xls'>Experience</p>
                    <div className='grid grid-cols-1 justify-items-center'>
                        <div className='year'>
                            <p>2022</p>
                            <div className='w-2 h-2 rounded-full bg-red-700'></div>
                            <p>Practician In RFC</p>
                            <p>Cd. Juarez, Chih.</p>
                            <p className='text-black/50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quasi autem dolorem et? Similique, dolore! Illum amet suscipit perspiciatis quasi magnam laudantium tempora? Ea sapiente enim ex minus amet error!</p>
                        </div>

                    </div>
                </div>
                <div className='wrapper'>
                    <p className='ml-6'>Testimonial</p>
                    <hr></hr>
                    <div className='grid grid-cols-2 justify-items-center'>
                        <div className='w-20 h-1 row-start-1 row-end-6 bg-yellow-500 rounded-lg mt-3'></div>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate optio ex ea! Laboriosam doloremque dolor ipsum vero ratione voluptas unde ducimus quos, odit aut, quisquam repellat eum consequatur quia!</p>
                        <p className=''>David Ivan</p>
                        <div className='flex flex-row items-center'>
                            <div className='w-4 h-1 rounded-md bg-yellow-500'></div>
                            <p className='ml-2'>Full-Stack Dev.</p>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
}