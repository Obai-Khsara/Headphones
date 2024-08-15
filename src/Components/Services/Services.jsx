import React from 'react'
import Icon1 from "../../assets/Images/icons/obj1.png"
import Icon2 from "../../assets/Images/icons/obj2.png"
import Icon3 from "../../assets/Images/icons/obj3.png"
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion'


const fadeUp = (delay) => {
    return{
        hidden:{
            opacity: 0,
            y: 100
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay
            }
        }
    }
}

const ServicesData = [
    {
        id: 1,
        title: "Security",
        icon: Icon1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure numquam commodi illum aliquam. Voluptates hic pariatur ipsa accusantium dicta!",
        delay: 0.5
    },
    {
        id: 2,
        title: "Gurantee",
        icon: Icon2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure numquam commodi illum aliquam. Voluptates hic pariatur ipsa accusantium dicta!",
        delay: 0.8
    },
    {
        id: 3,
        title: "Affordability",
        icon: Icon3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure numquam commodi illum aliquam. Voluptates hic pariatur ipsa accusantium dicta!",
        delay: 1.1
    }
]

const Services = () => {
  return (
    <>
        <section className='bg-gray-100 py-8 font-poppins'>
            <div className="container py-14">
                <motion.h1
                variants = {fadeUp(0.2)}
                initial = "hidden"
                whileInView="show"
                className='font-bold text-center text-3xl pb-10'>
                    Services
                </motion.h1>
            

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {
                        ServicesData.map((data)=>(
                            <UpdateFollower key={data.id}
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 9999,
                                followSpeed: 0.5,
                                scale: 5,
                                rotate: 720,
                                mixBlendMode: 'darken',
                                backgroundElement: <div
                                >
                                    <img src={data.icon}/>
                                </div>
                            }}
                            >
                                <motion.div
                                variants={fadeUp(data.delay)}
                                initial = "hidden"
                                whileInView= "show"
                                className='flex justify-center items-center p-5 max-w-[300px] mx-auto shadow-lg flex-col rounded-xl  bg-white'>
                                    <img className='w-[100px] mb-4' src={data.icon} alt='image'/>
                                    <div className='text-center space-y-2'>
                                        <h1 className='text-2xl'>{data.title}</h1>
                                        <p className='text-sm text-black/75 text-center'>{data.desc}</p>
                                    </div>
                                </motion.div>
                            </UpdateFollower>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Services