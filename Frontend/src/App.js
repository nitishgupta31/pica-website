
// export default App;
import {Routes , Route } from "react-router-dom"; 
import Demo from './demo/Demo';
import NavbarComponent from "./navbar/Navbar";
import Solutions from './solutions/Solutions';
import ProductFeatures from "./productFeatures/ProductFeatures";
import Banner from './banner/Banner';
import ApplyForAccess from "./applyForAccess/ApplyForAccess";
import Security from  "./security/Security";
import Footer from "./footer/Footer"

export default function App() { 
   return ( 
      <div className="App"> 
	      <NavbarComponent/>
        <Routes>
          <Route path ="/" element= {<><Banner /><Solutions /> <ProductFeatures /> <Security/> </>}/>  
          <Route path ="/demo" element= {<Demo />}/> 
          <Route path ="/apply" element= {<ApplyForAccess />}/> 
        </Routes> 
        <Footer />
  </div> 
); 
}