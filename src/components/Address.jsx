import React, { useEffect } from 'react';
import Navigation from './Navigation';

export default function Address(){
  // useEffect(() => {
  //   throw new Error("I  am error for test!")
  // }, []);
   return (
      <section>
       <Navigation />
      <h1>Address Page</h1>
        <p>This is the Address page</p>
      </section>

  )
}