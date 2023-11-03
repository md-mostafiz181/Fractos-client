import { GlobalContext } from '@/GlobalState';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Swal from 'sweetalert2';

const UserModal = () => {
    const { user, logOutUser, isUserModalOpen, setIsUserModalOpen } = useContext(GlobalContext);
    const handleLogOut = () => {
        logOutUser()
            .then(
                Swal.fire(
                    'Logged Out'
                )
            )
        location.reload()
    }
    return (
        <div className='bg-white rounded-lg shadow-lg p-5 relative min-w-[320px]'>
            <div className='absolute top-2 right-2'>
                <AiFillCloseCircle className='w-[28px] h-[28px] text-red-600' onClick={() => setIsUserModalOpen(false)}></AiFillCloseCircle>
            </div>
            <Image src={user.photoURL} width={100} height={100} className='mx-auto rounded-full'></Image>
            <p className='text-xl text-center'>{user.displayName}</p>
            <p className=' text-gray-700 text-center'>{user.email}</p>
            <Link className=" mt-8 p-2 rounded-lg border-2 border-blue-600 hover:bg-[#4A3AFF] hover:text-white transition-all block text-center w-full mb-5" href={'/dashboard'}>Dashboard</Link>
            <Link className="p-2 rounded-lg border-2 border-blue-600 hover:bg-[#4A3AFF] hover:text-white transition-all block text-center w-full mb-5" href={'/dashboard/setting'}>Setting</Link>
            <button onClick={handleLogOut} className='p-2 rounded-lg border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all block text-center w-full mb-5'>Log Out</button>
        </div>
    );
};

export default UserModal;