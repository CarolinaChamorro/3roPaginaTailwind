import React from 'react';
import imageOne from '../img/consumo.jpg';
import imageTwo from '../img/slider (2).jpg';

const Content = () => {
    return (
        <>
        <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
            <img src={imageOne} alt="" className='h-full rounded mb-20 shadow'/>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-2xl mb-2'>Consumo</h2>
                <p className='mb-2'>ladbkjabdkbdlabkdbkabdakjbdajbdk</p>
                <span>16</span>
            </div>
        </div>
        
        <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
            <img src={imageTwo} alt="" className='h-full rounded mb-20 shadow'/>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-2xl mb-2'>Imagen slider</h2>
                <p className='mb-2'>ladbkjabdkbdlabkdbkabdakjbdajbdk</p>
                <span>16</span>
            </div>
         </div>   
            </>
    )
}

export default Content
