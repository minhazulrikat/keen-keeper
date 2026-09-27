KeenKeeper

A modern friendship management application that helps you stay connected with the people who matter.

KeenKeeper is a relationship management app built with Next.js. It helps users keep track of their friends, record interactions, monitor relationship goals, and review their communication history through a clean and responsive interface.

Live Demo

Live: https://keen-keeper-beige.vercel.app/

Repository: [https://github.com/minhazulrikat/keen-keeper.git](https://github.com/minhazulrikat/keen-keeper.git)

Features

Manage and view friends

View detailed friend profiles

Track relationship goals

Record Call, Text, and Video interactions

View interaction history in a Timeline

Search interactions by friend's name

Filter interactions by type

Sort interactions by newest or oldest

View interaction statistics

Visualize interaction data with a donut chart

Toast notifications for successful actions

Responsive design for mobile, tablet, and desktop

Route-level loading states

Component-level loading states

Custom error handling

Custom 404 handling with notFound()

Reusable React components

Custom daisyUI theme

Pages

Home

The Home page provides an overview of the user's relationships and displays friend information in an organized dashboard.

Friend Details

The Friend Details page provides:

Friend information

Contact status

Relationship goal

Days since contact

Next due date

Quick check-in actions

Users can record:

Call

Text

Video

Each interaction is added to the relationship timeline.

Timeline

The Timeline displays the user's interaction history.

Users can:

Search by friend's name

Filter by interaction type

Sort by newest first

Sort by oldest first

The interaction flow is:

Interactions
     ↓
Filter
     ↓
Search
     ↓
Sort
     ↓
Display

Stats

The Stats page provides an overview of interaction activity using visual data representation.

Interactions are categorized into:

Call

Text

Video

The project uses Recharts to display the interaction distribution.

Tech Stack

Technology

Purpose

Next.js

React framework and application architecture

React

UI development

JavaScript

Application logic

Tailwind CSS

Styling and responsive layouts

daisyUI

UI components and theme system

Context API

Global interaction state

Recharts

Data visualization

Lucide React

Interface icons

React Hot Toast

Toast notifications

Vercel

Deployment

React & Next.js Concepts

This project was built to practice and apply modern React and Next.js concepts.

Next.js App Router

App Router

Server Components

Client Components

Dynamic routes

Layouts

loading.js

error.js

not-found.js

notFound()

React

useState

useEffect

Context API

Event handling

Conditional rendering

Component composition

Reusable components

State Management

KeenKeeper uses the React Context API to manage interaction data across different parts of the application.

When a user records an interaction from the Friend Details page, the interaction is added to the global interaction state.

Example:

{
  id: 123456789,
  friendId: 1,
  person: "Arif Hasan",
  type: "Call",
  date: "2026-09-27T12:30:00.000Z"
}

The same interaction can then be displayed in the Timeline and used for the Statistics page.

Timeline Search, Filter & Sorting

The Timeline provides three ways to organize interaction history.

Search

Users can search interactions by the person's name.

Filter

Interactions can be filtered by:

All

Call

Text

Video

Sorting

Interactions can be sorted by:

Newest first

Oldest first

The sorting is performed using the interaction date while keeping the original state array immutable.

Error & Loading Handling

KeenKeeper uses Next.js App Router's built-in error and loading patterns.

Loading

Route-level loading.js provides loading feedback while pages are being rendered.

Individual sections can also display their own loading states when only specific data is being fetched.

Error Handling

error.js is used for unexpected application errors.

404 Handling

not-found.js is used for missing pages or resources.

For example, when a requested friend doesn't exist:

import { notFound } from "next/navigation";

if (!friend) {
  notFound();
}

This allows Next.js to display the custom 404 experience instead of treating a missing friend as an application error.

UI & Design

KeenKeeper uses a custom daisyUI theme built around a dark green primary color.

Primary Color

#244D3F

The application uses semantic design tokens including:

primary
secondary
accent
base-100
base-200
base-300
base-content
success
warning
error

Tailwind CSS is used for responsive layouts, spacing, typography, and component styling.

Responsive Design

The application is designed to work across different screen sizes:

Mobile

Tablet

Desktop

Responsive Tailwind utilities are used throughout the application to adapt layouts, cards, navigation, typography, and controls.

Project Structure

keen-keeper/
│
├── app/
│   ├── friends/
│   │   └── [id]/
│   │       └── page.js
│   ├── timeline/
│   │   └── page.js
│   ├── stats/
│   │   └── page.js
│   ├── error.js
│   ├── not-found.js
│   ├── loading.js
│   ├── layout.js
│   ├── page.js
│   └── globals.css
│
├── Component/
│   ├── Navbar/
│   ├── FriendCard/
│   ├── QuickCheckIn/
│   ├── RelationshipChart/
│   └── ...
│
├── Context/
│   └── InteractionContext.jsx
│
├── public/
│   └── ...
│
├── package.json
└── README.md

Getting Started

1. Clone the repository

git clone YOUR_REPOSITORY_URL

2. Navigate to the project

cd keen-keeper

3. Install dependencies

npm install

4. Start the development server

npm run dev

Open the application at:

http://localhost:3000

Production Build

To create an optimized production build:

npm run build

To start the production server:

npm start

Future Improvements

Backend API integration

Database persistence

User authentication

Add and edit friends

Delete and archive friends

Persistent relationship goals

Reminder notifications

More detailed analytics

Calendar integration

Theme switching

Improved interaction history

Cloud data synchronization

Project Purpose

KeenKeeper was built as a practical frontend project to strengthen my understanding of modern React and Next.js development.

The project focuses on applying concepts such as:

Next.js App Router

Server and Client Components

React state management

Context API

Dynamic routing

Data handling

Responsive UI development

Component architecture

Data visualization

Loading and error handling

Rather than building only a static interface, KeenKeeper focuses on creating an interactive application with real user flows and reusable frontend architecture.

Author

Minhazul Islam Rikat

Jr. Frontend Developer

GitHub: @minhazulrikat

LinkedIn: Minhazul Rikat

License

This project is created for learning and portfolio purposes.