'use client'
import React, { useContext } from 'react';
// import CommonImage from '../CommonImage/CommonImage';
import { GlobalContext } from '@/GlobalState';

const UserProfile = () => {
    const { user } = useContext(GlobalContext);
    console.log(user);
    return (
        <div className='md:flex lg:flex items-center'>
            <div className='md:w-1/4 lg:1/4 flex flex-col items-center'>
                <img src="https://i.ibb.co/pzLXXQj/download.jpg" alt="download" border="0" className='h-40 w-40 rounded-full' />
                <h3 className='font-bold'>Shamim Hossain</h3>
                <p>HSC 2023</p>
                <p>Collage</p>
            </div>
            <div className='md:w-3/4 lg:w-3/4'>
                <div className='md:flex lg:flex justify-between gap-3'>
                    <div className='shadow-lg border-t-0 bg-red-50 shadow-slate-500 p-3 border-2 w-full'>
                        <p className='font-bold'>1149</p>
                        <p>Rank</p>
                    </div>
                    <div className='shadow-lg bg-red-50 border-t-0 shadow-slate-500 p-3 border-2 w-full'>
                        <p className='font-bold'>1</p>
                        <p>Exams</p>
                    </div>
                    <div className='shadow-lg bg-red-50 border-t-0 shadow-slate-500 p-3 border-2 w-full'>
                        <p className='font-bold'>84.4</p>
                        <p>point</p>
                    </div>
                </div>
                <div className='md:flex lg:flex justify-between gap-3 mt-8'>
                    <div className='bg-red-50 shadow-md border-t-0 h-52 shadow-slate-500 p-3 border-2 w-full'>
                        <p className='font-bold'>Achievement</p>
                    </div>
                    <div className='shadow-md bg-red-50 border-t-0 h-52 shadow-slate-500 p-3 border-2 w-full'>
                        <p className='font-bold'>Accuracy</p>
                        <div className='m-auto flex flex-col items-center'>
                            <img src="https://i.ibb.co/1qq281g/round.jpg" className='h-36 items-center' alt="" />
                            <div>
                                <button className='h-3 w-3 bg-green-500 rounded-full'></button>
                                <small className='pe-3'>Correct</small>
                                <button className='h-3 w-3 bg-orange-500  rounded-full'></button>
                                <small className='pe-3'>Wrong</small>
                                <button className='h-3 w-3 bg-yellow-500 rounded-full'></button>
                                <small>Skipped</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;