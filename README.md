# Quantivo Labs Website

## Setup Instructions

1. Clone or download the repository
2. Copy `backend/.env.example` to `backend/.env` and fill in your values
3. Copy `frontend/.env.example` to `frontend/.env` and fill in your values (or create `.env` in root with `VITE_API_URL`)
4. Run `docker-compose up -d --build`
5. Access at `http://localhost:8086`

## Environment Variables

### Backend (`backend/.env`)
- `SECRET_KEY`: Django secret key
- `DEBUG`: Set to `True` for development
- `ALLOWED_HOSTS`: Comma-separated list of allowed hosts
- `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`: Database credentials
- `GROQ_API_KEY`: Your Groq API key for the chatbot
- `EMAIL_HOST_USER`, `EMAIL_HOST_PASSWORD`: Email credentials for contact form

### Frontend (`.env` in root)
- `VITE_API_URL`: Backend API URL (e.g., `http://localhost:8009`)

## Running with Docker

```bash
docker-compose up -d --build
