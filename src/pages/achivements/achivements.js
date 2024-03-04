import React, { useEffect, useState } from 'react';
import "./achivements.css";
import Acard from '../../elements/acard/acard';
import { db } from "../../Firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

const Achivements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "achi"), (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setData(newData);
    });

    return () => {
      unsubscribe(); // Unsubscribe from real-time updates when the component unmounts
    };
  }, []);

  const showAchivements = data?.map((dataa, i) => (
    <Acard textr={dataa.text} imager={dataa.url} key={i} />
  ));

  return (
    <>
      <div className='con'>
        <div className='grid'>
          {showAchivements}
        </div>
      </div>
    </>
  );
};

export default Achivements;
