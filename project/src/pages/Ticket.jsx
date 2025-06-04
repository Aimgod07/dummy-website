


const Ticket = () => {
  return (


    <div
            className="bg-gray-100 py-16"
            style={{
                backgroundImage: "url('../assets/as.webp') ", 
                backgroundSize: "cover",
                backgroundPosition: "center",
                obesity: 1,
            }}>
                       
                        <div className="ticket-page">

      <div className="text-center mt-10" style={{fontSize:"2rem", fontFamily:"serif", marginRight:"70px", marginTop:"20px",color:"white",}}>
        _Select Your Journey_
      </div>
         
          <div className="grid grid-cols-3 gap-4 mt-6 ">
              <a href="/ticketform">
                <div className="bg-gray-300 p-4 rounded-lg text-center mt-2 mb-0 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-opacity-60" style={{marginTop:"20px", padding:"20px" ,maxWidth:"300px",maxHeight:"550px",marginLeft:"150px"}} >
            <img src="../assets/flt.png" alt="ticket"style={{padding:"2em"}}/>
            <h3 className="font-semibold my-2">
              </h3>
            <p className="text-gray-500 text-sm">DUMMY TICKETVerified flight reservation.<br></br>

                         A maximum of two flights is permitted<br></br><br></br>

                           Validity Depends on Jorney route and Journey date.It may be 48 hours to 21 days. Generally, Valid for 1 - 2 weeks.<br></br>
                       Quick Delivery between 30 to 60 minutes.<br></br></p><br></br>

         
                         </div>
              </a>

          <a href="hotelform">
             <div className="bg-gray-300 p-4 rounded-lg text-center hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-opacity-60" style={{marginTop:"20px", padding:"20px" ,maxWidth:"300px",maxHeight:"550px" ,marginLeft:"100px"}}> 
            <img src="../assets/hotel.png" alt="hotel"style={{padding:"2em"}}/>
            <h3 className="font-semibold my-2">HOTEL RESERVATION</h3>
            <p className="text-gray-500 text-sm">Verified Hotel reservation.<br></br>

                                   A maximum of two hotel bookings is permitted.<br></br>

                                   Valid up to a couple of days before to the intended check-in date.<br></br>

                                   Quick Delivery between 30 to 60 minutes.</p><br></br>

           
            </div>
          </a>




          <a href="">
             <div className="bg-gray-300  rounded-lg text-center p-4 mt-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-opacity-60" style={{marginTop:"20px", padding:"20px" ,maxWidth:"300px",maxHeight:"550px", marginLeft:"90px"}}>
            <img src="../assets/insurance.png" alt="insurance" style={{padding:"2em"}}/>
            <h3 className="font-semibold my-2">TRAVEL INSURANCE</h3>
            <p className="text-gray-500 text-sm mt-6">Provable Insurance<br></br>


                Maximum 2 Changes Allowed.<br></br>


              Benifecial In Immigration and Visa Application.<br></br>


                Qucik Delivery between 30 to 60 minutes.</p><br></br>

        
                </div>

            </a>
    </div>
    </div>
            </div>
    
  );
}
export default Ticket;