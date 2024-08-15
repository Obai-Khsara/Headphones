import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import Cards from "../../assets/Images/credit-cards.webp"
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <>
        <footer className='text-white bg-primary pt-12 pb-8'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                    {/* Company section */}
                    <motion.div
                    initial = {{opacity: 0, y: 100}}
                    whileInView= {{opacity: 1, y : 0}}
                    transition={{
                        delay: 0.2,
                        duration: 0.6
                    }}
                    className='space-y-4'>
                        <h1 className='text-3xl font-bold uppercase'>Playing</h1>
                        <p className='text-sm max-w-[300px]'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, doloribus quidem. Quo blanditiis eaque ipsam! Placeat ullam voluptas quas sit nostrum voluptate quae omnis? Itaque deserunt fugiat distinctio aliquam vero!
                        </p>
                        <div className='space-y-2'>
                            <p className='flex items-center gap-2'>
                                <FaPhone/>
                                +961 76734779
                            </p>
                            <p className='flex items-center gap-2'>
                                <FaMapLocation/>
                                Noida, Uttar Pradesh
                            </p>
                        </div>
                    </motion.div>

                    {/* links section */}
                    <motion.div
                    initial = {{opacity: 0, y: 100}}
                    whileInView= {{opacity: 1, y : 0}}
                    transition={{
                        delay: 0.4,
                        duration: 0.6
                    }}
                    className='space-y-6'>
                        <h1>Quick Links</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                            <div>
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* social section */}
                    <motion.div
                    initial = {{opacity: 0, y: 100}}
                    whileInView= {{opacity: 1, y : 0}}
                    transition={{
                        delay: 0.6,
                        duration: 0.6
                    }}
                    className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Follow Us</h1>
                        <div className='flex items-center gap-3'>
                            <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                            <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                            <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                            <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                        </div>
                        <div className='space-y-2'>
                            <p>Payment Methods</p>
                            <img src={Cards} alt='image' className='w-[80%]'/>
                        </div>
                    </motion.div>
                </div>

                {/* copyright section */}
                <p className='text-white border-t-2 pt-8 text-center mt-8'>
                    &copy; 2024. All Rights Reserved
                </p>
            </div>
        </footer>
    </>
  )
}

export default Footer