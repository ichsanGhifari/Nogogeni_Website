import { Link } from 'react-router-dom';
import { Link as Links } from 'react-scroll';
import Logo from '../images/LogoNogen.png'

export default function Navbar() {
    return (
        <nav className='sticky top-0 z-20 bg-transparent'>
            <div className='absolute w-screen'>
                <div className='flex items-center justify-between py-4 text-black mx-20'>
                    <Links
                        to='/hero'
                        className='flex flex-row items-center space-x-3 font-bold w-max'
                        smooth
                        duration={1000}
                        >
                        <img alt='logo' src={Logo}/>
                    </Links>
                    <ul>
                        <li className='flex justify-center space-x-5'>
                            <Link
                                to='/home'
                                className='text-sm text-white hover:prime-600 md:text-base'
                                >
                                Home
                            </Link>
                            <Link  to='/home'
                                    className='text-sm text-white hover:prime-600 md:text-base'
                                    >
                                Achievment
                            </Link> 
                            <Link  to='/home'
                                    className='text-sm text-white hover:prime-600 md:text-base'
                                    >
                                Partner
                            </Link> 
                            <Link  to='/home'
                                    className='text-sm text-white hover:prime-600 md:text-base'
                                    >
                                Gallery
                            </Link> 
                            <Link  to='/home'
                                    className='text-sm text-white hover:prime-600 md:text-base'
                                    >
                                Contact
                            </Link> 
                        </li>
                    </ul>
                </div>
            </div>
            {/* <style jsx>{`
                nav {
                }
            `}</style> */}
        </nav>
    );
}
