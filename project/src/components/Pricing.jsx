const Pricing = () => {
    return (
       <>

       <div className="price">
             <div className="bg-gray-300 p-4 rounded-lg text-center mt-2 mb-0  bg-opacity-60" style={{borderRadius:"20px",maxWidth:"1300px",padding:"auto",marginBottom:"20px"}}>
            <h2 className="text-3xl font-bold text-center mt-10 mb-6" style={{fontSize:"2.2rem", fontFamily:"serif",marginRight:"50px", marginTop:"20px"}}>
                PRICING</h2>
           </div>
       
       </div>
         
           <div
            className="bg-gray-100 py-16"
            style={{
                backgroundImage: "url('../assets/wow3.jpg') ", 
                backgroundSize: "cover",
                backgroundPosition: "center",
                obesity: 1,
            }}>


                 <div className="grid grid-cols-3 gap-4 mt-6 ">
        <div className="bg-gray-300 p-4 rounded-lg text-center mt-2 mb-0 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-opacity-60" style={{marginTop:"20px", padding:"20px" ,maxWidth:"300px",maxHeight:"550px",marginLeft:"120px"}} >
            <img src="../assets/flt.png" alt="ticket"style={{padding:"2em"}}/>
            <h3 className="font-semibold my-2">DUMMY TICKET
</h3>
            <p className="text-gray-500 text-sm"> Verified flight reservation.<br></br>

                         A maximum of two flights is permitted<br></br><br></br>

                           Validity Depends on Jorney route and Journey date.It may be 48 hours to 21 days. Generally, Valid for 1 - 2 weeks.<br></br>
                       Quick Delivery between 30 to 60 minutes.<br></br></p><br></br>

          <a href="/buynow">
            <button className="bg-red-400 text-white px-4 py-2 rounded-lg mt-4  hover:bg-white hover:text-red-500 ">Buy Now</button>
          </a>
        </div>

        <div className="bg-gray-300 p-4 rounded-lg text-center hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-opacity-60" style={{marginTop:"20px", padding:"20px" ,maxWidth:"300px",maxHeight:"550px" ,marginLeft:"100px"}}> 
            <img src="../assets/hotel.png" alt="hotel"style={{padding:"2em"}}/>
            <h3 className="font-semibold my-2">HOTEL RESERVATION</h3>
            <p className="text-gray-500 text-sm">Verified Hotel reservation.<br></br>

                                   A maximum of two hotel bookings is permitted.<br></br>

                                   Valid up to a couple of days before to the intended check-in date.<br></br>

                                   Quick Delivery between 30 to 60 minutes.</p><br></br>

           <a href="/buynow">
             <button className="bg-red-400 text-white px-4 py-2 rounded-lg mt-5  hover:bg-white hover:text-red-500 ">Buy Now</button>
           </a>
        </div>




        <div className="bg-gray-300  rounded-lg text-center p-4 mt-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-opacity-60" style={{marginTop:"20px", padding:"20px" ,maxWidth:"300px",maxHeight:"550px", marginLeft:"90px"}}>
            <img src="../assets/insurance.png" alt="insurance" style={{padding:"2em"}}/>
            <h3 className="font-semibold my-2">TRAVEL INSURANCE</h3>
            <p className="text-gray-500 text-sm mt-6">Provable Insurance<br></br>


Maximum 2 Changes Allowed.<br></br>


Benifecial In Immigration and Visa Application.<br></br>


Qucik Delivery between 30 to 60 minutes.</p><br></br>

            <a href="/buynow">
                <button className="bg-red-400 text-white px-4 py-2 rounded-lg mt-4 hover:bg-white hover:text-red-500 ">Buy Now</button>
            </a>
        </div>

    </div>
                     </div>
          
   
         
       </>
    );
}
export default Pricing;