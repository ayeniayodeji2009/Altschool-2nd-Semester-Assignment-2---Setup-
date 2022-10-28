import React, {component} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, NavLink, useNavigate} from "react-router-dom";
import './App.css'
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home'
import About from './components/About'
import Address from './components/Address'
import PageNotFound from './components/PageNotFound';
import Users from './components/Users';


//<ErrorBoundary />
/*
import {Link} from "react-router-dom";

<Link className="navigate" to="/">Home</Link> 
<Link className="navigate" to="/about">About</Link>
<Link className="navigate" to="/address">Address</Link>
*/

/*
Problem with current navPage identification not responding to color property
google how to use react router hooks, useSearchParams(), useLocation(), redirectRouterHook
*/



// function errorTest(){
//   throw new error("Error !!!");
// }






{/*Comment*/}








        // {
        //    <ErrorBoundary>
        //      <Home />
        //    </ErrorBoundary>

        //    <ErrorBoundary>
        //   <About />
        //    </ErrorBoundary>
          
        //    <ErrorBoundary>
        //   <Address />
        //    </ErrorBoundary>
        // }

// class App extends component {

//   render(){
//   return (
//     <main>
//       <section>


        
//         <Routes>
          
          
//           <Route index element={
//             <Home />
//           } />
         
        
          
//          <Route path="/about" element={
//            <About />
//          } />
       
        

//           <Route path="/address" element={
//             <Address />
//           } />

        

//           <Route path="*" element={<PageNotFound />} />

//        </Routes>
//       </section>
//     </main>
//   )
//     }
// }


function App(){
  return (
    <main>
      <section>
        <Routes>
          
          <Route index element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary> 
          } />
          
         <Route path="/about" element={
           <ErrorBoundary> 
             <About />
           </ErrorBoundary> 
         } />
       
          <Route path="/address" element={
            <ErrorBoundary> 
              <Address />
            </ErrorBoundary>
            
          } />

          <Route path="/users" element={
            <ErrorBoundary> 
              <Users />
            </ErrorBoundary> 
          } />

          <Route path="*" element={<PageNotFound />} />

       </Routes>
      </section>
    </main>
  )
}

export default App;