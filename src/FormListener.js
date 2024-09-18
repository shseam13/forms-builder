import React, { useEffect } from 'react';
import axios from 'axios';

const FormListener = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use a CORS proxy to bypass the CORS policy
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://webhook.site/d7daf747-4b29-417b-897e-27bb79b31529');
        const formData = response.data;
        console.log(formData);

        // Call the function to create a new form on 123FormBuilder
        createFormOn123FormBuilder(formData);
      } catch (error) {
        console.error('Error fetching data from webhook.site:', error);
      }
    };

    fetchData();
  }, []);

  const createFormOn123FormBuilder = async (formData) => {
    try {
      const response = await axios.post('https://api.123formbuilder.com/v2/forms', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': {
            'username': 'your_mail_here',
            'password': 'your_password here'
          }
        }
      });
      console.log('Form created on 123FormBuilder:', response.data);
    } catch (error) {
      console.error('Error creating form on 123FormBuilder:', error);
    }
  };

  return (
    <div>
      <h1>Listening for form submissions...</h1>
    </div>
  );
};

export default FormListener;
