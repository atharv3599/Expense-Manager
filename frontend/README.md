#  Expense Manager

A full-stack Expense Manager application built using React.js, Spring Boot, and MySQL. This application helps users manage their daily expenses by providing features to add, update, delete, search, and categorize expenses. It also includes interactive charts for better expense analysis.

This project was developed to strengthen my full-stack development skills by working with REST APIs, frontend-backend integration, and database management.

---

##  Features :

- Add new expenses
- Update existing expenses
- Delete expenses
- Search expenses by title
- Filter expenses by category
- Dashboard with expense summary
- Category-wise Pie Chart
- Monthly Expense Bar Chart
- Dark Mode
- Responsive and clean user interface
- REST API integration using Axios

---

##  Tech Stack

      ### Frontend :
                   - React.js
                   - Bootstrap 5
                   - Axios
                  - Chart.js

    ### Backend :
                  - Java
                  - Spring Boot
                  - Spring Data JPA

    ### Database :
                  - MySQL

    ### Tools :
                - Maven
                - Git
                - GitHub
                - Thunder Client 
                - VS Code
                - MySQL Workbench

---

##  Project Structure :
ExpenseManager/
│
├── Backend/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── screenshots/
│
└── README.md

## ⚙️ Installation

### Clone the Repository :

git clone https://github.com/atharv3599/Expense-Manager.git

Move into the project folder:

```bash
cd Expense-Manager
```

---

### Backend Setup :

```bash
cd Backend
```

Run the Spring Boot application:

```bash
mvn spring-boot:run
```

The backend will start at:

```
http://localhost:8080
```

---

### Frontend Setup :

Open a new terminal and run:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

The frontend will start at:

```
http://localhost:3000
```

---

## REST API Endpoints:

| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|    
| GET    | `/api/expenses`      | Get all expenses          |
| POST   | `/api/expenses`      | Add a new expense         |
| PUT    | `/api/expenses/{id}` | Update an existing expense|
| DELETE | `/api/expenses/{id}` | Delete an expense         |

---

##  What I Learned:

- Building REST APIs using Spring Boot
- Connecting React with a Spring Boot backend
- Working with MySQL using Spring Data JPA
- Managing application state in React
- Performing CRUD operations
- Creating charts using Chart.js
- Integrating APIs using Axios
- Using Git and GitHub for version control

---

## Future Improvements:

- JWT Authentication
- User Login & Registration
- Export Expenses to PDF/Excel
- Budget Planning
- Monthly Reports
- Cloud Deployment

---

## Author:

Atharv Khandare

GitHub: https://github.com/atharv3599

---

If you found this project useful, feel free to ⭐ the repository.