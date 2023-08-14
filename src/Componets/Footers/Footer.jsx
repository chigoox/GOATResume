import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className=' w-full '>
            <div className='bg-[#141414] fadeInBottom text-xs gap-12 h-fit text-red-400  p-14 flex flex-col md:flex-row justify-evenly items-start'>
                <div className='p-2 fadeInRight'>
                    <h1 className='my-1 font-bold text-2xl'>Void Apps</h1>
                    <h1 className='my-1 '>Need to reach me?</h1>
                    <h1 className='my-1 '>+555-555-5555</h1>
                    <h1 className='my-1 '>void.void@gmail.com</h1>
                    <div className="my-1  flex gap-4  items-center">
                        <button className="h-4 w-4 trans hover:scale-105 center"><AiFillTwitterSquare size={32} /></button>
                        <button className="h-4 w-4 trans hover:scale-105 center"><AiFillFacebook size={32} /></button>
                        <button className="h-4 w-4 trans hover:scale-105 center"><AiFillInstagram size={32} /></button>
                        <button className="h-4 w-4 trans hover:scale-105 center"><AiFillYoutube size={32} /></button>
                    </div>
                </div>
                <div className='my-10 p-2 h-full w-fit fadeInRight border'>
                    <h1 className='text-2xl '>Company</h1>
                    <div className='h-12 '>
                        <div>Contact</div>
                        <div>About Store</div>

                        {

                            // <Link to={'/About'} className='block'>Contact</Link>
                            //<Link to={'/About'} className='block'>About Store</Link>
                        }
                    </div>
                </div>

                <div className=' h-fit fadeInRight'>
                    <div className='p-2 h-fit'>
                        <h1 className='m-1 font-bold text-2xl'>Newsletter</h1>
                        <h1 className='m-1 '>Be the first to hear
                            the latest news from Void
                            Apps, and much more!
                        </h1>
                        <input className='w-full text-black h-8 trans p-2 focus:scale-110 hover:scale-105' type="text" placeholder='Email' />
                        <h1>By subscribing you agree to our privacy policy</h1>
                        <button className='h-12 w-32 p-2 bg-gray-700 trans-slow hover:bg-black hover:scale-110 my-8'>Subscribe</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer