import Navbar from '../components/Navbar/index'
import f1 from '../images/home/f1.png'
import rangka1 from '../images/home/rankga/Ranka1Top.png'
import rangka2bot from '../images/home/rankga/Ranka1Bot.png'
import React, { useState } from 'react';

const Mark1 = () =>{
    const [slider, setSlider] = useState(true);

    return(
        <section className='h-screen bg-bghero bg-cover bg-no-repeat overflow-hidden'>
             <Navbar />
             <div className='h-max absolute -mt-48 ml-20'>
                 <img className='transform -rotate-90' width={'950px'} alt='' src={f1}></img>
             </div>
             <div className='slicer'>
                 <div className='flex flex-col cursor-pointer'>
                    <img alt='' src={rangka1} className={`${slider?"border-2 border-white":""}`} onClick={()=>setSlider(true)}></img>
                    <img alt='' src={rangka2bot} className={`${slider?"":"border-2 border-white"}`} onClickC={()=>setSlider(false)}></img>
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