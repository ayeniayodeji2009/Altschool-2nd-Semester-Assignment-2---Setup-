import React from 'react';
import Navigation from './Navigation';
import {BrowserRouter, Routes, Route, NavLink, useNavigate} from "react-router-dom";


export default function Home(){
const navigate = useNavigate(); //router useNavigate hook for relative navigation use; it has to be inside the component that will use it

const relativeNav_about = (event) => {
  event.preventDefault();
  navigate("/about");
}

  
  return (
    <section>
     <Navigation />
    <h1>Home Page</h1>
    <p>This is the home page</p>
    

    <div className="relativeNav">
      <h5>Relative Navigation below with the use of useNavigation() hooks</h5>
    <button onClick={relativeNav_about}>Go to the about page</button>
    </div>
    </section>
  )
}
