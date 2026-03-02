# Data Flow Diagrams (DFD) – Healthcare Support System

This folder contains Data Flow Diagrams for the **Healthcare Support System** project at different abstraction levels.

These diagrams show how data moves between patients, doctors, admin, and the system.

---

## Files Included

### 1. DFD Level 0 – Context Diagram

Shows the complete system as one process.

Main entities:

* Patient
* Doctor
* IT Admin
* Healthcare Support System

Data flows include:

* Registration/Login
* Appointment booking
* Medical report submission
* Payment processing
* Chat messages
* Notifications

Example: Patient books appointment → System confirms → Doctor receives notification. 

---

### 2. DFD Level 1 – System Breakdown

Shows main modules inside the system.

Modules include:

* Appointment management
* Diagnosis/Check-up
* Login authentication
* AI chatbot
* Admin management
* Patient reports storage

This diagram explains how patients, doctors, and admin interact with different subsystems. 

---

### 3. DFD Level 2 – Detailed Process Flow

Shows detailed steps inside modules.

Examples:

* Login portal → Validate credentials
* Appointment scheduling → Patient verification → Confirmation
* Chat → Stored in database
* Diagnosis → Medical prescription
* Payment gateway → Transaction history

This level explains internal workflow clearly. 

---

## Purpose

These DFDs help in:

* Understanding system architecture
* Requirement analysis
* Software Engineering exam preparation
* Designing real-world healthcare applications

---

## Project Context

These diagrams are part of my full-stack **Healthcare Support System** project built using:

* Next.js
* Node.js
* MongoDB
* Socket.io
* WebRTC

They show how modules like chat, video consultation, and appointment scheduling interact.

---

## Conclusion

DFDs are important in Software Engineering because they make complex systems easier to understand by showing data movement step-by-step.
