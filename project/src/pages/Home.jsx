import React from "react";
import Hero from "../components/Hero";
import Dummyticket from "../components/Dummyticket";
import FAQ from "../components/FAQ";
import Howitworks from "../components/Howitworks";
import Pricing from "../components/Pricing";

const Home = () => {
    return(
        <>
        <div style={{margin:"auto",padding:"auto"}}>
                 <Hero 
        title="Welcome to Our Website"
        description="Discover amazing content and connect with our community. Join us today!"
        />

        <Dummyticket />
              <Pricing />
                 <FAQ />
        <Howitworks />
  
     
        </div>
        
        </>
    )
}
export default Home;