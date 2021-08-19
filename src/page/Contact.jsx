import Navbar from "../components/Navbar";

import title from "../images/contact/contactTitle.png";
import gm from "../images/contact/GeneralManager.png";
import tm from "../images/contact/TechnicalManager.png"
import ntc from "../images/contact/NonTechnicalManager.png";
import spn from "../images/contact/Sponsorship.png"
import wa from '../icons/wa.png'
import mail from '../icons/gmail.png'

const Contact = () => {
  return (
    <section className="h-screen bg-bgContact bg-cover">
      <Navbar />
      <div className="top-20 absolute w-screen">
        <img className=" md:p-0 px-7 mx-auto" alt="" src={title}></img>
      </div>
      <div className='w-screen absolute top-1/4'>
        <div className=" flex flex-col mx-auto w-3/4">
            <div className="flex flex-row w-full -space-x-20 ">
                <div className='card bottom-0 z-10 border-2 rounded-full border-white bg-black'>
                    <img src={gm} alt="" className=" z-10 transform-gpu scale-90 m-auto -translate-y-11 duration-500 ease-in-out hover:scale-110 hover:-translate-y-16"></img>
                </div>
                <div className="py-2 px-28 text-white my-auto bg-gradient-to-r from-gray-50 to-transparent ml-36 ">
                    <p className='font-extrabold italic text-2xl'>General Manager</p>
                    <p className='font-bold'>Dimas Andi Setiawan</p>
                    <div className='flex flex-row gap-3 mt-1'>
                        <img alt='' className='w-1/12 py-1' src={wa}></img>
                        <p>+62 823-3161-4673</p>
                    </div>
                    <div className='flex flex-row gap-3 mt-1'>
                        <img alt='' className='py-1' src={mail}></img>
                        <p className='my-auto'>dimasandi061@gmail.com</p>
                    </div>
                </div>
            </div>
            {/* gabener */}
            <div className="flex flex-row-reverse w-full ">
                <div className='card bottom-0 z-10 border-2 rounded-full border-white bg-black'>
                    <img src={tm} alt="" className=" z-10 transform-gpu scale-90 m-auto -translate-y-11 duration-500 ease-in-out hover:scale-110 hover:-translate-y-16"></img>
                </div>
                <div className="py-2 px-28 text-white my-auto bg-gradient-to-l from-gray-50 to-transparent -mr-20 ">
                    <p className='font-extrabold italic text-2xl'>Technical Manager</p>
                    <p className='font-bold'>Dimas Andi Setiawan</p>
                    <div className='flex flex-row gap-3 mt-1'>
                        <img alt='' className='w-1/12 py-1' src={wa}></img>
                        <p>+62 823-3161-4673</p>
                    </div>
                    <div className='flex flex-row gap-3 mt-1'>
                        <img alt='' className='py-1' src={mail}></img>
                        <p className='my-auto'>dimasandi061@gmail.com</p>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="flex flex-row w-full -space-x-20 ">
                <div className='card bottom-0 z-10 border-2 rounded-full border-white bg-black'>
                    <img src={ntc} alt="" className=" z-10 transform-gpu scale-90 m-auto -translate-y-11 duration-500 ease-in-out hover:scale-110 hover:-translate-y-16"></img>
                </div>
                <div className="py-2 px-28 text-white my-auto bg-gradient-to-r from-gray-50 to-transparent ml-36 ">
                    <p className='font-extrabold italic text-2xl'>Non-Technical Manager</p>
                    <p className='font-bold'>Misbah Choirul Humam</p>
                    <div className='flex flex-row gap-3 mt-1'>
                        <img alt='' className='w-1/12 py-1' src={wa}></img>
                        <p>+62 858-0164-4203</p>
                    </div>
                    <div className='flex flex-row gap-3 mt-1'>
                        <img alt='' className='py-1' src={mail}></img>
                        <p className='my-auto'>misbah.humam@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row-reverse w-full ">
                <div className='card bottom-0 z-10 border-2 rounded-full border-white bg-black'>
                    <img src={spn} alt="" className=" z-10 transform-gpu scale-90 m-auto -translate-y-11 duration-500 ease-in-out hover:scale-110 hover:-translate-y-16"></img>
                </div>
                <div className="py-2 px-28 text-white my-auto bg-gradient-to-l from-gray-50 to-transparent -mr-20 ">
                    <p className='font-extrabold italic text-2xl'>Sponsorship</p>
                    <p className='font-bold'>Mohammad Fauzan R.</p>
                    <div className='flex flex-row gap-3 mt-1'>
                        <img alt='' className='w-1/12 py-1' src={wa}></img>
                        <p>+62 856-0494-89713</p>
                    </div>
                    <div className='flex flex-row gap-3 mt-1'>
                        <img alt='' className='py-1' src={mail}></img>
                        <p className='my-auto'>fauzanchelsea128@gmail.com</p>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
      <style jsx>{`
          .card{
            width:13%;
            height:140px;

          }
          
          `}</style>
    </section>
  );
};
export default Contact;
