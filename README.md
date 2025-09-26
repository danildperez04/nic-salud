# Nic-salud

## Description

Nic salud is an application that allows to automate the processes of patient registration, monitoring, and medical appointment scheduling in public hospitals in Nicaragua.
This activity is important to streamline healthcare services, reduce overcrowding, and improve both the patient experience and hospital efficiency.

## Features

### Patient functionalities

1. Profile registration and management.

2. Medical appointment scheduling and management (appointment requests, confirmations, reminders, appointment consultation, cancellations, rescheduling).

3. Patient registration and follow-up (access to basic medical history, result notifications).

4. Virtual queue/turn management system.

### Hospital staff functionalities

1. Management of medical appointments and doctors' schedules (appointment confirmation or rejection).

2. Registration and management of electronic medical records (history consultation, care records, laboratory/imaging results).

3. Patient flow management.

4. Administration and reporting.

## Tech Stack

To develop the app our team use different technologies in backend and frontend

### Frontend

1. **JavaScript**, **HTML**, **CSS** (custom components and utility classes).
2. React + Vite
3. Taildwincss

### Backend

1. Javascript
2. NodeJS + Express
3. TypeORM + PostgreSQL

### Other Tools

1. Typescript
2. Git & GitHub for version control and collaboration
3. VSCode - Code Editor

## Prerequisites

To download and install the app we assume that you already have **git**, **node** and **npm** installed

## Installation

Clone the repository in your computer

```bash
  git clone https://github.com/danildperez04/nic-salud.git
```

Use the package manager NPM to install

You have to put your environment variables in the *.env* file to run **nic-salud** succesfully.

### Install and run backend

```bash
  cd backend
  npm install
  npm run dev
```

### Install and run frontend dev server

```bash
  cd frontend
  npm install
  npm run dev
```

And that's it 😆. If everything went great you will have nic-salud running on your pc 🚀.

## Usage

1. Start services: run the backend first, then the frontend. The frontend dev server will print the local URL.
2. Create a patient account: register with your personal data and sign in.
3. Book an a appointment: choose specialty/doctor, select a date/time, and confirm. You'll see status updates.
4. Staff area: authenticated hospital staff can review/confirm appointments, record care notes, and manage patients flow.

## API Endpoints

### Users

GET /api/users/

GET /api/users/1

```http
POST http://localhost:3000/api/users HTTP/1.1
Content-Type: application/json

{
  "username": "danildperez04",
  "email": "danildperez02@gmail.com",
  "password": "123456"
}
```

### Authentication

POST /auth/register: Registrers a new user (patient or staff).
POST /auth/login: Logs in and returns an authetication token.
POST /auth/logout: Logs out the user.
GET /auth/profile: Returns the autheticated user's profile.

### Patients

GET /patients: Returns all patitens.
GET /patients/{id}: Returns the information of a specific patient.
POST /patients: Registrers a new patient.
PUT /patients/{id}: Updates patient information.
DELETE /patients{id}: Deletes patient.

### Doctors

GET /doctors: Returns all doctors.
GET /doctors/:id: Returns a specific doctor.
GET /doctors?specialty=:name: Filters doctors by specialty.
GET /specialties: Returns available medical specialties.
GET /doctors/:id/availability?date=YYYY-MM-DD: Returns a doctor's availability for a day.
GET /doctors/:id/appointments: Returns appointments for a doctor.
POST /doctors: Creates a new doctor.
PUT /doctors/:id: Updates a doctor.
DELETE /doctors/:id: Deletes a doctor.

### Appointments

GET /appointments: Returns all apointments (filterable by date, patient, or doctor).
GET /appointments/{id}: Returns the details os a specific appointment.
POST /appointments: Creates a new appointment.
PUT /appointments/{id}: Update an existing appointment.
DELETE /appointments/{id}: Cancels an appointment.

### Staff

GET /staff: Returns all non-doctor staff.
GET /staff/:id: Returns a specific staff member.
POST /staff: Creates a new staff member.
PUT /staff/:id: Updates a staff member.
DELETE /staff/:id: Deletes a staff member.

### Administration & Reports

GET /reports/statistics: Returns usage statistics (patients served, appointments, etc.).
GET /reports/finance: Returns administrative/financial reports.
