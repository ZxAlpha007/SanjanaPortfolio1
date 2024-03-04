import React, { useEffect, useState } from 'react';
import { db } from "../../Firebase/firebaseConfig";
import { collection, doc, onSnapshot } from "firebase/firestore";

import "./about.css"

const About = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "aboutUs"), (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]; // Assuming you want the first document
      setData(newData);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <div className='dabba'>
      <div className='dabba2'>
        <div className='dabba3'>

          <div className='PersonImage borderxx'>
            {data && (<img className='imagePerson' src={data.image} />)}
          </div>
          <div className='Info borderxx'>
            {data && (<h2 className='headingtext'>Sanjana</h2>)}
            {data && (<p className='paratext'>{data.paragraph}</p>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About