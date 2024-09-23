/* eslint-disable no-unused-vars */
import { useState } from "react";

export function useGeolocation(defaultPosition = null){
    const [loading, setLoading] = useState(false)
    const [position, setPosition] = useState(null)
    const [error, setError] = useState(null)

    function getPosition(){
        if(!navigator.geolocation)
            return setError("Your browser does not support default location")

        setLoading(true)
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                })
                setLoading(false)
            },
            (error) => {
                setError(error.message)
                setLoading(false)
            }
        )
    }

    return {loading, error, position, getPosition}

}