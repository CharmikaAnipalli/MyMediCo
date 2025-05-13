# MyMediCo - AI-Powered Medical Recommendations

A full-stack web application that provides personalized treatment and medicine recommendations based on user-reported symptoms and medical history.

## Features

- Symptom assessment form with comprehensive input options
- AI-powered analysis of symptoms and medical conditions
- Personalized recommendations for treatments and medications
- Database storage of consultations for future reference
- Responsive design for all devices

## Technologies Used

- **Frontend**: React, TailwindCSS, ShadcnUI
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **AI Integration**: OpenAI API
- **State Management**: React Query
- **Form Handling**: React Hook Form with Zod validation

## Project Description

MyMediCo is an educational tool designed to help users understand potential treatments based on their symptoms. The application collects detailed information about symptoms, medical history, and current medications to provide tailored recommendations.

All recommendations include appropriate medical disclaimers emphasizing that the tool is for educational purposes only and users should always consult healthcare professionals for actual medical advice.

## Local Setup

1. Clone the repository
git clone https://github.com/CharmikaAnipalli/MyMediCo.git
cd MyMediCo
2. Install dependencies
npm install

3. Set up environment variables
Create a `.env` file with:
DATABASE_URL=your_postgres_connection_string
OPENAI_API_KEY=your_openai_api_key (optional)

4. Run the application
npm run dev
