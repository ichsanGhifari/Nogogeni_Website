import Navbar from "../components/Navbar";
import title from "../images/contact/contactTitle.png";
import gm from "../images/contact/GeneralManager.png";

const Contact = () => {
  return (
    <section className="h-screen bg-bgContact bg-cover">
      <Navbar />
      <div className="top-24 absolute w-screen">
        <img className=" md:p-0 px-7 mx-auto" alt="" src={title}></img>
      </div>
      <div className='w-screen absolute top-1/4'>
        <div className=" flex flex-col mx-auto w-3/4">
            <div className="flex flex-row w-full -space-x-24 ">
                <div className='w-1/6 z-10 border-2 rounded-full border-white bg-black'>
                    <img src={gm} alt="" className=" z-10 transform-gpu duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"></img>
                </div>
                <div className="py-5 px-28 border-2 bg-white ml-36 ">
                    <p className='font-bold'>General Manager</p>
                    <p>Dimas Andi Setiawan</p>
                    <div className='flex flex-col'>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
