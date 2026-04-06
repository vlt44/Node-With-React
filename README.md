# node-with-react

## Description

A large feedback-collection web application that profiles the advanced features of React, Redux, Express, and Mongo.

This application demonstrates a complete full-stack architecture that integrates:

- Secure user authentication (Google OAuth)
- Payment processing (Stripe)
- Email delivery and tracking (SendGrid)
- Survey creation and response collection
- Webhook-driven event processing

It is designed to reflect real-world production patterns including separation of concerns, asynchronous workflows, and external service integration.

## Tech Stack

**Frontend**

- React
- Redux / Redux Thunk
- React Router
- Material UI

**Backend**

- Node.js
- Express
- MongoDB (Mongoose)

**External Services**

- Google OAuth (Passport.js)
- Stripe API
- SendGrid API + Webhooks

**Deployment**

- Heroku

## User Story

<b>AS A</b> startup owner of an app/service.  
<b>I WANT</b> feedback from users.  
<b>SO THAT</b> I can make app/service better.

| User Flow Walkthrough                                | Tech                                    |
| ---------------------------------------------------- | --------------------------------------- |
| User signs up via Google OAuth                       | Express Server<br>PassportJS<br>MongoDB |
| User pays for email credits via Stripe               | Stripe API<br>MongoDB                   |
| User creates a new ‘campaign’                        | React<br>Redux                          |
| User enters list of emails to send survey to         | React<br>Redux<br>Redux Form            |
| App sends email to list of surveyees                 | Email Provider                          |
| Surveyees click on link in email to provide feedback | Email Provider<br>Express<br>MongoDB    |
| App tabulates feedback                               | MongoDB                                 |
| User can see report of all survey responses          | React<br>Redux<br>MongoDB               |

**Wireframe**

<img src="./assets/Wireframe.png" alt="Wireframe" width="750" height="500">

## Architecture
