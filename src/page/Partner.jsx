import Navbar from "../components/Navbar"
import its from '../images/partner/logoITS.png'
import istw from '../images/partner/istw.png'
import petro from '../images/partner/petro.png'
import pjb from '../images/partner/pjb.png'
import woody from '../images/partner/woody.png'

const Partner = () => {
    return(
        <div className='h-screen bg-bgPartner bg-cover'>
            <Navbar/>
            <div className='top-24 absolute w-screen '>
                <div className='mx-auto text-center text-white w-10/12'>
                    <h1 className='italic font-bold'>OUR SPONSORSHIP PARTNERS</h1>
                    <p className='mt-3'>"Thanks to these big companies for making us achieved our best results."</p>
                    <div className='flex flex-row mt-10 items-center'>
                        <div className='w-1/5'>
                            <div className='border-4'></div>
                        </div>
                        <div className='w-3/5'>
                            <div className='border-2'></div>
                        </div>
                        <div className='w-3/5'>
                            <div className='border-4'></div>
                        </div>
                        <div className='w-3/5'>
                            <div className='border-2'></div>
                        </div>
                        <div className='w-1/5'>
                            <div className='border-4'></div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-10 gap-5 '>
                        <h3 className='font-semibold'>Supported By :</h3>
                        <div className='mx-auto bg-white md:w-1/4 w-3/4 rounded-lg p-5'>
                            <img className='w-9/12 mx-auto' alt='' src={its}></img>
                        </div>
                    </div>
                    <h3 className='font-semibold mt-7'>Sponsored By :</h3>
                    <div className='grid md:grid-cols-4 grid-cols-2 gap-5 h-1/5 mt-7'>
                        <div className='bg-white  w-full mx-auto rounded-lg p-5'>
                            <img className='w-11/12 m-auto h-full py-5' alt='' src={pjb}></img>
                        </div>
                        <div className=' bg-white w-full mx-auto rounded-lg p-5'>
                            <img className='md:w-6/12 w-8/12 m-auto h-full md:py-1 py-0' alt='' src={istw}></img>
                        </div>
                        <div className='bg-white w-full mx-auto rounded-lg px-5'>
                            <img className='md:w-9/12 w-10/12 m-auto h-full py-5' alt='' src={petro}></img>
                        </div>
                        <div className='bg-white w-full mx-auto rounded-lg px-5'>
                            <img className=' mx-auto h-full py-10' alt='' src={woody}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Partner