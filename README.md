# node-with-react

## Description

A large feedback-collection web application that profiles the advanced features of React, Redux, Express, and Mongo.

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

## Wireframe

<img src="./assets/Wireframe.png" alt="Wireframe" width="750" height="500">

## Architecture

Application
<img src="./assets/ApplicationArchitecture.png" alt="Wireframe" width="600" height="500">

## Authentication with Google OAuth

<img src="./assets/OAuthFlow.png" alt="OAuthFlow" width="1000" height="800">

## MongoDB

## Dev vs. Prod Enviroments

## Client Side

## Handling Payments

## Routing

## Mongoose

## Webhooks
