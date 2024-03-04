import React, { useEffect, useState } from 'react'
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import "./artwork.css"
import Slider from '../../elements/slider/slider'
import Card1 from '../../elements/card1/card1'

import "./grid.css"

const Artwork = () => {

  const [card, setCard] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Card"), (querySnapshot) => {
      const newCards = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setCard(newCards);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const cardLoader = card.map((data, i) => (
    <Card1 key={data.id} text={data.name} url={data.url} />
  ));


  return (
    <>
      <div className='sliderContainer'>
        <div className='ArtSlider'>
          <Slider />
        </div>
      </div>
      <div className='gridBase'>
        {cardLoader}
      </div>


    </>
  )
}

export default Artwork