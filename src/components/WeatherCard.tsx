import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon } from '@ionic/react';
import { sunny } from 'ionicons/icons'; // Example icon

// fake data for now
interface WeatherCardProps {
    city: string;
    date: Date;
    temperature: number;
    condition: string;
    iconUrl?: string; // Optional URL for weather icons
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, date, temperature, condition, iconUrl }) => {
    const cardStyle = {
        width: '250px',
        height: '250px',
        margin: 'auto',
        padding: '10px',
    };
    return (
        <IonCard style={cardStyle}>
            <IonCardHeader>
                <IonCardSubtitle>{city}</IonCardSubtitle>
                <IonCardTitle>{date.toLocaleDateString()}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2>{temperature}°F</h2> {/* add a way yo adjust unit °C/°F based on your preference */}
                    <h3>{condition}</h3>
                    {iconUrl ? <img src={iconUrl} alt="Weather Icon" /> : <IonIcon icon={sunny} size="large" />}
                </div>
            </IonCardContent>
        </IonCard>
    );
};

export default WeatherCard;
