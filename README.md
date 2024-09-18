# Description:
For some subscription issue I can't bue webhook.site subscription that's when anyone submit the form in forms.app in this link:
https://pjrntb5c.forms.app/untitled-form

the data goes is being posted to 
https://webhook.site/#!/view/d7daf747-4b29-417b-897e-27bb79b31529/d1dcf098-5a1d-4322-8430-cb7edf2edb82/1
there.
For subscription issue it doesn't provide me api keys thats why while requesting data it doesn't response the json files. But my code is running perfect.

# Form Listener

This project listens for form submissions from a webhook and creates a new form on 123FormBuilder using the received data.

## Table of Contents

- Installation
- Usage
- Environment Variables
- Contributing
- License

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shseam13/form-listener.git
   cd form-listener

npm install

**Create a .env file in the root directory and add your 123FormBuilder credentials:
**
REACT_APP_123FORMBUILDER_USERNAME=your_mail_here
REACT_APP_123FORMBUILDER_PASSWORD=your_password_here

## Start the development server:
npm start
The application will fetch data from the webhook and create a new form on 123FormBuilder using the received data.



You can copy and paste these sections into their respective files. Let me know if you need any further assistance!