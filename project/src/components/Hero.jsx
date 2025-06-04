import React from "react";

const Hero = () => {   
  const style = {
    backgroundImage: "url('../assets/air.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height:"100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    alignItems: "center",
    // Increase box size by 100px
    minHeight: "calc(100vh + 50px)",
    minWidth: "calc(100vw + 70px)",
  };
  return (
    <div style={style} className="hero-container">
      <div className="hero" style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
        <div
          className="hero-content"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            padding: "2.5rem",
            boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
            fontSize: "1.5rem",
            fontWeight: "bold",
            opacity: 0.9,
            borderopacity: 0.5,
            width: "70%",
            height:"400px",
            maxWidth: "550px",
            margin: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="content">
            <h1>Get your verified Dummy Ticket at $5 Or INR350</h1>
            <p style={{ marginTop: "1rem", textAlign: "center" ,fontSize:"1rem"}}>
              Quickly Book A Dummy Ticket For Your Visa Application, Immigration, Passport Renewal. At A Reasonable Price within 30 to 60 minutes.
            </p>
          </div>
          <button className="btn-primary font-bold" style={{ marginTop: "1.5rem", opacity: 1 }}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;