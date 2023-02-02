
// export default App;
import {Routes , Route } from "react-router-dom"; 
import Contact from './Contact';
import NavbarComponent from "./Navbar";
import Section from './Section';
import ProductFeatures from "./ProductFeatures";
import Banner from './Banner';
import ApplyForAccess from "./ApplyForAccess";
import Security from  "./Security";
import Footer from "./Footer"

export default function App() { 
   return ( 
      <div className="App"> 
	      <NavbarComponent/>
        <Routes>
          <Route path ="/" element= {<><Banner /><Section /> <ProductFeatures /> <Security/> </>}/>  
          <Route path ="/demo" element= {<Contact />}/> 
          <Route path ="/apply" element= {<ApplyForAccess />}/> 
        </Routes> 
        <Footer />
  </div> 
); 
}