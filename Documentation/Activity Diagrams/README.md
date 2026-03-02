# UML Activity & Interaction Diagrams – Healthcare Support System

This folder contains UML diagrams created for the **Healthcare Support System** project as part of Software Engineering documentation.

These diagrams explain how patients, doctors, admin, and system components interact step-by-step.

---

## Diagrams Included

### 1. Activity Diagram

Shows workflow of the system.

Main flow:

* User Login / Signup
* Appointment Scheduling
* Chatbot interaction
* Real-time chat or video consultation
* Doctor diagnosis
* Medical prescription generation

Example: Valid user → Appointment → Chat/Video Call → Diagnosis → Prescription. 

---

### 2. Sequence Diagram

Shows interaction order between components.

Actors involved:

* Patient
* Doctor
* Healthcare System
* Pharmacy
* Database
* AI Chatbot

Process example:
Patient books appointment → Doctor updates diagnosis → System stores data → Prescription sent to pharmacy → Patient receives medicines. 

---

### 3. State Chart Diagram

Shows system states during consultation.

States include:

* User not logged in → Login
* Doctor availability check
* Appointment booked
* Upload reports
* Start chat/video call
* Diagnosis and prescription
* Consultation complete. 

---

### 4. Swimlane Diagram

Shows responsibilities of each actor.

Actors:

* Patient
* Doctor
* Admin
* System

Flow example:
Login → Chatbot interaction → Appointment scheduling → Real-time communication → Diagnosis → Prescription stored in database. 

---

### 5. Class Diagram

Shows structure of the system and relationships between main components.

Classes include:

* User Account
* Patient
* Doctor
* Admin
* Appointment
* AI ChatBot
* Payment
* Chat

Flow example:
Patient → Book Appointment → Doctor Confirms → Chat Messages Stored → Prescription Generated → Payment Processed.

---

### 6. Softgoal Interdependency Graph

Shows non-functional requirements and how they influence each other.

Softgoals include:

* Reliability
* Security
* Usability
* Efficiency
* Scalability
* Functionality

Examples:

* Secure authentication → Improves security and reliability
* Responsive design → Improves usability
* Cloud-based deployment → Improves scalability and efficiency
* AI integration → Improves functionality

---

## Purpose of These Diagrams

These diagrams help in:

* Understanding system workflow
* Requirement analysis
* Software Engineering exam preparation
* Designing real-world healthcare applications

They clearly explain how modules like authentication, appointment scheduling, chat, video call, and prescription management interact.

---

## Project Context

These diagrams are part of my full-stack **Healthcare Support System** built using:

* Next.js
* Node.js
* MongoDB
* WebRTC
* Socket.io

---

## Conclusion

UML diagrams help visualize system behaviour, making complex healthcare workflows easier to design, understand, and implement.
