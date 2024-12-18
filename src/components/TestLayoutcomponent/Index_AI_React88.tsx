React (JSX):

```jsx
import React, { useState } from 'react';

const AddressForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptSuite: '',
    city: 'Mount Rainier', // Default city
    state: 'Maryland', // Default state
    zipCode: '20712', // Default zip code
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First name