import Navbar from "../components/Navbar";

import title from "../images/contact/contactTitle.png";
import gm from "../images/contact/GeneralManager.png";
import tm from "../images/contact/TechnicalManager.png"
import ntc from "../images/contact/NonTechnicalManager.png";
import spn from "../images/contact/Sponsorship.png"
import wa from '../icons/wa.png'
import mail from '../icons/gmail.png'
import ButtonMailto from "../components/Mail";

const Contact = () => {
  return (
    <section className="h-screen bg-bgContact bg-cover">
      <Navbar />
      <div className="top-20 absolute w-screen">
        <img className=" md:p-0 px-7 mx-auto" alt="" src={title}></img>
      </div>
      <div className='w-screen absolute md:top-1/4 top-48' >
        <div className=" flex flex-col mx-auto md:w-3/4 w-screen px-5 md:gap-0 gap-5">

            <div className="flex flex-row w-full md:-space-x-20 -space-x-10 ">
                <div className='card bottom-0 z-10 border-2 rounded-full border-white bg-black'>
                    <img src={gm} alt="" className=" z-10 transform-gpu scale-90 md:-mt-9 -mt-5 duration-500 ease-in-out hover:scale-110 hover:-translate-y-5"></img>
                </div>
                <div className="py-2 md:px-28 px-12 text-white my-auto bg-gradient-to-r from-gray-500 to-transparent ml-36 ">
                    <p className='font-extrabold italic md:text-2xl text-xl'>General Manager</p>
                    <p className='font-bold'>Dimas Andi Setiawan</p>
                    <div className='flex flex-row gap-3 md:mt-1 mt-0'>
                        <img alt='' className=' py-1 icon' src={wa}></img>
                        <p className='my-auto'>+62 823-3161-4673</p>
                    </div>
                    <div className='flex flex-row gap-3 md:mt-1 mt-0'>
                        <img alt='' className='py-1 icon' src={mail}></img>
                        <p className='my-auto'>dimasandi061@gmail.com</p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row-reverse w-full ">
                <div className='card bottom-0 z-10 border-2 rounded-full border-white bg-black'>
                    <img src={tm} alt="" className="  z-10 transform-gpu scale-90 md:-mt-9 -mt-6 duration-500 ease-in-out hover:scale-110 hover:-translate-y-5"></img>
                </div>
                <div className="py-2 md:px-28 px-0 pr-20 pl-10 text-white my-auto bg-gradient-to-l from-gray-500 to-transparent -mr-16">
                    <p className='font-extrabold italic md:text-2xl text-xl'>Technical Manager</p>
                    <p className='font-bold'>Ade Rizky Maulana Syafi’i</p>
                    <div className='flex flex-row gap-3 md:mt-1 mt-0'>
                        <img alt='' className='icon py-1' src={wa}></img>
                        <p className='my-auto'>+62 858-5556-0060</p>
                    </div>
                    <div className='flex flex-row gap-3 md:mt-1 mt-0'>
                        <img alt='' className='py-1 icon' src={mail}></img>
                        <ButtonMailto label="aderizky397@gmail.com" mailto="aderizky397@gmail.com" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full md:-space-x-20 -space-x-10 ">
                <div className='card bottom-0 z-10 border-2 rounded-full border-white bg-black'>
                    <img src={ntc} alt="" className=" z-10 transform-gpu scale-90 md:-mt-9 -mt-7 duration-500 ease-in-out hover:scale-110 hover:-translate-y-5"></img>
                </div>
                <div className="py-2 md:px-28 px-0 pl-10 text-white my-auto bg-gradient-to-r from-gray-500 to-transparent ml-36 ">
                    <p className='font-extrabold italic md:text-2xl text-xl '>Non-Technical Manager</p>
                    <p className='font-bold'>Misbah Choirul Humam</p>
                    <div className='flex flex-row gap-3 md:mt-1 mt-0'>
                        <img alt='' className=' py-1 icon' src={wa}></img>
                        <p className='my-auto'>+62 858-0164-4203</p>
                    </div>
                    <div className='flex flex-row gap-3 md:mt-1 mt-0'>
                        <img alt='' className='py-1 icon' src={mail}></img>
                        <p className='my-auto'>misbah.humam@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row-reverse w-full ">
                <div className='card bottom-0 z-10 border-2 rounded-full border-white bg-black'>
                    <img src={spn} alt="" className="z-0 transform-gpu md:-mt-9 -mt-2 duration-500 ease-in-out hover:scale-110 hover:-translate-y-5"></img>
                </div>
                <div className="py-2 md:px-28 px-0 pr-20 pl-10 text-white my-auto bg-gradient-to-l from-gray-500 to-transparent -mr-16">
                    <p className='font-extrabold italic md:text-2xl text-xl'>Sponsorship</p>
                    <p className='font-bold'>Mohammad Fauzan R.</p>
                    <div className='flex flex-row gap-3 md:mt-1 mt-0'>
                        <img alt='' className='icon py-1' src={wa}></img>
                        <p className='my-auto'>+62 856-0494-8971</p>
                    </div>
                    <div className='flex flex-row gap-3 md:mt-1 mt-0'>
                        <img alt='' className='py-1 icon' src={mail}></img>
                        <ButtonMailto label="fauzanchelsea128@gmail.com" mailto="fauzanchelsea128@gmail.com" />
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
          @media screen and (max-width:768px){
              .card{
                  height:120px;
                  width:30%;
              }
              .icon{
                  width:20px;
              }
          }
          `}</style>
    </section>
  );
};
export default Contact;
