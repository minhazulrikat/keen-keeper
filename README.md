# KeenKeeper

A modern friendship management application that helps you stay connected with the people who matter.

Built with Next.js, KeenKeeper helps users track friends, log interactions, monitor relationship goals, and review communication history through a clean, responsive interface.

**Live Demo:** [keen-keeper-beige.vercel.app](https://keen-keeper-beige.vercel.app/) <br/>
**Repository:** [github.com/minhazulrikat/keen-keeper](https://github.com/minhazulrikat/keen-keeper.git)

---

## Features

- Manage and view friends with detailed profiles
- Track relationship goals, contact status, and days since last contact
- Log Call, Text, and Video interactions
- Interaction timeline with search, filter, and sort
- Interaction stats with a donut chart (Recharts)
- Toast notifications, route-level & component-level loading states
- Custom error and 404 handling
- Fully responsive, built with reusable components and a custom daisyUI theme

---

## Pages

| Page | Description |
|---|---|
| **Home** | Dashboard overview of all friends and relationships |
| **Friend Details** | Contact status, relationship goal, days since contact, next due date, and quick check-in actions (Call / Text / Video) |
| **Timeline** | Full interaction history — search by name, filter by type, sort newest/oldest |
| **Stats** | Visual breakdown of interactions by type (Call, Text, Video) |

---

## Tech Stack

Next.js · React · JavaScript · Tailwind CSS · daisyUI · Context API · Recharts · Lucide React · React Hot Toast · Vercel

---

## State Management

Interactions are managed globally via React Context. Recording an interaction on the Friend Details page pushes it into shared state, which then feeds both the Timeline and Stats pages.

```js
{
  id: 123456789,
  friendId: 1,
  person: "Arif Hasan",
  type: "Call",
  date: "2026-09-27T12:30:00.000Z"
}
```

Sorting is done on the interaction date while keeping the original state array immutable.

---

## Error & Loading Handling

Uses Next.js App Router's built-in patterns:

- `loading.js` — route- and component-level loading states
- `error.js` — unexpected application errors
- `not-found.js` + `notFound()` — custom 404s (e.g. a friend ID that doesn't exist)

```js
import { notFound } from "next/navigation";

if (!friend) {
  notFound();
}
```

---

## UI & Design

Custom daisyUI theme built around a dark green primary color (`#244D3F`), using semantic tokens (`primary`, `secondary`, `accent`, `base-100/200/300`, `base-content`, `success`, `warning`, `error`). Fully responsive across mobile, tablet, and desktop via Tailwind.

---

## Project Structure

```
keen-keeper/
├── app/
│   ├── friends/[id]/page.js
│   ├── timeline/page.js
│   ├── stats/page.js
│   ├── error.js
│   ├── not-found.js
│   ├── loading.js
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── Component/
│   ├── Navbar/
│   ├── FriendCard/
│   ├── QuickCheckIn/
│   ├── RelationshipChart/
│   └── ...
├── Context/
│   └── InteractionContext.jsx
├── public/
└── package.json
```

---

## Getting Started

```bash
git clone https://github.com/minhazulrikat/keen-keeper.git
cd keen-keeper
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
npm run build
npm start
```

---

## Future Improvements

- Backend API integration & database persistence
- User authentication
- Add/edit/delete/archive friends
- Persistent relationship goals & reminder notifications
- Deeper analytics & calendar integration
- Theme switching, cloud sync

---

## About

Built as a practical frontend project to strengthen React and Next.js skills — App Router, Server/Client Components, Context API, dynamic routing, data visualization, and loading/error handling — with an emphasis on real interactive user flows over static UI.

**Author:** Minhazul Islam Rikat — Jr. Frontend Developer <br/>
- GitHub: [@minhazulrikat](https://github.com/minhazulrikat) <br/> 
- LinkedIn: [Minhazul Rikat](https://linkedin.com/in/minhazulrikat)

**License:** For learning and portfolio purposes.
