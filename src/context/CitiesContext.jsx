/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();

const baseUrl = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${baseUrl}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error");
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, []);

  async function getCity(id) {
    const fetchCities = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${baseUrl}/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data);
      } catch {
        alert("There was an error");
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        loading,
        currentCity,
        getCity
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("Cities context was used outside cities provider");
  return context;
}

export { CitiesProvider, useCities };
