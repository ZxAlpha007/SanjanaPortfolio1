import React, { useEffect, useState } from 'react';
import { db } from "../../Firebase/firebaseConfig";
import { collection, doc, onSnapshot } from "firebase/firestore";

import './scroller.css'

const Scroller = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Home3Images"), (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(newData);
      setData1(newData[0]);
      setData2(newData[1]);
      setData3(newData[2]);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="scroller-container">
      {data1 && (
        <div className="scroller-container01">
          <div style={{ backgroundImage: `url("${data1.url}")` }} className="scroller-container02"></div>
          <div className="scroller-container03">
            <span className="scroller-text">{data1.heading}</span>
            <span className="scroller-text1">{data1.para}</span>
            <span className="scroller-text1"></span>
          </div>
        </div>
      )}

      {data2 && (
        <div className="scroller-container04">
          <div className="scroller-container05">
            <span className="scroller-text2">{data2.heading}</span>
            <span className="scroller-text3">{data2.para}</span>
          </div>
          <div style={{ backgroundImage: `url("${data2.url}")` }} className="scroller-container06"></div>
        </div>
      )}

      {data3 && (
        <div className="scroller-container07">
          <div style={{ backgroundImage: `url("${data3.url}")` }} className="scroller-container08"></div>
          <div className="scroller-container09">
            <span className="scroller-text4">{data3.heading}</span>
            <span className="scroller-text5">{data3.para}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scroller;
