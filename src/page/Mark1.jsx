import Navbar from '../components/Navbar/index'
import f1 from '../images/home/f1.png'
import rangka1 from '../images/home/rankga/Ranka1Top.png'
import rangka2bot from '../images/home/rankga/Ranka1Bot.png'
import back from '../icons/Back2.png'
import React, { useState } from 'react';

const Mark1 = () =>{
    const [slider, setSlider] = useState(true);

    return(
        <section className='h-screen bg-bghero bg-cover bg-no-repeat overflow-hidden'>
            <Navbar />
            <div className={`left-20 relative transform-gpu duration-700 w-max ${slider?"translate-y-full top-20":"-translate-y-20 -top-20"}` }>
                <img className={`transform -rotate-90`} width={'950px'} alt='' src={f1}></img>
            </div>
            
            <div className='slicer'>
                <div className='flex flex-col cursor-pointer'>
                <img alt='' src={rangka1} className={`${slider?"border-2 border-white":"border-0"}`} onClick={()=>setSlider(true)}></img>
                <img alt='' src={rangka2bot} className={`${slider?"border-0":"border-2 border-white"}`} onClick={()=>setSlider(false)}></img>
                </div>
            </div>
            <div className='text-white w-max right-40 inset-y-1/2 absolute px-10'>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-row cursor-pointer gap-3'>
                    <img src={back} alt='' className='border-2 border-white rounded-full w-8'></img>
                    <p className='italic font-medium text-xl my-auto'>Back</p>
                </div>
                <div>
                    <h2 className='italic text-title  '>NOGOGENI RACING <br />MARK 1</h2>
                </div>
            </div>
            </div>
             <style jsx>{`
                .slicer{
                    position:absolute;
                    top:32%;
                    left:5%;
                }
             `}</style>
        </section>
    );
}
export default Mark1