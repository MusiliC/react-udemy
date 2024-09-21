/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import CountryItem from "./CountryItem";
import {useCities} from "../context/CitiesContext"

const CountryList = () => {

  const {cities, loading} = useCities();  

  if (loading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  let countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);


  

  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem key={i} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
