import React, { useState } from 'react';

const emptyForm = {
  Fromcity: '',
  Tocity: '',
  Title: '',
  Name: '',
  Surname: '',
  Date: '',
  Nationality: '',
  Country_code: '',
  Phone: '',
  Email: '',
  others: ''
};

const Travelform = () => {
  const [forms, setForms] = useState([{ ...emptyForm }]);
  const [errors, setErrors] = useState([{}]);

  const validateForm = (formData) => {
    const newErrors = {};
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!formData.Fromcity) newErrors.Fromcity = 'Fromcity is required';
    if (!formData.Tocity) newErrors.Tocity = 'Tocity is required';
    if (!formData.Title) newErrors.Title = 'Title is required';
    if (!formData.Name) newErrors.Name = 'Name is required';
    if (!formData.Surname) newErrors.Surname = 'Surname is required';
    if (!formData.Date) newErrors.Date = 'Date of birth is required';
    if (!formData.Nationality) newErrors.Nationality = 'Nationality is required';
    if (!formData.Country_code) newErrors.Country_code = 'Country code is required';
    if (!formData.Phone) newErrors.Phone = 'Phone number is required';
    else if (!phoneRegex.test(formData.Phone)) newErrors.Phone = 'Please use a valid phone number';
    if (!formData.Email) newErrors.Email = 'Email is required';
    else if (!emailRegex.test(formData.Email)) newErrors.Email = 'Please use a valid email address';
    if (!formData.others) newErrors.others = 'Purpose is required';

    return newErrors;
  };

  const handleChange = (idx, e) => {
    const { name, value } = e.target;
    const updatedForms = forms.map((form, i) =>
      i === idx ? { ...form, [name]: value } : form
    );
    setForms(updatedForms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allErrors = forms.map(validateForm);
    setErrors(allErrors);
    const isValid = allErrors.every((err) => Object.keys(err).length === 0);
    if (isValid) {
      console.log('Forms submitted:', forms);
      // Add your submission logic here
    }
  };

  const handleAddPassenger = () => {
    if (forms.length < 6) {
      setForms([...forms, { ...emptyForm }]);
      setErrors([...errors, {}]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {forms.map((formData, idx) => (
        <div key={idx} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Ticket Booking  {forms.length > 1 ? `- Passenger ${idx + 1}` : ''}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">From City/Origin</label>
              <input
                type="text"
                name="Fromcity"
                value={formData.Fromcity}
                onChange={(e) => handleChange(idx, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors[idx]?.Fromcity && <p className="text-red-500 text-xs mt-1">{errors[idx].Fromcity}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">To City</label>
              <input
                type="text"
                name="Tocity"
                value={formData.Tocity}
                onChange={(e) => handleChange(idx, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors[idx]?.Tocity && <p className="text-red-500 text-xs mt-1">{errors[idx].Tocity}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <select
                name="Title"
                value={formData.Title}
                onChange={(e) => handleChange(idx, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Title</option>
                {['Mr', 'Mrs', 'Miss', 'Ms', 'Dr'].map((title) => (
                  <option key={title} value={title}>{title}</option>
                ))}
              </select>
              {errors[idx]?.Title && <p className="text-red-500 text-xs mt-1">{errors[idx].Title}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={(e) => handleChange(idx, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors[idx]?.Name && <p className="text-red-500 text-xs mt-1">{errors[idx].Name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Surname</label>
              <input
                type="text"
                name="Surname"
                value={formData.Surname}
                onChange={(e) => handleChange(idx, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors[idx]?.Surname && <p className="text-red-500 text-xs mt-1">{errors[idx].Surname}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="Date"
                value={formData.Date}
                onChange={(e) => handleChange(idx, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors[idx]?.Date && <p className="text-red-500 text-xs mt-1">{errors[idx].Date}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Nationality</label>
              <input
                type="text"
                name="Nationality"
                value={formData.Nationality}
                onChange={(e) => handleChange(idx, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors[idx]?.Nationality && <p className="text-red-500 text-xs mt-1">{errors[idx].Nationality}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Country Code</label>
              <input
                type="text"
                name="Country_code"
                value={formData.Country_code}
                onChange={(e) => handleChange(idx, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors[idx]?.Country_code && <p className="text-red-500 text-xs mt-1">{errors[idx].Country_code}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="Phone"
                value={formData.Phone}
                onChange={(e) => handleChange(idx, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors[idx]?.Phone && <p className="text-red-500 text-xs mt-1">{errors[idx].Phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={(e) => handleChange(idx, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors[idx]?.Email && <p className="text-red-500 text-xs mt-1">{errors[idx].Email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Purpose</label>
              <select
                name="others"
                value={formData.others}
                onChange={(e) => handleChange(idx, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Purpose</option>
                {['Visa Validation', 'Proof of Return', 'Extention of Visa', 'Proof of Travel', 'Other'].map((purpose) => (
                  <option key={purpose} value={purpose}>{purpose}</option>
                ))}
              </select>
              {errors[idx]?.others && <p className="text-red-500 text-xs mt-1">{errors[idx].others}</p>}
            </div>
          </div>
        </div>
      ))}

      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        <button
          type="button"
          onClick={handleAddPassenger}
          disabled={forms.length >= 6}
          className={`w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 ${forms.length >= 6 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Add Passenger
        </button>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          style={{ marginTop: '20px' }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Travelform;