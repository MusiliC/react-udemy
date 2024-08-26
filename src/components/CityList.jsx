/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./CityList.module.css"
import Spinner from './Spinner'
import CityItem from './CityItem'
import Message from './Message'

const CityList = ({cities, loading}) => {

    if(loading) return <Spinner/>

    if(!cities.length) return <Message message='Add your first city by clicking on a city on the map'/>

  return (
    <ul className={styles.cityList}> 
    {
        cities.map((city, i) => (
            <CityItem key={i} city = {city}/>
        ))
    }
    </ul>
  )
}

export default CityList