import React, { useState } from "react";

const Dummyticket = () => {
  return (
    <>
      <div className="dummyticket">
        <div
          className="card"
          style={{
            borderRadius: "20px",
            background: "linear-gradient(to right, #C0C0C0, #ffffff)",
            boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
            opacity: 0.91,
            padding: "35px",
            maxWidth: "600px",
            margin: "20px 80px 20px auto",
          
          }}
        >
          <h2
            style={{
              fontWeight: "bolder",
              fontSize: "2rem",
              maxWidth: "400px",
              alignItems: "center",
              textAlign: "center",
              fontFamily: "Georgia, serif",
            }}
          >
            Check Dummy Ticket Samples Here <br />
            <br />
            <a
              href="/samples"
              className="btn-secondary"
              style={{
                fontWeight: "bold",
                color: "black",
                fontFamily: "Georgia, sans-serif",
                padding: "10px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.2s",
                border: "none",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                cursor: "pointer",
                backgroundColor: "#007bff",
              }}
              onMouseOver={e =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
              }
              onMouseOut={e =>
                (e.currentTarget.style.backgroundColor = "#007bff")
              }
            >
              Check
            </a>
          </h2>
          
        </div>
        <img
          src="../assets/air1.jpg"
          alt="dummy ticket"
          style={{
            width: "20%",
            height: "500px",
            marginTop: "0px",
            borderRadius: "0px",
            marginRight: "400px",
            marginLeft: "0px",
            padding: "0px",
          }}
        />
      </div>
    </>
  );
}
export default Dummyticket;