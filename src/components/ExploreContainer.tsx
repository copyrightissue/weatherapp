import './ExploreContainer.css';
import React from 'react';
import { IonButton } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
      <>
          <IonButton>Default</IonButton>
          <IonButton fill="clear">Clear</IonButton>
          <IonButton fill="outline">Outline</IonButton>
          <IonButton fill="solid">Solid</IonButton>
      </>
  );
};

export default ExploreContainer;
