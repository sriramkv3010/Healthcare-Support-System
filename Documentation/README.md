# Healthcare Support System – Complete Documentation

This folder contains detailed Software Engineering documentation for the **Healthcare Support System**, a full-stack telemedicine platform designed to support remote healthcare services using real-time communication, appointment scheduling, and AI assistance.

These documents were prepared as part of Software Engineering coursework and real-world system design.

---

# 1. Software Requirement Specification (SRS)

The SRS document defines **what the system must do** before development starts.

### Includes

**1.1 System Scope**
Explains the goal of the Healthcare Support System:

* Remote doctor consultation
* Online appointment booking
* Real-time chat/video call
* Medical record storage
* AI chatbot support

**1.2 Stakeholders**

* Patients
* Doctors
* IT Admin
* Hospital/Clinic
* Developers

**1.3 Functional Requirements**
Examples:

* User login/register
* Appointment scheduling
* Chat with doctor
* Upload medical reports
* Make payments
* Admin manage users

**1.4 Non-Functional Requirements**

* Security
* Reliability
* Usability
* Scalability
* Performance

**1.5 Constraints**

* Internet connection required
* Secure database needed
* Privacy regulations

---

# 2. Use Case Diagram

Shows how users interact with the system.

### Actors

* Patient
* Doctor
* Admin

### Main Use Cases

* Register/Login
* Book Appointment
* Chat/Video Call
* Upload Reports
* View Medical History
* Payment Processing
* Admin Monitoring

Purpose: Helps identify system features from user perspective.

---

# 3. Data Flow Diagrams (DFD)

Shows how data moves inside the system.

### Level 0 – Context Diagram

Entire system as one process interacting with Patient, Doctor, and Admin.

Example flows:

* Appointment request
* Chat messages
* Medical reports
* Payment info

---

### Level 1 – System Modules

Breaks system into major subsystems:

* Appointment management
* Diagnosis/check-up
* Login authentication
* AI chatbot
* Admin management
* Patient report storage

Purpose: Understand system architecture.

---

### Level 2 – Detailed Processes

Shows internal steps like:

* Login validation
* Patient verification
* Appointment scheduling
* Chat stored in database
* Diagnosis → Prescription
* Payment gateway processing

Purpose: Understand detailed workflow.

---

# 4. UML Diagrams (Activity Diagrams Folder)

These diagrams show system behaviour step-by-step.

---

## 4.1 Activity Diagram

Shows workflow from login to consultation.

Flow:
Login → Appointment → Chat/Video Call → Diagnosis → Prescription → Payment.

Purpose: Understand process logic.

---

## 4.2 Sequence Diagram

Shows message exchange order between components.

Actors:
Patient → Doctor → Healthcare System → Database → Pharmacy → AI Chatbot.

Purpose: Understand communication timing.

---

## 4.3 State Chart Diagram

Shows system states during consultation.

States:
Not Logged In → Logged In → Appointment Booked → Chat → Diagnosis → Consultation Complete.

Purpose: Understand system state transitions.

---

## 4.4 Swimlane Diagram

Shows responsibilities of each actor.

Actors:
Patient | Doctor | Admin | System

Purpose: Understand who performs each task.

---

## 4.5 Class Diagram

Shows system structure and database design.

Classes include:

* User Account
* Patient
* Doctor
* Admin
* Appointment
* AI ChatBot
* Payment
* Chat

Shows attributes, methods, and relationships.

Purpose: Object-oriented design.

---

## 4.6 Softgoal Interdependency Graph

Shows non-functional requirements.

Softgoals:

* Reliability
* Security
* Usability
* Efficiency
* Scalability
* Functionality

Example:
Secure authentication improves security and reliability.
Cloud deployment improves scalability.

Purpose: Balance system quality.

---

# 5. Viewpoints

Explains system from different stakeholder perspectives.

### Business Viewpoint

Focus on hospital goals, patient needs, and workflow.

### Technological Viewpoint

Focus on tools and infrastructure:
Node.js, MongoDB, WebRTC, Socket.io.

### Application Viewpoint

Focus on system modules like chat, appointment, chatbot.

### Combined Viewpoint

Shows integration of business + application + technology layers.

Purpose: Understand system from multiple perspectives.

---

# 6. SE.side File

Contains diagrams created using software engineering tools (draw.io or similar) used to design system architecture.

---

# 7. Importance of Documentation

* Helps in requirement analysis
* Improves system design
* Useful for Software Engineering exams
* Helps team communication
* Supports scalable healthcare development

---

# 8. Conclusion

Complete Software Engineering documentation ensures that a healthcare system is well-planned, scalable, secure, and easy to maintain. It converts project ideas into structured, real-world solutions.
