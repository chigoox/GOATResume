import React, { useState } from 'react'
import { AiFillCamera, AiFillCloseCircle } from 'react-icons/ai'
import TermSource from './TermSource'
import { addToDatabase, handleInput5, notify, uploadByFile } from '../../MyCodes/ed5'
import { format, startOfToday } from 'date-fns'
import Loading from '../../Componets/Loading'

function Terms({ toggleTerms }) {
    const [projectType, setProjectType] = useState('Store')
    const types = { Info: 350, Booking: 450, Store: 750 }
    const selections = Object.keys(types).map(i => i)
    const [loading, setLoading] = useState(false)


    const projectTotal = types[projectType]
    const projectDeposit = projectTotal < 450 ? 150 : 250
    const projectInstallments = projectTotal / 3
    const [signature, setSignature] = useState({})
    const update = (e) => { handleInput5(e, setSignature) }
    const setPhotoID = (e) => {
        const img = e.target.files[0]
        setSignature(o => ({ ...o, photoID: img }))

    }
    const sign = async () => {
        setLoading(true)
        try {
            if (Object.keys(signature).length >= 7 && !Object.values(signature).includes(undefined)) {
                const photoIdURL = await uploadByFile(signature?.photoID)
                const data = {
                    FullName: signature?.fName,
                    CompanyName: signature?.cName,
                    Address: signature?.addr,
                    Phone: signature?.phone,
                    Email: signature?.email,
                    PhotoID: photoIdURL,
                    Price: projectTotal || 0,
                    deposit: projectDeposit,
                    installmenta: projectInstallments,
                    contract: 'V1'

                }
                await addToDatabase('Contracts', signature?.fName, `signed|${format(new Date, "MM-dd-yyyy")}`, data)
                setLoading(false)
                toggleTerms()
                return
            } else {
                //  notify('Fill Form')
            }

        } catch (error) {
            notify(error.message)
        }
        setLoading(false)
        notify('Fill the whole form.')

    }
    return (
        <div className='bg-black gap-4 flex flex-col md:flex-row fixed z-[999] h-full w-full overflow-scroll'>
            <button onClick={toggleTerms} className='m-auto center mt-4'><AiFillCloseCircle size={32} color='red' /></button>
            {loading && <Loading lable={'Signing'} contain={true} />}


            <TermSource
                cName={signature.cName}
                fName={signature.fName}
                title={signature.title}
                addr={signature.addr}
                projectDeposit={projectDeposit}
                projectInstallments={projectInstallments}
                projectTotal={projectTotal}
            />

            <div className='m-auto'>
                <div className='center overflow-y-scroll hidescroll  gap-4 flex-col h-auto w-72 border border-red-600 '>
                    <h1 className='text-white'>Fill form to sign</h1>
                    <div className='center gap-2'>
                        {selections.map(type => {
                            return projectType == type ?
                                (<button onClick={() => { setProjectType(null) }} className='h-12 w-20 bg-black-800 text-white rounded p-2' key={type}>{type}</button>)
                                :
                                (<button onClick={() => { setProjectType(type) }} className='h-12 w-20 bg-rose-700 rounded p-2' key={type}>{type}</button>)
                        })}
                    </div>
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