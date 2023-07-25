import React, { useState } from 'react';

const LeadForm = ({ propertyId }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/submitlead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          property_id: propertyId,
          full_name: fullName,
          email,
          phone_number: phoneNumber,
          message,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // Lead data successfully saved
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
        setStatus('success');
      } else {
        // Failed to save lead data
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting lead data:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="you@yourdomain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="your number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <textarea
        rows="6"
        className="form-control"
        placeholder="What's on your mind?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit" className="btn btn-primary" name="Submit">
        Send Message
      </button>

      {status === 'success' && <div className="alert alert-success mt-3">Lead data saved successfully!</div>}
      {status === 'error' && <div className="alert alert-danger mt-3">Failed to save lead data. Please try again.</div>}
    </form>
  );
};

export default LeadForm;
