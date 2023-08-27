import React from 'react'
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  return (
    <div className='font-[poppins]'>
        <div className="flex font-semibold text-[30px] justify-center py-6 bg-slate-100">Education History</div>
        <div className="flex flex-col justify-center mx-[50px] lg:ml-[180px] my-11">
            <div className='text-2xl'> <SchoolIcon className='mr-[10px]'/> Computer Science And Engineering<span className='font-bold'> at University of Development Altarnative, Dhaka</span></div>
            <div className='ml-[41px] text-base text-slate-600'>September 2018 -- August 2023</div>
            <div className='ml-[41px] text-base max-w-[1088px]'>During my university journey, I immersed myself in rigorous coursework, collaborated on diverse projects, and engaged in extracurricular activities. This rich experience sharpened my critical thinking, time management, and teamwork skills, while also fostering a deep passion for lifelong learning and innovation.</div> 
            <div className='text-2xl mt-6'> <SchoolIcon className='mr-[10px]'/> Diploma in MERN <span className='font-bold'> at Creative IT Institute, Dhaka</span></div>
            <div className='ml-[41px] text-base text-slate-600'>June 2022 -- June 2023</div>
            <div className='ml-[41px] text-base max-w-[1088px]'>Completing a MERN (MongoDB, Express.js, React, Node.js) course was transformative. I delved into full-stack development, mastering each component. From building interactive front-end interfaces with React to designing robust back-end systems with Node.js and Express, this course equipped me with essential skills for creating modern web applications.</div>
            <div className='text-2xl mt-6'> <SchoolIcon className='mr-[10px]'/> Internship trainning on Cloud Computing <span className='font-bold'> at A+ IT (Pvt.) Ltd., Dhaka</span></div>
            <div className='ml-[41px] text-base text-slate-600'>February 2023 -- July 2023</div>
            <div className='ml-[41px] text-base max-w-[1088px]'>
My AWS cloud computing internship was invaluable. I honed cloud infrastructure management, deploying services, and optimizing costs. Hands-on experience with AWS services like EC2, S3, and Lambda, combined with real-world problem-solving, deepened my cloud expertise and gave me confidence in architecting scalable, resilient solutions in the cloud</div>
            <br/>
        </div>
    </div>
  )
}

export default Education