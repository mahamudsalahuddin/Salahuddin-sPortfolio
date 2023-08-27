import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
// import {BsFacebook} from 'react-icons/Bs'
import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
const Footer = () => {
  return (
    <div className="flex h-[150px] font-[poppins] bg-slate-200 justify-center items-center">
        <span className='text-black'>Copy rights (2023)</span>
        {/* <FacebookOutlinedIcon className='text-[#3b5998] mx-4 my-1.5 hover:bg-white hover:rounded' />
        <GitHubIcon className='bg- mx-4 my-1.5 hover:bg-white hover:rounded fontSize-large'/> */}
        <div className='flex gap-4'>
            <BsFacebook className='text-3xl text-[#020202] hover:bg-slate-500'/>
            <BsGithub className='text-3xl text-[#020202]'/>
            <BsLinkedin className='text-3xl text-[#020202]'/>
            <BsInstagram className='text-3xl text-[#020202]'/>

        </div>
    </div>
  )
}

export default Footer
// px-1 py-2