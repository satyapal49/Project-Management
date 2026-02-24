# 📋 Task Manager App

A full-stack Task Management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This application provides a comprehensive solution for managing tasks, tracking progress, and facilitating team collaboration with an intuitive and responsive user interface.

## ✨ Features

### 🎯 Core Functionalities

1. **User Dashboard** – View assigned tasks, track progress, and get task insights at a glance
2. **Task Management** – Create, update, and track tasks with due dates and priorities
3. **Automated Status Updates** – Task status changes automatically based on checklist completion
4. **Team Collaboration** – Assign tasks to multiple users and track team completion
5. **Priority & Progress Tracking** – Categorize tasks by priority levels and monitor completion status
6. **Task Report Downloads** – Export task data in various formats for analysis and tracking
7. **Attachments Support** – Add and access task-related file links easily
8. **Mobile Responsive UI** – Seamless experience across desktop, tablet, and mobile devices
9. **Intuitive Navigation** – Clean sidebar menu for quick access to tasks and dashboard

### 👥 User Roles

- **Admin** – Full access to create, manage, and assign tasks to team members
- **User** – View assigned tasks, update progress, and manage personal task workflow

## 🛠️ Tech Stack

### Frontend
- **React.js** – UI library for building interactive user interfaces
- **Vite** – Fast build tool and development server
- **React Router** – Client-side routing
- **Context API** – State management
- **Axios** – HTTP client for API requests
- **CSS3** – Styling and responsive design

### Backend
- **Node.js** – JavaScript runtime environment
- **Express.js** – Web application framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling
- **JWT** – Authentication and authorization
- **Multer** – File upload handling

## 📁 Project Structure

```
taskmanager/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   ├── authController.js   # Authentication logic
│   │   ├── taskController.js   # Task management logic
│   │   ├── userController.js   # User management logic
│   │   └── reportController.js # Report generation logic
│   ├── middlewares/
│   │   ├── authMiddleware.js   # JWT authentication middleware
│   │   └── uploadMiddleware.js # File upload middleware
│   ├── models/
│   │   ├── User.js             # User schema
│   │   └── Task.js             # Task schema
│   ├── routes/
│   │   ├── authRoutes.js       # Authentication routes
│   │   ├── taskRoutes.js       # Task routes
│   │   ├── userRoutes.js       # User routes
│   │   └── reportRoutes.js     # Report routes
│   ├── uploads/                # Uploaded files directory
│   ├── package.json
│   └── server.js               # Entry point
│
├── frontend/
│   └── Task-Manager/
│       ├── src/
│       │   ├── components/     # Reusable components
│       │   ├── context/        # Context API providers
│       │   ├── hooks/          # Custom React hooks
│       │   ├── pages/
│       │   │   ├── Admin/      # Admin pages
│       │   │   ├── Auth/       # Authentication pages
│       │   │   └── User/       # User pages
│       │   ├── routes/         # Route configurations
│       │   ├── utils/          # Utility functions
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── package.json
│       └── vite.config.js
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/satyapal49/Project-Management.git
   cd taskmanager
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend/Task-Manager
   npm install
   ```

### Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGO_URI=your_mongodb_connection_string

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

# CORS Configuration
CLIENT_URL=http://localhost:5173
```

Create a `.env` file in the `frontend/Task-Manager` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm start
   # or for development with nodemon
   npm run dev
   ```
   The backend server will run on `http://localhost:5000`

2. **Start Frontend Development Server**
   ```bash
   cd frontend/Task-Manager
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📱 Usage

### Admin Flow

1. **Login** as an admin user
2. Navigate to **Dashboard** to view task statistics
3. **Create Tasks** with priorities, due dates, and assignees
4. **Manage Users** – Add, edit, or remove team members
5. **Track Progress** – Monitor task completion across the team
6. **Download Reports** – Export task data for analysis

### User Flow

1. **Login** with your credentials
2. View **My Tasks** dashboard
3. **Update Task Progress** by completing checklist items
4. **View Task Details** including attachments and comments
5. Track personal productivity and deadlines

## 🔐 Authentication

The application uses **JWT (JSON Web Tokens)** for authentication:
- Tokens are stored securely in local storage
- Protected routes require valid authentication
- Automatic token expiration and refresh handling

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` – Register new user
- `POST /api/auth/login` – User login

### Tasks
- `GET /api/tasks` – Get all tasks
- `POST /api/tasks` – Create new task
- `GET /api/tasks/:id` – Get task by ID
- `PUT /api/tasks/:id` – Update task
- `DELETE /api/tasks/:id` – Delete task

### Users
- `GET /api/users` – Get all users (admin only)
- `GET /api/users/:id` – Get user by ID
- `PUT /api/users/:id` – Update user
- `DELETE /api/users/:id` – Delete user

### Reports
- `GET /api/reports/download` – Download task reports

## 🎨 Features in Detail

### Task Priority Levels
- **High** – Urgent tasks requiring immediate attention
- **Medium** – Important tasks with moderate urgency
- **Low** – Tasks that can be completed when time permits

### Task Status
- **Todo** – Tasks not yet started
- **In Progress** – Tasks currently being worked on
- **Completed** – Finished tasks
- **Automated** – Status updates based on checklist completion percentage

### Dashboard Features
- Task overview cards with statistics
- Progress charts and visual indicators
- Recent activity feed
- Quick access to frequently used actions

## 🔧 Development

### Backend Development
```bash
cd backend
npm run dev  # Runs with nodemon for auto-restart
```

### Frontend Development
```bash
cd frontend/Task-Manager
npm run dev  # Runs Vite dev server with HMR
```

### Build for Production

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend/Task-Manager
npm run build
npm run preview  # Preview production build
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Satyapal Raj**
- GitHub: [@satyapal49](https://github.com/satyapal49)

## 🙏 Acknowledgments

- MERN Stack Community
- All contributors and users of this application

---

**Happy Task Managing! 🚀**
