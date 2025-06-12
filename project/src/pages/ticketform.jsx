import { useState } from 'react';

const Ticketform = () => {
  // State to store multiple passenger forms
  const [passengers, setPassengers] = useState([{
    Fromcity: '',
    Tocity: '',
    Title: '',
    City: '',
    Name: '',
    Surname: '',
    Date: '',
    Nationality: '',
    Country_code: '',
    Phone: '',
    Email: '',
    others: ''
  }]);

  // Handle input change for a specific passenger
  const handleInputChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = {
      ...updatedPassengers[index],
      [field]: value
    };
    setPassengers(updatedPassengers);
  };

  // Add new passenger form
  const addPassenger = () => {
    setPassengers([...passengers, {
      Fromcity: '',
      Tocity: '',
      Title: '',
      City: '',
      Name: '',
      Surname: '',
      Date: '',
      Nationality: '',
      Country_code: '',
      Phone: '',
      Email: '',
      others: ''
    }]);
  };

  // Submit all passenger data to backend
  const submitPassengers = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/ticket/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(passengers[0]) // Assuming you want to send all passengers at once
      });

      if (!response.ok) {
        throw new Error('Failed to submit passenger data');
      }

      const result = await response.json();
      console.log('Submission successful:', result);
      // Reset form after successful submission
      setPassengers([{
        Fromcity: '',
        Tocity: '',
        City: '',
        Title: '',
        Name: '',
        Surname: '',
        Date: '',
        Nationality: '',
        Country_code: '',
        Phone: '',
        Email: '',
        others: ''
      }]);
    } catch (error) {
      console.error('Error submitting passenger data:', error);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ticket Entry Form</h1>
      <form action="/post" onSubmit={submitPassengers}>
        {passengers.map((passenger, index) => (
          <div key={index} className="mb-6 p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">Passenger {index + 1}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* ... form fields as before ... */}
              <div>
                <label className="block text-sm font-medium">From City</label>
                <input
                  type="text"
                  value={passenger.Fromcity}
                  onChange={(e) => handleInputChange(index, 'Fromcity', e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">To City</label>
                <input
                  type="text"
                  value={passenger.Tocity}
                  onChange={(e) => handleInputChange(index,'Tocity',e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  value={passenger.City}
                  onChange={(e) => handleInputChange(index, 'City', e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Title</label>
                <select
                  value={passenger.Title}
                  onChange={(e) => handleInputChange(index, 'Title', e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded"
                >
                  <option value="">Select Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={passenger.Name}
                  onChange={(e) => handleInputChange(index, 'Name', e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Surname</label>
                <input
                  type="text"
                  value={passenger.Surname}
                  onChange={(e) => handleInputChange(index, 'Surname', e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Date of Birth</label>
                <input
                  type="date"
                  value={passenger.Date}
                  onChange={(e) => handleInputChange(index, 'Date', e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Nationality</label>
                <input
                  type="text"
                  value={passenger.Nationality}
                  onChange={(e) => handleInputChange(index, 'Nationality', e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Country Code</label>
                <input
                  type="text"
                  value={passenger.Country_code}
                  onChange={(e) => handleInputChange(index, 'Country_code', e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  value={passenger.Phone}
                  onChange={(e) => handleInputChange(index, 'Phone', e.target.value)}
                  required
                  pattern="\+?[\d\s-]{10,}"
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={passenger.Email}
                  onChange={(e) => handleInputChange(index, 'Email', e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Purpose</label>
                <select
                  value={passenger.others}
                  onChange={(e) => handleInputChange(index, 'others', e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded"
                >
                  <option value="">Select Purpose</option>
                  <option value="Visa Validation">Visa Validation</option>
                  <option value="Proof of Return">Proof of Return</option>
                  <option value="Extention of Visa">Extention of Visa</option>
                  <option value="Proof of Travel">Proof of Travel</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        <div className="flex gap-4">
          <button
            type="button"
            onClick={addPassenger}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Passenger
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit All
          </button>
        </div>
      </form>
    </div>
  );
};

export default Ticketform;