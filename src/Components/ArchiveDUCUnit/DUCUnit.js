import React from 'react';

import Link from 'next/link';

import './DUCUnit.css'
import { admissionSingleData } from '@/services/admission';
const DUCUnit = async ({ subjects, category }) => {

    const BlogSingleData = await admissionSingleData(category);


    console.log(BlogSingleData);
    return (
        <div>
            <div className='mb-8 mt-4'>
                <h1 className="text-indigo-700 text-3xl font-bold mb-8">Digital Question Bank</h1>
                <div className="mt-8 mb-2">
                    <Link href={'/dashboard'} className="text-indigo-700 ">&lt;-Back</Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-3'>

                <div className='col relative rounded '>
                    <div className=' rounded text-center  ' style={{
                        background: ` url(${BlogSingleData?.image})`,
                        backgroundSize: ' cover', 
                        backgroundRepeat: 'no-repeat',
                        height: '250px', 
                    }}>
                        <div className=' left-0 absolute  flex justify-center items-center  top-0 bg-[#7f11e065] w-full h-full'>
                            <div>
                                <h1 className='text-2xl font-bold text-white'> {BlogSingleData?.CollegeName} </h1>
                                <h1 className='text-2xl font-bold text-white'>ADMISSION</h1>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="col my-4 text-center mx-4">
                    {BlogSingleData?.description}
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-5  my-8'>
                {
                    subjects?.map(item => <Link href={`/online-exam/${item?.exam_name}/${item?.university}/admission`} key={item._id} className='col border border-[#8d9ddc85] cursor-pointer rounded  bg-[#8d9ddc85]  text-sm px-2 py-4'>
                        <div className='flex   justify-center'>
                            <h1 className=' text-center  text-base  md:text-2xl font-medium'> {item?.title} </h1>
                        </div>
                        <div className='mt-4 flex  justify-center '>
                            <p className='mr-8'>{item?.questions?.length} Question </p>
                            <p>{item?.questions?.length} Time</p>
                        </div>
                    </Link>)
                }

            </div>


        </div>
    );
};

export default DUCUnit;