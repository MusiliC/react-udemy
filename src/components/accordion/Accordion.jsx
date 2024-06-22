/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { services } from '../../constants'
import AccordionItem from './AccordionItem'

const Accordion = () => {
  
   const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className=" w-2/3 mx-auto">
        {
            services?.map((item) => (
                <AccordionItem item = {item} currOpen = {currOpen} setCurrOpen = {setCurrOpen} key={item.title}/>
            ))
        }
    </div>
  )
}

export default Accordion