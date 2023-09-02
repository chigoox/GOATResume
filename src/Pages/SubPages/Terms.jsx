import React, { useState } from 'react'
import { AiFillCamera, AiFillCloseCircle } from 'react-icons/ai'
import TermSource from './TermSource'
import { addToDatabase, handleInput5, uploadByFile } from '../../MyCodes/ed5'
import { format, startOfToday } from 'date-fns'

function Terms({ toggleTerms }) {
    const [signature, setSignature] = useState({})
    const update = (e) => { handleInput5(e, setSignature) }
    const setPhotoID = (e) => {
        const img = e.target.files[0]
        setSignature(o => ({ ...o, photoID: img }))

    }
    const sign = async () => {
        if (Object.keys(signature).length >= 7 && !Object.values(signature).includes(undefined)) {
            const photoIdURL = await uploadByFile(signature.photoID)
            const data = {
                FullName: signature.fName,
                CompanyName: signature.cName,
                Address: signature.addr,
                Phone: signature.phone,
                Email: signature.email,
                PhotoID: photoIdURL
            }
            await addToDatabase('Contracts', signature.fName, `signed|${format(new Date, "MM-dd-yyyy")}`, data)

            toggleTerms()
        }

    }
    return (
        <div className='bg-black gap-4 flex flex-col md:flex-row fixed z-[99999] h-full w-full'>
            <button onClick={toggleTerms} className='m-auto center mt-4'><AiFillCloseCircle size={32} color='red' /></button>


            <TermSource
                cName={signature.cName}
                fName={signature.fName}
                title={signature.title}
                addr={signature.addr}
            />

            <div className='m-auto'>
                <div className='center gap-4 flex-col h-[30rem] w-72 border border-red-600 '>
                    <h1 className='text-white'>Fill form to sign</h1>

                    <input onChange={update} className='h-12 w-64 p-2' placeholder='Company name' type="text" name="cName" />
                    <input onChange={update} className='h-12 w-64 p-2' placeholder='Full name' type="text" name="fName" />
                    <input onChange={update} className='h-12 w-64 p-2' placeholder='Title' type="text" name="title" />
                    <input onChange={update} className='h-12 w-64 p-2' placeholder='Address' type="text" name="addr" />
                    <input onChange={update} className='h-12 w-64 p-2' placeholder='Email' date type="email" name="email" id="" />
                    <input onChange={update} className='h-12 w-64 p-2' placeholder='Phone' date type="tel" name="phone" id="" />
                    <label onChange={update} for="UP"><AiFillCamera color='white' size={32} /></label>

                    <input onChange={setPhotoID} id={'UP'} hidden type="file" accept='image/*' name="id" />
                </div>

                <div className='center'>
                    <button className='bg-red-600 h-12 w-full m-auto' onClick={sign}>Upload and Sign</button>
                </div>
            </div>

        </div>
    )
}

export default Terms