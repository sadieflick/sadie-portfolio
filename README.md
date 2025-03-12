# Sadie Flick Portfolio

## Project Overview
This is my professional portfolio site showcasing my projects, resume, and tutorial content. The site uses React for the frontend and Flask for the backend API.

## Technologies Used
- Frontend: React, React Router
- Backend: Flask, Flask-CORS
- Deployment: GitHub Pages (frontend), Flask API hosted separately

## Development Setup

### Frontend
```
cd frontend
npm install
npm start
```

### Backend
```
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
flask run
```

## Deployment
The frontend is automatically deployed to GitHub Pages when changes are pushed to the main branch. The backend needs to be deployed separately to a hosting provider of your choice.

## Project Structure
- `frontend/`: React application
  - `src/components/`: Reusable UI components
  - `src/pages/`: Page components
  - `src/styles/`: CSS files
  - `src/assets/`: Images and other static assets
- `backend/`: Flask API
  - `app/`: Flask application
  - `app/api/`: API endpoints
