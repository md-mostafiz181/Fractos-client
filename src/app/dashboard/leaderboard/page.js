'use client'
import { GlobalContext } from '@/GlobalState';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ImPointRight } from 'react-icons/im'
import image1 from '../../../assets/a_5.svg'
import image2 from '../../../assets/b_1.svg'
import image3 from '../../../assets/l_5.svg'
import image4 from '../../../assets/s_5.svg'
import image5 from '../../../assets/o_5.svg'
import image6 from '../../../assets/g_5.svg'
import Image from 'next/image';
import Link from 'next/link';
import { getAllUser } from '@/services/users';



const page = () => {
     const { user, userinfo } = useContext(GlobalContext);
     const [allUser, setAllUser] = useState([]);
     const [rank,setRank]=useState(0);


     const getAllData = async () => {
          const result = await getAllUser();
          const sortData = result?.data.sort((a, b) => b?.rank - a?.rank);
          setAllUser(sortData)

          
     }


     useEffect(() => {
          getAllData();
     }, [user])



     return (
          <div>
               <div>
                    <h1 className='  text-xl font-bold   uppercase md:text-2xl textColor  '> Leaderboard</h1>

                    <div className=' flex justify-center  sm:gap-2  md:gap-14 '>
                         <div className=' flex flex-col items-center gap-2  mt-14'>
                              <div className='  '>
                                   <Image className=' imageshodow w-[50px] h-[50px] rounded-full md:w-[100px] md:h-[100px] ' width={200} height={200} src={allUser[0]?.photo ? allUser[0]?.photo  :  "https://i.ibb.co/d6JQZk6/IMG-4039.jpg"} alt="" />
                              </div><h1 className=' md:text-xl font-bold '>  {allUser[0]?.name ? allUser[0]?.name : " no name"} </h1>
                              <div className=' flex justify-center items-center gap-2'>
                                   <ImPointRight size={24}></ImPointRight>
                                   <p> {allUser[0]?.rank ? allUser[0]?.rank : 0} K </p>
                              </div>
                         </div>

                         <div className=' flex flex-col items-center gap-2 '>
                              <div className='  '>
                                   <Image className='imageshodow  w-[50px] h-[50px] rounded-full md:w-[100px] md:h-[100px] ' width={200} height={200} src={allUser[1]?.photo ? allUser[1]?.photo  :  "https://i.ibb.co/d6JQZk6/IMG-4039.jpg"} alt="" />
                              </div><h1 className=' md:text-xl font-bold '>  {allUser[1]?.rank ? allUser[1]?.name : "no name"} K </h1>
                              <div className=' flex justify-center items-center gap-2'>
                                   <ImPointRight size={24}></ImPointRight>
                                   <p> {allUser[1]?.rank ? allUser[1]?.rank : 0} K </p>
                              </div>
                         </div>
                         <div className=' flex flex-col items-center gap-2 mt-14'>
                              <div className='  '>
                                   <Image className=' imageshodow rounded-full w-[50px] h-[50px] md:w-[100px] md:h-[100px] ' width={200} height={200} src={allUser[2]?.photo ? allUser[2]?.photo  :  "https://i.ibb.co/d6JQZk6/IMG-4039.jpg"} alt="" />
                              </div><h1 className=' md:text-xl font-bold '>  {allUser[2]?.name ? allUser[2]?.name : " no name"} </h1>
                              <div className=' flex justify-center items-center gap-2'>
                                   <ImPointRight size={24}></ImPointRight>
                                   <p> {allUser[2]?.rank ? allUser[2]?.rank : 0} K </p>
                              </div>
                         </div>
                    </div>

                    <div className=' flex justify-center py-6 items-center gap-2 mt-8 '>
                         <div className=' inline-block '>
                              <div className=' flex border-2 px-4 py-[5PX] rounded-md border-[#27895C] items-center gap-4 text-center'>
                                   <button className=' text-base   md:text-lg font-medium '>

                                        Your rank 5  out of {allUser?.length} students
                                   </button>
                                   <AiOutlineArrowRight size={24}></AiOutlineArrowRight>
                              </div>
                         </div>
                    </div>

                    <div className=' my-8 flex justify-center items-center flex-wrap gap-9'>
                         <div className=' flex flex-col justify-center items-center gap-2'>
                              <Image className=' w-[80px] h-[80px] ' width={100} height={100} src={image1} alt='' />
                              <h1 className=' text-base  md:text-xl font-semibold'> 100</h1>
                         </div>
                         <div className=' flex flex-col justify-center items-center gap-2'>
                              <Image className=' w-[80px] h-[80px] ' width={100} height={100} src={image2} alt='' />
                              <h1 className=' text-base  md:text-xl font-semibold'> 200</h1>
                         </div>
                         <div className=' flex flex-col justify-center items-center gap-2'>
                              <Image className=' w-[80px] h-[80px] ' width={100} height={100} src={image6} alt='' />
                              <h1 className=' text-base  md:text-xl font-semibold'> 400</h1>
                         </div>
                         <div className=' flex flex-col justify-center items-center gap-2'>
                              <Image className=' w-[80px] h-[80px] ' width={100} height={100} src={image3} alt='' />
                              <h1 className=' text-base  md:text-xl font-semibold'> 500</h1>
                         </div>
                         <div className=' flex flex-col justify-center items-center gap-2'>
                              <Image className=' w-[80px] h-[80px] ' width={100} height={100} src={image4} alt='' />
                              <h1 className=' text-base  md:text-xl font-semibold'> 800</h1>
                         </div>
                         <div className=' flex flex-col justify-center items-center gap-2'>
                              <Image className=' w-[80px] h-[80px] ' width={100} height={100} src={image5} alt='' />
                              <h1 className=' text-base  md:text-xl font-semibold'> 1000</h1>
                         </div>
                    </div>

                    <div>
                         {
                              allUser?.map((item, index) => 
                              
                              <Link key={index} href={`/dashboard/${user?.email}`} className='  bg-[#E5E5E5] my-4 px-3 py-1 rounded flex justify-between items-center gap-2 max-w-[1200px] mx-auto'>
                                   <div className=' flex  gap-4 items-center'>
                                        <div className='text-xl  md:text-xl font-bold '>
                                             {index + 3}
                                        </div>
                                        <div>
                                             <Image className=' w-[30px] h-[30px] rounded-md ' width={50} height={50} src={image6} alt='' />
                                        </div>

                                        <div className=' flex justify-center  items-center gap-2'>
                                             <div>
                                                  { 
                                                       user?.photoURL ? <Image className=' w-[50px] h-[50px] rounded ' width={100} height={100} src={item?.photo ? item?.photo  :  "https://i.ibb.co/d6JQZk6/IMG-4039.jpg"} alt='' /> : <div className=' primaryBg  p-2 text-black w-[50px] h-[50px] rounded  text-2xl font-bold uppercase'> {user?.email.slice(0, 2)} </div>
                                                  }
                                             </div>
                                             <div>
                                                  <h1 className=' text-base md:text-lg font-medium'> {item?.name} </h1>
                                                  <p> {item?.collage} </p>
                                             </div>
                                        </div>
                                   </div>

                                   <div>
                                        <h1 className=' text-xl md:text-2xl font-medium my-3'> {item?.rank}K</h1>
                                   </div>
                              </Link>
                               )
                         }
                    </div>




               </div>
          </div >
     );
};

export default page;