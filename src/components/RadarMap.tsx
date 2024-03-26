import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const RadarMap: React.FC = () => {
    const mapRef = useRef<L.Map>();

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('map', {
                center: [46.8721, -113.9940], // Coordinates for Missoula, Montana  will need to change based on city selected after getting the open weather api up and running.
                zoom: 8,
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
            }).addTo(mapRef.current);
        }
        //Hit rainviewer api to get radar tiles, just the latest one since time lapsing seems hard.
        const addRadarLayer = async () => {
            try {
                const response = await fetch('https://api.rainviewer.com/public/weather-maps.json');
                const data = await response.json();
                const latestRadarData = data.radar.past[data.radar.past.length - 1];
                const radarLayerUrl = `${data.host}${latestRadarData.path}/512/{z}/{x}/{y}/2/1_1.png`;

                if (mapRef.current) { // Ensure mapRef.current is defined
                    L.tileLayer(radarLayerUrl, {
                        opacity: 0.65,
                    }).addTo(mapRef.current);
                }
            } catch (error) {
                console.error('Failed to fetch radar data:', error);
            }
        };

        addRadarLayer();
// remove mapRef.current if exists and reassign to undefine otherwise it breaks
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = undefined;
            }
        };
    }, []);


    return <div id="map" style={{ height: '600px' }} />;
};

export default RadarMap;
