# Trivia Quiz App
A responsive trivia quiz application built with HTML, CSS, JavaScript, Node.js, and Express.js. This app provides a fun and engaging way to test your knowledge on various topics.
## Features

- **Real-Time Scoring:** Track your scores as you answer questions.
- **Question Tracking:** Keep track of answered and unanswered questions.
- **Responsive Design:** Fully responsive layout for a seamless experience on both desktop and mobile devices.
- **API Integration:** Utilizes a third-party API for dynamic trivia questions.
- **Local Storage:** Manages user profiles and scores with local storage for data persistence.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Tools:** Postman/Reqbin for API Testing

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/krish189/Quiz.git
   ```

2. **Navigate to Project Directory:**
   ```bash
   cd Quiz
   ```
   
3. **Install Express and node-fetch:**
   ```bash
   npm install express node-fetch
   ```
   
4. **Run server.js:**
 ```bash
   node server.js
  ```

5. Open index.html in your browser.
6. Click Create User.
7. Once Created Login and Enjoy Quiz.

### Note on Data Persistence:
The current implementation does not use a database, so user data and scores are not stored permanently. Data is managed using local storage, which means that once the app is closed, the data will be lost. For persistent storage, consider integrating a database.

  
