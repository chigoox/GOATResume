import { getDownloadURL, ref, uploadBytesResumable, uploadString } from "firebase/storage";
import { addToDatabase, updateArrayDatabaseItem, updateDatabaseItem } from '../../MyCodes/ed5';
import { AiFillSave, AiOutlineClose, AiOutlineDatabase, AiOutlineEdit, AiOutlineThunderbolt } from 'react-icons/ai';
import React, { useEffect, useRef, useState } from 'react'
import { DotLoader, ScaleLoader } from 'react-spinners';
import AttachesTool from '@editorjs/attaches'
import EditorJS from '@editorjs/editorjs';
import Warning from '@editorjs/warning'
import LinkTool from '@editorjs/link'
import Header from '@editorjs/header'
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import Code from '@editorjs/code'
import Raw from '@editorjs/raw'
import Quote from '@editorjs/quote'
import Image from '@editorjs/image'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import { STORAGE } from '../../../Firebase';
import BlogCustomizer from './BlogCustomizer';
import { format } from "date-fns";


const BlogEditor = ({ toggleNewBlog, data }) => {
    const [savedBlog, setsavedBlog] = useState({})
    const [blogTitle, setBlogTitle] = useState('')
    const [postMeta, setPostMeta] = useState({})
    const [savingBlog, SetsavingBlog] = useState(false)
    const [dataBlog, dataMETADATA] = data
    const editorInstance = useRef();
    const postID = dataMETADATA.postID
    const postTags = dataMETADATA.postTags ? dataMETADATA.postTags : []
    const [ShowMetaMenu, setShowMetaMenu] = useState(false)
    const toggleNewMeta = () => {
        setShowMetaMenu(!ShowMetaMenu)
    }

    useEffect(() => {
        if (!editorInstance.current) {
            initEditor();
        }
        return () => {
            editorInstance.current.destroy();
            editorInstance.current = null;
        }
    }, [postMeta]);


    const initEditor = (postMeta) => {


        const editor = new EditorJS({
            /** 
             * Id of Element that should contain the Editor 
             */
            holder: 'editorjs',
            tools: {
                header: {
                    class: Header,
                    inlineToolbar: ['marker', 'inlineCode'],
                    config: {
                        placeholder: 'Header' || '',
                    },
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                },
                image: {
                    class: Image,
                    inlineToolbar: true,
                    config: {
                        types: 'image/*, video/mp4',
                        uploader: {
                            async uploadByFile(file) {
                                const storageRef = ref(STORAGE, 'images/BlogPost/' + file.name);
                                var metadata = {
                                    contentType: 'image/jpeg'
                                };
                                var uploadTask = await uploadBytesResumable(storageRef, file);
                                const downloadURL = await getDownloadURL(uploadTask.ref).then((downloadURL) => {
                                    return downloadURL
                                })
                                return {
                                    success: 1,
                                    file: {
                                        url: downloadURL
                                    }
                                }
                            }
                        }
                    }
                },
                simpleimage: SimpleImage,
                checklist: {
                    class: CheckList,
                    inlineToolbar: true,
                },
                attaches: {
                    class: AttachesTool,
                    config: {
                        /**
                         * Custom uploader
                         */
                        uploader: {
                            /**
                             * Upload file to the server and return an uploaded image data
                             * @param {File} file - file selected from the device or pasted by drag-n-drop
                             * @return {Promise.<{success, file: {url}}>}
                             */
                            async uploadByFile(file) {
                                const storageRef = ref(STORAGE, 'images/Attachments/' + file.name);
                                var uploadTask = await uploadBytesResumable(storageRef, file);
                                const downloadURL = await getDownloadURL(uploadTask.ref).then((downloadURL) => {
                                    return downloadURL
                                })
                                return {
                                    success: 1,
                                    file: {
                                        url: downloadURL
                                    }
                                }
                            }
                        }
                    }
                },
                delimiter: Delimiter,
                embed: Embed,
                linktool: LinkTool,
                marker: {
                    class: Marker,
                    shortcut: 'CMD+SHIFT+M',
                },
                raw: Raw,
                table: {
                    class: Table,
                    inlineToolbar: true,
                },
                inlineCode: {
                    class: InlineCode,
                    shortcut: 'CMD+SHIFT+C',
                },
                code: Code,
                warning: {
                    class: Warning,
                    inlineToolbar: true,
                },
                quote: Quote
            },
            onChange: async (api, event) => {
                saveBlog(editor)


            },
            onReady: (api) => {
                editorInstance.current = editor;
            },

            data: savedBlog
        });


    }



    const saveBlog = (editor) => {
        editor.save().then(async (outputData) => {
            setsavedBlog(outputData)
            const titleInput = (document.querySelector('#title'))
            const inputValue = titleInput.value

            if (inputValue != '') {
                titleInput.classList.remove('red')
                SetsavingBlog(true)

                await addToDatabase('BlogPage', 'Blogs', postID, {
                    data: outputData,
                    meta: postMeta,
                    title: inputValue,
                    date: format(Date.now(), 'MM-dd-yyyy'),
                    postID: postID


                })
                for (let index = 0; index < postMeta?.tags ? postMeta?.tags.length : 0; index++) {
                    updateArrayDatabaseItem('BlogPage', 'METADATA', 'postTags', postMeta.tags[index])

                }
                setTimeout(() => {
                    SetsavingBlog(false)
                }, 1000);
            } else {
                titleInput.placeholder = 'Requires Title to save'
                titleInput.classList.add('red')
                SetsavingBlog(false)

            }

        }).catch((error) => {
            console.log('Saving failed: ', error)
        });
        //toggleNewBlog();
    }
    const saveBlogButton = () => {
        updateDatabaseItem('BlogPage', 'METADATA', 'postID', dataMETADATA.postID + 1)
        toggleNewBlog()
    }

    return (
        <div className='absolute hidescroll md:h-[45.5rem] w-full border border-red-900 p-4  bg-black  -top-10 shadow-black shadow rounded-lg overflow-hidden overflow-y-scroll z-[99999]'>
            <BlogCustomizer setPostMeta={setPostMeta} blogTitle={blogTitle} ShowMetaMenu={ShowMetaMenu} toggleNewMeta={toggleNewMeta} />
            <div className='center absolute w-fit  z-50 my-4  md:gap-4 top-0 text-black '>
                <button onClick={toggleNewBlog} className=' p-2 rounded-full'><AiOutlineClose color='red' size={32} /></button>
                {blogTitle && <button onClick={saveBlogButton} className=' p-2 rounded-full'><AiFillSave color='red' size={32} /></button>}



            </div>
            <div className='w-full  center flex-col'>
                <div className='center flex-col w-full  gap-2'>
                    <input
                        className={'h-12 w-[40%] m-auto text-black text-2xl p-2'}
                        onChange={({ target }) => { setBlogTitle(target.value) }}
                        type="text"
                        placeholder='Title'
                        id={'title'}
                    />
                    <div className='h-2 w-12 center '>
                        <ScaleLoader
                            loading={savingBlog}
                            color='green'
                            size={8}
                            className=''

                        />

                    </div>


                </div>
                <div id='editorjs' className='blog bg-white w-full  mx-auto relative rounded'></div>
            </div>
            <div className='center absolute w-fit  z-50 my-4 right-12  md:gap-4 top-0 text-black '>
                <button onClick={toggleNewMeta} className=' p-2 rounded-full'><AiOutlineDatabase color='red' size={32} /></button>



            </div>


        </div>
    )
}


export default BlogEditor






