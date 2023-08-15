
import React, { useEffect, useState } from 'react'


function Portfolio({ onPage }) {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 1023;

    const PortItem = ({ title, desc, tech, link, textSize }) => {
        return (
            <div className={`bg-black-900  border-2 border-gray-800 shadow overflow-hidden shadow-black relative rounded-lg ${(width <= 900 && width >= 700) ? 'h-[35rem] w-[30rem]' : 'h-[40rem] w-[30rem]  md:h-[40rem] md:w-[25rem]'} m-auto  group hover:scale-105 trans-slow`}>
                <iframe className='h-[80%] w-full' src={link} frameborder="0"></iframe>

                <div className='w-full h-[20%]  bg-black relative items-center bg-opacity-20 trans-slow  group-hover:bg-opacity-95'>
                    <div className=' w-full h-full p-2 flex justify-center items-center '>
                        <a href={link} target='_blank' className={`text-white bg-black  font-bold ${textSize ? textSize : 'text-3xl'} hover:text-rose-500 trans`}>{title}</a>
                        <h1 className='text-white px-2 font-bold bg-black text-xs'>{desc}</h1>
                    </div>
                    <div className=' text-rose-500 absolute bottom-0   w-full text-xs  bg-black-800 center'>
                        {
                            tech.map(item => { return <h1>| {item}</h1> })
                        }


                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='bg-black h-full w-full relative overflow-y-scroll mb-40'>
            {onPage == 'Portfolio' && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-12 md:justify-around md:p-12  m-auto md:scale-100 grid-flow-row w-full h-fit gap-12 md:gap-6">
                <PortItem link={'https://humainegrandeur.netlify.app/'}
                    title={'Humaine Grandeur'}
                    desc={'Urban Clothing'}
                    tech={['Firebase', 'React', 'Tailwind CSS', 'Stripe', 'NodeJs', 'Express']}
                />
                <PortItem link={'https://5isthegoat.netlify.app/'}
                    title={'5 is the Goat'}
                    desc={'My Old Website'}
                    tech={['React', 'Tailwind CSS']}
                />
                <PortItem link={'https://voidcard.netlify.app/BV89o4Y7oveCwfnZCpFboVaC0b13'}
                    title={'Void'}
                    desc={'Digital Business Cards'}
                    tech={['React', 'Tailwind CSS', 'CommerceJS', 'Firebase']}
                />
                <PortItem link={'https://tribalart.netlify.app'}
                    title={'Tribal Art'}
                    desc={'Artist Portfolio and shop'}
                    tech={['React', 'Tailwind CSS', 'commerceJS']}
                />
                <PortItem link={'https://ifcnj.netlify.app/'}
                    title={'IFC Church'}
                    desc={'Church Website'}
                    tech={['Firebase', 'React', 'Tailwind CSS']}
                />
                <PortItem link={'https://ahw.netlify.app/'}
                    title={'Anoited Hands Wigs'}
                    desc={'website to download app'}
                    tech={['React/Native', 'Tailwind CSS', 'Nodoe/Express']}
                    textSize={'text-xl'}
                />










            </div>}
        </div>
    )
}

export default Portfolio