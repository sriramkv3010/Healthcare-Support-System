# Healthcare Management System - CS 263 Project 

A comprehensive healthcare management system built with Next.js, featuring separate portals for patients and doctors with real-time communication capabilities.

## 🏥 Project Overview

This healthcare management system consists of two main applications:
- **Patient Portal**: For patients to manage appointments, view prescriptions, and communicate with doctors
- **Doctor Portal**: For healthcare providers to manage patients, appointments, prescriptions, and medical reports

## 🚀 Features

### Patient Portal
- Patient registration and authentication
- Appointment booking and management
- Prescription viewing and management
- Medical report access
- AI-powered chatbot assistance
- Doctor search and selection
- Profile management

### Doctor Portal
- Doctor registration and authentication
- Patient management
- Appointment scheduling and management
- Prescription creation and management
- Medical report upload and management
- Real-time chat with patients
- AI assistant for medical queries
- Admin dashboard for doctor approval

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js, JWT
- **UI Components**: Radix UI, Lucide React
- **Real-time Communication**: Server-Sent Events (SSE)
- **File Upload**: Formidable, Multer
- **PDF Generation**: jsPDF

## 📁 Project Structure

```
healthcare-management-system/
├── patient-portal/          # Patient-facing application
│   ├── app/                # Next.js app directory
│   ├── components/         # Reusable UI components
│   ├── lib/               # Utility libraries
│   ├── models/            # Database models
│   └── utils/             # Helper functions
├── doctor-portal/          # Doctor-facing application
│   ├── app/               # Next.js app directory
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   ├── models/            # Database models
│   └── scripts/           # Build and utility scripts
└── README.md              # This file
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd healthcare-management-system
   ```

2. **Set up Patient Portal**
   ```bash
   cd patient-portal
   npm install
   ```

3. **Set up Doctor Portal**
   ```bash
   cd ../doctor-portal
   npm install
   ```

4. **Environment Configuration**
   
   Create `.env.local` files in both portals with the following variables:
   
   **Patient Portal (.env.local)**:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:8000
   ```
   
   **Doctor Portal (.env.local)**:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

### Running the Applications

1. **Start Patient Portal** (runs on port 8000)
   ```bash
   cd patient-portal
   npm run dev
   ```

2. **Start Doctor Portal** (runs on port 3000)
   ```bash
   cd doctor-portal
   npm run dev
   ```

Access the applications:
- Patient Portal: http://localhost:8000
- Doctor Portal: http://localhost:3000

## 🔧 Development

### Available Scripts

Each portal includes the following npm scripts:

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Database Models

The system uses the following main models:
- **User**: Base user authentication
- **Patient**: Patient-specific information
- **Doctor**: Doctor profiles and credentials
- **Appointment**: Appointment scheduling
- **Prescription**: Medical prescriptions
- **MedicalReport**: Patient medical reports

## 🔐 Authentication & Security

- JWT-based authentication
- Password hashing with bcryptjs
- NextAuth.js for session management
- Role-based access control (Patient/Doctor/Admin)

## 🌐 API Endpoints

### Patient Portal APIs
- `/api/auth/*` - Authentication endpoints
- `/api/patients/*` - Patient management
- `/api/doctors/*` - Doctor information
- `/api/appointments/*` - Appointment management
- `/api/prescriptions/*` - Prescription access

### Doctor Portal APIs
- `/api/doctor/*` - Doctor authentication and profile
- `/api/appointments/*` - Appointment management
- `/api/prescriptions/*` - Prescription management
- `/api/reports/*` - Medical report management
- `/api/chat/*` - Real-time communication

## 🚀 Deployment

### Production Build

1. **Build both applications**:
   ```bash
   # Patient Portal
   cd patient-portal && npm run build
   
   # Doctor Portal
   cd ../doctor-portal && npm run build
   ```

2. **Deploy to your preferred platform** (Vercel, Netlify, etc.)

### Environment Variables for Production

Ensure all environment variables are properly configured in your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team

## 🔄 Version History

- **v0.1.0** - Initial release with basic patient and doctor portal functionality

  

## 👨‍💻 Author

# **Kotipalli Venkata Sriram**
B.Tech Computer Science and Engineering (2023-27)
IIIT Vadodara

* GitHub: https://github.com/sriramkv3010
* Email: [kotipallivenkatasriram@gmail.com](mailto:kotipallivenkatasriram@gmail.com)

### About 

Developed this Healthcare Management System as part of Software Engineering coursework CS 263, focusing on full-stack development, system design, and real-time healthcare communication tools and software engineering documentation.

Interested in:

* Full-stack system development
* AI for healthcare
* Medical Imaging
* Cardiovascular modeling
* Point-of-care medical devices
* Distributed systems and cloud applications
