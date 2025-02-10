# Country Info App

This project consists of two parts: **Backend** (Node.js + Express) and **Frontend** (React). The application provides information about countries, including a list of available countries, details about a specific country, its flag, neighboring countries, and a population chart.

## Tech Stack

### Backend:
- Node.js
- Express.js
- TypeScript
- Axios (for HTTP requests)

### Frontend:
- React
- TypeScript
- React Router DOM (for routing)
- Chart.js (for charts)
- Axios (for HTTP requests)

## Features

### Backend:
1. **Get Available Countries**:
    - Endpoint: `GET /api/countries/available`
    - Data: List of countries with their codes and names

2. **Get Country Info**:
    - Endpoint: `GET /api/countries/info/:code`
    - Data:
        - Country name
        - Country flag (URL)
        - List of neighboring countries
        - Historical population data

### Frontend:
1. **Country List Page**:
    - Displays a list of available countries
    - Each country is clickable and redirects to the country info page

2. **Country Info Page**:
    - Displays:
        - Country name
        - Country flag
        - List of neighboring countries (clickable)
        - Population chart over the years

## Installation and Setup

### 1. Clone the Repository
```bash
cd backend
npm install
node src/index.js


cd ../app
npm install
npm run dev

http://localhost:5173/
