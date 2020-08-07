import React from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const SmallHeader = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar
        color="primary"
      >
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default SmallHeader;