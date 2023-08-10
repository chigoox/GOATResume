import { PlusCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { AiFillFileAdd } from 'react-icons/ai'
import { addToDatabase, updateDatabaseItem, fetchDocument, getRand } from '../../MyCodes/ed5'
import BlogEditor from '../../Componets/Blog/BlogEditor'
import TagFilterButton from '../../Componets/Blog/TagFilterButton'

const Blog = ({ onPage }) => {
    const [dataBlog, setDataBlog] = useState({})
    const [dataMETADATA, setDataMETADATA] = useState()
    const [tagFilter, setTagFilter] = useState('')
    const blogs = Object.values(dataBlog ? dataBlog : [])
    const blogTitles = Object.keys(dataBlog?.AllBlogs ? dataBlog.AllBlogs : [])
    const BLOGDATA = [dataBlog, dataMETADATA]

    const [openNewBlogWindow, setOpenNewBlogWindow] = useState(false)
    const toggleNewBlog = () => {
        setOpenNewBlogWindow(!openNewBlogWindow)
    }
    useEffect(() => {
        fetchDocument('BlogPage', 'Blogs', setDataBlog)
        fetchDocument('BlogPage', 'METADATA', setDataMETADATA)



    }, [openNewBlogWindow])

    return (
        <div className='center flex-col relative overflow- y-hidden   h-[53.2rem]  md:h-[43.5rem] border-b border-lime-300'>
            {openNewBlogWindow && <BlogEditor toggleNewBlog={toggleNewBlog} data={BLOGDATA} />}
            {!openNewBlogWindow && <button onClick={toggleNewBlog} className='z-[99999] fixed  bottom-10 md:bottom-52 right-10 h-12 w-12 rounded-full border-2 center'><PlusCircle size={32} color='lime' /></button>}

            {onPage == 'Blog' &&
                <div className='h-[53.2rem]  md:h-[43.5rem] hidescroll overflow-y-scroll '>
                    <h1 className='text-3xl text-center font-bold'>Blog</h1>
                    <div className='center flex-col'>
                        <input className='w-96 m-auto relative  h-16 rounded-full mt-10' type="text" placeholder='Search' />
                        <h1 className='my-2 w-96 text-center'>Search by Tags</h1>
                        <div className='w-96 h-24 overflow-y-scroll hidescroll rounded-2xl mb-4 bg-[#1F2027]'>
                            {
                                <div className='grid grid-cols-3 gap-2 p-4'>
                                    {
                                        dataMETADATA?.postTags ? dataMETADATA.postTags.map(item => {
                                            return (
                                                <TagFilterButton setFilter={setTagFilter} tag={item} filter={tagFilter} />
                                            )
                                        })
                                            :
                                            <div>
                                                <h1 className='text-xs'>no tags</h1>
                                            </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mt-4   md:w-fit mb-40 md:mb-20'>

                        {
                            blogs.map((item, index) => {
                                console.log(item.meta.tags[index])
                                if (item.meta.tags.includes(tagFilter) || tagFilter == '' || !tagFilter) return (
                                    <button className='m-auto hover:scale-105 trans-slow w-[23rem] md:w-[21rem] h-[26rem] bg-[#121214] rounded-2xl overflow-hidden'>
                                        <div className='h-[60%]  bottom-3 bg-gray-900 overflow-hidden'>
                                            <img className=' object-cover  w-full h-full' src={item.meta.thumbnail} alt="" />
                                        </div>
                                        <div className='h-[40%] p-4'>
                                            <h1 className='text-2xl text-center mb-1'>{item.title}</h1>
                                            <h1 className='mb-2'>{item.date}</h1>
                                            <div className='grid grid-rows-2 grid-cols-4 gap-2 overflow-hidden'>
                                                {

                                                    item?.meta?.tags ? item?.meta?.tags?.map(item => {
                                                        return (
                                                            <TagFilterButton setFilter={setTagFilter} tag={item} color={'text-lime-300'} filter={tagFilter} />

                                                        )
                                                    })
                                                        :
                                                        <div>
                                                            <h1 className='text-xs'>No Tags</h1>
                                                        </div>

                                                }
                                            </div>


                                        </div>

                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            }

        </div>
    )
}

export default Blog