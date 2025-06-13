import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '100vh',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

const MapContainer = () => {
    const [curLocation, setCurLocation] = useState(null);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })

    const getCurrentLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude} = position.coords;
                    const center = {
                        lat: latitude,
                        lng: longitude
                    }
                    setCurLocation(center);
                }
            )
        }
    }

    React.useEffect(() => {
        getCurrentLocation()
    }, []);

    return isLoaded && curLocation ? (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={curLocation}
        zoom={15}
        ></GoogleMap>
    ) : (
        <>
        </>
    )
};

export default MapContainer;
