import Navbar from "../components/Navbar"

const Partner = () => {
    return(
        <div className='h-screen bg-bgPartner bg-cover'>
            <Navbar/>
            <div className='h-screen top-24 absolute w-screen '>
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
                </div>
            </div>
        </div>
    )
}
export default Partner