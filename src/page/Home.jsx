import React from 'react';
import f1 from '../images/home/f1.png'

export default function Home() {
    return (
        <section className ='bg-bghero bg-cover h-screen flex'>
            <div className='flex flex-col m-auto pt-10 '>
                <div className='flex flex-col  -space-y-28'>
                    <div className='flex text-title tracking-wider flex-col  text-center italic'>
                        <h3 style={{fontSize:'70px'}}>NOGOGENI RACING</h3>
                        <h1 style={{fontSize:'170px'}} >MARK I</h1>
                    </div>
                    <img className='z-10' alt ='' src={f1}></img>
                </div>
                <div className='text-center text-white'>
                    <h3>Read More</h3>
                </div>
            </div>
        </section>
    );
}