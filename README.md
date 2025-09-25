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

1. Management of medical appointments and doctors’ schedules (appointment confirmation or rejection).

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
