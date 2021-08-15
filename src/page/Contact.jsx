import Navbar from "../components/Navbar"
import title from '../images/contact/contactTitle.png'


const Contact =()=>{
    return(
        <div className='h-screen bg-bgContact bg-cover'>
            <Navbar />
            <div className='top-24 absolute w-screen'>
                <img className='mx-auto' alt='' src={title}></img>
            </div>
        </div>
    )
}
export default Contact