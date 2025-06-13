import React, { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';




const MapContainer = (props) => {
    const [curLocation, setCurLocation] = useState(null);

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

    return (
        <APIProvider
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
            <Map
            style={{width: '100vw', height: '100vw'}}
            defaultCenter={curLocation}
            defaultZoom={10}
            gestureHandling={'greedy'}
            disableDefaultUI={true}/>
        </APIProvider>
    )
};

export default MapContainer;
