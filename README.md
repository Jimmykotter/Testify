# Testify

**Testify** is a full-stack MERN application designed to assess your tech knowledge with a dynamic, quiz-based interface. The application allows users to take a randomized 10-question quiz and view their final score. This version introduces automated testing with Cypress, including both component and end-to-end tests, to ensure stability, reliability, and a smooth user experience.

## Features

- Take a tech quiz with 10 randomized questions  
- Answer questions and receive a final score  
- Option to restart the quiz for repeated practice  
- Tested with Cypress for both component and end-to-end behavior  
- Responsive and user-friendly interface

## Screenshots

![image](https://github.com/user-attachments/assets/0dc89446-c867-498b-bd52-b3544f70ffe9)

## Built With

## Cypress Testing

### Component Tests

- Validates that the quiz component renders correctly and displays the "Start Quiz" button

### End-to-End Tests

- Simulates a full user journey from starting the quiz to viewing the final score
- Tests user interactions and state changes throughout the quiz flow

## Scripts

``bash
# Run all Cypress tests
npm run test

# Open Cypress test runner
npm run cy:open

# Run only component tests
npm run cy:component

# Run only end-to-end tests
npm run cy:e2e

## Technologies Used

### Frontend

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Cypress](https://www.cypress.io/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)


## Getting Started

### 1. Clone the repository

``bash
git clone https://github.com/your-username/testify.git
cd testify


2. Install dependencies:
# Backend
cd server
npm install

# Frontend
cd ../client
npm install

3. Start the development server:
# Backend
cd ../server
npm run develop

# Frontend
cd ../client
npm run dev

## Contributing

This is a personal project and not currently accepting external contributions. However, feel free to fork it and customize it for your own portfolio!

## License

This project is licensed under the [MIT License](LICENSE).

## Author

**Jimmy**  
- [GitHub](https://github.com/jimmykotter)  
- [Email](mailto:Jimmykotter@gmail.com)

**Link to Deployed Website**

https://Testify.onrender.com

https://github.com/Jimmykotter/testify
