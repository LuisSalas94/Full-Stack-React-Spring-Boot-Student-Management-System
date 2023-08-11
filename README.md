
![Screenshot_8](https://github.com/LuisSalas94/Student-Management-System/assets/57297709/d46bab2c-c5b4-40b3-8efa-b3933b8face0)

# Student Management System

A Full-stack web application built using React and Spring Boot for managing student records efficiently. The Student Management System allows users to add, update, and delete student information, along with their respective departments. This system ensures seamless communication between the frontend and backend, providing a user-friendly interface to manage student details.


## Tech Stack

**Client:** React, Bootstrap, React Router, Axios, Toast Notifications Library

**Server:** Spring Boot, Spring JPA, Spring Web, MySQL


## Key Features

- Add, update, and delete student records with their first name, last name, email, and department.
- View a list of students with department information.
- Manage departments by adding and updating their names and descriptions.
- Integration of React for the frontend, ensuring dynamic user interfaces.
- Backend powered by Spring Boot, providing RESTful APIs for data manipulation.
- Utilizes Axios for making asynchronous HTTP requests between the frontend and backend.
- Implements React Router for client-side routing, ensuring a smooth user experience.
- Toast notifications for informing users about successful and failed actions.
- Utilizes custom hooks for encapsulating and reusing logic across components.


## Screenshots
![Screenshot_1](https://github.com/LuisSalas94/Student-Management-System/assets/57297709/4eccd309-177e-481c-a727-a97c46543b73)
![Screenshot_2](https://github.com/LuisSalas94/Student-Management-System/assets/57297709/b8d462fc-8049-4c88-b0a1-941e954bb8a1)
![Screenshot_3](https://github.com/LuisSalas94/Student-Management-System/assets/57297709/4a0013f8-7ac4-42f0-98c2-c5931690e602)
![Screenshot_4](https://github.com/LuisSalas94/Student-Management-System/assets/57297709/71d52d6b-a1f2-41a0-9808-db4114c09c3f)
![Screenshot_5](https://github.com/LuisSalas94/Student-Management-System/assets/57297709/3ea5a570-38c3-4b77-9a2b-e0c00ee0667a)
![Screenshot_7](https://github.com/LuisSalas94/Student-Management-System/assets/57297709/d65c4391-f404-4c21-8904-48e6b39e0c01)

## Instructions
**Prerequisites:**

Before running this application, ensure that you have the following prerequisites in place:

- Java Development Kit (JDK) 8 or above
- Node.js and npm (Node Package Manager)
- MySQL database with a designated schema named "hostbuddy_restapi"

**Setup:**

First clone this repository.
```bash
$ git clone https://github.com/LuisSalas94/Student-Management-System
```
**Set Up the MySQL Database:**

- Create a MySQL database named "student_management_system".
- Update the database connection properties in the application.properties file located in the springboot-backend folder. 
- Set the accurate values for spring.datasource.url, spring.datasource.username, and spring.datasource.password.
- Build and Run the Spring Boot Backend:
- Open a terminal and navigate to the springboot-backend folder.
- Build the backend application using Maven: Execute the command ./mvnw clean package.
- Run the backend application: Use the command ./mvnw spring-boot:run.
- Install Dependencies and Run the React Frontend:
- Open another terminal and go to the react-frontend folder.
- Install dependencies using npm: Run npm install.
- Start the React development server: Execute npm start.
- Access the Application:
- Open your web browser and enter http://localhost:3000 to access the React frontend and interact with the application.

With these steps, you'll have the necessary environment set up to run the Spring Boot backend and the React frontend of the application locally.

## Author 👤

- GitHub: [@LuisSalas94](https://github.com/LuisSalas94)
- LinkedIn: [Fernando Salas](https://www.linkedin.com/in/luisfernandosalasgave/)
- Medium: [Fernando Salas](https://medium.com/@luisfernandosalasg)
- Portfolio: [Link](https://fernando-salas-portfolio.netlify.app/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](../../issues/).


## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./MIT.md) licensed.  


