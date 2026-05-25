import React from 'react'
import Heading from '../Heading/heading'
import { FaHeart } from "react-icons/fa";

const Values = () => {
  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <Heading highlight ="Our" heading="Value " />  
    </div>
    </section>
  )
}

export default Values


const value =[
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <Faheart/>
    },

    {
        id: 2,
        title: 'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <Faheart/>
    },

]
