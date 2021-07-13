import React,{useState} from 'react';
import f1 from '../images/home/f1.png'
import Navbar from "../components/Navbar/index"
import Sidebar from '../components/Sidebar/index';

const Home=()=> {
    const[isOpen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    return (
        <section className ='bg-bghero bg-cover h-screen'>
        <Navbar  toggle={toggle} />
        <Sidebar  isOpen={isOpen} toggle={toggle} />
            <div className='flex flex-col mx-auto mt-24 p-10'>
                <div className='flex flex-col space-y-0 md:-space-y-24'>
                    <div className='flex text-title flex-col  text-center italic'>
                        <h3 style={{letterSpacing: "0.25em"}} 
                        className='text-2xl md:text-5xl'>NOGOGENI RACING</h3>
                        <h1 className='text-5xl md:text-9xl' >MARK I</h1>
                    </div>
                    <img className='z-10 mx-auto' width="800px" alt ='' src={f1}></img>
                </div>
                <div className='text-center text-white p-10'>
                    <h3>Read More</h3>
                </div>
            </div>
        </section>
    );
}
export default Home