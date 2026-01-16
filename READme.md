
# Caleb . Dev — Portfolio & Contact Backend

Professional personal portfolio (frontend) with a lightweight Node/TypeScript backend that handles contact form submissions and newsletter signups.

## Table of Contents
- **Overview:** Project purpose and components.
- **Tech Stack:** Main frameworks and tools used.
- **Repository Structure:** Top-level folders and responsibilities.
- **Prerequisites:** Software required to run the project.
- **Setup — Backend:** Install, environment variables, and run commands.
- **Setup — Frontend:** Install and run commands.
- **API Endpoints:** Public backend routes.
- **Deployment:** Notes about deploying frontend and backend.
- **Contributing:** How to contribute.

## Overview
This repository contains a React + Vite frontend and a Node (TypeScript) backend. The frontend is a personal portfolio site with pages for Home, About, Services, Portfolio and Contact. The backend provides simple API endpoints for handling contact form submissions and newsletter signups.

## Tech Stack
- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, TypeScript, Express (minimal API controllers)

## Repository Structure
- **backend:** Node/TypeScript server, API controllers and routes.
- **frontend:** React + Vite application, UI components, pages, and assets.

See the folders for full structure:
- [backend](backend)
- [frontend](frontend)

## Prerequisites
- Node.js 18+ and npm (or yarn)
- Git (optional, for cloning)

## Setup — Backend
1. Change to the backend folder and install dependencies:

	`cd backend`
	`npm install`

2. Create a `.env` file in `backend` (copy from any example or create new). Typical environment variables the backend expects include:

	- `PORT` — server port (e.g. `4000`)
	- `FIREBASE_*` or other credentials if Firebase is used (see `src/config/firebase.ts`)
	- `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS` for email sending (see `src/config/email.ts`)

3. Run the backend in development:

	`npm run dev`

4. Production start (if configured):

	`npm start`

## Setup — Frontend
1. Change to the frontend folder and install dependencies:

	`cd frontend`
	`npm install`

2. Development server:

	`npm run dev`

3. Build for production:

	`npm run build`

4. Preview production build locally:

	`npm run preview`

## API Endpoints
The backend exposes a small set of endpoints for the site to consume. Typical routes include:

- `POST /api/contact` — submit contact form data (name, email, message).
- `POST /api/newsletter` — subscribe an email address to the newsletter.

Check the route files for exact paths and payload expectations in `backend/src/routes`.

## Deployment
- Frontend: Suitable for deployment on Vercel, Netlify, or similar static hosting providers. See `frontend/vite.config.ts` for relevant configuration.
- Backend: Render configuration exists in `backend/render.yaml` for deploying to Render; other providers (Heroku, Fly, etc.) can also be used.

## Contributing
- Fork the repository, create a feature branch, and open a PR with a clear description of changes.
- Run linters and tests (if added) before submitting.

## Notes & Next Steps
- Review `backend/src/config` for environment-specific setup (email, firebase).
- If you want, I can:
  - Add a sample `.env.example` with required keys.
  - Document exact request/response schemas for the API endpoints.

---
Generated and updated README to reflect repository structure and setup instructions.
