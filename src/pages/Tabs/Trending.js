import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import LinkList from "../../components/Link/LinkList";
import SmallHeader from "../../components/Header/SmallHeader";
import LargeHeader from "../../components/Header/LargeHeader";

const Trending = (props) => {
  return (
    <IonPage>
      <SmallHeader title="Trending" />
      <IonContent>
        <LargeHeader title="Trending" />
        <LinkList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default Trending;