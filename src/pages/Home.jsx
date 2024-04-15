import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/main.css';
import EmailForm from '../components/EmailForm';

export default function Portafolio() {
    return (
        <>
            <Header />
            <div className='border-b-2 border-b-zinc-900 h-full grid grid-cols-1 md:grid-cols-[auto,16rem] gap-x-6 p-6 lg:mx-24 md:p-24'>
                <div id='home' className='row-start-1 row-end-1'>
                    <p>Hello, <a className='text-red-600'>I'm</a></p>
                    <p className='text-3xl mb-2'>David Santiago</p>
                    <p>Web Developer</p>
                    <p className='text-zinc-300 mt-6'>Web application programmer focused on backend development with
                        professional experience of team work in previous projects. My goals are to contribute to the
                        development of adaptable and professional WEB applications.</p>

                    <div className='mt-16'>
                        <p className='mb-6'>FIND ME ON</p>
                        <a className='icon inline-flex justify-center items-center' target='_blank' href='https://linkedin.com/in/david-ivan-san/'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a className='icon inline-flex justify-center items-center' target='_blank' href='https://github.com/DavidIvan025'>
                            <i className='fa fa-github'></i>
                        </a>
                        <div className='block md:hidden size-32 mx-auto mb-3'>
                            <div className='inline-flex justify-items-end bg-zinc-500 rounded-t-lg drop-shadow-md h-32 translate-y-2/4 items-center'>
                                <img className='flex-none overflow-hidden object-cover -translate-y-4' src='img/avatar.png' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid col-span-2 mt-16'>
                    <div className='grid grid-rows-[repeat(2,auto)] grid-flow-col md:justify-items-center gap-x-6'>
                        <span>3+</span>
                        <p className='text-sm text-zinc-300'>YEARS OF EXPERIENCE</p>
                        <span>20+</span>
                        <p className='text-sm text-zinc-300'>TECHNOLOGY SKILLS</p>
                        <span>2</span>
                        <p className='text-sm text-zinc-300'>PROJECTS DESIGNED</p>
                    </div>
                </div>
                <div className='hidden md:block md:col-start-2 md:row-end-2 self-center -z-10'>
                    <div className=' bg-zinc-500 rounded-t-lg drop-shadow-md items-center h-56 '>
                        <img className='flex-none overflow-hidden object-cover -translate-y-24' src='img/avatar.png' />
                    </div>
                </div>

            </div>
            <div className='border-b-2 border-b-zinc-900 p-12 md:p-24'>
                <p id='services' className='text-sm text-red-500'>SERVICES</p>
                <p className='text-2xl'>What I Do</p>
                <div className='mt-8 grid grid-flow-row gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='cards'>
                        <a className='icon inline-flex justify-center items-center flex-start'><i className='fa fa-desktop'></i></a>
                        <p className='mb-2 text-xl'>Responsive Web Pages</p>
                        <p>My works are adaptable and responsive to any type of screen.</p>
                    </div>
                    <div className='cards'>
                        <a className='icon inline-flex justify-center items-center flex-start'><i className='fa fa-code'></i></a>
                        <p className='mb-2 text-xl'>React Developer</p>
                        <p>My projects are based on React + Vite.</p>
                    </div>
                    <div className='cards'>
                        <a className='icon inline-flex justify-center items-center flex-start'><i className='fa fa-moon'></i></a>
                        <p className='mb-2 text-xl'>Frontend Developer</p>
                        <p>I'm open to working on frontend projects as a full-time job.</p>
                    </div>
                    <div className='cards'>
                        <a className='icon inline-flex justify-center items-center flex-start'><i className='fa fa-desktop'></i></a>
                        <p className='mb-2 text-xl'>Web Designer</p>
                        <p>My designs use professional designs for your UI inquiries.</p>
                    </div>
                    <div className='cards'>
                        <a className='icon inline-flex justify-center items-center flex-start'><i className='fa fa-code'></i></a>
                        <p className='mb-2 text-xl'>Code Organization</p>
                        <p>The backend code for all projects is compact and easy to read.</p>
                    </div>
                    <div className='cards'>
                        <a className='icon inline-flex justify-center items-center flex-start'><i className='fa fa-moon'></i></a>
                        <p className='mb-2 text-xl'>Backend Developer</p>
                        <p>I'm open to working on backend projects as a full-time job.</p>
                    </div>
                </div>

            </div>
            <div className='border-b-2 border-b-zinc-900 p-12 md:p-24 h-full'>
                <p id='portafolio' className='text-sm text-red-500'>MY PORTAFOLIO</p>
                <p className='text-2xl'>Recent Works</p>
                <div className='mt-8 grid grid-flow-row gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='grid grid-cols-2'>
                        <figure className='grid cursor-pointer'>
                            <div className='relative grid col-start-1 col-end-2 row-start-1 row-end-2 items-center overflow-hidden'>
                                <img className='object-cover absolute scale-[2] -z-10' src='https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc' alt='1' />
                            </div>
                            <figcaption className='col-start-1 col-end-2 row-start-1 row-end-2 justify-evenly'>
                                <div className='folios'>
                                    <p className='font-medium'>Product Shopping Cart</p>
                                    <p className='line-clamp-2'>This is a design of a shopping cart product page.</p>
                                    <a target='_blank' href='https://66178d75e4aa37521b0ae7c1--dynamic-dieffenbachia-ce25c6.netlify.app'><button>See more</button></a>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='grid grid-cols-2'>
                        <figure className='grid cursor-pointer'>
                            <div className='relative grid col-start-1 col-end-2 row-start-1 row-end-2 items-center overflow-hidden'>
                                <img className='object-cover absolute scale-[2] -z-10' src='https://fastly.picsum.photos/id/42/3456/2304.jpg?hmac=dhQvd1Qp19zg26MEwYMnfz34eLnGv8meGk_lFNAJR3g' alt='2' />
                            </div>
                            <figcaption className='col-start-1 col-end-2 row-start-1 row-end-2 justify-evenly'>
                                <div className='folios'>
                                    <p className='font-medium'>My Components</p>
                                    <p className='line-clamp-2'>These are my component styles.</p>
                                    <button>Coming soon...</button>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='grid grid-cols-2'>
                        <figure className='grid cursor-pointer'>
                            <div className='relative grid col-start-1 col-end-2 row-start-1 row-end-2 items-center overflow-hidden'>
                                <img className='object-cover absolute scale-[2] -z-10' src='https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so' alt='3' />
                            </div>
                            <figcaption className='col-start-1 col-end-2 row-start-1 row-end-2 justify-evenly'>
                                <div className='folios'>
                                    <p className='font-medium'>Content Creator Site</p>
                                    <p className='line-clamp-2'>A website designed for showcasing content for a content creator.</p>
                                    <button>Coming soon...</button>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className='flex justify-center my-5'>
                    {/* <button className='bg-zinc-900 hover:bg-zinc-700 w-[16rem] h-[3rem] rounded-md inline-flex justify-center items-center text-sm'>View All Works <i className='fa fa-arrow-right ml-3'></i></button> */}
                </div>

            </div>
            <div className='border-b-2 border-b-zinc-900 p-4 md:p-24'>
                <p id='contact' className='text-sm text-center text-red-500'>CONTACT</p>
                <p className='text-2xl text-center'>Contact With Me</p>
                <div className='mt-8 grid grid-cols-[auto] grid-rows-[auto] md:grid-cols-[18rem,auto] gap-6'>
                    <div className='contact row-start-1 row-end-1 col-span-2 md:col-start-1 md:row-start-1'>
                        <i className='fa fa-map'></i>
                        <p className='text-sm'> México, Chihuahua, Ciudad Juárez</p>
                    </div>
                    <div className='contact row-start-2 row-end-2 col-span-2 md:col-start-1 md:row-start-2'>
                        <i className='fa fa-phone'></i>
                        <p className='text-sm'> +52 656-131-9227</p>
                    </div>
                    <div className='contact row-start-3 row-end-3 col-span-2 md:col-start-1 md:row-start-3'>
                        <i className='fa fa-email-bulk'></i>
                        <p className='text-sm'> davidivansan@hotmail.com</p>
                    </div>
                    <div className='contact row-start-4 row-end-4 col-span-2 md:col-start-1 md:row-start-4'>
                        <i className='fa fa-check-circle'></i>
                        <p className='text-sm'> Freelance Available</p>
                    </div>
                    <EmailForm />

                </div>

            </div>

            <Footer />
        </>
    );
}