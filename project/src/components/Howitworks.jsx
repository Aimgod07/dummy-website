const Howitworks = () => {
    return (
        <>
               <div className="howitworks">
                <div className="bg-gray-300 p-4 rounded-lg text-center mt-2 mb-0  bg-opacity-60" style={{marginTop:"40px"}}>
              <h2 className="text-3xl font-bold text-center mt-10 mb-6" style={{fontSize:"2.2rem", marginTop:"10px"}}>How It Works</h2>
               </div>
               </div>
       
          
   
          <div className="grid grid-cols-3 gap-4 mt-6 ">
        <div className="bg-gray-300 p-4 rounded-lg text-center mt-2 mb-0 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-opacity-60" style={{marginTop:"20px", padding:"20px" ,maxWidth:"300px",maxHeight:"550px",marginLeft:"150px"}} >
            <img src="../assets/form.png" alt="ticket" style={{padding:"2em"}}/>
            <h3 className="font-semibold my-2">fill up the form
</h3>
            <p className="text-gray-500 text-sm">Provide us with your
complete details,your name,

desired date of travel, your email,
departure and arrival  </p>

           
        </div>

        <div className="bg-gray-300 p-4 rounded-lg text-center hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-opacity-60" style={{marginTop:"20px", padding:"20px" ,maxWidth:"300px",maxHeight:"550px" ,marginLeft:"100px"}}> 
            <img src="../assets/card.png" alt="hotel"style={{padding:"2em"}}/>
            <h3 className="font-semibold my-2">Make The Payment</h3>
            <p className="text-gray-500 text-sm">Once payment has been made,
our staff will process the

booking with your provided
information. 100% secured

payment.</p><br></br>

           
        </div>




        <div className="bg-gray-300  rounded-lg text-center p-4 mt-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-opacity-60" style={{marginTop:"20px", padding:"20px" ,maxWidth:"300px",maxHeight:"550px", marginLeft:"90px"}}>
            <img src="../assets/open.png" alt="insurance" style={{padding:"2em"}}/>
            <h3 className="font-semibold my-2">Get Ticket Quickly</h3>
            <p className="text-gray-500 text-sm mt-6">The airlinedummyticket.com will be
sent to you as a PDF

attachment via email within 60
minutes. You can check

your dummy ticket
on airline's website</p><br></br>

          
        </div>

    </div>
        </>
    );
}
export default Howitworks;