# Setup & Installation Guide

## Getting Started

### 1. Clone & Initialize
```bash
git clone https://github.com/GauravGavhane18/genz_hospital.git
cd genz_hospital
```

### 2. Backend Initialization
```bash
cd backend
npm install
npm start
```
*Port: 5000*

### 3. Frontend Initialization
```bash
cd frontend
npm install
npm run dev
```
*Vite Port: Usually 5173*

## Directory Structure
- `/frontend`: React application and assets.
- `/backend`: Express server and ScaleDown NLP services.
- `/docs`: Technical system specs.
- `/documentation`: High-level project details and user guides.

## Troubleshooting
- **CORS Errors**: Ensure the backend is running on port 5000 before starting the frontend.
- **Missing Data**: If the PubMed API rate-limits, the system will automatically provide high-quality simulated data for demonstration.
