import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ForecastCardProps {
    day: string; // Could be a Date object or a string like "Mon", "Tue", etc.
    highTemp: number;
    lowTemp: number;
    iconUrl: string; // URL to the weather icon
}

const ForecastCard: React.FC<ForecastCardProps> = ({ day, highTemp, lowTemp, iconUrl }) => {
    const cardStyle = {
        width: '72px',


    };
    return (
        <IonCard style={cardStyle}>
            <IonCardHeader>
                <IonCardTitle>{day}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src={iconUrl} alt="Weather Icon"  />
                <IonCardSubtitle>{highTemp}° / {lowTemp}°</IonCardSubtitle>
            </IonCardContent>
        </IonCard>
    );
};

export default ForecastCard;
