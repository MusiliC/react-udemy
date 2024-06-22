/* eslint-disable no-unused-vars */
import React from 'react'
import { services } from '../constants'
import ServiceCard from './ServiceCard'

const Accordion = () => {
  return (
    <div className="p-5 flex gap-10 justify-center items-center w-5/6 mx-auto">
        {
            services?.map((service) => (
                <ServiceCard service = {service} key={service.title}/>
            ))
        }
    </div>
  )
}

export default Accordion