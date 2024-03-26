import {IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import Card from "../components/Card";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";

const Tab1: React.FC = () => {
    const weatherInfo = {
        city: "Missoula",
        date: new Date(),
        temperature: 45,
        condition: "Sunny",
        iconUrl: "http://openweathermap.org/img/wn/01d@2x.png"
    };
    const forecastData = [
        { day: 'Mon', highTemp: 22, lowTemp: 15, iconUrl: 'http://openweathermap.org/img/wn/01d.png' },
        { day: 'Tue', highTemp: 24, lowTemp: 16, iconUrl: 'http://openweathermap.org/img/wn/02d.png' },
        { day: 'Wed', highTemp: 21, lowTemp: 14, iconUrl: 'http://openweathermap.org/img/wn/03d.png' },
        { day: 'Thu', highTemp: 23, lowTemp: 17, iconUrl: 'http://openweathermap.org/img/wn/04d.png' },
        { day: 'Fri', highTemp: 25, lowTemp: 18, iconUrl: 'http://openweathermap.org/img/wn/10d.png' },
    ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{weatherInfo.city}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
          <WeatherCard {...weatherInfo}/>
          <IonGrid>
              <IonRow>
                  {forecastData.map((forecast, index) => (
                      <IonCol size="auto" key={index} style={{ padding: '1px'}}>
                          <ForecastCard {...forecast} />
                      </IonCol>
                  ))}
              </IonRow>
              <hr style={{ margin: '20px 0' }} color={'white'} /> {/* Separating line */}
              <div className="weather-details">
                  <div className="detail-item">
                      <IonText className="detail-number">10°F</IonText> {/* Example humidity value */}
                      <IonText className="detail-label">Low</IonText>
                  </div>
                  <div className="detail-item">
                      <IonText className="detail-number">32°F</IonText> {/* Example humidity value */}
                      <IonText className="detail-label">High</IonText>
                  </div>
                  <div className="detail-item">
                      <IonText className="detail-number">65%</IonText> {/* Example humidity value */}
                      <IonText className="detail-label">Humidity</IonText>
                  </div>
                  <div className="detail-item">
                      <IonText className="detail-number">5 km/h</IonText> {/* Example wind speed value */}
                      <IonText className="detail-label">Wind Speed</IonText>
                  </div>
              </div>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
