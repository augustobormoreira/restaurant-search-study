/*global google */
/*global globalThis*/
import React, { useEffect, useState } from 'react';
import { Map, AdvancedMarker, APIProvider } from '@vis.gl/react-google-maps';
import DetailsSize from './DetailsSize';

const MapContainer = () => {
    
    const nonAlphaVersionLoaded = Boolean(
        globalThis &&
            globalThis.google?.maps?.version && 
            !globalThis.google?.maps?.version.endsWith('-alpha')
    );

    if(nonAlphaVersionLoaded){
        location.reload();
        return;
    }

    const [places, setPlaces] = useState<google.maps.places.Place['']>([]);
    const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
    const [locationId, setLocationId] = useState<string | null>(null);
    const [detailsSize, setDetailsSize] = useState<DetailsSize>('MEDIUM');

    const placeMarkers = useMemo( () => {
        return places.map((place, index) => (
            <PlaceDetailsMarker
                detailsSize={detailsSize}
                key={place.id || index}
                selected={place.id || selectedPlaceId}
                place={place}
                onClick={() => setSelectedPlaceId(place.id)}
            />
        ));
    }, [places, selectedPlaceId, detailsSize]);

    
    /*
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

    useEffect(() => {
        getCurrentLocation();
    }, []); */

    return (
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
            <Map
            mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
            style={{width: '100vw', height: '100vw'}}
            defaultCenter={curLocation}
            defaultZoom={10}
            gestureHandling={'greedy'}
            disableDefaultUI={true}>
                <AdvancedMarker position={curLocation}></AdvancedMarker>
            </Map>
        </APIProvider>
    )
};

export default MapContainer;