// import '../css/vlog.css';

export default function Vlog() {
    return (
        <>
            <div className='m-container'>
                <div className='flex-none relative'>
                    <picture>
                        <source media='(min-width: 768px)' srcset='img/mainbanner.jpg' />
                        <img className='w-full object-cover' src='img/visual_23m.jpg' alt='banner' />
                    </picture>
                    <img className='absolute hidden translate-x-[50%] md:block' src='img/teaser.png' />
                </div>
                <div className='flex justify-between p-8'>
                    <img className='carousel md:hidden' src='img/youtube.jpg' alt='carousel' />
                    <img className='banner hidden md:block' src='img/youtube.jpg' alt='dates' />
                    <img className='banner hidden md:block' src='img/youtube.jpg' alt='youtube' />
                    <img className='banner hidden md:block' src='img/bannerfanclub.jpg' alt='fanclub' />
                </div>
                <div className='flex justify-between'>
                    <img className='hidden md:block' src='img/news_on.png' alt='news' />
                    <img className='hidden md:block' src='img/profile_on.png' alt='profile' />
                    <img className='hidden md:block' src='img/discography_on.png' alt='disco' />
                    <img className='hidden md:block' src="img/event_on.png" alt='event' />
                    <img className='hidden md:block' src='img/goods_on.png' alt='goods' />
                    <img className='hidden md:block' src='img/fanclub_on.png' alt='fanclub' />
                </div>
                <div className='md:flex-none md:grid md:grid-cols-3'>
                    <div className='info-inner'>
                        <img className='p-4' src='img/pv_video.png' alt='pv' />
                        <div className='info-inner-pv'>
                            <a href='https://www.youtube.com/embed/zN-cpSKEeAA?autoplay=1'> <img src='img/yt_thumbnail.jpg' alt="video_banner" /> </a>
                        </div>
                    </div>
                    <div>
                        <img className='mt-12 ml-6' width='112' height='30' src='img/i_news.png' />
                        <div className='content'>
                            <div className='page'>
                                <p className='mb-1/2 text-pink-900 font-medium'>2026.01.20</p>
                                <p className='line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium
                                    hic maxime id accusamus nesciunt reprehenderit quam consequatur quasi,
                                    architecto est asperiores illum quisquam. Rerum repellat hic non iusto ad!</p>
                            </div>
                            <div className='page'>
                                <p className='mb-1/2 text-pink-900 font-medium'>2026.01.20</p>
                                <p className='line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium
                                    hic maxime id accusamus nesciunt reprehenderit quam consequatur quasi,
                                    architecto est asperiores illum quisquam. Rerum repellat hic non iusto ad!</p>
                            </div>
                            <div className='page'>
                                <p className='mb-1/2 text-pink-900 font-medium'>2026.01.20</p>
                                <p className='line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium
                                    hic maxime id accusamus nesciunt reprehenderit quam consequatur quasi,
                                    architecto est asperiores illum quisquam. Rerum repellat hic non iusto ad!</p>
                            </div>
                            <div className='page'>
                                <p className='mb-1/2 text-pink-900 font-medium'>2026.01.20</p>
                                <p className='line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium
                                    hic maxime id accusamus nesciunt reprehenderit quam consequatur quasi,
                                    architecto est asperiores illum quisquam. Rerum repellat hic non iusto ad!</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='mt-12 ml-6' width='240' height='30' src='img/i_twitter.png' />
                        <div className='content'>
                            <div className='page'>
                                <p className='mb-1/2 text-pink-900 font-medium'>2026.01.20</p>
                                <p className='line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium
                                    hic maxime id accusamus nesciunt reprehenderit quam consequatur quasi,
                                    architecto est asperiores illum quisquam. Rerum repellat hic non iusto ad!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className='flex justify-evenly flex-wrap md:justify-center'>
                    <img className='f-banners' src='img/banner.png' alt='ad_1'></img>
                    <img className='f-banners' src='img/banner.png' alt='ad_2'></img>
                    <img className='f-banners' src='img/banner.png' alt='ad_3'></img>
                </div>
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
                <p className='flex justify-center text-[.75rem] tracking-tight text-white/50'>
                    Inspired by 竹達彩奈: <a href='https://ayanataketatsu.jp/index.html'>&#169; PONY CANYON</a>
                </p>
            </footer>
        </>
    );
}