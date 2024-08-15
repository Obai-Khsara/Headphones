import React from 'react'
import Headphone4 from "../../assets/Images/headphone4.png"
import { easeInOut, motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'



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


const Banner = () => {
  return (
    <>
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 py-14 space-y-6 md:space-y-0 gap-12">
                {/* Banner Image */}
                <div>
                    <motion.img
                    initial={{opacity: 0, x: -100, rotate: -180}}
                    animate={{opacity: 1, x: 0, rotate: 0}}
                    transition={{
                        duration: 0.8, delay: 0.2, ease: "easeInOut"
                    }}
                    src={Headphone4} alt='Image' className='w-[300px] md:w-[400px] mx-auto'/>
                </div>

                {/* Banner text info */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                        <motion.h1
                        variants = {fadeUp(0.7)}
                        initial = "hidden"
                        whileInView = "show"
                        className='font-poppins font-semibold text-3xl lg:text-4xl'>
                            The Latest Headphones with The Latest Technology
                        </motion.h1>
                        <motion.p
                        variants = {fadeUp(0.9)}
                        initial = "hidden"
                        whileInView = "show"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus enim, nulla consectetur molestias illum perspiciatis exercitationem tenetur magni porro?
                        </motion.p>
                        <UpdateFollower
                        mouseOptions={{
                            backgroundColor: "white",
                            zIndex: 9999,
                            followSpeed: 0.5,
                            mixBlendMode: 'difference',
                            scale: 5
                        }}
                        >
                            <motion.button
                            variants = {fadeUp(1.3)}
                            initial = "hidden"
                            whileInView = "show"
                            className='border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md
                            hover:bg-[#e33343] hover:text-white duration-300'>
                                Learn More
                            </motion.button>
                        </UpdateFollower>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Banner