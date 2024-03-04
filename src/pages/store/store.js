import React, { useEffect, useState } from 'react'
import "./store.css"
import StoreCard from '../../elements/storecard/storeCard'
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";


const Store = () => {

  const [storeCard, setStoreCard] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "storeCard"), (querySnapshot) => {
      const newCards = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setStoreCard(newCards);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const storeCardLoader = storeCard.map((data, i) =>(
    <StoreCard key={data.id} name={data.name} price={data.price} url={data.url} />
  ) )

  return (
    <>
      <div className='element1'>
        <div className='element2'>
          {storeCardLoader}
        </div>
      </div>
    </>
  )
}

export default Store